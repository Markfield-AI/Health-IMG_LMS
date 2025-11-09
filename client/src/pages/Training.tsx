import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import TrainingAvatar from "@/components/TrainingAvatar";
import ScenarioCard from "@/components/ScenarioCard";
import QuestionOptions from "@/components/QuestionOptions";
import FeedbackPanel from "@/components/FeedbackPanel";
import ModuleCard from "@/components/ModuleCard";
import ProgressTracker from "@/components/ProgressTracker";
import { Users, MessageSquare, Heart, Award } from "lucide-react";
import heroImage from "@assets/generated_images/NHS_teamwork_hero_image_97cc3a1b.png";
import { createSession, generateScenario, submitAnswer } from "@/lib/api";
import { getMockScenarioByModule } from "@/lib/mockScenarios";
import { Scenario } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

type CompletedScenario = {
  scenarioId: number;
  moduleNumber: number;
  isCorrect: boolean;
};

export default function Training() {
  const { toast } = useToast();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showCompletion, setShowCompletion] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<CompletedScenario[]>([]);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [scenarioCounter, setScenarioCounter] = useState(0);
  const [useAI, setUseAI] = useState(true);
  const [lastSubmissionCorrect, setLastSubmissionCorrect] = useState(false);
  const [currentScenarioModule, setCurrentScenarioModule] = useState<number>(1);

  const TOTAL_SCENARIOS = 20;

  const isCorrect = selectedAnswer === currentScenario?.correct_answer;

  const moduleData = [
    {
      number: 1,
      title: "Team Culture",
      description: "Navigate the non-hierarchical, multidisciplinary team environment",
      icon: Users,
      total: 5
    },
    {
      number: 2,
      title: "Communication",
      description: "Master the nuances of NHS professional communication",
      icon: MessageSquare,
      total: 5
    },
    {
      number: 3,
      title: "Patient Sensitivity",
      description: "Provide culturally sensitive, patient-centered care",
      icon: Heart,
      total: 5
    },
    {
      number: 4,
      title: "Professional Integration",
      description: "Understand GMC standards and professional resilience",
      icon: Award,
      total: 5
    }
  ];

  const moduleProgress = moduleData.map(module => {
    const moduleScenarios = completedScenarios.filter(s => s.moduleNumber === module.number);
    return {
      module: module.number,
      completed: moduleScenarios.length,
      correct: moduleScenarios.filter(s => s.isCorrect).length,
      total: module.total
    };
  });

  const totalCorrect = completedScenarios.filter(s => s.isCorrect).length;

  // Create session on mount
  useEffect(() => {
    createSession()
      .then(session => setSessionId(session.sessionId))
      .catch(err => {
        console.error("Failed to create session:", err);
        toast({
          title: "Session Error",
          description: "Using offline mode. AI scenarios unavailable.",
          variant: "destructive"
        });
      });
  }, [toast]);

  const scenarioMutation = useMutation({
    mutationFn: async (moduleNumber: number) => {
      setCurrentScenarioModule(moduleNumber);
      
      if (!sessionId) {
        return getMockScenarioByModule(moduleNumber, scenarioCounter);
      }
      
      try {
        // Always try the API first - it returns mock scenarios if OpenAI key is missing
        const scenario = await generateScenario(moduleNumber, sessionId, scenarioCounter);
        return scenario;
      } catch (error) {
        console.error("API failed, using client-side mock:", error);
        return getMockScenarioByModule(moduleNumber, scenarioCounter);
      }
    },
    onSuccess: (scenario) => {
      setCurrentScenario(scenario);
      setSelectedAnswer("");
      setShowFeedback(false);
    },
    onError: (error) => {
      console.error("Failed to load scenario:", error);
      toast({
        title: "Error",
        description: "Failed to load scenario. Please try again.",
        variant: "destructive"
      });
    }
  });

  const answerMutation = useMutation({
    mutationFn: async () => {
      if (!sessionId || !currentScenario) return { isCorrect: false };
      
      const isCorrect = selectedAnswer === currentScenario.correct_answer;
      
      try {
        const result = await submitAnswer(
          sessionId,
          scenarioCounter,
          selectedAnswer,
          currentScenario.correct_answer
        );
        return result;
      } catch (error) {
        console.error("Submit failed:", error);
        return { isCorrect };
      }
    },
    onSuccess: (data) => {
      setLastSubmissionCorrect(data.isCorrect);
      setShowFeedback(true);
    }
  });

  const handleModuleSelect = (moduleNumber: number) => {
    setSelectedModule(moduleNumber);
    scenarioMutation.mutate(moduleNumber);
    setShowWelcome(false);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      answerMutation.mutate();
    }
  };

  const handleNextScenario = () => {
    // Record completion before moving to next scenario
    const alreadyCompleted = completedScenarios.some(s => s.scenarioId === scenarioCounter);
    
    if (!alreadyCompleted) {
      const newCompleted = [
        ...completedScenarios,
        {
          scenarioId: scenarioCounter,
          moduleNumber: currentScenarioModule,
          isCorrect: lastSubmissionCorrect
        }
      ];
      setCompletedScenarios(newCompleted);
      
      // Check if we've completed all scenarios
      if (newCompleted.length >= TOTAL_SCENARIOS) {
        setShowCompletion(true);
        return;
      }
    }
    
    // Move to next scenario
    const nextCounter = scenarioCounter + 1;
    setScenarioCounter(nextCounter);
    
    // Determine next module: if user selected a specific module, stay in it
    // Otherwise, cycle through all 4 modules
    const nextModule = selectedModule 
      ? selectedModule 
      : ((nextCounter % 4) + 1);
    
    scenarioMutation.mutate(nextModule);
  };

  const handleRestartTraining = () => {
    setShowCompletion(false);
    setShowWelcome(true);
    setCompletedScenarios([]);
    setScenarioCounter(0);
    setCurrentScenario(null);
    setSelectedAnswer("");
    setShowFeedback(false);
    setSelectedModule(null);
  };

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-background">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={heroImage} 
            alt="NHS Medical Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">
                NHS Cultural Competency Training
              </h1>
              <p className="text-xl mb-8">
                Interactive scenario-based learning for International Medical Graduates
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Welcome to Your Training
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This comprehensive program will guide you through four essential modules designed to help you successfully transition into the NHS. Each module presents realistic scenarios followed by multiple-choice questions to test your understanding.
                </p>
              </div>
              
              <TrainingAvatar 
                isSpeaking={true}
                speechText="Hello! I'm your NHS training instructor. I'll guide you through interactive scenarios covering team culture, communication, patient sensitivity, and professional integration. Let's begin your journey to becoming a confident NHS practitioner."
              />
            </div>

            <ProgressTracker
              totalCompleted={completedScenarios.length}
              totalScenarios={20}
              moduleProgress={moduleProgress}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Select a Module to Begin
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {moduleData.map((module) => (
                <ModuleCard
                  key={module.number}
                  number={module.number}
                  title={module.title}
                  description={module.description}
                  icon={module.icon}
                  completed={moduleProgress[module.number - 1].completed}
                  total={module.total}
                  isActive={selectedModule === module.number}
                  onClick={() => handleModuleSelect(module.number)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showCompletion) {
    const percentage = Math.round((totalCorrect / TOTAL_SCENARIOS) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={heroImage} 
            alt="NHS Medical Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-3xl">
              <h1 className="text-5xl font-bold mb-4">
                Training Complete!
              </h1>
              <p className="text-xl mb-8">
                Congratulations on completing the NHS Cultural Competency Training
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-8 text-center space-y-6">
                <div className="text-6xl font-bold text-primary" data-testid="text-completion-score">
                  {percentage}%
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  {totalCorrect} correct out of {TOTAL_SCENARIOS} scenarios
                </div>
                <div className="text-lg text-muted-foreground">
                  {completedScenarios.length} scenarios attempted
                </div>
                <p className="text-muted-foreground">
                  You've successfully navigated through all four modules of cultural competency training. You're now better prepared to work effectively within the NHS environment.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Module Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  {moduleData.map((module, index) => {
                    const progress = moduleProgress[index];
                    const accuracy = progress.completed > 0 
                      ? Math.round((progress.correct / progress.completed) * 100) 
                      : 0;
                    
                    return (
                      <div key={module.number} className="bg-card border rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <module.icon className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-foreground">{module.title}</h4>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {progress.completed} scenarios completed
                        </div>
                        {progress.completed > 0 && (
                          <div className="text-sm font-medium text-primary">
                            {accuracy}% accuracy ({progress.correct}/{progress.completed})
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleRestartTraining}
                className="w-full bg-primary text-primary-foreground hover-elevate active-elevate-2 rounded-md py-3 px-6 font-semibold text-lg"
                data-testid="button-restart-training"
              >
                Start New Training Session
              </button>
            </div>

            <div className="space-y-6">
              <TrainingAvatar 
                isSpeaking={true}
                speechText="Excellent work completing all 20 scenarios! You've demonstrated a solid understanding of NHS cultural competencies across all four modules. Remember, cultural adaptation is an ongoing journey. Continue to apply these principles in your daily practice to provide the best care for your patients and work effectively within your team."
              />
              
              <div className="bg-card border rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Next Steps</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Review the GMC's "Good Medical Practice" guidelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Familiarize yourself with your trust's local policies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Seek feedback from colleagues and supervisors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Attend further cultural competency workshops</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentScenario || scenarioMutation.isPending) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-lg text-muted-foreground">Loading scenario...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-foreground">NHS Cultural Competency Training</h1>
            <div className="hidden md:block text-sm text-muted-foreground">
              Scenario {scenarioCounter + 1}
            </div>
          </div>
          <div className="text-sm font-medium text-primary">
            {completedScenarios.length} / 20 Completed
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ScenarioCard
              module={currentScenario.module}
              title={currentScenario.scenario_title}
              scenarioText={currentScenario.scenario_text}
              question={currentScenario.question}
            />

            {showFeedback && (
              <FeedbackPanel
                isCorrect={isCorrect}
                rationale={currentScenario.rationale}
                onNext={handleNextScenario}
              />
            )}

            <div className="pt-4">
              <QuestionOptions
                options={currentScenario.options}
                selectedAnswer={selectedAnswer}
                correctAnswer={showFeedback ? currentScenario.correct_answer : undefined}
                onSelectAnswer={setSelectedAnswer}
                showFeedback={showFeedback}
              />
              
              {!showFeedback && selectedAnswer && (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={answerMutation.isPending}
                  className="w-full mt-6 bg-primary text-primary-foreground hover-elevate active-elevate-2 rounded-md py-3 px-6 font-semibold text-lg disabled:opacity-50"
                  data-testid="button-submit-answer"
                >
                  {answerMutation.isPending ? "Submitting..." : "Submit Answer"}
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="sticky top-24">
              <TrainingAvatar 
                isSpeaking={!showFeedback}
                speechText={currentScenario.scenario_text}
              />
              
              <div className="mt-6">
                <ProgressTracker
                  totalCompleted={completedScenarios.length}
                  totalScenarios={20}
                  moduleProgress={moduleProgress}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

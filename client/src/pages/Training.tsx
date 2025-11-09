import { useState } from "react";
import TrainingAvatar from "@/components/TrainingAvatar";
import ScenarioCard from "@/components/ScenarioCard";
import QuestionOptions from "@/components/QuestionOptions";
import FeedbackPanel from "@/components/FeedbackPanel";
import ModuleCard from "@/components/ModuleCard";
import ProgressTracker from "@/components/ProgressTracker";
import { Users, MessageSquare, Heart, Award } from "lucide-react";
import heroImage from "@assets/generated_images/NHS_teamwork_hero_image_97cc3a1b.png";

// Mock scenario data - will be replaced with AI-generated content
const mockScenarios = [
  {
    id: 1,
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    title: "The Challenging Nurse",
    scenarioText: "You are a new IMG registrar on a busy medical ward. During your ward round, you prescribe 1L of normal saline at 125ml/hr for a post-operative patient. Sarah, a senior nurse with 15 years of experience, approaches you and says: 'I wonder if we should consider a lower rate, given his cardiac history and age. His last echo showed an ejection fraction of 35%.'\n\nIn your home country, a nurse would never question a doctor's prescription, and you feel somewhat undermined in front of the team.",
    question: "What is the most appropriate professional response that reflects NHS MDT culture?",
    options: {
      A: "Politely but firmly tell Sarah that you are the doctor and you will make the clinical decisions.",
      B: "Ignore Sarah's comment and continue with the ward round to avoid confrontation.",
      C: "Acknowledge Sarah's concern, thank her for the input, and review the patient's notes and fluid guidelines together.",
      D: "Change the prescription immediately to avoid any conflict with nursing staff."
    },
    correctAnswer: "C",
    rationale: "Excellent! This response perfectly demonstrates the NHS MDT culture. By acknowledging Sarah's expertise and reviewing the guidelines together, you show professional parity and collaborative decision-making. In the NHS, a senior nurse's clinical input is invaluable, especially regarding patient safety concerns. This approach strengthens team relationships while ensuring the best patient outcome. Options A and B reflect hierarchical thinking, while D shows lack of clinical confidence."
  },
  {
    id: 2,
    module: "Module 2: Communication",
    moduleNumber: 2,
    title: "Decoding the Consultant",
    scenarioText: "You receive an email from your consultant at 4:45 PM on Friday: 'I wonder if you could possibly have a look at the discharge summary for Mrs. Jones before you leave? No rush, of course. Just when you get a chance.'\n\nYou have plans to meet friends at 5:30 PM and the discharge summary will take at least 45 minutes to complete properly.",
    question: "How should you interpret this communication and respond?",
    options: {
      A: "The consultant said 'no rush', so complete it on Monday morning when you're fresh.",
      B: "This is a polite but firm instruction to complete it today before leaving, as it's clinically important.",
      C: "Send a quick reply saying you'll do it 'when you get a chance' to match the tone.",
      D: "Complete half of it today and finish the rest on Monday."
    },
    correctAnswer: "B",
    rationale: "Correct! In NHS professional culture, 'I wonder if you could...' and 'no rush' are polite softeners, but the expectation is clear: complete this task today. The consultant is being courteous while making a professional request. Discharge summaries are time-sensitive for patient safety and continuity of care. You should complete it before leaving, even if it means adjusting your personal plans. Options A, C, and D show misunderstanding of indirect NHS communication."
  },
  {
    id: 3,
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    title: "Gillick Competence",
    scenarioText: "A 15-year-old girl attends your GP surgery alone, requesting contraception. She appears mature and articulate. She explicitly states: 'Please don't tell my parents. They would be really upset if they knew I was sexually active.'\n\nYou come from a culture where discussing such matters with minors without parental consent would be unthinkable.",
    question: "What is the appropriate course of action according to UK law and GMC guidance?",
    options: {
      A: "Refuse to discuss contraception without parental consent, as she is under 16.",
      B: "Assess her understanding and maturity (Gillick Competence). If she demonstrates sufficient understanding, provide contraception and maintain confidentiality.",
      C: "Agree to help her, but insist on informing her parents as a condition of providing treatment.",
      D: "Provide the contraception but document that you advised her to tell her parents."
    },
    correctAnswer: "B",
    rationale: "Excellent! This is the correct application of Gillick Competence and UK law. If the 15-year-old demonstrates sufficient maturity and understanding of the proposed treatment, she can legally consent without parental knowledge. Your duty is to the patient, not the family. You must assess her understanding, provide unbiased advice, and maintain absolute confidentiality unless there are safeguarding concerns. Options A and C violate her autonomy, while D is partially correct but doesn't emphasize the critical assessment of competence."
  }
];

export default function Training() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [completedScenarios, setCompletedScenarios] = useState<number[]>([]);
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const currentScenario = mockScenarios[currentScenarioIndex];
  const isCorrect = selectedAnswer === currentScenario.correctAnswer;

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

  const moduleProgress = moduleData.map(module => ({
    module: module.number,
    completed: completedScenarios.filter(id => {
      const scenario = mockScenarios.find(s => s.id === id);
      return scenario?.moduleNumber === module.number;
    }).length,
    total: module.total
  }));

  const handleSubmitAnswer = () => {
    if (selectedAnswer) {
      setShowFeedback(true);
    }
  };

  const handleNextScenario = () => {
    if (!completedScenarios.includes(currentScenario.id)) {
      setCompletedScenarios([...completedScenarios, currentScenario.id]);
    }
    
    const nextIndex = (currentScenarioIndex + 1) % mockScenarios.length;
    setCurrentScenarioIndex(nextIndex);
    setSelectedAnswer("");
    setShowFeedback(false);
  };

  const handleModuleSelect = (moduleNumber: number) => {
    setSelectedModule(moduleNumber);
    const scenarioInModule = mockScenarios.find(s => s.moduleNumber === moduleNumber);
    if (scenarioInModule) {
      setCurrentScenarioIndex(mockScenarios.indexOf(scenarioInModule));
      setSelectedAnswer("");
      setShowFeedback(false);
      setShowWelcome(false);
    }
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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-foreground">NHS Cultural Competency Training</h1>
            <div className="hidden md:block text-sm text-muted-foreground">
              Scenario {currentScenarioIndex + 1} of {mockScenarios.length}
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
              title={currentScenario.title}
              scenarioText={currentScenario.scenarioText}
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
                correctAnswer={showFeedback ? currentScenario.correctAnswer : undefined}
                onSelectAnswer={setSelectedAnswer}
                showFeedback={showFeedback}
              />
              
              {!showFeedback && selectedAnswer && (
                <button
                  onClick={handleSubmitAnswer}
                  className="w-full mt-6 bg-primary text-primary-foreground hover-elevate active-elevate-2 rounded-md py-3 px-6 font-semibold text-lg"
                  data-testid="button-submit-answer"
                >
                  Submit Answer
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="sticky top-24">
              <TrainingAvatar 
                isSpeaking={!showFeedback}
                speechText={currentScenario.scenarioText}
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

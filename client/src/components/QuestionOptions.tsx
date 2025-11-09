import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface QuestionOptionsProps {
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  selectedAnswer?: string;
  correctAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  showFeedback?: boolean;
}

export default function QuestionOptions({ 
  options, 
  selectedAnswer, 
  correctAnswer,
  onSelectAnswer,
  showFeedback = false
}: QuestionOptionsProps) {
  const optionKeys = ['A', 'B', 'C', 'D'] as const;

  const getOptionStyle = (key: string) => {
    if (!showFeedback) {
      return selectedAnswer === key 
        ? "border-primary bg-primary/5" 
        : "border-border hover-elevate";
    }
    
    if (key === correctAnswer) {
      return "border-green-500 bg-green-50 dark:bg-green-950/20";
    }
    
    if (selectedAnswer === key && key !== correctAnswer) {
      return "border-destructive bg-destructive/5";
    }
    
    return "border-border opacity-60";
  };

  const getIconForOption = (key: string) => {
    if (!showFeedback) return null;
    
    if (key === correctAnswer) {
      return <Check className="w-5 h-5 text-green-600 dark:text-green-400" />;
    }
    
    if (selectedAnswer === key && key !== correctAnswer) {
      return <X className="w-5 h-5 text-destructive" />;
    }
    
    return null;
  };

  return (
    <div className="space-y-4">
      {optionKeys.map((key) => (
        <Card
          key={key}
          className={`p-4 border-2 cursor-pointer transition-all ${getOptionStyle(key)}`}
          onClick={() => !showFeedback && onSelectAnswer(key)}
          data-testid={`option-${key}`}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
              {key}
            </div>
            <p className="flex-1 text-base leading-relaxed text-foreground">
              {options[key]}
            </p>
            {getIconForOption(key)}
          </div>
        </Card>
      ))}
      
      {!showFeedback && selectedAnswer && (
        <Button 
          className="w-full mt-6" 
          size="lg"
          onClick={() => console.log('Submit answer:', selectedAnswer)}
          data-testid="button-submit-answer"
        >
          Submit Answer
        </Button>
      )}
    </div>
  );
}

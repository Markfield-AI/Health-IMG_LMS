import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

interface FeedbackPanelProps {
  isCorrect: boolean;
  rationale: string;
  onNext: () => void;
}

export default function FeedbackPanel({ isCorrect, rationale, onNext }: FeedbackPanelProps) {
  return (
    <Card className={`p-6 border-2 ${isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 'border-amber-500 bg-amber-50 dark:bg-amber-950/20'}`}>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-semibold text-green-900 dark:text-green-100" data-testid="text-result">
                Correct!
              </h3>
            </>
          ) : (
            <>
              <XCircle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              <h3 className="text-2xl font-semibold text-amber-900 dark:text-amber-100" data-testid="text-result">
                Not Quite
              </h3>
            </>
          )}
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-base leading-relaxed text-foreground" data-testid="text-rationale">
            {rationale}
          </p>
        </div>

        <Button 
          onClick={onNext}
          className="w-full mt-4"
          size="lg"
          data-testid="button-next-scenario"
        >
          Next Scenario
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
}

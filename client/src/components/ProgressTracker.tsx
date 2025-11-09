import { Card } from "@/components/ui/card";
import { Trophy, Target } from "lucide-react";

interface ProgressTrackerProps {
  totalCompleted: number;
  totalScenarios: number;
  moduleProgress: {
    module: number;
    moduleName: string;
    completed: number;
    correct: number;
    total: number;
  }[];
}

export default function ProgressTracker({ totalCompleted, totalScenarios, moduleProgress }: ProgressTrackerProps) {
  const overallProgress = (totalCompleted / totalScenarios) * 100;

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Overall Progress</h3>
              <p className="text-sm text-muted-foreground">
                {totalCompleted} of {totalScenarios} scenarios completed
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary" data-testid="text-overall-progress">
              {Math.round(overallProgress)}%
            </div>
          </div>
        </div>

        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary-foreground/80 transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>

        <div className="space-y-3 pt-4 border-t">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Target className="w-4 h-4" />
            <span>Module Breakdown</span>
          </div>
          {moduleProgress.map((module) => {
            const wrong = module.completed - module.correct;
            return (
              <div key={module.module} className="flex items-center justify-between text-sm gap-4">
                <span className="text-muted-foreground flex-1">{module.moduleName}</span>
                <div className="flex items-center gap-3 whitespace-nowrap" data-testid={`text-module-${module.module}-progress`}>
                  <span className="font-medium text-foreground">
                    {module.completed}/{module.total}
                  </span>
                  {module.completed > 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium" data-testid={`text-module-${module.module}-correct`}>
                        {module.correct}
                      </span>
                      <span className="text-red-600 font-medium" data-testid={`text-module-${module.module}-wrong`}>
                        {wrong}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

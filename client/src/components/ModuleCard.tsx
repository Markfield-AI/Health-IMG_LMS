import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  completed: number;
  total: number;
  isActive?: boolean;
  onClick: () => void;
}

export default function ModuleCard({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  completed, 
  total,
  isActive = false,
  onClick 
}: ModuleCardProps) {
  const progress = (completed / total) * 100;
  const isCompleted = completed === total;

  return (
    <Card 
      className={`p-6 cursor-pointer hover-elevate active-elevate-2 border-2 transition-all ${
        isActive ? 'border-primary bg-primary/5' : 'border-border'
      }`}
      onClick={onClick}
      data-testid={`card-module-${number}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
          isCompleted ? 'bg-green-100 dark:bg-green-950' : 'bg-primary/10'
        }`}>
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          ) : (
            <Icon className="w-6 h-6 text-primary" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="outline" className="text-xs">
              Module {number}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {completed}/{total} scenarios
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-module-title-${number}`}>
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3">
            {description}
          </p>
          
          <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
              data-testid={`progress-module-${number}`}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScenarioCardProps {
  module: string;
  title: string;
  scenarioText: string;
  question: string;
}

export default function ScenarioCard({ module, title, scenarioText, question }: ScenarioCardProps) {
  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-3">
        <Badge variant="secondary" className="text-xs" data-testid="badge-module">
          {module}
        </Badge>
        <h2 className="text-2xl font-semibold text-foreground" data-testid="text-scenario-title">
          {title}
        </h2>
      </div>

      <div className="prose prose-sm max-w-none">
        <div className="p-4 bg-accent/30 rounded-md border-l-4 border-primary">
          <p className="text-base leading-relaxed text-foreground whitespace-pre-wrap" data-testid="text-scenario">
            {scenarioText}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t">
        <h3 className="text-xl font-medium text-foreground mb-4" data-testid="text-question">
          {question}
        </h3>
      </div>
    </Card>
  );
}

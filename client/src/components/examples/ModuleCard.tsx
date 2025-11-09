import ModuleCard from '../ModuleCard';
import { Users, MessageSquare, Heart, Award } from 'lucide-react';

export default function ModuleCardExample() {
  return (
    <div className="p-8 bg-background max-w-2xl space-y-4">
      <ModuleCard
        number={1}
        title="Team Culture"
        description="Navigate the non-hierarchical, multidisciplinary team environment"
        icon={Users}
        completed={3}
        total={5}
        isActive={true}
        onClick={() => console.log('Module 1 clicked')}
      />
      
      <ModuleCard
        number={2}
        title="Communication"
        description="Master the nuances of NHS professional communication"
        icon={MessageSquare}
        completed={0}
        total={5}
        onClick={() => console.log('Module 2 clicked')}
      />
      
      <ModuleCard
        number={3}
        title="Patient Sensitivity"
        description="Provide culturally sensitive, patient-centered care"
        icon={Heart}
        completed={5}
        total={5}
        onClick={() => console.log('Module 3 clicked')}
      />
    </div>
  );
}

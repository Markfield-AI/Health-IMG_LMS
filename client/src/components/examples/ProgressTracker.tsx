import ProgressTracker from '../ProgressTracker';

export default function ProgressTrackerExample() {
  return (
    <div className="p-8 bg-background max-w-md">
      <ProgressTracker
        totalCompleted={8}
        totalScenarios={20}
        moduleProgress={[
          { module: 1, completed: 3, total: 5 },
          { module: 2, completed: 2, total: 5 },
          { module: 3, completed: 3, total: 5 },
          { module: 4, completed: 0, total: 5 },
        ]}
      />
    </div>
  );
}

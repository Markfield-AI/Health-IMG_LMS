import TrainingAvatar from '../TrainingAvatar';

export default function TrainingAvatarExample() {
  return (
    <div className="p-8 bg-card">
      <TrainingAvatar 
        isSpeaking={true}
        speechText="Welcome to the NHS Cultural Competency Training. I will guide you through interactive scenarios to help you transition successfully."
      />
    </div>
  );
}

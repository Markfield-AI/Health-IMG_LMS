import ScenarioCard from '../ScenarioCard';

export default function ScenarioCardExample() {
  return (
    <div className="p-8 bg-background max-w-4xl">
      <ScenarioCard
        module="Module 1: Team Culture"
        title="The Challenging Nurse"
        scenarioText="You are a new IMG registrar on a busy medical ward. During your ward round, you prescribe 1L of normal saline at 125ml/hr for a post-operative patient. Sarah, a senior nurse with 15 years of experience, approaches you and says: 'I wonder if we should consider a lower rate, given his cardiac history and age. His last echo showed an ejection fraction of 35%.'\n\nIn your home country, a nurse would never question a doctor's prescription, and you feel somewhat undermined in front of the team."
        question="What is the most appropriate professional response that reflects NHS MDT culture?"
      />
    </div>
  );
}

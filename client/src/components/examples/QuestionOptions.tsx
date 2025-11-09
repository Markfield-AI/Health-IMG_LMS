import QuestionOptions from '../QuestionOptions';
import { useState } from 'react';

export default function QuestionOptionsExample() {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="p-8 bg-background max-w-4xl space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Before Submission</h3>
        <QuestionOptions
          options={{
            A: "Politely but firmly tell Sarah that you are the doctor and you will make the clinical decisions.",
            B: "Ignore Sarah's comment and continue with the ward round to avoid confrontation.",
            C: "Acknowledge Sarah's concern, thank her for the input, and review the patient's notes and fluid guidelines together.",
            D: "Change the prescription immediately to avoid any conflict with nursing staff."
          }}
          selectedAnswer={selected}
          onSelectAnswer={setSelected}
          showFeedback={false}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">After Submission (Correct)</h3>
        <QuestionOptions
          options={{
            A: "Politely but firmly tell Sarah that you are the doctor and you will make the clinical decisions.",
            B: "Ignore Sarah's comment and continue with the ward round to avoid confrontation.",
            C: "Acknowledge Sarah's concern, thank her for the input, and review the patient's notes and fluid guidelines together.",
            D: "Change the prescription immediately to avoid any conflict with nursing staff."
          }}
          selectedAnswer="C"
          correctAnswer="C"
          onSelectAnswer={() => {}}
          showFeedback={true}
        />
      </div>
    </div>
  );
}

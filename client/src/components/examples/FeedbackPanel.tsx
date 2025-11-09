import FeedbackPanel from '../FeedbackPanel';

export default function FeedbackPanelExample() {
  return (
    <div className="p-8 bg-background max-w-4xl space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Correct Answer</h3>
        <FeedbackPanel
          isCorrect={true}
          rationale="Excellent! This response perfectly demonstrates the NHS MDT culture. By acknowledging Sarah's expertise and reviewing the guidelines together, you show professional parity and collaborative decision-making. In the NHS, a senior nurse's clinical input is invaluable, especially regarding patient safety concerns. This approach strengthens team relationships while ensuring the best patient outcome."
          onNext={() => console.log('Next scenario')}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Incorrect Answer</h3>
        <FeedbackPanel
          isCorrect={false}
          rationale="This response reflects a hierarchical mindset that doesn't align with NHS culture. While you are clinically responsible, dismissing Sarah's concern could compromise patient safety and damage team relationships. In the NHS, nurses are empowered to challenge clinical decisions, and their input must be valued. The correct approach is to acknowledge her expertise, review the evidence together, and make a collaborative decision."
          onNext={() => console.log('Next scenario')}
        />
      </div>
    </div>
  );
}

import { Scenario } from "@shared/schema";

// Fallback scenarios when AI generation is unavailable
export const mockScenarios: Scenario[] = [
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Challenging Nurse",
    scenario_text: "You are a new IMG registrar on a busy medical ward. During your ward round, you prescribe 1L of normal saline at 125ml/hr for a post-operative patient. Sarah, a senior nurse with 15 years of experience, approaches you and says: 'I wonder if we should consider a lower rate, given his cardiac history and age. His last echo showed an ejection fraction of 35%.'\n\nIn your home country, a nurse would never question a doctor's prescription, and you feel somewhat undermined in front of the team.",
    question: "What is the most appropriate professional response that reflects NHS MDT culture?",
    options: {
      A: "Politely but firmly tell Sarah that you are the doctor and you will make the clinical decisions.",
      B: "Ignore Sarah's comment and continue with the ward round to avoid confrontation.",
      C: "Acknowledge Sarah's concern, thank her for the input, and review the patient's notes and fluid guidelines together.",
      D: "Change the prescription immediately to avoid any conflict with nursing staff."
    },
    correct_answer: "C",
    rationale: "Excellent! This response perfectly demonstrates the NHS MDT culture. By acknowledging Sarah's expertise and reviewing the guidelines together, you show professional parity and collaborative decision-making. In the NHS, a senior nurse's clinical input is invaluable, especially regarding patient safety concerns. This approach strengthens team relationships while ensuring the best patient outcome. Options A and B reflect hierarchical thinking, while D shows lack of clinical confidence."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "Decoding the Consultant",
    scenario_text: "You receive an email from your consultant at 4:45 PM on Friday: 'I wonder if you could possibly have a look at the discharge summary for Mrs. Jones before you leave? No rush, of course. Just when you get a chance.'\n\nYou have plans to meet friends at 5:30 PM and the discharge summary will take at least 45 minutes to complete properly.",
    question: "How should you interpret this communication and respond?",
    options: {
      A: "The consultant said 'no rush', so complete it on Monday morning when you're fresh.",
      B: "This is a polite but firm instruction to complete it today before leaving, as it's clinically important.",
      C: "Send a quick reply saying you'll do it 'when you get a chance' to match the tone.",
      D: "Complete half of it today and finish the rest on Monday."
    },
    correct_answer: "B",
    rationale: "Correct! In NHS professional culture, 'I wonder if you could...' and 'no rush' are polite softeners, but the expectation is clear: complete this task today. The consultant is being courteous while making a professional request. Discharge summaries are time-sensitive for patient safety and continuity of care. You should complete it before leaving, even if it means adjusting your personal plans. Options A, C, and D show misunderstanding of indirect NHS communication."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Gillick Competence",
    scenario_text: "A 15-year-old girl attends your GP surgery alone, requesting contraception. She appears mature and articulate. She explicitly states: 'Please don't tell my parents. They would be really upset if they knew I was sexually active.'\n\nYou come from a culture where discussing such matters with minors without parental consent would be unthinkable.",
    question: "What is the appropriate course of action according to UK law and GMC guidance?",
    options: {
      A: "Refuse to discuss contraception without parental consent, as she is under 16.",
      B: "Assess her understanding and maturity (Gillick Competence). If she demonstrates sufficient understanding, provide contraception and maintain confidentiality.",
      C: "Agree to help her, but insist on informing her parents as a condition of providing treatment.",
      D: "Provide the contraception but document that you advised her to tell her parents."
    },
    correct_answer: "B",
    rationale: "Excellent! This is the correct application of Gillick Competence and UK law. If the 15-year-old demonstrates sufficient maturity and understanding of the proposed treatment, she can legally consent without parental knowledge. Your duty is to the patient, not the family. You must assess her understanding, provide unbiased advice, and maintain absolute confidentiality unless there are safeguarding concerns. Options A and C violate her autonomy, while D is partially correct but doesn't emphasize the critical assessment of competence."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Social Media Dilemma",
    scenario_text: "During your lunch break, you notice a colleague has posted a photo in a private WhatsApp group for junior doctors. The photo shows a patient's unusual X-ray with the caption 'Look at this crazy finding!' The image has been cropped to remove identifying information, but the colleague mentions the patient's age and the ward they're on.\n\nIn your previous role, sharing interesting cases in private groups was common practice and seen as educational.",
    question: "What is the most appropriate action according to GMC professional standards?",
    options: {
      A: "Ignore it - the image is anonymized and it's in a private group of medical professionals.",
      B: "Share it with your own medical school friends as it's a good learning opportunity.",
      C: "Speak to your colleague privately about GMC guidance on confidentiality and social media, and suggest they remove the post.",
      D: "Immediately report your colleague to the Clinical Director for a serious breach."
    },
    correct_answer: "C",
    rationale: "Correct! While the image may be cropped, providing the patient's age and location could potentially identify them, which breaches confidentiality. The GMC is clear that doctors must maintain confidentiality across all platforms, including private groups. The most professional approach is to speak to your colleague first, as they may not be aware of UK standards. This allows them to correct the mistake and learn, which aligns with the GMC's emphasis on supporting colleagues while maintaining standards. Option A ignores the breach, B compounds it, and D is overly aggressive for what may be a genuine lack of awareness."
  }
];

export function getMockScenarioByModule(moduleNumber: number): Scenario {
  const scenario = mockScenarios.find(s => s.moduleNumber === moduleNumber);
  return scenario || mockScenarios[0];
}

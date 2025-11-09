import { Scenario } from "@shared/schema";

// Comprehensive training scenarios (40 total - 10 per module)
export const mockScenarios: Scenario[] = [
  // MODULE 1: Navigating the Non-Hierarchical, Multidisciplinary Team Culture (Scenarios 1-10)
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Challenging Nurse",
    scenario_text: "You are a new Foundation Doctor (FY1) on the ward. You prescribe a standard dose of a diuretic for a patient with fluid overload. The senior ward nurse, who has 20 years of experience, approaches you and says, \"I wonder if we should consider half that dose, Doctor, given his borderline blood pressure.\" In your home country, a nurse would never question a doctor's order.",
    question: "What is the most appropriate response in the NHS culture?",
    options: {
      A: "Politely tell the nurse that you are the doctor and your order stands, as you have checked the guidelines.",
      B: "Immediately change the dose to half, assuming the senior nurse knows best.",
      C: "Thank the nurse for her input, state that you will review the patient's notes and the local guideline, and discuss the final decision with her.",
      D: "Ask the nurse to call the Registrar (senior doctor) to resolve the disagreement."
    },
    correct_answer: "C",
    rationale: "Excellent! This response perfectly demonstrates the NHS MDT culture. By acknowledging the nurse's expertise and reviewing the guidelines together, you show professional parity and collaborative decision-making. In the NHS, a senior nurse's clinical input is invaluable, especially regarding patient safety concerns."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Administrative Gatekeeper",
    scenario_text: "You need an urgent, non-routine blood test processed for a patient. You approach the ward clerk, who is busy with discharge paperwork, and instruct her to drop everything and process your request immediately. She replies, \"I'm sorry, Doctor, but I have three discharges that need to be completed before 10 am, or the beds won't be free. Is this test life-threatening?\"",
    question: "How should you respond to respect the clerk's role in the MDT?",
    options: {
      A: "Insist that your clinical request takes absolute priority over administrative tasks.",
      B: "Apologize, explain the clinical urgency briefly, and ask if there is a specific process or person who handles urgent, non-routine requests.",
      C: "Bypass the clerk and take the blood sample to the lab yourself, complaining about the lack of support.",
      D: "Tell her that if the patient deteriorates, it will be her responsibility."
    },
    correct_answer: "B",
    rationale: "Correct! This demonstrates respect for the clerk's role and understanding that discharge processes are clinically important. By explaining urgency and asking about the proper process, you show collaborative problem-solving while maintaining professional relationships."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Pharmacist's Intervention",
    scenario_text: "During the ward round, you propose a new antibiotic regimen. The ward pharmacist, who is part of the round, politely interjects, \"Doctor, I've checked the patient's renal function, and the dose you suggested is outside the local trust's safety guidelines. I recommend we use the lower dose.\"",
    question: "What does this intervention signify in the NHS MDT model?",
    options: {
      A: "The pharmacist is overstepping their professional boundaries and challenging your authority.",
      B: "The pharmacist is demonstrating professional parity and acting as a safety net for the patient.",
      C: "The pharmacist is suggesting an optional alternative that you are free to ignore.",
      D: "The pharmacist is implying that you are incompetent and should have checked the renal function yourself."
    },
    correct_answer: "B",
    rationale: "Excellent! The pharmacist is fulfilling their professional role as part of the MDT safety net. In the NHS, pharmacists are medication experts and their input is expected and valued. This collaborative approach prevents medication errors and improves patient safety."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Junior Doctor's Silence",
    scenario_text: "You are a Registrar leading a teaching session. You notice a junior doctor (FY1) from a conservative background is consistently silent, even when directly asked for their opinion on a complex case. Later, they tell you privately they are afraid to speak up in front of senior staff.",
    question: "What cultural principle should you reinforce to encourage participation?",
    options: {
      A: "Tell them that silence is acceptable as long as they learn from listening.",
      B: "Explain that in the NHS, speaking up is a professional duty and part of the flat hierarchy model for patient safety.",
      C: "Advise them to only speak when they are 100% certain of the answer.",
      D: "Suggest they write down their thoughts and pass them to you discreetly."
    },
    correct_answer: "B",
    rationale: "Correct! Speaking up is not just encouraged in the NHS - it's a professional duty. The flat hierarchy model means that patient safety concerns can be raised by anyone, regardless of seniority. This cultural shift is essential for preventing errors and ensuring safe care."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Team Coffee Break",
    scenario_text: "Your colleagues invite you to join them for a 15-minute coffee break. You feel that as a doctor, you should prioritize reviewing notes and that socializing with non-medical staff is unprofessional.",
    question: "What is the cultural value of the team coffee break in the NHS?",
    options: {
      A: "It is a waste of valuable clinical time and should be avoided.",
      B: "It is a mandatory requirement to comply with working time regulations.",
      C: "It is a crucial opportunity to build rapport, trust, and multidisciplinary relationships that improve communication during critical situations.",
      D: "It is an informal way for senior staff to assess your social skills."
    },
    correct_answer: "C",
    rationale: "Excellent! Team breaks are vital for building the trust and rapport that underpin effective MDT communication. When a critical situation arises, team members who have strong relationships communicate more openly and effectively, directly improving patient safety."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "Delegation to the Nurse",
    scenario_text: "You need a patient to be cannulated immediately for IV access. You are busy reviewing a critical patient. You ask the ward nurse to perform the cannulation. She replies, \"I'm sorry, Doctor, but I'm currently administering time-critical medication to three patients. Could you ask the other nurse, or is this something you could do?\"",
    question: "What is the most appropriate collaborative response?",
    options: {
      A: "Insist she stops her task, as cannulation is a doctor's priority.",
      B: "Immediately check if the other nurse is available, or perform the cannulation yourself, recognizing the nurse's time-critical duties.",
      C: "Document in the notes that the nurse refused to follow your instruction.",
      D: "Tell her that cannulation is a basic nursing skill and she must comply."
    },
    correct_answer: "B",
    rationale: "Correct! This demonstrates understanding that all team members have important clinical priorities. By recognizing her time-critical task and finding an alternative solution, you show professional respect and flexibility while ensuring patient care."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Consultant's Open Door",
    scenario_text: "Your Consultant tells you, \"My door is always open if you have any concerns, no matter how small.\" You are used to a system where you only approach the most senior doctor with major, pre-vetted issues.",
    question: "How should you interpret the Consultant's statement in the NHS context?",
    options: {
      A: "It is a polite formality and should be ignored to avoid wasting their time.",
      B: "It is a genuine invitation to engage in bidirectional communication and raise concerns early, which is vital for patient safety.",
      C: "It means you should only approach them if you have a life-threatening emergency.",
      D: "It is a test of your ability to solve problems independently."
    },
    correct_answer: "B",
    rationale: "Excellent! This is a genuine invitation reflecting the NHS culture of early escalation and open communication. Raising concerns early prevents problems from escalating and is a key part of patient safety culture. Consultants expect and value this communication."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Unfamiliar Terminology",
    scenario_text: "During a handover, a colleague uses a local NHS acronym you have never heard before (e.g., \"TTO,\" \"DNACPR,\" or \"EDD\"). You don't want to appear ignorant in front of the team.",
    question: "What is the best way to handle this situation to ensure patient safety and integration?",
    options: {
      A: "Pretend you understand and look it up later when you are alone.",
      B: "Interrupt the handover and ask for a full explanation of the acronym.",
      C: "Discreetly ask a nearby junior colleague or nurse for a quick clarification immediately after the handover.",
      D: "Assume it is not important and continue with your tasks."
    },
    correct_answer: "C",
    rationale: "Correct! This balances the need for clarification with respect for the handover process. Asking discreetly shows professional humility and commitment to patient safety. Never pretend to understand medical information - patient safety always comes first."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "The Role of the Physiotherapist",
    scenario_text: "A patient who had a stroke is medically stable, but the Physiotherapist insists the patient cannot be discharged yet because they are not safe to mobilize at home, despite the doctor's assessment that the patient is medically fit.",
    question: "Whose assessment holds the final authority on the patient's discharge readiness in this scenario?",
    options: {
      A: "The doctor's, as they are responsible for the patient's medical fitness.",
      B: "The Physiotherapist's, as they are the expert in functional mobility and safety.",
      C: "The decision must be a collaborative consensus reached by the MDT, prioritizing the patient's overall safety and functional needs.",
      D: "The Ward Manager's, as they control the bed flow."
    },
    correct_answer: "C",
    rationale: "Excellent! Discharge decisions in the NHS require MDT consensus. While the doctor assesses medical fitness, the physiotherapist is the expert in functional safety. A patient who is medically fit but functionally unsafe is not ready for discharge. This collaborative approach ensures holistic patient care."
  },
  {
    module: "Module 1: Team Culture",
    moduleNumber: 1,
    scenario_title: "Feedback on Teamwork",
    scenario_text: "Your Educational Supervisor gives you feedback that you are \"too autocratic\" and need to \"delegate more effectively\" to the nursing staff. You feel you are simply being efficient.",
    question: "What is the core cultural issue your supervisor is addressing?",
    options: {
      A: "Your clinical decision-making is too slow.",
      B: "You are failing to embrace the NHS culture of professional parity and shared responsibility within the MDT.",
      C: "You are not delegating enough of your paperwork.",
      D: "You are spending too much time on the ward."
    },
    correct_answer: "B",
    rationale: "Correct! Your supervisor is addressing your leadership style within the flat hierarchy of the NHS MDT. Being 'autocratic' suggests you're working in a top-down manner rather than collaboratively. Effective delegation in the NHS means recognizing team members' expertise and working with them as partners."
  },
  
  // MODULE 2: Mastering the Nuances of Communication (Scenarios 11-20)
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "Decoding the Soft Directive",
    scenario_text: "You receive an email from your Consultant regarding a patient's discharge summary. The email reads: \"I wonder if you could possibly have a look at the discharge summary for Mrs. Jones before you leave? No rush, of course.\"",
    question: "What is the most accurate interpretation of this communication in the NHS professional context?",
    options: {
      A: "It is a tentative suggestion, and you can look at it tomorrow morning.",
      B: "It is a polite but firm instruction that the task should be completed before the end of your shift.",
      C: "The Consultant is testing your time management skills.",
      D: "The Consultant is genuinely unsure if the task is important."
    },
    correct_answer: "B",
    rationale: "Correct! In NHS culture, 'I wonder if you could...' and 'no rush' are polite softeners that maintain collegial tone, but the expectation is clear: this should be done today. Understanding these indirect communication styles is crucial for professional success."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "The SBAR Escalation",
    scenario_text: "You are calling the on-call Registrar about a patient whose condition is deteriorating. You are from a system where you would simply state your findings and ask for a plan.",
    question: "Which structured communication tool is the gold standard in the NHS for this type of safety-critical escalation?",
    options: {
      A: "SOAP (Subjective, Objective, Assessment, Plan)",
      B: "SBAR (Situation, Background, Assessment, Recommendation)",
      C: "ISBAR (Identify, Situation, Background, Assessment, Recommendation)",
      D: "ABCDE (Airway, Breathing, Circulation, Disability, Exposure)"
    },
    correct_answer: "B",
    rationale: "Correct! SBAR is the gold standard for clinical escalation in the NHS. It ensures clear, structured communication of critical information: what's happening (Situation), relevant history (Background), your clinical assessment (Assessment), and what you think should be done (Recommendation)."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "Patient-Centered Language",
    scenario_text: "You are explaining a diagnosis of \"Myocardial Infarction\" to a patient's family. You notice they look confused.",
    question: "To ensure patient-centered communication, what should you do immediately?",
    options: {
      A: "Repeat the term \"Myocardial Infarction\" more slowly and loudly.",
      B: "Use plain English, such as \"heart attack,\" and ask the family to tell you in their own words what they understand.",
      C: "Ask the nurse to explain it, as it is a communication issue.",
      D: "Provide a medical textbook for them to read."
    },
    correct_answer: "B",
    rationale: "Excellent! Using plain English and checking understanding with the 'teach-back' method ensures effective communication. Patients and families have the right to understand their care in accessible language. This approach demonstrates patient-centered communication."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "Assertiveness Rehearsal",
    scenario_text: "You are trying to get a critical blood result from the lab technician, who is being dismissive. You need to be assertive without being aggressive.",
    question: "Which phrase best demonstrates professional assertiveness in this situation?",
    options: {
      A: "I demand you give me that result now, or I will report you to your manager.",
      B: "I'm sorry to bother you, but could you possibly look for the result when you have a moment?",
      C: "I need that result for Mr. Smith in the next five minutes. I am concerned about his potassium level, and I need to act on it immediately.",
      D: "I'm not entirely happy with your service."
    },
    correct_answer: "C",
    rationale: "Excellent! This demonstrates clear, professional assertiveness. You state: what you need, when you need it, why it's urgent, and the clinical context. This approach is firm but respectful, focusing on patient safety rather than personal authority."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "Decoding With Respect",
    scenario_text: "You propose a management plan in an MDT meeting. A senior colleague begins their response by saying, \"With respect, Doctor, I think we should consider the alternative pathway...\"",
    question: "How should you interpret the phrase \"With respect\" in this professional setting?",
    options: {
      A: "The colleague is genuinely showing deference and is about to agree with you.",
      B: "The colleague is about to politely but firmly challenge your decision or statement.",
      C: "The colleague is simply starting a new sentence and the phrase has no special meaning.",
      D: "The colleague is suggesting you should show more respect to them."
    },
    correct_answer: "B",
    rationale: "Correct! \"With respect\" is a polite British phrase that typically precedes a disagreement or challenge. Understanding these linguistic nuances helps you respond appropriately and maintain professional relationships when your ideas are being questioned."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "The Unclear Instruction",
    scenario_text: "A Consultant tells you over the phone, \"Just keep an eye on Mrs. Davies and let me know if you're not entirely happy with her.\"",
    question: "What is the most professional action to take to clarify this indirect instruction?",
    options: {
      A: "Do nothing, as the instruction is vague and non-committal.",
      B: "Document the instruction verbatim and wait until the patient is visibly unwell.",
      C: "Ask the Consultant, \"Could you clarify what specific parameters (e.g., vital signs, urine output) would make you 'not entirely happy' so I know when to call you back?\"",
      D: "Call the Consultant back in 30 minutes to confirm the instruction."
    },
    correct_answer: "C",
    rationale: "Excellent! This demonstrates professional assertiveness and clarity-seeking. Vague instructions like 'keep an eye on' or 'not entirely happy' can lead to missed deterioration or unnecessary escalations. Asking for specific parameters ensures patient safety and appropriate escalation."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "The Patient's Jargon",
    scenario_text: "A patient uses a lot of medical jargon they found online to describe their symptoms, but you suspect they don't fully understand the terms.",
    question: "How should you proceed with the consultation?",
    options: {
      A: "Use the same jargon to show you are on the same intellectual level.",
      B: "Gently interrupt and ask, \"Just to make sure we are on the same page, can you tell me what that word means to you?\"",
      C: "Ignore the jargon and continue with your clinical questions.",
      D: "Tell the patient to stop using medical terms they don't understand."
    },
    correct_answer: "B",
    rationale: "Excellent! This approach gently clarifies understanding without embarrassing the patient. It ensures you're both discussing the same symptoms and helps identify any misconceptions from online research that may affect the consultation."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "The Email Urgency",
    scenario_text: "You need to contact a colleague about a patient who needs a non-urgent but important review. You are unsure if you should call or email.",
    question: "In the NHS, which method is generally preferred for non-urgent, detailed communication that requires a documented trail?",
    options: {
      A: "A direct phone call, as it is faster.",
      B: "A text message, as it is informal and quick.",
      C: "A professional email, as it creates a clear, documented record of the request and details.",
      D: "A handwritten note left on the colleague's desk."
    },
    correct_answer: "C",
    rationale: "Correct! Professional emails create documented trails essential for clinical governance and medico-legal protection. For non-urgent matters requiring detail, email allows the colleague to review and respond when appropriate, while maintaining a clear record of the communication."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "The Teach-Back Method",
    scenario_text: "You have just explained a new medication regimen to an elderly patient.",
    question: "What is the best way to confirm the patient has understood the instructions, reflecting the shared decision-making model?",
    options: {
      A: "Ask, \"Do you understand everything I've said?\"",
      B: "Ask, \"Are you happy with the plan?\"",
      C: "Use the \"teach-back\" method: \"Just to make sure I've explained it clearly, can you tell me in your own words how you will take this medication?\"",
      D: "Give them a leaflet and assume they will read it later."
    },
    correct_answer: "C",
    rationale: "Excellent! The teach-back method is the gold standard for confirming understanding. By framing it as checking your own explanation rather than testing the patient, you avoid embarrassment while ensuring they truly understand the regimen, reducing medication errors."
  },
  {
    module: "Module 2: Communication",
    moduleNumber: 2,
    scenario_title: "The Overly Direct Communication",
    scenario_text: "You are used to a communication style where you would tell a junior colleague, \"You made a mistake on the drug chart. Fix it now.\"",
    question: "How should you phrase this instruction in the NHS to maintain professional respect and encourage learning?",
    options: {
      A: "Your error on the drug chart is unacceptable. Correct it immediately.",
      B: "I've noticed a potential discrepancy on the drug chart. Could you please review this section and let me know what you find?",
      C: "I've corrected your mistake. Be more careful next time.",
      D: "I'm not entirely happy with your drug charting."
    },
    correct_answer: "B",
    rationale: "Excellent! This approach maintains professional respect while encouraging learning. By framing it as a 'discrepancy' and asking them to review, you allow them to identify the error themselves, which promotes learning and maintains confidence while ensuring the error is corrected."
  },

  // MODULE 3: Patient-Facing Cultural Sensitivity and Ethical Practice (Scenarios 21-30)
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Gillick Competence and Contraception",
    scenario_text: "A 14-year-old girl attends your clinic requesting contraception. She explicitly states that she does not want her parents to know. You are from a country where parental consent is mandatory for minors.",
    question: "What is your primary ethical and legal consideration in the UK?",
    options: {
      A: "You must contact her parents immediately, as she is under 16.",
      B: "You must refuse the request, as it conflicts with your personal beliefs.",
      C: "You must assess her for Gillick Competence (sufficient maturity and understanding) and, if competent, maintain confidentiality and provide the contraception.",
      D: "You should advise her to wait until she is 16."
    },
    correct_answer: "C",
    rationale: "Excellent! This is the correct application of Gillick Competence and UK law. If she demonstrates sufficient maturity and understanding, she can legally consent without parental knowledge. Your duty is to the patient, not the family, ensuring her autonomy and safety."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Gender Identity and Pronouns",
    scenario_text: "You are reviewing a patient's notes and see they have a male name on their birth certificate but are referred to by the nursing staff as \"Ms. Sarah\" and use \"she/her\" pronouns. You accidentally use a male pronoun during the consultation.",
    question: "What is the most appropriate action to take immediately?",
    options: {
      A: "Ignore the mistake and continue the consultation, hoping the patient did not notice.",
      B: "Stop the consultation and explain that you are from a different culture and find the situation confusing.",
      C: "Immediately and briefly apologize, correct yourself, and continue the consultation using the correct name and pronouns.",
      D: "Ask the patient to clarify their gender identity and legal name."
    },
    correct_answer: "C",
    rationale: "Correct! A brief, sincere apology followed by immediate correction shows respect and professionalism. Making a genuine mistake is human; how you respond demonstrates your commitment to patient-centered care and respect for identity."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Conscientious Objection - Abortion",
    scenario_text: "A patient requests a referral for an abortion. You have a deeply held personal and religious objection to abortion.",
    question: "According to GMC guidance on conscientious objection, what is your professional duty?",
    options: {
      A: "You must refuse the referral and explain your personal reasons to the patient.",
      B: "You must refer the patient to a colleague who can provide the service without delay or judgment.",
      C: "You must try to persuade the patient to consider alternatives before referring them.",
      D: "You must inform the patient that abortion is illegal in your home country."
    },
    correct_answer: "B",
    rationale: "Correct! GMC guidance allows conscientious objection but requires you to ensure the patient receives timely care from another doctor. Your personal beliefs must not delay or obstruct the patient's access to legal healthcare services."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Family Pressure and Confidentiality",
    scenario_text: "The husband of a 35-year-old female patient demands to know the results of her recent sexual health screen, stating, \"In our culture, the husband has a right to know.\" The patient has not consented to the disclosure.",
    question: "What is your primary duty regarding patient information?",
    options: {
      A: "Disclose the results to the husband to respect his cultural role.",
      B: "Refuse to disclose the results, citing the patient's absolute right to confidentiality and autonomy in the UK.",
      C: "Ask the patient if she would like you to disclose the results to her husband.",
      D: "Only disclose the results if the husband threatens to involve the hospital management."
    },
    correct_answer: "B",
    rationale: "Excellent! Patient confidentiality is absolute in the UK unless there are safeguarding concerns. The patient's autonomy overrides cultural expectations. Disclosing without consent would be a serious breach of professional duty and potentially put the patient at risk."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Non-Judgmental Care",
    scenario_text: "You are consulting with a patient who admits to heavy alcohol use and drug misuse. You feel personally judgmental of their lifestyle choices.",
    question: "How must you ensure your personal feelings do not compromise the consultation?",
    options: {
      A: "Briefly express your disapproval to encourage them to change their behavior.",
      B: "Maintain a professional, non-judgmental demeanor and focus solely on providing evidence-based medical advice and support.",
      C: "Refer the patient to a colleague who specializes in addiction, as you cannot provide unbiased care.",
      D: "Document your personal concerns about their moral character in the patient's notes."
    },
    correct_answer: "B",
    rationale: "Excellent! Non-judgmental care is fundamental to the doctor-patient relationship. Your role is to provide evidence-based medical care and support, not to judge lifestyle choices. Judgment creates barriers to honest communication and undermines trust."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "The Patient's Choice",
    scenario_text: "A patient with a terminal illness chooses to refuse chemotherapy, a decision you believe is medically irrational and will shorten their life. The patient is mentally competent.",
    question: "What is the doctor's role in this situation, based on UK principles of autonomy?",
    options: {
      A: "You must override the patient's decision, as your duty is to prolong life.",
      B: "You must respect the patient's autonomous decision, ensuring they have been fully informed of the risks and benefits.",
      C: "You should involve the patient's family to convince them to accept treatment.",
      D: "You should seek a second medical opinion to confirm the patient's competence."
    },
    correct_answer: "B",
    rationale: "Correct! Autonomy is a fundamental principle in UK medical ethics. A competent patient has the absolute right to refuse treatment, even if that decision may shorten their life. Your role is to ensure informed consent, not to override their choice."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Cultural Interpreter",
    scenario_text: "A patient speaks very little English. Their 12-year-old child offers to translate the medical consultation.",
    question: "What is the appropriate action regarding the use of interpreters?",
    options: {
      A: "Allow the child to translate, as they are the most readily available option.",
      B: "Use a professional, trained medical interpreter (in-person or telephone) to ensure accuracy and maintain confidentiality.",
      C: "Use a family member, as they understand the patient's background best.",
      D: "Speak slowly and loudly in English until the patient understands."
    },
    correct_answer: "B",
    rationale: "Excellent! Professional interpreters ensure accurate communication and maintain confidentiality. Using children places inappropriate burden on them and may result in inaccurate translation or breaches of confidentiality, particularly for sensitive topics."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Confidentiality and Self-Harm",
    scenario_text: "A 17-year-old patient confides in you that they are having thoughts of self-harm but makes you promise not to tell anyone.",
    question: "What is the ethical boundary you must navigate?",
    options: {
      A: "You must keep the promise, as confidentiality is absolute.",
      B: "You must break confidentiality and share the information with the appropriate mental health team or senior colleague, as the duty to protect the patient from serious harm overrides confidentiality.",
      C: "You should only tell the patient's parents.",
      D: "You should document the promise and the self-harm thoughts, but take no further action."
    },
    correct_answer: "B",
    rationale: "Correct! While confidentiality is normally paramount, the duty to protect a patient from serious harm overrides this. You must involve appropriate mental health services. Explain this to the patient sensitively, involving them in the process where possible."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "The Religious Request",
    scenario_text: "A patient from a conservative background requests a male-only care team for a procedure, even though the only available doctor is female.",
    question: "How should you handle this request?",
    options: {
      A: "Refuse the request, stating that gender is irrelevant in the NHS.",
      B: "Attempt to accommodate the request by finding a male colleague, but explain that patient safety and clinical urgency take priority over gender preference.",
      C: "Insist the patient accepts the female doctor or delays the procedure.",
      D: "Document the refusal and proceed with the female doctor."
    },
    correct_answer: "B",
    rationale: "Correct! The NHS seeks to accommodate cultural and religious preferences where possible, but patient safety is paramount. Making reasonable efforts to find a male colleague shows cultural sensitivity, while being clear about clinical priorities maintains professional standards."
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "The Patient's Lifestyle",
    scenario_text: "A patient with Type 2 Diabetes continues to eat an unhealthy diet despite repeated advice. You feel frustrated by their lack of compliance.",
    question: "How should you approach the next consultation, maintaining a non-judgmental, patient-centered approach?",
    options: {
      A: "Express your frustration and tell them they are wasting NHS resources.",
      B: "Focus on understanding the barriers to their compliance (e.g., cultural foods, financial issues, mental health) and explore small, achievable changes together.",
      C: "Discharge them from your care due to non-compliance.",
      D: "Simply repeat the same dietary advice more forcefully."
    },
    correct_answer: "B",
    rationale: "Excellent! This demonstrates motivational interviewing and patient-centered care. Understanding barriers (financial, cultural, psychological) allows you to work collaboratively on realistic goals. Judgment and frustration damage the therapeutic relationship and reduce compliance further."
  },

  // MODULE 4: Professional Integration and Resilience (Scenarios 31-40)
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Social Media and Patient Confidentiality",
    scenario_text: "You are scrolling through a private social media group for doctors and see a colleague post a picture of a funny, but non-identifiable, X-ray with a caption that mocks the patient's injury.",
    question: "According to GMC guidance, what is your professional duty?",
    options: {
      A: "Ignore it, as it is in a private group and the patient is not identifiable.",
      B: "Like the post, as it is a common way to vent stress.",
      C: "Immediately report the post and the colleague to a senior manager or the GMC, as it breaches professional standards and undermines public trust.",
      D: "Send a private message to the colleague asking them to take it down."
    },
    correct_answer: "C",
    rationale: "Correct! Even in private groups, mocking patients breaches GMC standards of professionalism and undermines public trust in doctors. You have a professional duty to report this serious breach, which protects both patients and the profession's reputation."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Incident Reporting - Datix",
    scenario_text: "You accidentally prescribe a drug to a patient who is allergic to it, but the nurse catches the error before the drug is administered.",
    question: "What is the correct action to take regarding this near-miss incident?",
    options: {
      A: "Do nothing, as no harm occurred, and you don't want a black mark on your record.",
      B: "Apologize to the nurse and the patient, and move on.",
      C: "Immediately report the incident using the local system (e.g., Datix), as it is a crucial part of clinical governance and system learning.",
      D: "Only report it if the nurse insists."
    },
    correct_answer: "C",
    rationale: "Excellent! Reporting near-misses is essential for system learning and preventing future errors. The NHS has a non-punitive incident reporting culture designed to identify system weaknesses. Reporting demonstrates professionalism and commitment to patient safety."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Rota Breach and Working Hours",
    scenario_text: "You realize your current rota requires you to work 50 hours straight without the mandatory rest breaks required by the European Working Time Directive (EWTD).",
    question: "What is the most professional and appropriate way to address this rota breach?",
    options: {
      A: "Work the shift and complain to your colleagues afterward.",
      B: "Refuse to work the shift and leave the hospital.",
      C: "Document the breach and professionally raise the issue with the Rota Coordinator or your Educational Supervisor, citing the EWTD and patient safety concerns.",
      D: "Call in sick for the next shift to compensate for the lost rest."
    },
    correct_answer: "C",
    rationale: "Correct! Professionally escalating rota breaches protects both your wellbeing and patient safety. Documenting and raising concerns through proper channels demonstrates professional responsibility and contributes to systemic improvement."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Professional Boundaries",
    scenario_text: "A patient you have been treating for three months, who is now discharged, sends you a friend request on a personal social media platform.",
    question: "What is the appropriate response according to GMC guidance on professional boundaries?",
    options: {
      A: "Accept the request, as they are no longer your patient.",
      B: "Accept the request but set your profile to private.",
      C: "Decline the request, as maintaining a clear professional boundary is essential for trust and preventing future complications.",
      D: "Accept the request and send them a private message explaining the rules."
    },
    correct_answer: "C",
    rationale: "Correct! GMC guidance is clear that professional boundaries must be maintained even after the doctor-patient relationship has ended. Accepting social media requests blurs these boundaries and can lead to complications that undermine professionalism and trust."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Seeking Support for Stress",
    scenario_text: "You are feeling overwhelmed, isolated, and are making minor clinical errors due to fatigue and stress. You are worried that seeking help will be seen as a sign of weakness and jeopardize your career.",
    question: "What is the NHS cultural expectation regarding a doctor's wellbeing?",
    options: {
      A: "You must hide your stress and work harder to prove your resilience.",
      B: "You have a professional duty to seek help from services like the NHS Practitioner Health Programme or Occupational Health to ensure your fitness to practice.",
      C: "You should only take a few days off and hope the stress passes.",
      D: "You should confide only in your family back home."
    },
    correct_answer: "B",
    rationale: "Excellent! Seeking help is a professional duty, not weakness. The NHS provides confidential support services specifically for doctors. Recognizing when you need help and accessing support demonstrates professionalism and protects both you and your patients."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Clinical Audit and CPD",
    scenario_text: "Your department is running a mandatory clinical audit on antibiotic prescribing. You view this as unnecessary administrative work that takes time away from clinical duties.",
    question: "What is the purpose of mandatory clinical audit in the NHS?",
    options: {
      A: "To create extra work for junior doctors.",
      B: "To test your knowledge of antibiotics.",
      C: "It is a core component of Continuous Professional Development (CPD) and Clinical Governance, ensuring the quality of care meets national standards.",
      D: "It is a way for the hospital to save money on medication."
    },
    correct_answer: "C",
    rationale: "Correct! Clinical audit is fundamental to evidence-based practice and continuous quality improvement. It ensures care meets standards, identifies areas for improvement, and demonstrates your commitment to professional development and patient safety."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "The Duty to Report a Colleague",
    scenario_text: "You witness a colleague consistently arriving late, smelling of alcohol, and making questionable clinical decisions. You are friends with this colleague.",
    question: "What is your primary duty in this situation?",
    options: {
      A: "Cover for your friend and advise them privately to seek help.",
      B: "Your duty to protect patients overrides your loyalty to your colleague; you must report your concerns to a senior doctor or the GMC.",
      C: "Wait until the colleague makes a serious error that harms a patient.",
      D: "Tell the nurse in charge to keep an eye on them."
    },
    correct_answer: "B",
    rationale: "Correct! Your primary duty is always to patient safety. While supporting colleagues is important, you must report concerns about fitness to practice through appropriate channels. This protects patients and may ultimately help your colleague get the support they need."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Appraisal and Feedback",
    scenario_text: "You are preparing for your annual appraisal. You are used to a system where appraisals are purely formal and involve little self-reflection.",
    question: "What is the key focus of the NHS appraisal process?",
    options: {
      A: "To determine your salary increase for the year.",
      B: "To formally document your mistakes and disciplinary actions.",
      C: "It is a mandatory process focused on self-reflection, professional development, and setting learning goals for the coming year.",
      D: "It is a test of your clinical knowledge."
    },
    correct_answer: "C",
    rationale: "Correct! NHS appraisal is a developmental process focused on reflective practice and professional growth. It's an opportunity to discuss achievements, challenges, and learning goals in a supportive environment, contributing to your ongoing professional development."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Using Hospital Resources",
    scenario_text: "You need to print a large personal document (e.g., a visa application) and decide to use the hospital printer and paper late at night.",
    question: "What ethical principle does this action violate?",
    options: {
      A: "Patient confidentiality, as the document is personal.",
      B: "The principle of responsible use of NHS resources, as hospital property is for official use only.",
      C: "The principle of professional boundaries.",
      D: "No principle is violated, as the hospital has plenty of paper."
    },
    correct_answer: "B",
    rationale: "Correct! NHS resources are funded by taxpayers and must be used only for official purposes. Using hospital facilities for personal gain, however small, violates professional integrity and undermines public trust in the NHS."
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Dealing with a Complaint",
    scenario_text: "A patient files a formal complaint against you, which you believe is unfair and culturally motivated.",
    question: "What is the correct first step in responding to the complaint?",
    options: {
      A: "Immediately contact the patient to argue your case and defend your actions.",
      B: "Ignore the complaint, as you know you did nothing wrong.",
      C: "Cooperate fully with the formal complaints procedure, seek advice from your medical defense organization, and respond professionally and factually.",
      D: "File a counter-complaint against the patient for harassment."
    },
    correct_answer: "C",
    rationale: "Excellent! Professional response to complaints demonstrates maturity and integrity. Seeking advice from your medical defense organization ensures you respond appropriately. The complaints process is an opportunity to learn and improve, even when you believe the complaint is unfounded."
  }
];

export function getMockScenarioByModule(moduleNumber: number, scenarioIndex?: number): Scenario {
  // Find all scenarios for this module
  const moduleScenarios = mockScenarios.filter(s => s.moduleNumber === moduleNumber);
  
  if (moduleScenarios.length === 0) {
    return mockScenarios[0];
  }
  
  // Use the scenario index to select which scenario to return
  // This allows cycling through all scenarios for a module
  const index = scenarioIndex !== undefined 
    ? scenarioIndex % moduleScenarios.length 
    : 0;
  
  return moduleScenarios[index];
}

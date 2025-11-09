import { Scenario } from "@shared/schema";

// Comprehensive training scenarios (40 total - 10 per module)
// Each scenario includes GMC and NHS authoritative source references

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
    rationale: "Excellent! This response perfectly demonstrates NHS MDT culture.\n\n**GMC Good Medical Practice 2024 - Domain 3 (Colleagues, Culture and Safety)** requires doctors to \"work collaboratively with colleagues while respecting their roles and contributions\" and \"engage with colleagues in a manner that prioritises patient welfare.\"\n\nBy acknowledging the nurse's expertise and reviewing guidelines together, you demonstrate professional parity and collaborative decision-making. Senior nurses have invaluable clinical experience, particularly regarding patient safety concerns.\n\n**NHS Constitution** emphasizes that \"patient safety, experience and outcomes are all improved when staff are valued, empowered and supported.\"\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3: Colleagues, Culture and Safety; NHS Constitution Principle 3"
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
    rationale: "Correct! This demonstrates respect for the clerk's role and understanding that discharge processes are clinically important.\n\n**GMC Good Medical Practice 2024 - Domain 3** states you must \"treat all colleagues with kindness, courtesy and respect\" and \"work collaboratively with colleagues (nurses, allied health professionals, administrative staff) while respecting their roles and contributions.\"\n\nBy explaining urgency and asking about proper processes, you show collaborative problem-solving while maintaining professional relationships. Discharge coordination is essential for patient flow and safety.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3: Colleagues, Culture and Safety"
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
    rationale: "Excellent! The pharmacist is fulfilling their professional role as part of the MDT safety net.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires doctors to \"work collaboratively with colleagues while respecting their roles and contributions.\" Pharmacists are medication experts and their clinical input is expected and valued in NHS culture.\n\n**NHS Patient Safety** frameworks recognize that multidisciplinary input prevents medication errors and improves outcomes. This collaborative approach exemplifies the safety net principle where multiple professionals protect patient welfare.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3; National Patient Safety Agency (NPSA) Medication Safety Guidelines"
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
    rationale: "Correct! Speaking up is not just encouraged in the NHS—it's a professional duty.\n\n**NHS Constitution** guarantees staff \"the right to raise concerns about safety, malpractice or other risks in the public interest\" and pledges to \"encourage and support staff in raising concerns at the earliest opportunity.\"\n\n**Freedom to Speak Up** (established 2016 following Mid Staffordshire inquiry) emphasizes that speaking up should be \"routine business in well-led NHS organizations.\" The flat hierarchy model means patient safety concerns can be raised by anyone, regardless of seniority.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires creating cultures where staff can \"ask questions, talk about errors, and raise concerns safely.\"\n\n**Reference:** NHS Constitution; Freedom to Speak Up Framework (2016); GMC Good Medical Practice 2024, Domain 3"
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
    rationale: "Excellent! Team breaks are vital for building trust and rapport that underpin effective MDT communication.\n\n**GMC Good Medical Practice 2024 - Domain 3** emphasizes helping create cultures that are \"respectful, fair, supportive, and compassionate\" and building effective working relationships through \"knowledge sharing through informal and formal channels.\"\n\nResearch shows that when critical situations arise, team members with strong relationships communicate more openly and effectively, directly improving patient safety and clinical outcomes.\n\n**NHS Leadership Academy** recognizes that informal team building is essential for psychological safety and effective collaboration.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3: Colleagues, Culture and Safety; NHS Leadership Academy - Building Team Effectiveness"
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
    rationale: "Correct! This demonstrates understanding that all team members have important clinical priorities.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires you to \"adapt leadership roles as necessary—lead or follow as circumstances require\" and recognize that effective teamwork means understanding colleagues' responsibilities.\n\nBy recognizing her time-critical task (medication administration) and finding alternative solutions, you show professional respect and flexibility while ensuring patient care. Time-critical medications must not be interrupted.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3: Colleagues, Culture and Safety; NMC Standards for Medicine Management"
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
    rationale: "Excellent! This is a genuine invitation reflecting NHS culture of early escalation and open communication.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires doctors to be \"accessible to colleagues seeking information, advice, or support when on duty\" and to help create cultures where staff can \"ask questions and raise concerns safely.\"\n\n**NHS Patient Safety Framework** emphasizes early escalation prevents problems from deteriorating. Consultants expect and value this communication as part of creating psychologically safe learning environments.\n\n**National Guardian's Office** promotes that speaking up should be \"routine business in well-led NHS organizations.\"\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3; NHS Patient Safety Framework; Freedom to Speak Up"
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
    rationale: "Correct! This balances clarification needs with respect for handover processes.\n\n**GMC Good Medical Practice 2024 - Domain 1 (Knowledge, Skills and Performance)** states you must \"recognise and work within the limits of your competence\" and \"be honest about your knowledge and experience.\"\n\nAsking discreetly shows professional humility and commitment to patient safety. Never pretend to understand medical information—patient safety always comes first.\n\n**NHS Communication Standards** emphasize that effective handovers require shared understanding of all clinical information.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 1: Knowledge, Skills and Performance; NHS England Safe Handover Guidance"
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
    rationale: "Excellent! Discharge decisions in the NHS require MDT consensus.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires collaborative working and recognizing that \"work collaboratively with colleagues while respecting their roles and contributions.\"\n\nWhile doctors assess medical fitness, physiotherapists are experts in functional safety. A patient who is medically fit but functionally unsafe is not ready for discharge. This holistic approach ensures patient safety and reduces readmissions.\n\n**NICE Discharge Planning Guidance** emphasizes MDT assessment for safe discharge.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3; NICE Clinical Guideline NG27 - Transition Between Inpatient Hospital Settings and Community or Care Home Settings"
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
    rationale: "Correct! Your supervisor is addressing your leadership style within the flat hierarchy of the NHS MDT.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires you to \"adapt leadership roles as necessary—lead or follow as circumstances require\" and work collaboratively recognizing team members' expertise.\n\nBeing 'autocratic' suggests top-down working rather than collaborative partnership. Effective NHS delegation means recognizing team members' expertise and working with them as partners, not subordinates.\n\n**NHS Leadership Academy** emphasizes shared leadership and collaborative practice as core competencies.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3: Colleagues, Culture and Safety; NHS Leadership Academy - Healthcare Leadership Model"
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
    rationale: "Correct! In NHS culture, 'I wonder if you could...' and 'no rush' are polite softeners that maintain collegial tone, but the expectation is clear: complete this today.\n\n**GMC Good Medical Practice 2024 - Domain 2 (Patients, Partnership and Communication)** requires you to \"communicate clearly and work effectively with colleagues.\"\n\nUnderstanding these indirect British communication styles is crucial for professional success. The politeness maintains flat hierarchy while conveying clear expectations. Discharge summaries are medico-legally important documents.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2: Patients, Partnership and Communication; Domain 3: Colleagues, Culture and Safety"
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
    rationale: "Correct! **SBAR** is the NHS gold standard for clinical escalation.\n\n**NHS England Patient Safety** mandates SBAR for structured communication: **S**ituation (what's happening now), **B**ackground (relevant clinical history), **A**ssessment (your clinical findings/interpretation), **R**ecommendation (what you think should be done).\n\nSBAR reduces communication errors that contribute to adverse events. Originally developed by the US military, it's been widely adopted across NHS trusts to improve patient safety, particularly for phone communications and handovers.\n\n**NHS Implementation Guide** provides training toolkits for SBAR.\n\n**Reference:** NHS England SBAR Communication Tool; NHS Patient Safety Framework; systematic review (2018) showing moderate evidence for improved patient safety"
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
    rationale: "Excellent! Using plain English and the 'teach-back' method ensures effective communication.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"give information patients can understand—provide information in a way patients want or need, in understandable language.\"\n\n**The Teach-Back Method** (endorsed by AHRQ and NHS) involves asking patients to repeat information in their own words. Studies show 50% of patients leave medical visits without understanding what physicians told them, and 40-80% of information is immediately forgotten.\n\n**NHS Accessible Information Standard** mandates communication in accessible formats.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; Agency for Healthcare Research and Quality (AHRQ) Health Literacy Toolkit; NHS Accessible Information Standard"
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
    rationale: "Excellent! This demonstrates clear, professional assertiveness.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires \"communicate clearly\" while treating colleagues with \"kindness, courtesy and respect.\"\n\nYou state: what you need, when you need it, why it's urgent, and the clinical context. This approach is firm but respectful, focusing on patient safety rather than personal authority. It provides the lab technician with essential clinical context to prioritize appropriately.\n\n**NHS Communication Standards** emphasize assertive communication that balances respect with clarity.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2 and Domain 3; NHS Leadership Academy - Assertive Communication Skills"
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
    rationale: "Correct! \"With respect\" is a polite British phrase that typically precedes a disagreement or challenge.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires understanding effective communication patterns and recognizing that \"communicate clearly and work effectively with colleagues.\"\n\nUnderstanding these linguistic nuances helps you respond appropriately and maintain professional relationships when your ideas are being questioned. This indirect communication style maintains collegiality while allowing robust clinical discussion.\n\n**NHS Communication Culture** values respectful challenge as part of effective MDT functioning.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2: Patients, Partnership and Communication; Domain 3: Colleagues, Culture and Safety"
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
    rationale: "Excellent! This demonstrates professional assertiveness and clarity-seeking.\n\n**GMC Good Medical Practice 2024 - Domain 1** requires you to \"be honest about your knowledge and experience\" and \"ask for help when you need it.\"\n\nVague instructions like 'keep an eye on' or 'not entirely happy' can lead to missed deterioration or unnecessary escalations. Asking for specific parameters (e.g., vital signs thresholds) ensures patient safety and appropriate escalation.\n\n**NHS Patient Safety** emphasizes clear communication prevents adverse events.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 1: Knowledge, Skills and Performance; Domain 2: Patients, Partnership and Communication; National Patient Safety Agency (NPSA) Safe Handover Guidelines"
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
    rationale: "Excellent! This approach gently clarifies understanding without embarrassing the patient.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"listen to patients\" and \"recognize their knowledge and experience of their health.\" You must also \"give information patients can understand.\"\n\nThis ensures you're both discussing the same symptoms and helps identify misconceptions from online research that may affect the consultation. The teach-back approach frames it as checking shared understanding rather than testing the patient.\n\n**NHS Shared Decision Making** emphasizes collaborative clarification.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2: Patients, Partnership and Communication; AHRQ Health Literacy Toolkit"
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
    rationale: "Correct! Professional emails create documented trails essential for clinical governance and medico-legal protection.\n\n**GMC Good Medical Practice 2024 - Domain 1** requires you to \"keep clear, accurate, and legible records\" and Domain 3 requires \"share all relevant information with colleagues involved in patients' care.\"\n\nFor non-urgent matters requiring detail, email allows the colleague to review and respond when appropriate, while maintaining a clear record of the communication. This supports continuity of care and professional accountability.\n\n**NHS Clinical Governance** emphasizes documented communication.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 1: Knowledge, Skills and Performance; Domain 3: Colleagues, Culture and Safety; NHS Records Management Code of Practice"
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
    rationale: "Excellent! The **Teach-Back Method** is the gold standard for confirming understanding.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"support shared decision-making\" and \"give information patients can understand.\"\n\n**AHRQ (Agency for Healthcare Research and Quality)** evidence shows teach-back: improves disease knowledge and medication adherence, increases patient satisfaction, decreases hospital readmissions, and improves health outcomes. Only 12% of adults have proficient health literacy.\n\nBy framing it as checking YOUR explanation rather than testing the patient, you avoid embarrassment while ensuring true understanding, reducing medication errors.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; AHRQ Health Literacy Universal Precautions Toolkit; systematic reviews showing teach-back effectiveness"
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
    rationale: "Excellent! This approach maintains professional respect while encouraging learning.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires you to \"help create a culture that is respectful, fair, supportive, and compassionate\" and \"treat all colleagues with kindness, courtesy and respect.\"\n\nBy framing it as a 'discrepancy' and asking them to review, you allow them to identify the error themselves, which promotes learning and maintains confidence while ensuring correction. This avoids blame culture and encourages reflective practice.\n\n**NHS Just Culture** principles emphasize learning from errors rather than punishment.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3: Colleagues, Culture and Safety; NHS Patient Safety Strategy - Just Culture"
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
    rationale: "Excellent! This is the correct application of **Gillick Competence** and UK law.\n\n**Gillick v West Norfolk (1985)** established that children under 16 can consent to medical treatment if they have \"sufficient maturity and understanding.\" **Fraser Guidelines** (from the same case) apply specifically to contraception and sexual health.\n\n**GMC 0-18 Years: Guidance for Doctors** states you can provide contraception if the young person: (1) understands the advice, (2) cannot be persuaded to inform parents, (3) is very likely to continue having sexual intercourse, (4) their physical or mental health will suffer without treatment, and (5) it's in their best interests.\n\nYour duty is to the patient, not the family. Under-16s should be encouraged to inform parents, but if they meet Gillick competence and Fraser criteria, confidentiality must be maintained.\n\n**Reference:** Gillick v West Norfolk (1985); GMC 0-18 Years: Guidance for All Doctors; Fraser Guidelines; NSPCC Gillick Competence Guidance"
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
    rationale: "Correct! Immediately apologize briefly, correct yourself, and move forward.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"treat patients with kindness, courtesy and respect\" and \"respect patients' dignity and privacy.\"\n\n**Equality Act 2010** protects against discrimination based on gender reassignment. Using incorrect pronouns can cause significant distress and demonstrates lack of respect for patient identity.\n\nA brief, sincere apology acknowledges the error without making the patient responsible for educating you. Dwelling on the mistake or over-apologizing can make the patient more uncomfortable.\n\n**NHS Rainbow Badge Initiative** promotes inclusive care for LGBTQ+ patients.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; Equality Act 2010; GMC Trans Healthcare Guidance; NHS Rainbow Badge Standards"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Capacity and Cultural Pressure",
    scenario_text: "A 70-year-old woman from a traditional background requires a potentially life-saving blood transfusion. Her adult son insists she would refuse it for religious reasons. The patient is conscious but appears passive and defers all questions to her son.",
    question: "What is your primary legal and ethical duty under the Mental Capacity Act 2005?",
    options: {
      A: "Accept the son's statement and document his refusal on behalf of his mother.",
      B: "Assess the patient's mental capacity directly, provide information in a way she understands, and document her own decision, regardless of family pressure.",
      C: "Seek the agreement of all family members before proceeding.",
      D: "Apply for a court order to override the family's wishes."
    },
    correct_answer: "B",
    rationale: "Correct! You must assess the patient's capacity directly.\n\n**Mental Capacity Act 2005** presumes adults have capacity unless proven otherwise. You must:\n1. Assess capacity for this specific decision\n2. Provide information in accessible formats\n3. Take all reasonable steps to help her make a decision\n4. Respect HER autonomous decision, not the family's wishes\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"respect patients' right to reach their own decisions\" and \"not discriminate unfairly against patients.\"\n\nFamily members cannot make decisions for capacitous adults. If she has capacity and refuses, you must respect that. If she lacks capacity, the decision must be made in her best interests (which may include family views but not family control).\n\n**Reference:** Mental Capacity Act 2005; GMC Decision Making and Consent Guidance; GMC Good Medical Practice 2024, Domain 2"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Religious Accommodation",
    scenario_text: "A Muslim patient asks if their consultation can be delayed by 10 minutes so they can complete their afternoon prayer. The clinic is running 30 minutes behind schedule.",
    question: "What is the most appropriate response that balances patient respect with service delivery?",
    options: {
      A: "Refuse politely, explaining that the clinic is already behind schedule and religious practices cannot be accommodated.",
      B: "Agree immediately and reschedule their appointment to the end of the clinic.",
      C: "Offer them the option to complete their prayer now and be seen next, or be seen immediately, respecting their choice.",
      D: "Tell them they should have planned their appointment around their prayer times."
    },
    correct_answer: "C",
    rationale: "Correct! Offer choice and respect their decision.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"treat patients with kindness, courtesy and respect\" and \"respect patients' dignity and privacy.\"\n\n**Equality Act 2010** requires reasonable adjustments for religious practice. **NHS Constitution** emphasizes respect for \"human rights, privacy and dignity.\"\n\nOffering the choice acknowledges their needs while being transparent about clinic constraints. A 10-minute delay may be manageable; if not, seeing them next in the queue is a reasonable accommodation. The key is respecting their autonomy to choose.\n\n**NHS Chaplaincy Guidelines** support facilitating religious practice where reasonable.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; Equality Act 2010; NHS Constitution; NHS Chaplaincy and Spiritual Care Guidelines"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Cultural Beliefs About Diagnosis",
    scenario_text: "You diagnose a patient with Type 2 Diabetes. The patient's family insists the illness is caused by \"evil eye\" and want to consult a traditional healer before starting medication. The patient's HbA1c is 75 mmol/mol (9%).",
    question: "What is the most appropriate response that respects cultural beliefs while ensuring medical safety?",
    options: {
      A: "Refuse to discharge the patient until they agree to start medication immediately.",
      B: "Explain that while you respect their beliefs, diabetes requires medical treatment. Offer to work alongside their traditional healer and arrange close follow-up.",
      C: "Tell them that traditional healers are not evidence-based and they must choose between the two approaches.",
      D: "Discharge them with no follow-up, respecting their autonomous decision to seek traditional healing."
    },
    correct_answer: "B",
    rationale: "Excellent! This demonstrates cultural competence while ensuring patient safety.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"respect patients' dignity and privacy\" and \"support shared decision-making\" while also ensuring you \"provide effective treatments based on the best available evidence.\"\n\n**NHS Constitution** values \"respect and dignity\" and recognizes patients' rights to be \"involved in discussions and decisions about their healthcare.\"\n\nAcknowledging cultural beliefs doesn't mean abandoning evidence-based medicine. Working alongside traditional practices (where safe) while arranging close monitoring demonstrates respect and maintains therapeutic relationship. HbA1c of 75 requires treatment but isn't immediately life-threatening, allowing time for negotiation.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; NHS Constitution; NICE Type 2 Diabetes Guideline NG28"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Interpreter Services",
    scenario_text: "A patient who speaks limited English attends with her 10-year-old daughter, who offers to interpret. The consultation concerns potential cervical cancer and requires discussion of intimate symptoms.",
    question: "What is the most appropriate action regarding interpretation for this sensitive consultation?",
    options: {
      A: "Accept the daughter's offer, as she is immediately available and the patient trusts her.",
      B: "Decline the daughter's offer and arrange a professional telephone or video interpreter for this consultation.",
      C: "Proceed with the consultation using simple gestures and diagrams, avoiding the need for interpretation.",
      D: "Ask a receptionist who speaks the patient's language to interpret."
    },
    correct_answer: "B",
    rationale: "Correct! You must arrange a professional interpreter for sensitive consultations.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"give information patients can understand\" and \"communicate sensitively.\"\n\n**NHS Accessible Information Standard** mandates provision of professional interpreters. Using children as interpreters is inappropriate because:\n1. It reverses family roles and can be psychologically harmful\n2. Children may lack medical vocabulary\n3. Patients may withhold sensitive information\n4. Accuracy cannot be assured\n5. Safeguarding concerns may be missed\n6. Consent validity is compromised\n\n**Language Line** and video interpreting services are available 24/7 for NHS consultations.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; NHS Accessible Information Standard; Royal College of General Practitioners - Professional Interpreters Guidance"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "End of Life Cultural Practices",
    scenario_text: "A terminally ill patient's family from a Hindu background requests that the patient's bed be moved to face east and that they be allowed to play religious music and perform rituals around the bedside. The patient is unconscious.",
    question: "How should you respond to this request to provide culturally sensitive end-of-life care?",
    options: {
      A: "Refuse, as the patient is unconscious and cannot express their wishes, and the rituals may disturb other patients.",
      B: "Facilitate the requests where practically possible, such as repositioning the bed and allowing quiet music, while balancing other patients' needs.",
      C: "Tell the family that NHS facilities cannot accommodate religious practices and suggest they transfer the patient home.",
      D: "Allow the family to perform rituals only outside visiting hours."
    },
    correct_answer: "B",
    rationale: "Excellent! Facilitate cultural practices where practically possible.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to \"treat patients with kindness, courtesy and respect\" and \"respect patients' dignity and privacy.\"\n\n**NHS Constitution** guarantees \"respect for human rights, privacy and dignity\" and \"patients will be treated with dignity and respect, in accordance with their human rights.\"\n\nEnd-of-life care should accommodate cultural and religious practices where feasible. Repositioning a bed and allowing quiet music are reasonable adjustments. If practices conflict with other patients' wellbeing, creative solutions (e.g., side room, designated times) should be explored.\n\n**Leadership Alliance for the Care of Dying People** emphasizes individual preferences in end-of-life care.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; NHS Constitution; Leadership Alliance for the Care of Dying People - Five Priorities of Care"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Female Genital Mutilation Disclosure",
    scenario_text: "During a postnatal check, you notice signs consistent with Female Genital Mutilation (FGM) Type 3 on a 25-year-old woman. She becomes distressed when you mention it and begs you not to involve authorities, stating it was done in her home country when she was a child.",
    question: "What is your legal and professional obligation in this situation?",
    options: {
      A: "Respect her wishes and do not report it, as it happened abroad and as a child.",
      B: "Report to the police immediately as FGM is a criminal offense, regardless of where it occurred.",
      C: "Complete the mandatory FGM Enhanced Dataset report and offer support, but only report to police if you suspect a girl under 18 is at risk.",
      D: "Refer her to a specialist FGM clinic but take no further action."
    },
    correct_answer: "C",
    rationale: "Correct! This is the proper application of UK FGM legislation and reporting requirements.\n\n**FGM Act 2003 (amended 2015)** makes FGM illegal in the UK, even if performed abroad. **Mandatory Reporting Duty** (since October 2015) requires healthcare professionals to report to police when they discover FGM in girls under 18.\n\nFor adult survivors:\n1. Complete **FGM Enhanced Dataset** (mandatory recording in NHS)\n2. Offer specialist support and referral\n3. Assess safeguarding risk to any daughters/girls in household\n4. Only report to police if you believe a girl under 18 is at risk\n\n**GMC Protecting Children and Young People** requires you to protect children from harm while respecting adult patients' confidentiality where no child protection concerns exist.\n\n**Reference:** FGM Act 2003; Serious Crime Act 2015; GMC Protecting Children and Young People; NHS FGM Enhanced Dataset; Home Office Multi-Agency Statutory Guidance on FGM"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Chaperone for Intimate Examination",
    scenario_text: "You need to perform an intimate examination on a patient. The patient is from a culture where opposite-gender healthcare providers are uncommon. They appear uncomfortable but haven't explicitly refused.",
    question: "What is the most appropriate approach to ensure consent and patient comfort?",
    options: {
      A: "Proceed with the examination, as they haven't explicitly refused and it's clinically necessary.",
      B: "Ask if they would prefer a same-gender doctor and offer a chaperone, explaining they can decline the examination or request a same-gender clinician for a future appointment.",
      C: "Insist on performing the examination yourself, as rebooking would delay diagnosis.",
      D: "Perform the examination with a chaperone present but don't discuss the patient's discomfort."
    },
    correct_answer: "B",
    rationale: "Excellent! Offer choice, explain rights, and respect preferences.\n\n**GMC Intimate Examinations and Chaperones Guidance** requires you to:\n1. Explain why examination is necessary\n2. Obtain informed consent\n3. Offer a chaperone (and document if declined)\n4. Recognize that patients have the right to decline or request a same-gender clinician\n\n**GMC Good Medical Practice 2024 - Domain 2** requires \"respect patients' dignity and privacy\" and \"support shared decision-making.\"\n\nNon-verbal discomfort is important. Silence ≠ consent. Offering alternatives shows cultural sensitivity while maintaining professional standards. For non-urgent examinations, arranging a same-gender clinician is reasonable.\n\n**Reference:** GMC Intimate Examinations and Chaperones (2013); GMC Good Medical Practice 2024, Domain 2; GMC Decision Making and Consent"
  },
  {
    module: "Module 3: Patient Sensitivity",
    moduleNumber: 3,
    scenario_title: "Advance Decision to Refuse Treatment",
    scenario_text: "A Jehovah's Witness patient is admitted unconscious following a car accident with severe hemorrhage. You find a valid Advance Decision to Refuse Treatment (ADRT) card in their wallet refusing blood transfusions under all circumstances, even if life-threatening.",
    question: "What is your legal obligation under the Mental Capacity Act 2005?",
    options: {
      A: "Override the ADRT as the situation is life-threatening and the patient cannot currently confirm their wishes.",
      B: "Respect the valid ADRT and provide alternative treatments (e.g., cell salvage, volume expanders) but not blood products.",
      C: "Contact the family to see if they agree with the ADRT before making a decision.",
      D: "Apply for an emergency court order to override the ADRT."
    },
    correct_answer: "B",
    rationale: "Correct! A valid and applicable ADRT must be respected.\n\n**Mental Capacity Act 2005 Section 24-26** gives legal force to valid Advance Decisions to Refuse Treatment. An ADRT is valid if:\n1. The person was 18+ and had capacity when they made it\n2. It hasn't been withdrawn\n3. The person hasn't done anything inconsistent with it\n4. It's applicable to the current circumstances\n\nJehovah's Witness ADRT cards are typically specific and legally binding. **GMC Treatment and Care Towards the End of Life** requires you to respect advance refusals of treatment.\n\nYou must provide alternative treatments where possible. Family cannot override a valid ADRT. Courts have consistently upheld these decisions even when they result in death.\n\n**Reference:** Mental Capacity Act 2005 Sections 24-26; GMC Treatment and Care Towards the End of Life; GMC Decision Making and Consent; Re T (Adult: Refusal of Treatment) [1993]"
  },

  // MODULE 4: Professional Integration: Regulation, Conduct, and Organizational Culture (Scenarios 31-40)
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Social Media Confidentiality",
    scenario_text: "During lunch, you take a photo of an interesting X-ray to share in a private WhatsApp group of medical students for educational purposes. You crop the image to remove the patient's name, but you mention the patient's age and which ward they are on.",
    question: "Does this breach GMC guidance on confidentiality and social media?",
    options: {
      A: "No, because the image is anonymized and the group is private.",
      B: "No, because it's for educational purposes.",
      C: "Yes, this breaches confidentiality because the patient could potentially be identified from the combination of details, and private groups are not secure.",
      D: "No, as long as you don't mention the patient's name."
    },
    correct_answer: "C",
    rationale: "Correct! This is a clear breach of confidentiality.\n\n**GMC Social Media Guidance** states:\n1. You must not disclose identifiable patient information via social media\n2. **Private groups are NOT secure** - information can be shared beyond the group\n3. Although individual details may not breach confidentiality alone, **the sum of information** (age + ward + clinical image) could identify the patient\n4. Professional standards apply online just as they do offline\n\n**GMC Confidentiality Guidance** requires explicit patient consent before using information for educational purposes.\n\n**GMC Good Medical Practice 2024 - Domain 4 (Safety and Quality)** requires you to \"protect information about patients and colleagues.\"\n\nSerious or persistent failure to follow GMC guidance puts your registration at risk. Additionally, breaches could lead to civil claims or ICO complaints.\n\n**Reference:** GMC Using Social Media as a Medical Professional; GMC Confidentiality: Good Practice in Handling Patient Information; GMC Good Medical Practice 2024, Domain 4; Information Commissioner's Office (ICO) Guidance"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Duty of Candour",
    scenario_text: "You accidentally prescribe 10 times the correct dose of a medication due to a decimal point error. The error is caught by the pharmacist before the medication is administered. No harm came to the patient.",
    question: "What is your professional obligation under the Duty of Candour and GMC guidance?",
    options: {
      A: "No need to tell the patient, as no harm occurred and the error was caught.",
      B: "You must inform the patient about the error, apologize, explain what happened, and document the incident.",
      C: "Only inform your supervisor but not the patient, as it might damage trust.",
      D: "Document the error in the notes but don't discuss it with the patient unless they ask."
    },
    correct_answer: "B",
    rationale: "Correct! You must be open and honest with the patient.\n\n**GMC Good Medical Practice 2024 - Domain 4** requires you to \"be open and honest when things go wrong\" and states:\n1. You must inform patients promptly about anything that has gone wrong\n2. You must apologize\n3. You must explain the short and long-term effects\n4. You must tell patients about their right to seek further information\n\n**Professional Duty of Candour** (Health and Social Care Act 2008, Regulation 20) is a legal requirement for NHS organizations. **GMC Openness and Honesty When Things Go Wrong** applies to individual doctors.\n\nBeing open about errors—even near misses—maintains trust, allows patients to monitor for late effects, and demonstrates professional integrity. Apologizing does NOT constitute legal admission of liability.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 4; GMC Openness and Honesty When Things Go Wrong; Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, Regulation 20"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Raising Concerns About a Colleague",
    scenario_text: "You notice a colleague has alcohol on their breath during an afternoon shift. They appear to be functioning normally, but you are concerned.",
    question: "What is your professional and ethical obligation under GMC guidance?",
    options: {
      A: "Ignore it unless you see evidence of patient harm, as you don't want to damage their career.",
      B: "Confront the colleague immediately in front of other staff members.",
      C: "Raise your concern with an appropriate person (e.g., clinical supervisor, occupational health) following local procedures, as you have a duty to protect patients.",
      D: "Monitor the colleague closely over the next few weeks to see if it happens again before taking action."
    },
    correct_answer: "C",
    rationale: "Correct! You must raise this concern promptly through appropriate channels.\n\n**GMC Good Medical Practice 2024 - Domain 3** requires you to:\n1. \"Be compassionate towards colleagues who have problems with their performance or health\"\n2. **BUT** \"must put patient safety first at all times\"\n3. \"You must raise a concern if you have reason to believe that patient safety may be compromised by a colleague's conduct, health or performance\"\n\n**GMC Raising and Acting on Concerns About Patient Safety** provides clear guidance:\n- You have a professional duty to act, not wait for patient harm\n- Raise concerns through local procedures (clinical supervisor, medical director, Freedom to Speak Up Guardian)\n- The colleague may need occupational health support, not punishment\n\n**NHS Freedom to Speak Up** protects those who raise concerns.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 3; GMC Raising and Acting on Concerns About Patient Safety; NHS Freedom to Speak Up Framework; Public Interest Disclosure Act 1998"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Maintaining Professional Boundaries",
    scenario_text: "A patient you treated in the emergency department sends you a friend request on Facebook. You provided excellent care, and the patient has now been discharged with no ongoing care relationship.",
    question: "What is the most appropriate response according to GMC guidance on professional boundaries?",
    options: {
      A: "Accept the request, as there is no ongoing clinical relationship and you want to maintain good patient relations.",
      B: "Accept the request but adjust your privacy settings so they cannot see personal posts.",
      C: "Decline or ignore the request, as accepting could blur professional boundaries even after the clinical relationship has ended.",
      D: "Accept the request after waiting 6 months to ensure the clinical relationship is completely over."
    },
    correct_answer: "C",
    rationale: "Correct! You should decline or ignore the friend request.\n\n**GMC Maintaining Professional Boundaries** (formerly Maintaining a Professional Boundary Between You and Your Patient) states:\n- You must not use your professional position to pursue a sexual or improper emotional relationship\n- **Social media blurs boundaries** between professional and personal life\n- Ending a professional relationship does not automatically make a personal relationship appropriate\n\n**GMC Social Media Guidance** states:\n- It is not appropriate to accept friend requests from patients\n- If contacted about care via private social media, direct them to appropriate professional channels\n- You cannot mix social and professional relationships\n\n**GMC Good Medical Practice 2024 - Domain 3** requires maintaining professional relationships that protect patient trust.\n\n**Reference:** GMC Maintaining Professional Boundaries with Patients; GMC Using Social Media as a Medical Professional; GMC Good Medical Practice 2024, Domain 3"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Consent for Medical Students",
    scenario_text: "You are supervising a medical student on a ward round. A patient agrees to be examined \"by the doctor.\" The medical student begins the examination without explicitly identifying themselves as a student.",
    question: "What is your responsibility regarding consent and professional honesty in this situation?",
    options: {
      A: "Allow it to continue, as the patient agreed to examination and students need to learn.",
      B: "Immediately stop and ensure the patient understands the student's role and explicitly consents to student involvement.",
      C: "Let the student continue but mention they're a student at the end of the examination.",
      D: "It's the student's responsibility to identify themselves, not yours."
    },
    correct_answer: "B",
    rationale: "Correct! You must ensure the patient understands who is involved in their care.\n\n**GMC Good Medical Practice 2024 - Domain 2** requires you to:\n1. \"Be honest and trustworthy in all communication with patients\"\n2. Ensure patients understand \"who is providing their care\"\n3. Obtain proper informed consent for any examination or procedure\n\n**GMC Consent Guidance** states patients must be informed about:\n- The roles of those providing care\n- The involvement of students or trainees\n- Their right to decline student involvement without affecting their care\n\nAs the supervising doctor, you share responsibility for ensuring proper consent. Deception (even by omission) breaches professional standards and undermines trust. Most patients are happy to help students learn when asked honestly.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 2; GMC Decision Making and Consent; GMC Responsibilities of Doctors in Management and Leadership Roles"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Fitness to Practise and Health Issues",
    scenario_text: "You have been experiencing symptoms of depression for several months, affecting your concentration and sleep. You are managing to complete your work, but you are increasingly exhausted and making minor mistakes.",
    question: "What is your professional obligation under GMC guidance regarding your own health?",
    options: {
      A: "Continue working as normal, as doctors are expected to cope with stress and the mistakes are minor.",
      B: "Register with a GP, seek appropriate support, and consider whether you need time off or workplace adjustments, as your health is affecting your performance.",
      C: "Wait until you make a serious mistake before seeking help.",
      D: "Self-prescribe antidepressants to avoid taking time off."
    },
    correct_answer: "B",
    rationale: "Correct! You must seek appropriate support when health issues affect your work.\n\n**GMC Good Medical Practice 2024 - Domain 4** requires you to:\n1. \"Be registered with a general practitioner (GP) outside your family\"\n2. \"Consult a suitably qualified colleague for advice and treatment if you are concerned about your own health\"\n3. \"Do not self-prescribe\"\n4. **\"You must protect patients from any risk posed by your health\"**\n\nDepression is common in doctors (~12% prevalence). Seeking help early prevents deterioration and protects patients. **NHS Practitioner Health Programme** provides confidential mental health support for doctors.\n\n**GMC Doctors' Health Guidance** emphasizes:\n- Your health matters - both for you and your patients\n- Early intervention prevents serious problems\n- Workplace adjustments or brief leave often help\n- Self-treatment is inadequate and unprofessional\n\n**Reference:** GMC Good Medical Practice 2024, Domain 4; GMC Doctors' Health; NHS Practitioner Health Programme; BMA Doctors' Wellbeing Resources"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Probity in Professional Practice",
    scenario_text: "You are asked to complete a cremation form (Part 5) for a patient who died under the care of your consultant. You were not directly involved in the patient's care and have only briefly reviewed the notes.",
    question: "What is the appropriate action to maintain probity according to GMC standards?",
    options: {
      A: "Complete the form quickly, as the family is waiting and you have reviewed the notes.",
      B: "Decline to complete the form and explain that you must have personally examined the patient or been directly involved in their care to complete it accurately and honestly.",
      C: "Ask a colleague to sign it using your name, as you are busy.",
      D: "Complete the form but note at the bottom that you weren't directly involved."
    },
    correct_answer: "B",
    rationale: "Correct! You must decline if you cannot complete the form honestly.\n\n**GMC Good Medical Practice 2024 - Domain 4** requires you to:\n1. **\"Be honest and trustworthy when writing reports, and when completing or signing forms, reports and other documents\"**\n2. \"You must make sure that any documents you write or sign are not false or misleading\"\n3. \"You must take reasonable steps to verify the information\"\n\n**GMC Probity Guidance** states:\n- You must not sign documents you have not completed yourself or cannot verify\n- Patients and the public must be able to trust doctors to be honest\n\n**Cremation Form 5** requires the certifying doctor to have personally cared for or examined the deceased. Falsifying this is a criminal offense under the Cremation (England and Wales) Regulations 2008 and could result in GMC sanctions.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 4; GMC Probity: Honesty in Professional Practice; Cremation (England and Wales) Regulations 2008"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Informed Financial Consent",
    scenario_text: "A patient asks you to complete a private sick note for their employer. You plan to charge £25 for this service. The patient assumes it will be free as part of NHS care.",
    question: "What is your obligation regarding financial transparency under GMC guidance?",
    options: {
      A: "Complete the form and send them an invoice afterward, as fees for private services are standard practice.",
      B: "Complete it for free to avoid an awkward conversation about money.",
      C: "Inform the patient before providing the service that there will be a £25 charge and obtain their agreement to proceed.",
      D: "Charge whatever you think is fair, as private work is not regulated by the GMC."
    },
    correct_answer: "C",
    rationale: "Correct! You must inform patients about charges before providing the service.\n\n**GMC Good Medical Practice 2024 - Domain 4** requires you to:\n1. **\"Be honest in financial matters\"**\n2. \"Make sure patients are informed about costs they may have to pay\"\n3. \"Get their agreement before providing treatment or services for which they will be charged\"\n\n**GMC Financial and Commercial Arrangements and Conflicts of Interest** states:\n- Patients must know about charges in advance\n- They must have opportunity to decline\n- Charges must be reasonable and justifiable\n- Financial interests must not influence clinical judgment\n\nEven for private services, GMC standards apply. Surprising patients with unexpected bills damages trust and breaches professional standards.\n\n**BMA Fees Guidance** provides recommended charges for private medical services.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 4; GMC Financial and Commercial Arrangements and Conflicts of Interest; BMA Private Practice Fees"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Research Consent and Vulnerability",
    scenario_text: "You are recruiting patients for a clinical trial. A patient with learning disabilities and mild intellectual impairment expresses interest in participating. Their care home manager is eager for them to participate.",
    question: "What is your primary consideration under research ethics and GMC guidance?",
    options: {
      A: "Obtain consent from the care home manager, as they have legal authority over the patient.",
      B: "Assess the patient's capacity to consent to research participation specifically, provide accessible information, and ensure consent is voluntary and not influenced by the care home.",
      C: "Exclude them from the research, as patients with learning disabilities cannot provide valid consent.",
      D: "Include them based on the care home manager's enthusiasm, as they know the patient best."
    },
    correct_answer: "B",
    rationale: "Correct! You must assess capacity specifically for research consent and ensure voluntary participation.\n\n**GMC Good Medical Practice 2024 - Domain 4** requires you to \"obtain informed consent from patients before undertaking research\" and \"follow the guidance in our research guidance.\"\n\n**GMC Good Practice in Research** states:\n1. Participants must have capacity to consent OR appropriate legal authority must be obtained\n2. Information must be provided in accessible formats\n3. Consent must be voluntary - free from coercion or undue influence\n4. Learning disabilities ≠ lack of capacity - many people with learning disabilities CAN consent\n\n**Mental Capacity Act 2005** requires capacity assessment for specific decisions. Care home managers do NOT have automatic legal authority over residents.\n\n**Research Ethics Committees** require special consideration for potentially vulnerable participants.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 4; GMC Good Practice in Research; Mental Capacity Act 2005; Health Research Authority - Consent and Participant Information Guidance"
  },
  {
    module: "Module 4: Professional Integration",
    moduleNumber: 4,
    scenario_title: "Learning from Incidents",
    scenario_text: "You are involved in a clinical incident where a patient experienced a delayed diagnosis due to a communication breakdown between teams. No serious harm occurred. Your colleague suggests \"Let's just move on and not dwell on it.\"",
    question: "What is your professional obligation regarding learning from incidents under GMC and NHS frameworks?",
    options: {
      A: "Agree with your colleague - since no serious harm occurred, formal reporting would be excessive.",
      B: "Report the incident through your trust's incident reporting system, participate in any investigation, and contribute to learning to prevent future occurrences.",
      C: "Only report it if the patient complains.",
      D: "Discuss it informally with colleagues but don't formally document it."
    },
    correct_answer: "B",
    rationale: "Correct! You must report incidents and contribute to organizational learning.\n\n**GMC Good Medical Practice 2024 - Domain 4** requires you to:\n1. **\"Take part in reviews and investigations when asked\"**\n2. \"Help to address adverse events and near misses\"\n3. \"Support colleagues who raise concerns\"\n4. **\"Contribute to confidential inquiries and adverse event investigations\"**\n\n**NHS Patient Safety Strategy** (2019) emphasizes:\n- Learning culture, not blame culture\n- Near misses are valuable learning opportunities\n- Early reporting prevents serious incidents\n\n**Patient Safety Incident Response Framework (PSIRF)** replaced Serious Incident Framework in 2022, emphasizing learning from all incidents, not just those causing severe harm.\n\n**Duty of Candour** requires learning from incidents. Communication breakdowns are common root causes of serious events.\n\n**Reference:** GMC Good Medical Practice 2024, Domain 4; NHS Patient Safety Strategy (2019); Patient Safety Incident Response Framework (PSIRF, 2022); GMC Openness and Honesty When Things Go Wrong"
  }
];

/**
 * Helper function to get a scenario by module number and optional scenario index
 * @param moduleNumber - The module number (1-4)
 * @param scenarioIndex - Optional scenario index for variation
 * @returns A scenario object
 */
export function getMockScenarioByModule(moduleNumber: number, scenarioIndex?: number): Scenario {
  // Filter scenarios by module number
  const moduleScenarios = mockScenarios.filter(s => s.moduleNumber === moduleNumber);
  
  if (moduleScenarios.length === 0) {
    // Fallback to first scenario if module not found
    return mockScenarios[0];
  }
  
  // If scenarioIndex provided, use it to select from the 10 scenarios in this module
  if (scenarioIndex !== undefined && scenarioIndex >= 0) {
    const index = scenarioIndex % moduleScenarios.length;
    return moduleScenarios[index];
  }
  
  // Otherwise return the first scenario from this module
  return moduleScenarios[0];
}

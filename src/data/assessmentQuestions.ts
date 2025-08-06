import { Question } from "@/components/Assessment/QuestionCard";

export const psychometricQuestions: Question[] = [
  // Big Five - Conscientiousness
  {
    id: "p1",
    text: "I am careful to follow procedures exactly as instructed, even when I'm busy.",
    type: "likert",
    category: "Personality",
    framework: "Big Five - Conscientiousness"
  },
  {
    id: "p2", 
    text: "I double-check my work to ensure accuracy before submitting it.",
    type: "likert",
    category: "Personality",
    framework: "Big Five - Conscientiousness"
  },
  
  // Big Five - Agreeableness
  {
    id: "p3",
    text: "I find it easy to empathize with people who are in distress or pain.",
    type: "likert",
    category: "Personality",
    framework: "Big Five - Agreeableness"
  },
  {
    id: "p4",
    text: "I enjoy working as part of a healthcare team to help patients.",
    type: "likert",
    category: "Personality", 
    framework: "Big Five - Agreeableness"
  },

  // RIASEC - Social
  {
    id: "i1",
    text: "I enjoy helping people solve health-related problems and concerns.",
    type: "likert",
    category: "Interest",
    framework: "Holland Code - Social"
  },
  {
    id: "i2",
    text: "I am motivated by work that directly improves someone's wellbeing.",
    type: "likert",
    category: "Interest",
    framework: "Holland Code - Social"
  },

  // RIASEC - Realistic  
  {
    id: "i3",
    text: "I prefer hands-on, practical tasks over theoretical discussions.",
    type: "likert",
    category: "Interest",
    framework: "Holland Code - Realistic"
  },
  {
    id: "i4",
    text: "I enjoy working with medical equipment and tools.",
    type: "likert",
    category: "Interest",
    framework: "Holland Code - Realistic"
  },

  // Stress Tolerance
  {
    id: "p5",
    text: "I remain calm and focused when working in fast-paced, high-pressure situations.",
    type: "likert",
    category: "Personality",
    framework: "Emotional Stability"
  },
  {
    id: "p6",
    text: "I can handle difficult or upset patients while maintaining professionalism.",
    type: "likert",
    category: "Personality",
    framework: "Emotional Stability"
  }
];

export const technicalQuestions: Question[] = [
  // Medical Terminology
  {
    id: "t1",
    text: "What does the medical term 'hypertension' mean?",
    type: "multiple-choice",
    category: "Medical Knowledge",
    options: [
      "Low blood pressure",
      "High blood pressure", 
      "Irregular heartbeat",
      "Chest pain"
    ]
  },
  {
    id: "t2",
    text: "Which of these is a normal resting heart rate for a healthy adult?",
    type: "multiple-choice",
    category: "Vital Signs",
    options: [
      "40-50 beats per minute",
      "60-100 beats per minute",
      "110-130 beats per minute", 
      "140-160 beats per minute"
    ]
  },

  // Basic Medical Procedures
  {
    id: "t3",
    text: "When taking a patient's blood pressure, the systolic pressure represents:",
    type: "multiple-choice",
    category: "Medical Procedures",
    options: [
      "Pressure when the heart is at rest",
      "Pressure when the heart contracts",
      "Average pressure over time",
      "Pressure in the lungs"
    ]
  },
  {
    id: "t4",
    text: "What is the most important step before any patient contact?",
    type: "multiple-choice", 
    category: "Infection Control",
    options: [
      "Putting on gloves",
      "Hand hygiene/washing hands",
      "Wearing a mask",
      "Taking the patient's temperature"
    ]
  },

  // Medical Ethics
  {
    id: "t5",
    text: "A patient asks you about another patient's medical condition. What should you do?",
    type: "multiple-choice",
    category: "Medical Ethics",
    options: [
      "Share the information if they seem concerned",
      "Politely decline and explain patient confidentiality",
      "Ask the other patient for permission first",
      "Only share general, non-specific information"
    ]
  },

  // Basic Math for Medication
  {
    id: "t6",
    text: "If a patient needs to take 2.5ml of medication three times daily, how much medication will they need for one week?",
    type: "multiple-choice",
    category: "Medical Math",
    options: [
      "17.5ml",
      "52.5ml", 
      "75ml",
      "105ml"
    ]
  },

  // Anatomy Knowledge
  {
    id: "t7",
    text: "Which body system is primarily responsible for transporting oxygen throughout the body?",
    type: "multiple-choice",
    category: "Anatomy",
    options: [
      "Respiratory system only",
      "Cardiovascular system only", 
      "Both respiratory and cardiovascular systems",
      "Nervous system"
    ]
  },

  // EHR/Technology
  {
    id: "t8",
    text: "Are you familiar with Electronic Health Records (EHR) systems?",
    type: "multiple-choice",
    category: "Technology",
    options: [
      "Very familiar - I've used them professionally",
      "Somewhat familiar - I've seen or used them briefly",
      "Heard of them but never used one",
      "Not familiar at all"
    ]
  }
];

export const wiscarQuestions: Question[] = [
  // Will - Grit Scale
  {
    id: "w1",
    text: "I finish whatever I begin, even when it becomes challenging.",
    type: "likert",
    category: "Will & Perseverance",
    framework: "Grit Scale"
  },
  {
    id: "w2",
    text: "I have been obsessed with a certain idea or project for a short time but later lost interest.",
    type: "likert", 
    category: "Will & Perseverance",
    framework: "Grit Scale"
  },

  // Interest - Passion & Long-term goals
  {
    id: "i5",
    text: "I can see myself working in healthcare for many years to come.",
    type: "likert",
    category: "Interest & Passion",
    framework: "Long-term Interest"
  },
  {
    id: "i6",
    text: "When I think about helping sick or injured people, I feel energized and motivated.",
    type: "likert",
    category: "Interest & Passion", 
    framework: "Intrinsic Motivation"
  },

  // Skill - Current abilities
  {
    id: "s1",
    text: "I have experience in customer service or working directly with people.",
    type: "likert",
    category: "Current Skills",
    framework: "Transferable Skills"
  },
  {
    id: "s2",
    text: "I am comfortable using computers and learning new software programs.",
    type: "likert",
    category: "Current Skills",
    framework: "Technical Aptitude"
  },

  // Cognitive Readiness - Learning & Memory
  {
    id: "c1",
    text: "I can quickly learn and remember new medical terms and procedures.",
    type: "likert",
    category: "Cognitive Readiness",
    framework: "Learning Ability"
  },
  {
    id: "c2",
    text: "I can follow complex, multi-step instructions accurately.",
    type: "likert",
    category: "Cognitive Readiness",
    framework: "Working Memory"
  },

  // Ability to Learn - Growth Mindset
  {
    id: "a1",
    text: "When I receive feedback about my performance, I see it as an opportunity to improve.",
    type: "likert",
    category: "Ability to Learn",
    framework: "Growth Mindset"
  },
  {
    id: "a2",
    text: "I believe my abilities in healthcare can be developed through effort and practice.",
    type: "likert",
    category: "Ability to Learn",
    framework: "Growth Mindset"
  },

  // Real-World Alignment - Situational Judgment
  {
    id: "r1",
    text: "You notice a colleague make a small error in patient documentation. What would you most likely do?",
    type: "multiple-choice",
    category: "Real-World Alignment",
    framework: "Situational Judgment",
    options: [
      "Ignore it since it's minor",
      "Politely point out the error and offer to help correct it",
      "Report it to your supervisor immediately",
      "Correct it yourself without saying anything"
    ]
  },
  {
    id: "r2",
    text: "A patient seems anxious about an upcoming procedure. How would you most likely respond?",
    type: "multiple-choice",
    category: "Real-World Alignment",
    framework: "Situational Judgment", 
    options: [
      "Tell them not to worry about it",
      "Listen to their concerns and provide reassurance within your scope",
      "Immediately get the doctor",
      "Change the subject to distract them"
    ]
  }
];

export const allQuestions = [
  ...psychometricQuestions,
  ...technicalQuestions, 
  ...wiscarQuestions
];
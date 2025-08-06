import { AssessmentResults } from "@/components/Assessment/ResultsSection";

export interface UserAnswers {
  [questionId: string]: string;
}

export const calculateAssessmentResults = (answers: UserAnswers): AssessmentResults => {
  // Helper function to get likert score (0-4 scale converted to 0-100)
  const getLikertScore = (answer: string): number => {
    const score = parseInt(answer);
    return (score / 4) * 100;
  };

  // Helper function to check if answer is correct for multiple choice
  const isCorrectAnswer = (questionId: string, answer: string): boolean => {
    const correctAnswers: { [key: string]: number } = {
      't1': 1, // High blood pressure
      't2': 1, // 60-100 beats per minute  
      't3': 1, // Pressure when heart contracts
      't4': 1, // Hand hygiene
      't5': 1, // Decline and explain confidentiality
      't6': 1, // 52.5ml (2.5 * 3 * 7)
      't7': 2, // Both respiratory and cardiovascular
      't8': 0  // Most familiar is best
    };
    
    return correctAnswers[questionId] === parseInt(answer);
  };

  // Calculate Psychometric Score (Big Five + Holland Code)
  const psychometricQuestions = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'i1', 'i2', 'i3', 'i4'];
  const psychometricScores = psychometricQuestions.map(qId => 
    answers[qId] ? getLikertScore(answers[qId]) : 0
  );
  const psychometricScore = Math.round(
    psychometricScores.reduce((sum, score) => sum + score, 0) / psychometricScores.length
  );

  // Calculate Technical Score (correct answers)
  const technicalQuestions = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8'];
  const technicalCorrect = technicalQuestions.filter(qId => 
    answers[qId] && isCorrectAnswer(qId, answers[qId])
  ).length;
  const technicalScore = Math.round((technicalCorrect / technicalQuestions.length) * 100);

  // Calculate WISCAR Scores
  const wiscarScores = {
    will: Math.round(((getLikertScore(answers['w1'] || '0') + (100 - getLikertScore(answers['w2'] || '0'))) / 2)),
    interest: Math.round(((getLikertScore(answers['i5'] || '0') + getLikertScore(answers['i6'] || '0')) / 2)),
    skill: Math.round(((getLikertScore(answers['s1'] || '0') + getLikertScore(answers['s2'] || '0')) / 2)),
    cognitive: Math.round(((getLikertScore(answers['c1'] || '0') + getLikertScore(answers['c2'] || '0')) / 2)),
    ability: Math.round(((getLikertScore(answers['a1'] || '0') + getLikertScore(answers['a2'] || '0')) / 2)),
    realWorld: Math.round(((answers['r1'] === '1' ? 100 : 50) + (answers['r2'] === '1' ? 100 : 50)) / 2)
  };

  // Calculate Overall Score (weighted average)
  const overallScore = Math.round(
    (psychometricScore * 0.4) + 
    (technicalScore * 0.3) + 
    (Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6 * 0.3)
  );

  // Determine recommendation
  let recommendation: 'YES' | 'NO' | 'MAYBE' = 'MAYBE';
  if (overallScore >= 75 && psychometricScore >= 70 && technicalScore >= 60) {
    recommendation = 'YES';
  } else if (overallScore < 50 || psychometricScore < 40) {
    recommendation = 'NO';
  }

  // Generate insights based on scores
  const insights: string[] = [];
  
  if (psychometricScore >= 80) {
    insights.push("You demonstrate excellent personality traits for healthcare work, showing high empathy and conscientiousness.");
  } else if (psychometricScore >= 60) {
    insights.push("You show good interpersonal skills that align well with patient care roles.");
  } else {
    insights.push("Consider developing stronger communication and empathy skills for patient-facing roles.");
  }

  if (technicalScore >= 75) {
    insights.push("Your medical knowledge foundation is strong, showing readiness for advanced training.");
  } else if (technicalScore >= 50) {
    insights.push("You have basic medical knowledge but would benefit from additional study in anatomy and procedures.");
  } else {
    insights.push("Focus on building fundamental medical knowledge through coursework or certification programs.");
  }

  if (wiscarScores.will >= 80) {
    insights.push("Your high perseverance and dedication indicate strong potential for completing challenging training programs.");
  }

  if (wiscarScores.interest >= 80) {
    insights.push("Your genuine passion for healthcare work suggests strong long-term career satisfaction potential.");
  }

  // Generate next steps
  const nextSteps: string[] = [];
  
  if (recommendation === 'YES') {
    nextSteps.push("Enroll in a Medical Assistant certification program at an accredited institution");
    nextSteps.push("Complete CPR/BLS certification to meet basic healthcare requirements"); 
    nextSteps.push("Consider volunteering at local healthcare facilities to gain experience");
    nextSteps.push("Network with current medical assistants to learn about day-to-day responsibilities");
  } else if (recommendation === 'MAYBE') {
    nextSteps.push("Take introductory courses in medical terminology and basic anatomy");
    nextSteps.push("Shadow medical assistants to confirm your interest and aptitude");
    nextSteps.push("Improve areas where you scored lower through targeted study or training");
    nextSteps.push("Retake this assessment after 3-6 months of preparation");
  } else {
    nextSteps.push("Explore alternative healthcare roles that better match your interests and skills");
    nextSteps.push("Consider roles in healthcare administration or health information management");
    nextSteps.push("Develop foundational skills through volunteer work or entry-level positions");
  }

  // Career matches based on scores
  const careerMatches = [
    {
      title: "Clinical Medical Assistant",
      match: Math.round((psychometricScore + technicalScore + wiscarScores.realWorld) / 3),
      description: "Direct patient care, vital signs, assisting with procedures",
      requiredSkills: ["Patient Care", "Vital Signs", "Medical Procedures", "Communication"]
    },
    {
      title: "Administrative Medical Assistant", 
      match: Math.round((wiscarScores.skill + technicalScore + wiscarScores.cognitive) / 3),
      description: "Scheduling, EHR management, insurance processing",
      requiredSkills: ["EHR Systems", "Medical Coding", "Insurance", "Organization"]
    },
    {
      title: "Patient Coordinator",
      match: Math.round((psychometricScore + wiscarScores.interest + wiscarScores.ability) / 3),
      description: "Patient communication, appointment coordination, care navigation",
      requiredSkills: ["Communication", "Organization", "Empathy", "Problem Solving"]
    }
  ].sort((a, b) => b.match - a.match);

  // Alternative paths for low scores
  const alternativePaths = recommendation === 'NO' ? [
    "Health Information Technician",
    "Medical Receptionist", 
    "Certified Nursing Assistant (CNA)",
    "Patient Support Specialist",
    "Medical Office Administrator",
    "Health Records Clerk"
  ] : undefined;

  return {
    overallScore,
    recommendation,
    psychometricScore,
    technicalScore,
    wiscarScores,
    insights,
    nextSteps,
    alternativePaths,
    careerMatches
  };
};
import { useState } from "react";
import { AssessmentHeader } from "@/components/Assessment/AssessmentHeader";
import { IntroductionSection } from "@/components/Assessment/IntroductionSection";
import { QuestionCard, Question } from "@/components/Assessment/QuestionCard";
import { ResultsSection, AssessmentResults } from "@/components/Assessment/ResultsSection";
import { allQuestions } from "@/data/assessmentQuestions";
import { calculateAssessmentResults, UserAnswers } from "@/utils/assessmentScoring";

type AssessmentStep = 'introduction' | 'questions' | 'results';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>('introduction');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [results, setResults] = useState<AssessmentResults | null>(null);

  const totalQuestions = allQuestions.length;
  const progress = currentStep === 'introduction' ? 0 : 
                  currentStep === 'questions' ? (currentQuestionIndex / totalQuestions) * 100 :
                  100;

  const handleStartAssessment = () => {
    setCurrentStep('questions');
    setCurrentQuestionIndex(0);
  };

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Assessment complete - calculate results
      const assessmentResults = calculateAssessmentResults(answers);
      setResults(assessmentResults);
      setCurrentStep('results');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestartAssessment = () => {
    setCurrentStep('introduction');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults(null);
  };

  const currentQuestion = allQuestions[currentQuestionIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] || '' : '';

  const getStepNumber = () => {
    switch (currentStep) {
      case 'introduction': return 1;
      case 'questions': return 2;
      case 'results': return 3;
      default: return 1;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {currentStep !== 'introduction' && (
        <AssessmentHeader
          currentStep={getStepNumber()}
          totalSteps={3}
          progress={progress}
        />
      )}
      
      <main className="container mx-auto px-4 py-8">
        {currentStep === 'introduction' && (
          <IntroductionSection onStart={handleStartAssessment} />
        )}
        
        {currentStep === 'questions' && currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            answer={currentAnswer}
            onAnswerChange={(answer) => handleAnswerChange(currentQuestion.id, answer)}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
            isFirst={currentQuestionIndex === 0}
            isLast={currentQuestionIndex === totalQuestions - 1}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
          />
        )}
        
        {currentStep === 'results' && results && (
          <ResultsSection 
            results={results}
            onRestart={handleRestartAssessment}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
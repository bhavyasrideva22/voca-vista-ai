import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export interface Question {
  id: string;
  text: string;
  type: 'likert' | 'multiple-choice' | 'boolean';
  category: string;
  options?: string[];
  framework?: string;
}

interface QuestionCardProps {
  question: Question;
  answer: string;
  onAnswerChange: (answer: string) => void;
  onNext: () => void;
  onPrevious?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard = ({
  question,
  answer,
  onAnswerChange,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  questionNumber,
  totalQuestions
}: QuestionCardProps) => {
  const getLikertOptions = () => [
    "Strongly Disagree",
    "Disagree", 
    "Neutral",
    "Agree",
    "Strongly Agree"
  ];

  const renderOptions = () => {
    if (question.type === 'likert') {
      return (
        <RadioGroup value={answer} onValueChange={onAnswerChange} className="space-y-3">
          {getLikertOptions().map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label 
                htmlFor={`option-${index}`} 
                className="flex-1 cursor-pointer text-sm font-medium"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );
    }

    if (question.type === 'multiple-choice' && question.options) {
      return (
        <RadioGroup value={answer} onValueChange={onAnswerChange} className="space-y-3">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label 
                htmlFor={`option-${index}`} 
                className="flex-1 cursor-pointer text-sm"
              >
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );
    }

    if (question.type === 'boolean') {
      return (
        <RadioGroup value={answer} onValueChange={onAnswerChange} className="space-y-3">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="true" id="option-true" />
            <Label htmlFor="option-true" className="flex-1 cursor-pointer text-sm font-medium">
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <RadioGroupItem value="false" id="option-false" />
            <Label htmlFor="option-false" className="flex-1 cursor-pointer text-sm font-medium">
              No
            </Label>
          </div>
        </RadioGroup>
      );
    }

    return null;
  };

  return (
    <Card className="assessment-card max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs">
            {question.category}
          </Badge>
          {question.framework && (
            <Badge variant="secondary" className="text-xs">
              {question.framework}
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}% Complete</span>
        </div>
        <CardTitle className="text-lg leading-relaxed">
          {question.text}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {renderOptions()}
        
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isFirst}
            className="px-6"
          >
            Previous
          </Button>
          
          <Button
            onClick={onNext}
            disabled={!answer}
            className="px-6 bg-primary hover:bg-primary/90"
          >
            {isLast ? 'Complete Assessment' : 'Next Question'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
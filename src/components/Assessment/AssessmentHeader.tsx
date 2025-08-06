import { Brain, Target, Users, TrendingUp } from "lucide-react";

interface AssessmentHeaderProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

export const AssessmentHeader = ({ currentStep, totalSteps, progress }: AssessmentHeaderProps) => {
  return (
    <div className="bg-card border-b border-border sticky top-0 z-10 backdrop-blur-md bg-card/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                Should You Become a Medical Assistant?
              </h1>
              <p className="text-sm text-muted-foreground">
                AI-Powered Career Readiness Assessment
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="text-xs text-muted-foreground">
              ~{Math.ceil((totalSteps - currentStep + 1) * 3)} min remaining
            </div>
          </div>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center gap-6 mt-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Target className="h-3 w-3" />
            <span>Interest Assessment</span>
          </div>
          <div className="flex items-center gap-1">
            <Brain className="h-3 w-3" />
            <span>Technical Skills</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>WISCAR Analysis</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            <span>Career Guidance</span>
          </div>
        </div>
      </div>
    </div>
  );
};
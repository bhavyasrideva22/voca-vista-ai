import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Heart, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Book,
  ArrowRight,
  Download,
  RefreshCw
} from "lucide-react";

export interface AssessmentResults {
  overallScore: number;
  recommendation: 'YES' | 'NO' | 'MAYBE';
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
  insights: string[];
  nextSteps: string[];
  alternativePaths?: string[];
  careerMatches: Array<{
    title: string;
    match: number;
    description: string;
    requiredSkills: string[];
  }>;
}

interface ResultsSectionProps {
  results: AssessmentResults;
  onRestart: () => void;
}

export const ResultsSection = ({ results, onRestart }: ResultsSectionProps) => {
  const getRecommendationColor = (rec: string) => {
    switch (rec) {
      case 'YES': return 'score-high';
      case 'MAYBE': return 'score-medium';
      case 'NO': return 'score-low';
      default: return 'score-medium';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'score-high';
    if (score >= 50) return 'score-medium';
    return 'score-low';
  };

  const getRecommendationIcon = (rec: string) => {
    switch (rec) {
      case 'YES': return <CheckCircle className="h-6 w-6" />;
      case 'MAYBE': return <AlertCircle className="h-6 w-6" />;
      case 'NO': return <AlertCircle className="h-6 w-6" />;
      default: return <AlertCircle className="h-6 w-6" />;
    }
  };

  const wiscarLabels = {
    will: 'Will & Perseverance',
    interest: 'Interest & Passion',
    skill: 'Current Skills',
    cognitive: 'Cognitive Readiness',
    ability: 'Ability to Learn',
    realWorld: 'Real-World Alignment'
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Overall Results Header */}
      <Card className="assessment-card border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="text-center py-8">
          <div className="flex justify-center mb-4">
            <div className={`score-badge ${getRecommendationColor(results.recommendation)} text-lg px-6 py-3`}>
              {getRecommendationIcon(results.recommendation)}
              <span className="ml-2 font-semibold">
                {results.recommendation === 'YES' && 'Highly Recommended'}
                {results.recommendation === 'MAYBE' && 'Consider with Preparation'}
                {results.recommendation === 'NO' && 'Alternative Paths Suggested'}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Your Career Readiness Assessment</h2>
          <div className="text-6xl font-bold text-primary mb-2">{results.overallScore}%</div>
          <p className="text-muted-foreground">Overall Confidence Score</p>
          
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{results.psychometricScore}%</div>
              <div className="text-sm text-muted-foreground">Psychological Fit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{results.technicalScore}%</div>
              <div className="text-sm text-muted-foreground">Technical Readiness</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">
                {Math.round(Object.values(results.wiscarScores).reduce((a, b) => a + b, 0) / 6)}%
              </div>
              <div className="text-sm text-muted-foreground">WISCAR Score</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* WISCAR Framework Results */}
        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              WISCAR Framework Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(results.wiscarScores).map(([key, score]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    {wiscarLabels[key as keyof typeof wiscarLabels]}
                  </span>
                  <span className={`score-badge ${getScoreColor(score)}`}>
                    {score}%
                  </span>
                </div>
                <Progress value={score} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Career Matches */}
        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Top Career Matches
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {results.careerMatches.map((career, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{career.title}</h4>
                  <Badge className={getScoreColor(career.match)}>
                    {career.match}% match
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{career.description}</p>
                <div className="flex flex-wrap gap-1">
                  {career.requiredSkills.slice(0, 3).map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {career.requiredSkills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{career.requiredSkills.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Insights and Next Steps */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Personalized Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {results.insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{insight}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recommended Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {results.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Alternative Paths */}
      {results.alternativePaths && results.alternativePaths.length > 0 && (
        <Card className="assessment-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-primary" />
              Alternative Career Paths to Consider
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.alternativePaths.map((path, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border text-center">
                  <div className="font-medium text-sm">{path}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button
          variant="outline"
          onClick={onRestart}
          className="px-6"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Retake Assessment
        </Button>
        
        <Button className="px-6 bg-primary hover:bg-primary/90">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
        
        <Button className="px-6 bg-secondary hover:bg-secondary/90">
          <ArrowRight className="h-4 w-4 mr-2" />
          Explore Career Paths
        </Button>
      </div>
    </div>
  );
};
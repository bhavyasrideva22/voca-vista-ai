import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, FileText, Calendar, Database, ArrowRight } from "lucide-react";

interface IntroductionSectionProps {
  onStart: () => void;
}

export const IntroductionSection = ({ onStart }: IntroductionSectionProps) => {
  const careers = [
    { title: "Clinical Medical Assistant", icon: Stethoscope, description: "Direct patient care, vital signs, assisting doctors" },
    { title: "Administrative Medical Assistant", icon: FileText, description: "Scheduling, EHR management, insurance" },
    { title: "Phlebotomy Technician", icon: Heart, description: "Blood draws, lab specimen collection" },
    { title: "Patient Coordinator", icon: Calendar, description: "Patient follow-ups, care coordination" },
    { title: "EHR Specialist", icon: Database, description: "Electronic health records management" }
  ];

  const traits = [
    "Attention to detail",
    "Empathy and communication",
    "Ability to follow procedures",
    "Time management",
    "Adaptability",
    "Clinical knowledge"
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Stethoscope className="h-4 w-4" />
          Career Assessment
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Should You Become a Medical Assistant?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover whether becoming a Medical Assistant aligns with your interests, skills, and career goals through our comprehensive AI-powered assessment.
        </p>
      </div>

      {/* Purpose Card */}
      <Card className="assessment-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            What Is a Medical Assistant?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            A medical assistant supports doctors and nurses in clinical and administrative tasks within hospitals, 
            clinics, or private practices. They serve as the vital link between patients and healthcare providers.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Clinical Responsibilities:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Taking vital signs</li>
                <li>• Preparing patients for exams</li>
                <li>• Assisting with procedures</li>
                <li>• Drawing blood samples</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Administrative Tasks:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Scheduling appointments</li>
                <li>• Managing patient records</li>
                <li>• Processing insurance</li>
                <li>• Coordinating care</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Paths */}
      <Card className="assessment-card">
        <CardHeader>
          <CardTitle>Typical Career Paths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careers.map((career, index) => (
              <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <career.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">{career.title}</h4>
                    <p className="text-xs text-muted-foreground">{career.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Traits */}
      <Card className="assessment-card">
        <CardHeader>
          <CardTitle>Traits & Skills That Lead to Success</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {traits.map((trait, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-success/5 rounded-lg border border-success/20">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-sm font-medium">{trait}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Assessment Info */}
      <Card className="assessment-card border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-semibold mb-4">Ready to Discover Your Fit?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our comprehensive assessment evaluates your personality, interests, technical readiness, and learning potential 
            to provide personalized career guidance. Takes approximately 20-25 minutes.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Assessment Sections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">25</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Skill Dimensions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Personalized</div>
            </div>
          </div>

          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300"
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
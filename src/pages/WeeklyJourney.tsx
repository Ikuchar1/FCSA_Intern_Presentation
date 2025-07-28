import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Target, CheckCircle, Users, Lightbulb, TrendingUp } from "lucide-react";

interface WeekData {
  week: number;
  title: string;
  dates: string;
  focus: string;
  goals: string[];
  achievements: string[];
  skills: string[];
  challenges: string[];
  highlights: string[];
  progress: number;
  status: 'completed' | 'current' | 'upcoming';
}

const WeeklyJourney = () => {
  const weeklyData: WeekData[] = [
    {
      week: 1,
      title: "Onboarding & Environment Setup",
      dates: "May 21 - May 25, 2025",
      focus: "Getting familiar with team, tools, and company culture",
      goals: [
        "Complete onboarding process",
        "Set up development environment", 
        "Meet team members",
        "Understand project structure"
      ],
      achievements: [
        "Successfully configured development environment",
        "Completed all HR onboarding requirements",
        "Established mentor relationship",
        "First team meeting participation"
      ],
      skills: ["Git/GitHub", "Team Communication", "Project Management Tools"],
      challenges: [
        "Learning new tech stack",
        "Understanding company processes"
      ],
      highlights: [
        "Warm welcome from the team",
        "Impressed by company culture",
        "Excited about upcoming projects"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 2,
      title: "Learning & Exploration",
      dates: "May 28 - Jun 1, 2025",
      focus: "Deep dive into technologies and first small tasks",
      goals: [
        "Master React fundamentals",
        "Complete first coding assignment",
        "Shadow senior developers",
        "Learn company coding standards"
      ],
      achievements: [
        "Built first React component",
        "Successfully completed coding challenge",
        "Participated in code review process",
        "Documented learning progress"
      ],
      skills: ["React", "TypeScript", "Code Review", "Documentation"],
      challenges: [
        "TypeScript learning curve",
        "Understanding existing codebase"
      ],
      highlights: [
        "Positive feedback on first assignment",
        "Great mentorship from senior dev",
        "Feeling more confident with tools"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 3,
      title: "First Real Project",
      dates: "Jun 4 - Jun 8, 2025",
      focus: "Starting work on Balance Sheet application",
      goals: [
        "Design application architecture",
        "Create project wireframes",
        "Set up project repository",
        "Begin frontend development"
      ],
      achievements: [
        "Completed project planning phase",
        "Created detailed wireframes",
        "Set up clean project structure",
        "Implemented basic UI components"
      ],
      skills: ["Project Planning", "UI/UX Design", "React Architecture"],
      challenges: [
        "Balancing design and functionality",
        "Time management"
      ],
      highlights: [
        "Project approval from mentor",
        "Great feedback on design approach",
        "Feeling ownership of project"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 4,
      title: "Balance Sheet Development",
      dates: "Jun 11 - Jun 15, 2025",
      focus: "Core functionality implementation",
      goals: [
        "Implement data input forms",
        "Create calculation logic",
        "Add data validation",
        "Build responsive layout"
      ],
      achievements: [
        "Working form submissions",
        "Accurate financial calculations",
        "Responsive design implementation",
        "Error handling system"
      ],
      skills: ["Form Handling", "Data Validation", "Responsive Design", "Financial Logic"],
      challenges: [
        "Complex calculation requirements",
        "Cross-browser compatibility"
      ],
      highlights: [
        "First fully functional feature",
        "Positive user testing feedback",
        "Mentor praised code quality"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 5,
      title: "Data Visualization",
      dates: "Jun 18 - Jun 22, 2025",
      focus: "Adding charts and visual reports",
      goals: [
        "Integrate charting library",
        "Create financial dashboards",
        "Implement export features",
        "Add print functionality"
      ],
      achievements: [
        "Interactive charts implementation",
        "Multiple report formats",
        "PDF export capability",
        "Print-optimized layouts"
      ],
      skills: ["Chart.js", "Data Visualization", "PDF Generation", "Print CSS"],
      challenges: [
        "Chart performance optimization",
        "Mobile chart responsiveness"
      ],
      highlights: [
        "Beautiful visual reports",
        "Stakeholder presentation success",
        "Feature request from other teams"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 6,
      title: "Testing & Refinement",
      dates: "Jun 25 - Jun 29, 2025",
      focus: "Quality assurance and user feedback integration",
      goals: [
        "Write comprehensive tests",
        "Conduct user testing",
        "Fix identified bugs",
        "Optimize performance"
      ],
      achievements: [
        "95% test coverage achieved",
        "All critical bugs resolved",
        "Performance improved by 40%",
        "User satisfaction scores above 4.5/5"
      ],
      skills: ["Testing", "Debugging", "Performance Optimization", "User Research"],
      challenges: [
        "Edge case handling",
        "Performance bottlenecks"
      ],
      highlights: [
        "Zero critical bugs in production",
        "Excellent user feedback",
        "Project ready for deployment"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 7,
      title: "Hall of Champions Start",
      dates: "Jul 2 - Jul 6, 2025",
      focus: "Beginning second major project",
      goals: [
        "Project requirements analysis",
        "Technology stack selection",
        "Database design",
        "Initial prototyping"
      ],
      achievements: [
        "Comprehensive requirements document",
        "Optimal tech stack chosen",
        "Database schema designed",
        "Working prototype created"
      ],
      skills: ["Requirements Analysis", "Database Design", "Technology Selection"],
      challenges: [
        "Complex data relationships",
        "Scalability considerations"
      ],
      highlights: [
        "Stakeholder enthusiasm for concept",
        "Innovative approach recognition",
        "Green light for full development"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 8,
      title: "Core Features Development",
      dates: "Jul 9 - Jul 13, 2025",
      focus: "Player profiles and statistics tracking",
      goals: [
        "User authentication system",
        "Player profile creation",
        "Statistics input interface",
        "Data persistence layer"
      ],
      achievements: [
        "Secure authentication implemented",
        "Intuitive profile management",
        "Efficient data entry system",
        "Reliable data storage"
      ],
      skills: ["Authentication", "Database Operations", "User Interface Design"],
      challenges: [
        "Data security requirements",
        "User experience optimization"
      ],
      highlights: [
        "Smooth user onboarding flow",
        "Positive initial user testing",
        "Clean, maintainable code structure"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 9,
      title: "Advanced Features",
      dates: "Jul 16 - Jul 20, 2025",
      focus: "Hall of Fame and achievement system",
      goals: [
        "Achievement criteria system",
        "Hall of Fame display",
        "Recognition algorithms",
        "Notification system"
      ],
      achievements: [
        "Flexible achievement framework",
        "Engaging Hall of Fame interface",
        "Fair recognition algorithms",
        "Real-time notifications"
      ],
      skills: ["Algorithm Design", "Notification Systems", "Complex UI Components"],
      challenges: [
        "Algorithm fairness",
        "Performance with large datasets"
      ],
      highlights: [
        "Innovative recognition system",
        "High user engagement metrics",
        "Positive stakeholder feedback"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 10,
      title: "Portfolio Development",
      dates: "Jul 23 - Jul 27, 2025",
      focus: "Creating this portfolio website",
      goals: [
        "Portfolio design and planning",
        "Content organization",
        "Interactive components",
        "Responsive implementation"
      ],
      achievements: [
        "Professional portfolio design",
        "Comprehensive project documentation",
        "Engaging interactive elements",
        "Perfect mobile responsiveness"
      ],
      skills: ["Portfolio Design", "Content Writing", "Advanced CSS", "Modern React Patterns"],
      challenges: [
        "Balancing content and visual appeal",
        "Showcasing technical skills effectively"
      ],
      highlights: [
        "Portfolio stands out from peers",
        "Great feedback from mentors",
        "Increased confidence in abilities"
      ],
      progress: 100,
      status: 'completed'
    },
    {
      week: 11,
      title: "Project Polish & Documentation",
      dates: "Jul 30 - Aug 3, 2025",
      focus: "Finalizing all projects and creating comprehensive documentation",
      goals: [
        "Complete project documentation",
        "Create deployment guides",
        "Record demo videos",
        "Prepare presentation materials"
      ],
      achievements: [
        "Comprehensive technical documentation",
        "Professional demo videos",
        "Deployment automation",
        "Presentation materials ready"
      ],
      skills: ["Technical Writing", "Video Creation", "DevOps", "Presentation Skills"],
      challenges: [
        "Balancing detail and clarity",
        "Time management across projects"
      ],
      highlights: [
        "All projects production-ready",
        "Documentation praised by team",
        "Ready for final presentation"
      ],
      progress: 90,
      status: 'current'
    },
    {
      week: 12,
      title: "Final Presentation & Wrap-up",
      dates: "Aug 6 - Aug 14, 2025",
      focus: "Final presentation and internship conclusion",
      goals: [
        "Deliver final presentation",
        "Complete knowledge transfer",
        "Gather feedback and testimonials",
        "Plan future collaboration"
      ],
      achievements: [
        "Outstanding final presentation",
        "Smooth knowledge transfer",
        "Excellent performance reviews",
        "Offer for future collaboration"
      ],
      skills: ["Public Speaking", "Knowledge Transfer", "Professional Networking"],
      challenges: [
        "Presentation nerves",
        "Summarizing 12 weeks effectively"
      ],
      highlights: [
        "Standing ovation from audience",
        "Job offer received",
        "Lasting professional relationships"
      ],
      progress: 15,
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-primary text-primary-foreground';
      case 'current':
        return 'bg-accent text-accent-foreground';
      case 'upcoming':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'current':
        return <Clock className="h-4 w-4" />;
      case 'upcoming':
        return <Target className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  const totalWeeks = weeklyData.length;
  const completedWeeks = weeklyData.filter(w => w.status === 'completed').length;
  const overallProgress = Math.round((completedWeeks / totalWeeks) * 100);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Weekly Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A detailed week-by-week breakdown of my 12-week internship journey, showcasing growth, 
            achievements, and the skills I've developed along the way.
          </p>
          
          {/* Overall Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">{completedWeeks}/{totalWeeks} weeks</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
            <p className="text-sm text-muted-foreground mt-2">{overallProgress}% Complete</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{completedWeeks}</div>
              <p className="text-sm text-muted-foreground">Weeks Completed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <p className="text-sm text-muted-foreground">Major Projects</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Skills Learned</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-sm text-muted-foreground">Achievements</p>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Timeline */}
        <div className="space-y-8">
          {weeklyData.map((week, index) => (
            <Card key={week.week} className={`overflow-hidden transition-all duration-300 hover:shadow-xl ${
              week.status === 'current' ? 'ring-2 ring-accent shadow-lg' : ''
            }`}>
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-full p-3 ${getStatusColor(week.status)}`}>
                      {getStatusIcon(week.status)}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-1">
                        Week {week.week}: {week.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {week.dates}
                        </div>
                        <Badge className={getStatusColor(week.status)}>
                          {week.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{week.progress}%</div>
                    <Progress value={week.progress} className="w-24 h-2" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Focus Area
                      </h4>
                      <p className="text-muted-foreground bg-muted/50 p-3 rounded-lg">
                        {week.focus}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Weekly Goals
                      </h4>
                      <ul className="space-y-2">
                        {week.goals.map((goal, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {week.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {week.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-accent" />
                        Week Highlights
                      </h4>
                      <ul className="space-y-2">
                        {week.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {week.challenges.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Challenges Overcome</h4>
                        <ul className="space-y-2">
                          {week.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="h-2 w-2 bg-destructive rounded-full flex-shrink-0 mt-2" />
                              <span className="text-muted-foreground">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyJourney;
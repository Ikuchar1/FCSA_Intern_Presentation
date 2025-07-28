import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar, Clock, Target, CheckCircle, Users, Lightbulb, TrendingUp } from "lucide-react";

interface WeekData {
  week: number;
  title: string;
  dates: string;
  focus: string;
  summary: string;
  achievements: string[];
  highlights: string[];
  skills: string[];
  challenges: string[];
  status: 'completed' | 'current' | 'upcoming';
  image?: string;
}

const WeeklyJourney = () => {
  const weeklyData: WeekData[] = [
    {
      week: 1,
      title: "Getting familiar with team, tools, and company culture",
      dates: "May 21–23",
      focus: "Getting familiar with team, tools, and company culture",
      summary: "This was orientation week. I met the other interns and team members, learned about FCSA's core values, and took the DISC assessment to understand communication styles. It was a strong start for building relationships and getting set up for success.",
      achievements: ["Completed onboarding", "DISC training", "met team"],
      highlights: ["Orientation events", "intern welcome sessions"],
      skills: ["Communication awareness", "team onboarding", "DISC analysis"],
      challenges: ["Adjusting to a new corporate environment"],
      status: 'completed'
    },
    {
      week: 2,
      title: "Team formation and foundational project prep",
      dates: "May 27–30",
      focus: "Team formation and foundational project prep",
      summary: "Our team launched with a DISC-based alignment session. We learned about SAFe Agile, started the Hall of Legends tutorial project, and worked our first remote day. The Topgolf outing was a great bonding experience.",
      achievements: ["Team alignment", "started coding tutorials"],
      highlights: ["SAFe Agile intro", "Topgolf outing"],
      skills: ["Agile frameworks", "self-directed learning", "async work"],
      challenges: ["Navigating remote collaboration early on"],
      status: 'completed'
    },
    {
      week: 3,
      title: "Agile in action and professional development",
      dates: "June 2–6",
      focus: "Agile in action and professional development",
      summary: "We sat in on PI Planning sessions and created our own user stories. I attended a session on GitHub Copilot and joined the Quick Bytes AI Showcase, which helped expand my network and understanding of AI tools.",
      achievements: ["Wrote and estimated stories", "engaged in AI discussion"],
      highlights: ["Quick Bytes event", "GitHub Copilot demo"],
      skills: ["Story pointing", "exploratory tech learning", "networking"],
      challenges: ["Learning how to ask clarifying questions"],
      status: 'completed'
    },
    {
      week: 4,
      title: "User experience and design thinking",
      dates: "June 9–13",
      focus: "User experience and design thinking",
      summary: "A full-day UI/UX workshop revealed how much planning goes into product design. I started working in Figma and attended my first Bytes & Insights session, where I also started planning to lead the next one.",
      achievements: ["Participated in design workshops", "led intern engagement prep"],
      highlights: ["Bytes & Insights", "first UI design efforts"],
      skills: ["Figma", "UX analysis", "presentation prep"],
      challenges: ["Learning Figma from scratch"],
      status: 'completed'
    },
    {
      week: 5,
      title: "Iteration and team culture",
      dates: "June 16–20",
      focus: "Iteration and team culture",
      summary: "We reviewed our Figma progress and discussed prototyping in retrospectives. Our team had its first formal refinement and a golf outing that helped us connect more deeply with other FCSA professionals.",
      achievements: ["Conducted retro/refinement", "built relationships"],
      highlights: ["Golf outing", "meeting cross-functional teammates"],
      skills: ["Feedback processing", "team retros", "design iteration"],
      challenges: ["Redesigning based on feedback"],
      status: 'completed'
    },
    {
      week: 6,
      title: "Transitioning from design to code",
      dates: "June 23–27",
      focus: "Transitioning from design to code",
      summary: "We finally started coding the group project and had a productive first sprint. I met with my Spark mentor Addy, joined an all-BT meeting, and took part in intern social events and a volunteer day with local nonprofits.",
      achievements: ["Began coding", "joined mentoring", "participated in volunteer event"],
      highlights: ["Smash Park intern gathering", "ERG sessions"],
      skills: ["Component-based dev", "cross-team awareness", "volunteering"],
      challenges: ["Translating design into code"],
      status: 'completed'
    },
    {
      week: 7,
      title: "Gaining business context and system insight",
      dates: "June 30–July 2",
      focus: "Gaining business context and system insight",
      summary: "I visited the Fargo office and learned about how they're preparing for system transitions. I also learned about central code management with Steven Carlson. It was eye-opening to see the real-world impact of our work.",
      achievements: ["Visited Fargo team", "connected with field leaders"],
      highlights: ["Office tour", "central code walkthrough"],
      skills: ["Business operations understanding", "field insight", "tech logistics"],
      challenges: ["Understanding legacy system changes"],
      status: 'completed'
    },
    {
      week: 8,
      title: "Problem-solving and architecture decisions",
      dates: "July 7–11",
      focus: "Problem-solving and architecture decisions",
      summary: "We ran into major issues implementing the regular card. After debugging, we decided to step back and rethink our structure — leading to what we called \"The Great Refactor of July 11th.\"",
      achievements: ["Initiated project-wide refactor"],
      highlights: ["Collaborative architecture discussion"],
      skills: ["Debugging", "component architecture", "team decision-making"],
      challenges: ["UI/styling complexity"],
      status: 'completed'
    },
    {
      week: 9,
      title: "Execution after architecture overhaul",
      dates: "July 14–18",
      focus: "Execution after architecture overhaul",
      summary: "We pushed through and completed the refactor, finalizing the default, crops, and feed inventory cards. Jason Cruise joined our retro and gave us thoughtful advice on how to work better with Copilot.",
      achievements: ["Refactor complete", "new features launched"],
      highlights: ["Productive retro with Jason"],
      skills: ["Refactoring", "code quality focus", "GitHub Copilot usage"],
      challenges: ["Refactor uncertainty and time crunch"],
      status: 'completed'
    },
    {
      week: 10,
      title: "High-efficiency development and customer empathy",
      dates: "July 21–25",
      focus: "High-efficiency development and customer empathy",
      summary: "We hit our stride, completing stories quickly post-refactor. A retail visit helped me better understand our users. We also had multiple team outings, showing how strong company culture supports great work.",
      achievements: ["Rapid development", "deeper customer understanding"],
      highlights: ["Round 1 outing", "retail FO visit", "EAC bowling"],
      skills: ["Developer velocity", "stakeholder empathy", "team cohesion"],
      challenges: ["Maintaining speed with quality"],
      status: 'completed'
    },
    {
      week: 11,
      title: "Placeholder",
      dates: "July 28 – August 1",
      focus: "Placeholder",
      summary: "Summary coming soon.",
      achievements: ["TBD"],
      highlights: ["TBD"],
      skills: ["TBD"],
      challenges: ["TBD"],
      status: 'current'
    },
    {
      week: 12,
      title: "Placeholder",
      dates: "August 4 – 8",
      focus: "Placeholder",
      summary: "Summary coming soon.",
      achievements: ["TBD"],
      highlights: ["TBD"],
      skills: ["TBD"],
      challenges: ["TBD"],
      status: 'upcoming'
    },
    {
      week: 13,
      title: "Placeholder",
      dates: "August 11 – 14",
      focus: "Placeholder",
      summary: "Summary coming soon.",
      achievements: ["TBD"],
      highlights: ["TBD"],
      skills: ["TBD"],
      challenges: ["TBD"],
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
                  {/* Image placeholder */}
                  <div className="w-32 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
                    Week {week.week} Image
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
                        Summary
                      </h4>
                      <p className="text-muted-foreground bg-muted/50 p-3 rounded-lg text-sm">
                        {week.summary}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(week.skills || []).map((skill) => (
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
                         {(week.achievements || []).map((achievement, idx) => (
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
                         {(week.highlights || []).map((highlight, idx) => (
                           <li key={idx} className="flex items-start gap-2 text-sm">
                             <div className="h-2 w-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                             <span className="text-muted-foreground">{highlight}</span>
                           </li>
                         ))}
                       </ul>
                    </div>

                     {(week.challenges || []).length > 0 && (
                       <div>
                         <h4 className="font-semibold text-lg mb-3">Challenges Overcome</h4>
                         <ul className="space-y-2">
                           {(week.challenges || []).map((challenge, idx) => (
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
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Mail, Github, Linkedin, Calendar, Clock, TrendingUp } from "lucide-react";

const Home = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Internship details - update these with your actual dates
  const internshipStart = new Date("2025-05-21"); // May 21st, 2025
  const internshipEnd = new Date("2025-08-14T17:00:00Z"); // August 14th at Noon Central Time
  const totalDays = Math.ceil((internshipEnd.getTime() - internshipStart.getTime()) / (1000 * 60 * 60 * 24));
  const daysCompleted = Math.ceil((new Date().getTime() - internshipStart.getTime()) / (1000 * 60 * 60 * 24));
  const progressPercent = Math.min(Math.max((daysCompleted / totalDays) * 100, 0), 100);

  // Week summaries - add your actual summaries here
  const weekSummaries = [
    {
      week: 1,
      title: "Onboarding & Setup",
      summary: "Getting familiar with the team, development environment setup, and initial project briefings. Completed orientation sessions and security training.",
      highlights: ["Team introductions", "Environment setup", "First code review"]
    },
    {
      week: 2,
      title: "Learning Phase",
      summary: "Deep dive into the codebase and company technologies. Started working on smaller tasks and bug fixes to understand the development workflow.",
      highlights: ["Codebase exploration", "First bug fixes", "Mentor meetings"]
    },
    {
      week: 3,
      title: "First Project",
      summary: "Assigned to first major feature development. Collaborating with senior developers and participating in daily standups.",
      highlights: ["Feature planning", "API integration", "Code reviews"]
    },
    {
      week: 4,
      title: "Development Sprint",
      summary: "Active development phase with increased responsibilities. Working on user-facing features and learning about deployment processes.",
      highlights: ["Frontend development", "Testing procedures", "Deployment workflow"]
    },
    {
      week: 5,
      title: "Week 5 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 6,
      title: "Week 6 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 7,
      title: "Week 7 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 8,
      title: "Week 8 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 9,
      title: "Week 9 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 10,
      title: "Week 10 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 11,
      title: "Week 11 Summary",
      summary: "This week's activities and learnings will be updated as the internship progresses.",
      highlights: ["Coming soon..."]
    },
    {
      week: 12,
      title: "Final Week",
      summary: "Wrapping up projects, knowledge transfer, and internship conclusion activities.",
      highlights: ["Project completion", "Documentation", "Final presentations"]
    }
  ];

  // Live countdown to end of internship
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = internshipEnd.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [internshipEnd]);

  const nextWeek = () => {
    setCurrentWeek((prev) => (prev + 1) % weekSummaries.length);
  };

  const prevWeek = () => {
    setCurrentWeek((prev) => (prev - 1 + weekSummaries.length) % weekSummaries.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to My Internship Journey
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow along as I document my summer internship experience, sharing weekly insights, 
            projects, and the skills I'm developing along the way.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate computer science student currently pursuing my degree at [University Name]. 
                This summer, I'm excited to be interning at [Company Name] as a [Position Title], 
                where I'm gaining hands-on experience in software development, working with cutting-edge 
                technologies, and collaborating with talented professionals. This portfolio serves as a 
                living documentation of my internship journey, showcasing the projects I work on, 
                the skills I develop, and the insights I gain along the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Internship Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Internship Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Program Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Company:</p>
                    <p className="text-muted-foreground">[Your Company Name]</p>
                  </div>
                  <div>
                    <p className="font-medium">Position:</p>
                    <p className="text-muted-foreground">[Your Position Title]</p>
                  </div>
                  <div>
                    <p className="font-medium">Duration:</p>
                    <p className="text-muted-foreground">12 weeks (May - August 2025)</p>
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-muted-foreground">[City, State/Country]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Key Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• Modern JavaScript frameworks</li>
                  <li>• Database design and optimization</li>
                  <li>• API development and integration</li>
                  <li>• Agile development methodologies</li>
                  <li>• Code review and collaboration</li>
                  <li>• Software testing and deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Progress Tracker</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{Math.max(daysCompleted, 0)}</div>
                  <p className="text-muted-foreground">Days Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{totalDays}</div>
                  <p className="text-muted-foreground">Total Days</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{progressPercent.toFixed(1)}%</div>
                  <p className="text-muted-foreground">Progress</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{Math.ceil(daysCompleted / 7)}</div>
                  <p className="text-muted-foreground">Weeks Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Internship Progress</span>
                  <span>{progressPercent.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Countdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Clock className="h-5 w-5" />
                Time Remaining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                  <p className="text-sm text-muted-foreground">Days</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                  <p className="text-sm text-muted-foreground">Minutes</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                  <p className="text-sm text-muted-foreground">Seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Week by Week Carousel */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Weekly Journey</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <Button variant="outline" size="icon" onClick={prevWeek}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h3 className="text-2xl font-bold">
                  Week {weekSummaries[currentWeek].week}: {weekSummaries[currentWeek].title}
                </h3>
                <Button variant="outline" size="icon" onClick={nextWeek}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  {weekSummaries[currentWeek].summary}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {weekSummaries[currentWeek].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex justify-center">
                <div className="flex gap-2">
                  {weekSummaries.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentWeek ? 'bg-primary' : 'bg-muted'
                      }`}
                      onClick={() => setCurrentWeek(index)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <Card>
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <p className="text-muted-foreground">
                  I'd love to connect and discuss my internship experience, projects, or potential opportunities.
                </p>
              </div>
              <div className="flex justify-center gap-8 flex-wrap">
                <a 
                  href="mailto:ian1kuchar@gmail.com" 
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  ian1kuchar@gmail.com
                </a>
                <a 
                  href="https://github.com/Ikuchar1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                  Ikuchar1
                </a>
                <a 
                  href="https://linkedin.com/in/ian-kuchar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  ian-kuchar
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
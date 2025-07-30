import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Code, Target, Star, Lightbulb, TrendingUp, Heart } from "lucide-react";

const Reflection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 backdrop-blur-sm">
            <Target className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-6 tracking-tight">
            Summer Reflection
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A look back at my goals for the summer and how I accomplished them.
          </p>
        </div>

        {/* Goals Sections */}
        <div className="space-y-8">
          {/* Goal 1 */}
          <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Users className="h-7 w-7 text-primary" />
                  <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Goal 1: Build My Horizons and Expand My Professional Network
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-muted-foreground/90 leading-relaxed">
                I wanted to meet with a lot of different people in different roles to build my horizons and expand my professional network.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  How I Did It
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">Scheduled regular coffee chats with employees across different departments to learn about their roles and career paths.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">Attended team meetings and company events to naturally build relationships and understand organizational dynamics.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">Actively participated in intern activities and cross-functional projects to meet people outside my immediate team.</span>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate('/connections')} 
                  className="w-full flex items-center justify-center gap-2 group/btn hover:scale-105 transition-transform duration-200"
                  size="lg"
                >
                  <Users className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                  View All My Connections
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Goal 2 */}
          <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="relative p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20 group-hover:shadow-lg group-hover:shadow-accent/25 transition-all duration-300">
                  <Code className="h-7 w-7 text-accent" />
                  <div className="absolute inset-0 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Goal 2: Become a Better Pair Programmer
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-muted-foreground/90 leading-relaxed">
                In college, working on group projects has been a struggle and it's been hard to stay on the same page with teammates. 
                I wanted to improve at communicating my ideas and better understanding others' perspectives while coding.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-accent" />
                  How I Did It
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">Practiced active listening during pair programming sessions, making sure to understand my teammate's approach before suggesting alternatives.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">Learned to articulate my thought process clearly when coding, explaining my reasoning and asking questions when I didn't understand.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground leading-relaxed">Embraced the driver/navigator roles and got comfortable switching between leading and following during collaborative coding sessions.</span>
                  </div>
                </div>
                <Button 
                  onClick={() => navigate('/projects')} 
                  className="w-full flex items-center justify-center gap-2 group/btn hover:scale-105 transition-transform duration-200"
                  size="lg"
                >
                  <Code className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-200" />
                  Explore My Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* We Are Statements Section */}
        <div className="mt-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-accent/10 backdrop-blur-sm">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 tracking-tight">
              We Are Statements
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              How I demonstrated Farm Credit Services of America's core values throughout my internship.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8">
            {/* We are teammates */}
            <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-500/10 border border-blue-500/20">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">We are teammates</CardTitle>
                    <CardDescription className="text-base italic text-muted-foreground/80 mt-1">Work with a team that makes you better</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">One of my personal goals was to become a better pair programmer. This helped me learn how to collaborate effectively, communicate clearly, and problem-solve alongside others.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">We tried to align our strengths (which we identified in the DISC assessment) to work more efficiently as a team and make the most of everyone's abilities.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">I also became more comfortable working as part of a team, sharing responsibilities, and leaning on teammates' strengths to produce better results together.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are leaders */}
            <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/20">
                    <TrendingUp className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">We are leaders</CardTitle>
                    <CardDescription className="text-base italic text-muted-foreground/80 mt-1">Work with people who lead the way</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Took ownership of pieces of the balance sheet project by researching solutions and driving them forward.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Stepped up in team meetings to share ideas and updates, helping to keep everyone aligned.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Ran parts of the Bytes & Insights session, gaining experience leading a group discussion and facilitating learning for others.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are experts */}
            <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-green-500/10 border border-green-500/20">
                    <Star className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">We are experts</CardTitle>
                    <CardDescription className="text-base italic text-muted-foreground/80 mt-1">Work to be the best at what you do</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Gained a significant amount of technical knowledge and confidence in my abilities this summer. I now feel comfortable starting a project on my own and making key architectural and design decisions.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Learned how agile processes and corporate best practices accelerate progress and help teams deliver higher-quality results.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are future-focused */}
            <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 border border-cyan-500/20">
                    <Lightbulb className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">We are future-focused</CardTitle>
                    <CardDescription className="text-base italic text-muted-foreground/80 mt-1">Work to anticipate and adapt to future trends and challenges</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">While developing the balance sheet application, we consistently thought about the Digital Services team and future developers. We built reusable components that could be copied and extended later, setting them up for success.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Focused on making the application maintainable and scalable so future interns and employees can build on the progress we made.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are difference makers */}
            <Card className="group border-0 shadow-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] animate-fade-in">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-red-500/20 to-red-500/10 border border-red-500/20">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">We are difference makers</CardTitle>
                    <CardDescription className="text-base italic text-muted-foreground/80 mt-1">Work to have a positive impact on people's lives</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Quickly realized that the tools we build directly impact the business side of the company and ultimately the customers.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Focused on solving pain points for financial officers by creating an application that saves them time and makes it easier to manage balance sheets.</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/30">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Designed with customers in mind as well—making the process of building a balance sheet easier, even for those unfamiliar with the task.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
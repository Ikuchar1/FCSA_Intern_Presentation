import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Code } from "lucide-react";

const Reflection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
            Summer Reflection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A look back at my goals for the summer and how I accomplished them.
          </p>
        </div>

        {/* Goals Sections */}
        <div className="space-y-8">
          {/* Goal 1 */}
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Goal 1: Build My Horizons and Expand My Professional Network</CardTitle>
              </div>
              <CardDescription className="text-lg">
                I wanted to meet with a lot of different people in different roles to build my horizons and expand my professional network.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">How I Did It</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder text - I'll update this section with specific details about the conversations I had, 
                  the different departments I connected with, and the insights I gained from each interaction. 
                  This will include details about coffee chats, formal meetings, and informal networking opportunities.]
                </p>
              </div>
              <Button 
                onClick={() => navigate('/connections')} 
                className="flex items-center gap-2"
              >
                <Users className="h-4 w-4" />
                View Connections
              </Button>
            </CardContent>
          </Card>

          {/* Goal 2 */}
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Goal 2: Become a Better Pair Programmer</CardTitle>
              </div>
              <CardDescription className="text-lg">
                In college, working on group projects has been a struggle and it's been hard to stay on the same page with teammates. 
                I wanted to improve at communicating my ideas and better understanding others' perspectives while coding.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">How I Did It</h3>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder text - I'll update this section with specific examples of pair programming sessions, 
                  collaboration techniques I learned, communication strategies that worked well, and how I improved 
                  at understanding different coding perspectives and approaches from my teammates.]
                </p>
              </div>
              <Button 
                onClick={() => navigate('/projects')} 
                className="flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                View Projects
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* We Are Statements Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              We Are Statements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              How I demonstrated Farm Credit Services of America's core values throughout my internship.
            </p>
          </div>

          <div className="space-y-6">
            {/* We are teammates */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">We are teammates</CardTitle>
                <CardDescription className="text-base italic">Work with a team that makes you better</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>One of my personal goals was to become a better pair programmer. This helped me learn how to collaborate effectively, communicate clearly, and problem-solve alongside others.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>We tried to align our strengths (which we identified in the DISC assessment) to work more efficiently as a team and make the most of everyone's abilities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>I also became more comfortable working as part of a team, sharing responsibilities, and leaning on teammates' strengths to produce better results together.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are leaders */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">We are leaders</CardTitle>
                <CardDescription className="text-base italic">Work with people who lead the way</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Took ownership of pieces of the balance sheet project by researching solutions and driving them forward.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Stepped up in team meetings to share ideas and updates, helping to keep everyone aligned.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ran parts of the Bytes & Insights session, gaining experience leading a group discussion and facilitating learning for others.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are experts */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">We are experts</CardTitle>
                <CardDescription className="text-base italic">Work to be the best at what you do</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gained a significant amount of technical knowledge and confidence in my abilities this summer. I now feel comfortable starting a project on my own and making key architectural and design decisions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Learned how agile processes and corporate best practices accelerate progress and help teams deliver higher-quality results.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are future-focused */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">We are future-focused</CardTitle>
                <CardDescription className="text-base italic">Work to anticipate and adapt to future trends and challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>While developing the balance sheet application, we consistently thought about the Digital Services team and future developers. We built reusable components that could be copied and extended later, setting them up for success.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Focused on making the application maintainable and scalable so future interns and employees can build on the progress we made.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* We are difference makers */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold">We are difference makers</CardTitle>
                <CardDescription className="text-base italic">Work to have a positive impact on people's lives</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Quickly realized that the tools we build directly impact the business side of the company and ultimately the customers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Focused on solving pain points for financial officers by creating an application that saves them time and makes it easier to manage balance sheets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Designed with customers in mind as well—making the process of building a balance sheet easier, even for those unfamiliar with the task.</span>
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
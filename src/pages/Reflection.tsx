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
      </div>
    </div>
  );
};

export default Reflection;
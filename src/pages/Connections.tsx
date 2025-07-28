import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Coffee, MessageCircle } from "lucide-react";

interface Connection {
  id: number;
  name: string;
  title: string;
  overview: string;
  keyTakeaways: string[];
  image?: string;
}

const Connections = () => {
  const connections: Connection[] = [
    {
      id: 1,
      name: "Jason Trent",
      title: "Program Manager",
      overview: "Jason provided a detailed look into the responsibilities of a Program Manager at FCSA, and how he collaborates across business and technical teams. We also talked about his career path and what helped him grow into a leadership role.",
      keyTakeaways: [
        "Program Managers focus on high-level features while Business Analysts handle the detailed user stories",
        "Prioritization is driven by business value — the most impactful work is tackled first",
        "The prioritization team ensures alignment between business needs and delivery",
        "Jason offered great advice on how developers can evolve into leaders by getting involved with programs like Spark and mentorship at FCSA"
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Senior Software Engineer",
      overview: "Sarah shared insights into the technical side of our platform and discussed best practices for code quality and collaboration. She also provided valuable perspective on career growth in engineering.",
      keyTakeaways: [
        "Code reviews are essential for maintaining quality and sharing knowledge across the team",
        "Technical debt should be addressed incrementally alongside feature development",
        "Pair programming is highly effective for complex problem-solving and knowledge transfer",
        "Building strong relationships with product managers leads to better technical solutions"
      ]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "UX Designer",
      overview: "Michael explained the design thinking process and how user research drives product decisions. We discussed the collaboration between design and engineering teams.",
      keyTakeaways: [
        "User research should happen early and often to validate design assumptions",
        "Prototyping helps bridge the gap between design concepts and technical implementation",
        "Cross-functional collaboration improves both user experience and technical feasibility",
        "Design systems ensure consistency while allowing for creative solutions"
      ]
    },
    {
      id: 4,
      name: "Amanda Foster",
      title: "Product Owner",
      overview: "Amanda provided insight into product strategy and how customer feedback shapes the roadmap. She emphasized the importance of data-driven decision making in product development.",
      keyTakeaways: [
        "Customer feedback is collected through multiple channels and analyzed for patterns",
        "Feature prioritization balances customer needs, technical constraints, and business goals",
        "Regular stakeholder communication prevents misalignment and scope creep",
        "Product metrics help measure success and guide future development decisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Connections</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building meaningful professional relationships through one-on-one conversations and coffee chats during my internship.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Coffee className="h-5 w-5" />
              <span>{connections.length} conversations</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MessageCircle className="h-5 w-5" />
              <span>Cross-functional insights</span>
            </div>
          </div>
        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 gap-8">
          {connections.map((connection) => (
            <Card key={connection.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground mb-1">
                      {connection.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm">
                      {connection.title}
                    </Badge>
                  </div>
                  <div className="p-2 rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Overview */}
                <div>
                  <h4 className="font-medium text-foreground mb-2">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {connection.overview}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {connection.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                          {takeaway}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Building Professional Networks
          </h3>
          <p className="text-muted-foreground">
            These conversations have been invaluable for understanding different roles, gaining industry insights, 
            and building relationships that will benefit my career growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connections;
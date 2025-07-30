import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Coffee, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";

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
      id: 5,
      name: "Keith Wilson",
      title: "Regional Vice President – Insurance",
      overview: "Keith gave an in-depth look into the complexities of crop and hail insurance. We talked for over two hours, and it became clear how layered the system is. I gained appreciation for the tools our Omaha teams built that he uses daily, and how closely our development work supports business operations.",
      keyTakeaways: [
        "Crop insurance is more complex than it initially appears — hail coverage adds even more layers",
        "Keith uses internal FCSA software developed in Omaha for insurance calculations",
        "Gained perspective on how business users interact with our tools",
        "Saw real feedback on how the tools could improve — which I shared with dev teams",
        "Helped me \"walk in the shoes\" of the people I build for"
      ]
    },
    {
      id: 6,
      name: "Brett Esau & Shawn Meyer",
      title: "Financial Officers",
      overview: "Brett and Shawn exemplify the heart of small-town agriculture finance. Their genuine connection with customers shows how much impact a Financial Officer can have. Shawn also walked us through how business development works and how referrals drive growth.",
      keyTakeaways: [
        "Customer relationships are deeply personal — FOs often know families and local context",
        "Both love farming and agriculture outside of work",
        "Passion for the role energizes their customer interactions",
        "Business development is largely relationship-based and built on trust"
      ]
    },
    {
      id: 7,
      name: "Megan Ronne",
      title: "Retail Closing Specialist",
      overview: "Megan's role was a great reminder of how internal tools fuel business operations. She relies on multiple internally developed applications to do her job, and shared helpful feedback on how they could improve. Her story showed that learning and adapting is essential.",
      keyTakeaways: [
        "Uses 3+ FCSA-developed applications daily",
        "Product reliability directly impacts her ability to close loans",
        "Emphasized how improvements could better serve closing specialists",
        "Reinforced how roles rely on each other and how tools need to work together",
        "Showed the value of learning as you go"
      ]
    },
    {
      id: 8,
      name: "Sara Helgeson",
      title: "Lending Compliance Officer",
      overview: "Sara gave me a tour of the Fargo office and helped me understand how compliance roles are evolving with the AgCountry collaboration. Meeting her and others in Fargo provided great insight into how interconnected teams are during transitions.",
      keyTakeaways: [
        "Works on compliance and risk as collaboration evolves",
        "Fargo office is full of energy and adapting to change",
        "Jessica and Steph helped explain AgCountry's progress",
        "Showed how different departments align during major organizational changes"
      ]
    },
    {
      id: 9,
      name: "Rex Earl & Security Team",
      title: "Information Security Team",
      overview: "Rex and his team gave a breakdown of FCSA's security structure, including app security, identity, and data. I found app security the most fascinating, especially how they test for vulnerabilities. It made me think more critically about writing secure code.",
      keyTakeaways: [
        "Learned about the 3 divisions: Application Security, Identity, Data",
        "Application Security includes penetration testing for vulnerabilities",
        "Reinforced how crucial security is at every step of development",
        "Encouraged me to start secure coding practices early in my career"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute top-10 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20">
              <Users className="h-10 w-10 text-primary" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Connections
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building meaningful professional relationships through one-on-one conversations and coffee chats during my internship.
          </p>
          
        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 gap-8">
          {connections.map((connection, index) => (
            <Card 
              key={connection.id} 
              className="group relative overflow-hidden bg-gradient-to-br from-card via-card to-card/50 border-border/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              
              <CardHeader className="pb-6 relative">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {connection.name}
                    </CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="text-sm bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      {connection.title}
                    </Badge>
                  </div>
                  <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110">
                    <Users className="h-6 w-6 text-primary" />
                    <ArrowUpRight className="absolute -top-1 -right-1 h-3 w-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-8 relative">
                {/* Overview */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                    <h4 className="text-lg font-semibold text-foreground">Overview</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base pl-5 relative">
                    <span className="absolute left-0 top-0 w-3 h-3 bg-primary/20 rounded-full" />
                    {connection.overview}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                    <h4 className="text-lg font-semibold text-foreground">Key Takeaways</h4>
                  </div>
                  <ul className="space-y-3 pl-5">
                    {connection.keyTakeaways.map((takeaway, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-4 group/item"
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      >
                        <div className="relative mt-2 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover/item:scale-150 transition-transform duration-300" />
                          <div className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-20" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed text-base group-hover/item:text-foreground transition-colors duration-300">
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
        <div className="relative mt-20 p-8 rounded-2xl bg-gradient-to-br from-card via-card/80 to-muted/20 border border-border/50 backdrop-blur-sm overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          
          <div className="relative text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Building Professional Networks
              </h3>
              <Sparkles className="h-6 w-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              These conversations have been invaluable for understanding different roles, gaining industry insights, 
              and building relationships that will benefit my career growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
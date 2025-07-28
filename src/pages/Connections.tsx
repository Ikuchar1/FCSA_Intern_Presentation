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
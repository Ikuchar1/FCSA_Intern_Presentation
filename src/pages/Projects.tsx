import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Hall of Champions",
      shortDescription: "Our first project to learn Angular fundamentals with a creative twist.",
      fullDescription: "This was our introduction to Angular, guided by a tutorial from our lead developer, Thomas. The original tutorial was for building a basic real estate website, but we decided to make it more engaging by turning it into a League of Legends-themed application called \"Hall of Champions.\" This project gave us a chance to get comfortable with Angular and establish good coding practices before diving into larger projects.",
      images: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 2,
      title: "My Account Balance Sheet",
      shortDescription: "The core group project focused on building a scalable balance sheet application.",
      fullDescription: "This was the main group project of the summer, where we built the My Account Balance Sheet application. I contributed heavily to the line item formatting and creation sections, including the default, crops and feed, and market livestock line items. Early in the project, we struggled with reusability in our code, but once we refactored and created reusable components, the project became much more manageable.\n\nOne of my favorite parts was working with the UI/UX team on the Figma designs. Iterating over designs and finally seeing the application match the Figma exactly was extremely rewarding. This project taught me a lot about scalable code structure, teamwork, and the full agile workflow.",
      images: [
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Personal Project (AI-Powered Website)",
      shortDescription: "A personal project exploring AI-powered development and new technologies.",
      fullDescription: "For my personal project, I wanted to try out new technologies and explore AI-assisted development. Using Lovable AI, I created a website from a rough outline, letting the tool generate the initial template and structure. From there, I iterated on the design and features, customizing it to fit my needs.\n\nThis project helped me better understand how to leverage AI efficiently to accelerate development. It also gave me a chance to build something independently using newer tools I hadn't worked with before.",
      images: [
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
      ]
    }
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.shortDescription}
        </p>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              View More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </div>
              </div>
              
              {project.images.length > 0 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Project Images</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg border">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Highlights of the work I contributed to during my internship, including group and personal projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
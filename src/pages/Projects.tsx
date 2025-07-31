import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ChevronLeft, ChevronRight, Code, Figma, Github, ExternalLink, Sparkles, CheckCircle2, X } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  technologies: string[];
  images: string[];
  links: {
    github?: string;
    demo?: string;
    figma?: string;
  };
  coverImage?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Hall of Legends",
      subtitle: "Angular Learning Project • Summer 2024",
      shortDescription: "Our first project to learn Angular fundamentals with a creative twist.",
      fullDescription: "This was our introduction to Angular, guided by a tutorial from our lead developer, Thomas. The original tutorial was for building a basic real estate website, but we decided to make it more engaging by turning it into a League of Legends-themed application called \"Hall of Champions.\" This project gave us a chance to get comfortable with Angular and establish good coding practices before diving into larger projects.\n\nThe application featured a searchable database of League of Legends champions, where users could browse through different champions, view their details, and search for specific champions by name or role. One of the coolest features we implemented was the ability to export individual champion profiles as PDF documents, allowing users to save and share their favorite champion information offline.",
      keyPoints: [
        "First introduction to Angular framework and TypeScript",
        "Transformed a basic real estate tutorial into a gaming-themed application",
        "Implemented champion search functionality with filtering capabilities",
        "Built PDF export feature for individual champion profiles",
        "Established foundational coding practices and component structure",
        "Collaborated with team lead Thomas for guided learning",
        "Prepared foundation for more complex group projects"
      ],
      technologies: ["Angular", "TypeScript", "HTML", "SCSS"],
      images: [
        "/images/gallery/azir.jpeg"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      coverImage: "/images/gallery/holCover.jpeg"
    },
    {
      id: 2,
      title: "My Account Balance Sheet",
      subtitle: "Core Group Project • Summer 2024",
      shortDescription: "The core group project focused on building a scalable balance sheet application.",
      fullDescription: "This was the main group project of the summer, where we built the My Account Balance Sheet application. I contributed heavily to the line item formatting and creation sections, including the default, crops and feed, and market livestock line items. Early in the project, we struggled with reusability in our code, but once we refactored and created reusable components, the project became much more manageable.\n\nOne of my favorite parts was working with the UI/UX team on the Figma designs. Iterating over designs and finally seeing the application match the Figma exactly was extremely rewarding. This project taught me a lot about scalable code structure, teamwork, and the full agile workflow.",
      keyPoints: [
        "Built scalable financial application with complex line item formatting",
        "Specialized in crops & feed and market livestock components", 
        "Refactored codebase for improved reusability and maintainability",
        "Close collaboration with UI/UX team on Figma design implementation",
        "Experienced full agile development workflow from start to finish"
      ],
      technologies: ["Angular", ".NET", "C#", "SQL Server", "Figma", "Azure"],
      images: [
        "/images/gallery/lineItem.png"
      ],
      links: {
        github: "#",
        figma: "#",
        demo: "#"
      },
      coverImage: "/images/gallery/myAccountIcon.png"
    },
    {
      id: 3,
      title: "Personal Project (AI-Powered Website)",
      subtitle: "Independent Exploration • Summer 2024",
      shortDescription: "A personal project exploring AI-powered development and new technologies.",
      fullDescription: "For my personal project, I wanted to try out new technologies and explore AI-assisted development. Using Lovable AI, I created a website from a rough outline, letting the tool generate the initial template and structure. From there, I iterated on the design and features, customizing it to fit my needs.\n\nThis project helped me better understand how to leverage AI efficiently to accelerate development. It also gave me a chance to build something independently using newer tools I hadn't worked with before.",
      keyPoints: [
        "Explored cutting-edge AI-assisted development tools and workflows",
        "Built complete website from concept to deployment using Lovable AI",
        "Learned to effectively prompt and iterate with AI development tools",
        "Gained experience with modern React and Tailwind CSS frameworks",
        "Developed skills in independent project management and execution"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI Tools", "Vite"],
      images: [
        "/images/gallery/lovable.jpg"
      ],
      links: {
        github: "#",
        demo: "#"
      },
      coverImage: "/images/gallery/lovable.jpg"
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen || !selectedProject) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        const previousProject = projects[currentIndex - 1] || projects[projects.length - 1];
        setSelectedProject(previousProject);
        setCurrentImageIndex(0);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        const nextProject = projects[currentIndex + 1] || projects[0];
        setSelectedProject(nextProject);
        setCurrentImageIndex(0);
      } else if (e.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedProject(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedProject, projects]);

  const CoverPlaceholder = ({ title, className }: { title: string; className?: string }) => (
    <div className={`relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-2">
          <Code className="h-12 w-12 mx-auto text-primary/60" />
          <p className="text-sm font-medium text-primary/80">{title}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );

  const ProjectCard = ({ project }: { project: Project }) => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
        {/* Cover Image */}
        <div className="relative aspect-video overflow-hidden">
          {project.coverImage ? (
            <>
              {imageLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <img
                src={project.coverImage}
                alt={project.title}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={() => setImageLoading(false)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <CoverPlaceholder title={project.title} className="h-full" />
          )}
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.shortDescription}
          </p>
        </CardHeader>

        <CardContent className="pt-0 space-y-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-medium">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* CTA Button */}
          <div className="flex gap-2">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImageIndex(0);
                    setIsModalOpen(true);
                  }}
                  aria-label={`View details for ${project.title}`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View More
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    );
  };

  const ProjectImage = ({ images, title }: { images: string[]; title: string }) => {
    if (!images.length) {
      return (
        <div className="flex justify-center">
          <CoverPlaceholder title="Project Preview" className="w-full max-w-2xl h-80 rounded-lg shadow-md" />
        </div>
      );
    }

    return (
      <div className="flex justify-center">
        <div className="relative overflow-hidden rounded-lg shadow-md bg-muted w-full max-w-2xl">
          <img
            src={images[0]}
            alt={`${title} preview`}
            className="w-full h-80 object-contain"
          />
        </div>
      </div>
    );
  };

  const ProjectModal = () => {
    if (!selectedProject) return null;

    const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
    const previousProject = projects[currentIndex - 1] || projects[projects.length - 1];
    const nextProject = projects[currentIndex + 1] || projects[0];

    return (
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden p-0 rounded-2xl bg-gradient-to-br from-background/95 to-muted/60 backdrop-blur-lg border border-border/50 shadow-2xl animate-scale-in">
        {/* Sticky Header Zone */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md border-b border-border/50 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-semibold text-foreground mb-1" aria-labelledby="project-title">
                {selectedProject.title}
              </DialogTitle>
              <p className="text-sm text-muted-foreground font-medium">
                {selectedProject.subtitle}
              </p>
            </div>
            
            <div className="flex items-center gap-1 ml-6">
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-accent/50 rounded-full transition-colors"
                onClick={() => {
                  setSelectedProject(previousProject);
                  setCurrentImageIndex(0);
                }}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-9 w-9 hover:bg-accent/50 rounded-full transition-colors"
                onClick={() => {
                  setSelectedProject(nextProject);
                  setCurrentImageIndex(0);
                }}
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Body Zone */}
        <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className="p-6 space-y-8">
            {/* Key Highlights Section */}
            <section 
              className="animate-fade-in rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 ring-1 ring-border/20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                <div className="pl-6">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-foreground">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-4">
                    {selectedProject.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-4 group">
                        <div className="relative">
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full"></div>
                          <CheckCircle2 className="h-4 w-4 text-primary mt-1 relative z-10 bg-background rounded-full" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Project Overview Section */}
            <section 
              className="space-y-6"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <div className="pt-8">
                  <h3 className="text-2xl font-semibold mb-6 text-foreground">Project Overview</h3>
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-muted-foreground leading-loose text-lg whitespace-pre-line">
                      {selectedProject.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies Used Section */}
            <section 
              className="space-y-6"
              style={{ animationDelay: '0.3s' }}
            >
              <h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground">
                <Code className="h-6 w-6 text-primary" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium rounded-full hover:scale-105 transition-transform duration-200 shadow-sm"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Hero Image Section */}
            <section 
              className="flex justify-center pt-4"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="relative w-full max-w-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-muted/30 backdrop-blur-sm rounded-xl p-4 ring-1 ring-border/30 shadow-xl">
                  {selectedProject.images.length > 0 ? (
                    <img
                      src={selectedProject.images[0]}
                      alt={`${selectedProject.title} preview`}
                      className="w-full h-80 object-contain rounded-lg shadow-lg"
                    />
                  ) : (
                    <CoverPlaceholder title="Project Preview" className="w-full h-80 rounded-lg" />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    );
  };

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

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <ProjectModal />
        </Dialog>
      </div>
    </div>
  );
};

export default Projects;
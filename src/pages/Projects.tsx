import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus, Code, Database, Globe } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'other';
  github?: string;
  liveUrl?: string;
  image?: string;
  startDate: string;
  endDate?: string;
}

const Projects = () => {
  // My actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Balance Sheet Project",
      description: "Financial analysis and reporting application built with modern web technologies.",
      longDescription: "Developed a comprehensive balance sheet application that allows users to input financial data, generate reports, and visualize financial health through interactive charts and summaries.",
      technologies: ["React", "TypeScript", "Chart.js", "CSS", "Financial APIs"],
      status: 'completed',
      category: 'web',
      github: "https://github.com/Ikuchar1/balance-sheet",
      startDate: "May 2025",
      endDate: "July 2025"
    },
    {
      id: 2,
      title: "Hall of Champions",
      description: "Sports achievement tracking and recognition platform.",
      longDescription: "Created a platform to track and celebrate athletic achievements, featuring player profiles, statistics tracking, and a hall of fame system for recognizing outstanding performances.",
      technologies: ["React", "JavaScript", "Database", "UI/UX Design"],
      status: 'completed',
      category: 'web',
      github: "https://github.com/Ikuchar1/hall-of-champions",
      startDate: "June 2025",
      endDate: "August 2025"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "This very website - showcasing my internship journey and projects.",
      longDescription: "Built a responsive portfolio website to document my internship experience, showcase completed projects, and demonstrate my web development skills using modern React and design principles.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
      status: 'completed',
      category: 'web',
      github: "https://github.com/Ikuchar1/portfolio",
      liveUrl: "https://ianportfolio.com",
      startDate: "July 2025",
      endDate: "August 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planned':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Globe className="h-4 w-4" />;
      case 'backend':
        return <Database className="h-4 w-4" />;
      case 'mobile':
        return <Code className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  const completedProjects = projects.filter(p => p.status === 'completed');
  const inProgressProjects = projects.filter(p => p.status === 'in-progress');
  const plannedProjects = projects.filter(p => p.status === 'planned');

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="h-full hover:shadow-lg transition-all duration-300 group">
      {project.image && (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className={getStatusColor(project.status)}>
              {project.status.replace('-', ' ')}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-white/90">
              {getCategoryIcon(project.category)}
              <span className="ml-1 capitalize">{project.category}</span>
            </Badge>
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{project.title}</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {project.startDate} {project.endDate && `- ${project.endDate}`}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {project.github && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I've worked on during my internship, showcasing different technologies, 
            problem-solving approaches, and the skills I've developed along the way.
          </p>
        </div>

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">✅ Completed Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* In Progress Projects */}
        {inProgressProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">🚧 Current Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Planned Projects */}
        {plannedProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-600">📋 Upcoming Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plannedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Add More Projects Placeholder */}
        <section>
          <Card className="border-dashed">
            <CardContent className="pt-8 pb-8">
              <div className="text-center text-muted-foreground">
                <Plus className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">More projects coming soon!</h3>
                <p>As I continue my internship, I'll be adding more exciting projects to this portfolio.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;
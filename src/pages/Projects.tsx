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
  // Placeholder projects - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Customer Dashboard Redesign",
      description: "Complete redesign of the customer portal with modern UI/UX principles and improved performance.",
      longDescription: "Led the frontend development for a complete redesign of the customer dashboard, focusing on improving user experience and performance. Implemented responsive design patterns, optimized load times, and introduced new interactive features that increased user engagement by 40%.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
      status: 'completed',
      category: 'web',
      github: "https://github.com/yourusername/customer-dashboard",
      liveUrl: "https://dashboard.company.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      startDate: "June 2024",
      endDate: "July 2024"
    },
    {
      id: 2,
      title: "API Integration Service",
      description: "Microservice for handling third-party API integrations with rate limiting and error handling.",
      longDescription: "Developed a robust microservice to handle multiple third-party API integrations. Implemented rate limiting, retry mechanisms, and comprehensive error handling. The service processes over 10,000 requests daily with 99.9% uptime.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "Jest"],
      status: 'completed',
      category: 'backend',
      github: "https://github.com/yourusername/api-service",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      startDate: "June 2024",
      endDate: "July 2024"
    },
    {
      id: 3,
      title: "Real-time Analytics Platform",
      description: "Dashboard for real-time data visualization with WebSocket connections and interactive charts.",
      longDescription: "Building a comprehensive analytics platform that provides real-time insights into user behavior and system performance. Features include customizable dashboards, alert systems, and automated reporting.",
      technologies: ["React", "D3.js", "WebSocket", "Python", "FastAPI", "PostgreSQL"],
      status: 'in-progress',
      category: 'web',
      github: "https://github.com/yourusername/analytics-platform",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      startDate: "July 2024"
    },
    {
      id: 4,
      title: "Mobile App Prototype",
      description: "Cross-platform mobile application for employee task management and communication.",
      longDescription: "Designing and developing a mobile application prototype for internal employee use. The app will streamline task management, team communication, and provide offline capabilities for remote workers.",
      technologies: ["React Native", "TypeScript", "Firebase", "SQLite", "Redux"],
      status: 'planned',
      category: 'mobile',
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      startDate: "August 2024"
    },
    {
      id: 5,
      title: "Machine Learning Data Pipeline",
      description: "Automated pipeline for processing and analyzing large datasets for ML model training.",
      longDescription: "Creating an automated data pipeline that processes, cleans, and transforms large datasets for machine learning applications. Includes data validation, feature engineering, and model training automation.",
      technologies: ["Python", "Apache Airflow", "Pandas", "Scikit-learn", "AWS S3", "Docker"],
      status: 'planned',
      category: 'ai',
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      startDate: "August 2024"
    },
    {
      id: 6,
      title: "Documentation Site",
      description: "Interactive documentation website for internal APIs and development guidelines.",
      longDescription: "Developing a comprehensive documentation site that serves as the central hub for all internal APIs, coding standards, and development guidelines. Features include interactive API testing, code examples, and search functionality.",
      technologies: ["Next.js", "MDX", "Algolia", "TypeScript", "Vercel"],
      status: 'planned',
      category: 'web',
      startDate: "August 2024"
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

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{completedProjects.length}</div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{inProgressProjects.length}</div>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{plannedProjects.length}</div>
                <p className="text-sm text-muted-foreground">Planned</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{projects.length}</div>
                <p className="text-sm text-muted-foreground">Total Projects</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-600">✅ Completed Projects</h2>
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
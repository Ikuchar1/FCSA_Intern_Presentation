import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react";

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  date: string;
}

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder media items - replace with your actual content
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      title: 'First Day at the Office',
      description: 'My workspace setup on the first day of internship. Clean desk, dual monitors, and ready to code!',
      date: 'June 1, 2024'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      title: 'Team Meeting Setup',
      description: 'Setting up for our first team standup meeting. Learning about agile methodologies.',
      date: 'June 3, 2024'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      title: 'Code Review Session',
      description: 'Reviewing code with my mentor. Learning best practices and clean code principles.',
      date: 'June 10, 2024'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      title: 'Late Night Coding',
      description: 'Working on a challenging feature implementation. The satisfaction of solving complex problems.',
      date: 'June 15, 2024'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      title: 'Remote Work Day',
      description: 'Working from home setup. Maintaining productivity while enjoying the flexibility.',
      date: 'June 20, 2024'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop',
      title: 'Innovation Session',
      description: 'Brainstorming new ideas and solutions. The creative side of software development.',
      date: 'June 25, 2024'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      title: 'Team Outing',
      description: 'Company team building event in nature. Great opportunity to bond with colleagues.',
      date: 'July 1, 2024'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop',
      title: 'Office Views',
      description: 'Beautiful view from the office. Inspiring environment that boosts creativity.',
      date: 'July 5, 2024'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
      title: 'Project Milestone',
      description: 'Celebrating the completion of a major project milestone. Waves of success!',
      date: 'July 10, 2024'
    }
  ];

  const openModal = (media: MediaItem, index: number) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % mediaItems.length;
    setCurrentIndex(nextIndex);
    setSelectedMedia(mediaItems[nextIndex]);
  };

  const prevMedia = () => {
    const prevIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    setCurrentIndex(prevIndex);
    setSelectedMedia(mediaItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Internship Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my internship experience. From first day setup to major milestones, 
            these moments capture the essence of my learning and growth.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => openModal(item, index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.type === 'video' ? (
                      <Play className="h-12 w-12 text-white" />
                    ) : (
                      <ImageIcon className="h-12 w-12 text-white" />
                    )}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                  {item.description}
                </p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Placeholder for more content */}
        <div className="mt-12 text-center">
          <Card className="p-8 border-dashed">
            <div className="text-muted-foreground">
              <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">More memories coming soon!</h3>
              <p>As my internship progresses, I'll be adding more photos and videos to showcase my journey.</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedMedia} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
          {selectedMedia && (
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={prevMedia}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={nextMedia}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Media content */}
              <div className="relative">
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    className="w-full max-h-[60vh] object-contain"
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full max-h-[60vh] object-contain"
                  />
                )}
              </div>

              {/* Media info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedMedia.title}</h2>
                <p className="text-muted-foreground mb-2">{selectedMedia.description}</p>
                <p className="text-sm text-muted-foreground">{selectedMedia.date}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
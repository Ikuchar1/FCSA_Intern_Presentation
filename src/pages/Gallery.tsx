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

  // Your actual internship photos and memories
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/images/gallery/intern_group_photo.jpg',
      title: 'Intern Group Photo',
      description: 'Group photo with fellow interns on the first day. Great to meet everyone and begin the summer together.',
      date: 'May 21, 2024'
    },
    {
      id: 2,
      type: 'image',
      src: '/images/gallery/1H0A1098.jpg',
      title: 'Orientation Day',
      description: 'Orientation day at FCSA – kicking off the internship by learning about core values and meeting the team.',
      date: 'May 21, 2024'
    },
    {
      id: 3,
      type: 'image',
      src: '/images/gallery/1H0A8334.jpg',
      title: 'Orientation Moments',
      description: 'Capturing a moment from orientation. Excited to begin the journey.',
      date: 'May 21, 2024'
    },
    {
      id: 4,
      type: 'image',
      src: '/images/gallery/IMG_4390.jpg',
      title: 'Desk Setup',
      description: 'My workspace setup – dual monitors and a clean desk for productive coding days.',
      date: 'May 22, 2024'
    },
    {
      id: 5,
      type: 'image',
      src: '/images/gallery/1H0A8652.jpg',
      title: 'Wireframing Session',
      description: 'Working on UI/UX planning in Figma – learning how much effort goes into great design.',
      date: 'June 10, 2024'
    },
    {
      id: 6,
      type: 'image',
      src: '/images/gallery/Smashpark 13.jpg',
      title: 'Smash Park Bowling',
      description: 'Bowling night at Smash Park with the interns – a fun way to unwind and connect.',
      date: 'June 26, 2024'
    },
    {
      id: 7,
      type: 'image',
      src: '/images/gallery/IMG_4400.JPG',
      title: 'More Bowling at Smash Park',
      description: 'Another shot from the Smash Park bowling outing – intern fun continues.',
      date: 'June 26, 2024'
    },
    {
      id: 8,
      type: 'image',
      src: '/images/gallery/Intern Vol 2.jpg',
      title: 'Diaper Organization Group Photo',
      description: 'Volunteering with the team for a local diaper charity. A rewarding day giving back to the community.',
      date: 'June 27, 2024'
    },
    {
      id: 9,
      type: 'image',
      src: '/images/gallery/Intern Vol Full Group 6.jpg',
      title: 'Volunteer Group Photo',
      description: 'Team photo after volunteering for multiple local organizations. Great way to wrap up a week of impact.',
      date: 'June 27, 2024'
    },
    {
      id: 10,
      type: 'image',
      src: '/images/gallery/Diaper Bank ODM Truck 6.25.JPEG',
      title: 'Diaper Truck',
      description: 'Packed truck full of donated diapers. A tangible impact from our volunteering efforts.',
      date: 'June 27, 2024'
    },
    {
      id: 11,
      type: 'image',
      src: '/images/gallery/IMG_4468.jpg',
      title: 'EAC Golf Outing',
      description: 'EAC golf outing with coworkers – beautiful day for bonding outside the office.',
      date: 'June 20, 2024'
    },
    {
      id: 12,
      type: 'image',
      src: '/images/gallery/IMG_4503.JPG',
      title: 'Golfing with Friends',
      description: 'Afternoon golf with intern friends. Perfect way to build connections and enjoy the sun.',
      date: 'June 20, 2024'
    },
    {
      id: 13,
      type: 'video',
      src: '/images/gallery/httpsvgroupmecom10386214220250618T235752Z689391de1920x1080r0mp4_..MP4',
      title: 'Golf Swing Video',
      description: 'Video capture of my golf swing – form needs work but had a great time!',
      date: 'June 20, 2024'
    },
    {
      id: 14,
      type: 'image',
      src: '/images/gallery/IMG_4557.jpg',
      title: 'Professional Headshot',
      description: 'My official headshot during the internship. Used for internal and professional profiles.',
      date: 'June 5, 2024'
    },
    {
      id: 15,
      type: 'image',
      src: '/images/gallery/IMG_4583.JPG',
      title: 'Career Bucket List Activity',
      description: 'Participating in the career bucket list activity – thinking big about future goals.',
      date: 'May 23, 2024'
    },
    {
      id: 16,
      type: 'image',
      src: '/images/gallery/IMG_4585.JPG',
      title: 'Additional Memory',
      description: 'Another great moment from the internship experience.',
      date: 'June 15, 2024'
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
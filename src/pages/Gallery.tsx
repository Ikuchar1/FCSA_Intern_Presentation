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
      description: 'Group photo with fellow interns on the first day. Great to meet everyone and begin the summer together.'
    },
    {
      id: 2,
      type: 'image',
      src: '/images/gallery/Smashpark 13.jpg',
      title: 'Smash Park Bowling',
      description: 'Bowling night at Smash Park with the interns – a fun way to unwind and connect.'
    },
    {
      id: 3,
      type: 'image',
      src: '/images/gallery/deskImage.JPG',
      title: 'Desk Setup',
      description: 'My workspace setup – dual monitors and a clean desk for productive coding days.'
    },
    {
      id: 5,
      type: 'image',
      src: '/images/gallery/Intern Vol 2.jpg',
      title: 'Diaper Organization Group Photo',
      description: 'Volunteering with the team for a local diaper charity. A rewarding day giving back to the community.'
    },
    {
      id: 6,
      type: 'image',
      src: '/images/gallery/wireframe.jpg',
      title: 'Wireframing Session',
      description: 'Working on UI/UX planning in Figma – learning how much effort goes into great design.'
    },
    {
      id: 7,
      type: 'image',
      src: '/images/gallery/ap.jpg',
      title: 'Access Period Volunteering',
      description: 'Volunteering for Access Period – giving back to the community and supporting important causes.'
    },
    {
      id: 8,
      type: 'image',
      src: '/images/gallery/aboutMePic.JPG',
      title: 'Professional Headshot',
      description: 'My official headshot during the internship. Used for internal and professional profiles.'
    },
    {
      id: 9,
      type: 'image',
      src: '/images/gallery/orientationPresentation.jpg',
      title: 'Orientation Moments',
      description: 'Capturing a moment from orientation. Excited to begin the journey.'
    },
    {
      id: 10,
      type: 'image',
      src: '/images/gallery/raikesGolf.JPG',
      title: 'Golfing with Friends',
      description: 'Afternoon golf with Raikes friends. Perfect way to build connections and enjoy the sun.'
    },
    {
      id: 11,
      type: 'image',
      src: '/images/gallery/careerBucketList.jpg',
      title: 'Career Bucket List Activity',
      description: 'Participating in the career bucket list activity – thinking big about future goals.'
    },
    {
      id: 12,
      type: 'image',
      src: '/images/gallery/sidepic.jpg',
      title: 'Orientation Day',
      description: 'Orientation day at FCSA – kicking off the internship by learning about core values and meeting the team.'
    },
    {
      id: 13,
      type: 'image',
      src: '/images/gallery/pizza.JPG',
      title: 'Farmers Market Pizza',
      description: 'Delicious pizza from the local farmers market – a great lunch break during the internship.'
    },
    {
      id: 14,
      type: 'video',
      src: '/images/gallery/httpsvgroupmecom10386214220250618T235752Z689391de1920x1080r0mp4_..MP4',
      title: 'Golf Swing Video',
      description: 'Video capture of my golf swing – form needs work but had a great time!'
    },
    {
      id: 4,
      type: 'image',
      src: '/images/gallery/round1.JPG',
      title: 'Round 1 Arcade Outing',
      description: 'Team outing at Round 1 arcade in Lincoln – gaming and bonding with fellow interns.'
    },
    {
      id: 15,
      type: 'image',
      src: '/images/gallery/Diaper Bank ODM Truck 6.25.JPEG',
      title: 'Diaper Truck',
      description: 'Packed truck full of donated diapers. A tangible impact from our volunteering efforts.'
    },
    {
      id: 16,
      type: 'image',
      src: '/images/gallery/Intern Vol Full Group 6.jpg',
      title: 'Volunteer Group Photo',
      description: 'Team photo after volunteering for multiple local organizations. Great way to wrap up a week of impact.'
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
                {item.type === 'video' ? (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      muted
                      preload="metadata"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                      <div className="bg-white/90 rounded-full p-3 group-hover:bg-white transition-colors duration-300">
                        <Play className="h-6 w-6 text-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
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
                <p className="text-muted-foreground">{selectedMedia.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
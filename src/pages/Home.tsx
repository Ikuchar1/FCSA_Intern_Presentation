import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Calendar, Clock, Eye, QrCode, Copy, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Internship details - update these with your actual dates
  const internshipStart = new Date("2025-05-21"); // May 21st, 2025
  const internshipEnd = new Date("2025-08-14T17:00:00Z"); // August 14th at Noon Central Time
  const totalDays = Math.ceil((internshipEnd.getTime() - internshipStart.getTime()) / (1000 * 60 * 60 * 24));
  const daysCompleted = Math.ceil((new Date().getTime() - internshipStart.getTime()) / (1000 * 60 * 60 * 24));
  const progressPercent = Math.min(Math.max((daysCompleted / totalDays) * 100, 0), 100);

  // Live countdown to end of internship
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = internshipEnd.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [internshipEnd]);

  return (
    <main className="min-h-screen bg-background" tabIndex={-1}>
      {/* About Me Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image */}
                <div className="order-2 md:order-1 flex justify-center">
                  <div className="relative">
                    <img
                      src="/images/gallery/aboutMePic.JPG"
                      alt="Ian Kuchar headshot"
                      className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg ring-4 ring-primary/10"
                    />
                  </div>
                </div>
                
                {/* Details */}
                <div className="order-1 md:order-2 text-center md:text-left space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      Ian Kuchar
                    </h1>
                    
                    <div className="space-y-2 text-lg">
                      <p><span className="font-semibold">College:</span> University of Nebraska–Lincoln</p>
                      <p><span className="font-semibold">Position:</span> Application Developer Intern</p>
                      <p><span className="font-semibold">Team:</span> Cash Flow Coders</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                      Passionate computer science student with a drive for innovation and problem-solving. 
                      Currently gaining hands-on experience in full-stack development and modern technologies 
                      through my internship journey.
                    </p>
                    
                    <div className="flex justify-center md:justify-start">
                      <a 
                        href="#qr" 
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <QrCode className="h-4 w-4" />
                        Visit this site
                      </a>
                    </div>
                    
                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <Badge variant="secondary">Angular</Badge>
                      <Badge variant="secondary">.NET</Badge>
                      <Badge variant="secondary">Collaboration</Badge>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Progress Tracker */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Progress Tracker</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{Math.max(daysCompleted, 0)}</div>
                  <p className="text-muted-foreground">Days Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{totalDays}</div>
                  <p className="text-muted-foreground">Total Days</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{progressPercent.toFixed(1)}%</div>
                  <p className="text-muted-foreground">Progress</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{Math.ceil(daysCompleted / 7)}</div>
                  <p className="text-muted-foreground">Weeks Complete</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Internship Progress</span>
                  <span>{progressPercent.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Countdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Clock className="h-5 w-5" />
                Time Remaining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                  <p className="text-sm text-muted-foreground">Days</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                  <p className="text-sm text-muted-foreground">Minutes</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                  <p className="text-sm text-muted-foreground">Seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
          <Card>
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <p className="text-muted-foreground">
                  I'd love to connect and discuss my internship experience, projects, or potential opportunities.
                </p>
              </div>
              <div className="flex justify-center gap-8 flex-wrap">
                <a 
                  href="mailto:ian1kuchar@gmail.com" 
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  ian1kuchar@gmail.com
                </a>
                <a 
                  href="https://github.com/Ikuchar1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5" />
                  Ikuchar1
                </a>
                <a 
                  href="https://linkedin.com/in/ian-kuchar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  ian-kuchar
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* QR Code Section */}
      <section id="qr" className="py-16 px-4 mt-12">
        <div className="max-w-sm md:max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Scan to Visit This Site</h2>
          <Card className="rounded-xl ring-1 ring-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              {/* QR Placeholder */}
              <div 
                className="mx-auto mb-6 w-56 h-56 md:w-80 md:h-80 rounded-xl bg-gradient-to-br from-muted/50 to-muted/80 border border-border/50 flex items-center justify-center relative overflow-hidden"
                role="img" 
                aria-label="Placeholder for QR code"
              >
                {/* Diagonal grid pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      hsl(var(--border)) 10px,
                      hsl(var(--border)) 11px
                    )`
                  }}></div>
                </div>
                
                {/* QR Icon */}
                <QrCode className="h-16 w-16 md:h-20 md:w-20 text-muted-foreground z-10" />
              </div>
              
              {/* Placeholder Text */}
              <div className="space-y-2 mb-6">
                <p className="font-semibold text-foreground">QR code coming soon</p>
                <p className="text-sm text-muted-foreground">I'll add the actual link after deployment.</p>
              </div>
              
              {/* Future Action Buttons */}
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="sm" disabled className="opacity-50">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
                <Button variant="outline" size="sm" disabled className="opacity-50">
                  <Download className="h-4 w-4 mr-2" />
                  Download QR
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Home;
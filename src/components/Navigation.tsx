import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, ImageIcon, Code, X, Calendar, Users, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Weekly Journey", path: "/weekly-journey", icon: Calendar },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Connections", path: "/connections", icon: Users },
    { name: "Reflection", path: "/reflection", icon: BookOpen },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
  ];

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ item, mobile = false }: { item: typeof navItems[0], mobile?: boolean }) => (
    <Link
      to={item.path}
      onClick={() => mobile && setIsOpen(false)}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
        isActive(item.path)
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent hover:text-accent-foreground"
      } ${mobile ? "w-full justify-start" : ""}`}
    >
      <item.icon className="h-4 w-4" />
      {item.name}
    </Link>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">IJ</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">Internship Journey</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">IJ</span>
                  </div>
                  <span className="font-bold">Internship Journey</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <NavLink key={item.name} item={item} mobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
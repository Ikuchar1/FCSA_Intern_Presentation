# Site Walkthrough - Internship Journey Portfolio

## 1) Site Overview

**Tech Stack:**
- Framework: React 18 with TypeScript
- Styling: Tailwind CSS with custom design system (HSL color tokens)
- Component Library: shadcn/ui components with Radix UI primitives
- Icons: Lucide React
- Routing: React Router DOM v6
- State Management: @tanstack/react-query
- Animations: CSS transitions and Tailwind animations

**Navigation Routes Detected:**
- `/` - Home (landing page)
- `/gallery` - Gallery (media showcase)
- `/projects` - Projects (portfolio showcase)
- `/weekly-journey` - Weekly Journey (detailed timeline)
- `/connections` - Connections (networking contacts)
- `/reflection` - Reflection (goals and values)

**Global Patterns Used:**
- Cards with hover effects and shadows (`Card`, `CardHeader`, `CardContent`)
- Modal dialogs for detailed views (`Dialog`)
- Badges for tags and status indicators (`Badge`)
- Progress bars and status tracking (`Progress`)
- Responsive grids (CSS Grid and Flexbox)
- Gradient backgrounds and text effects
- Icon integration throughout (Lucide React)

## 2) Home (/)

**Purpose:** Landing page showcasing personal introduction, internship progress tracking, and contact information.

**Sections Shown:**
- **About Me Card:** Profile with headshot (`/images/gallery/internHeadshot.JPG`), personal details (Name: Ian Kuchar, College: UNL, Position: Application Developer Intern, Hometown: Bloomfield, NE), bio summary, skill badges, action buttons
- **Progress Tracker:** Live countdown timer to internship end (days/hours/minutes/seconds format)
- **Contact Section:** "Let's Connect" with email mailto link and social media buttons

**Not Rendered:** Internship Overview section (removed), Weekly Journey carousel (removed from Home)

**Interactions/Links:**
- "Contact Me" button → mailto link
- "View Gallery" button → `/gallery`
- Social media icons → external profile links

**Notable Components & Files:**
- `src/pages/Home.tsx` - main page component with countdown logic
- Uses `useState` and `useEffect` for real-time countdown
- Progress calculation based on internship start/end dates
- Contact section with external link integrations

## 3) Gallery (/gallery)

**Purpose:** Visual showcase of internship experiences through images and videos with modal viewing capability.

**Data:** 18 total media items (17 images + 1 video) defined in static array within component
- Images: JPG/JPEG format from `/public/images/gallery/`
- Video: MP4 format with thumbnail preview
- Each item has: `id`, `type`, `src`, `title`, `description`

**Layout:** 
- Responsive 3-column grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Card-based presentation with hover effects
- Smooth transitions and scaling on hover
- Auto-fit masonry-style arrangement

**Modal Behavior:**
- Click to open full-size view in dialog overlay
- Previous/Next navigation with chevron buttons
- Keyboard support (Esc to close)
- Separate handling for images vs video playback
- Displays title and description below media

**Notable Components & Files:**
- `src/pages/Gallery.tsx` - main component with modal state management
- Uses `useState` for selected media and index tracking
- `Dialog` component from shadcn/ui for modal overlay
- `ChevronLeft`/`ChevronRight` for navigation

**Presenter Bullets:**
- "18 curated moments from my internship journey"
- "Interactive gallery with full-screen viewing"
- "Mix of professional events, team activities, and project work"
- "Each image tells part of my growth story"

## 4) Connections / Coffee Chats (/connections)

**Purpose:** Showcase professional networking efforts and relationships built during internship.

**Card Structure:** Name, Title, Overview (role description), Key Takeaways (bulleted insights)

**Real Entry Included:** Jason Trent (Program Manager) with detailed bullet points about his role and conversations

**Placeholders Present:** 4 additional placeholder connections with "TBD" content

**Notable Components & Files:**
- `src/pages/Connections.tsx` - main component with connection data
- Static array of connection objects
- Gradient background with decorative elements
- Card-based layout with hover animations
- Call to Action section about professional networking

**Presenter Bullets:**
- "Strategic networking across different departments and roles"
- "Real conversations with meaningful takeaways documented"
- "Building relationships beyond my immediate team"
- "Understanding diverse career paths within the organization"

## 5) Projects (/projects)

**Card Grid:** Cover image, title, preview text, technology badges, single "View More" button (secondary icon button removed)

**Modal (View More) State:**
- **Sections:** Key Highlights (bulleted accomplishments), Project Overview (detailed paragraph), Technologies Used (prominent badges with larger styling)
- **Removed:** Project Links section, carousel navigation, "Project Images" header text
- **Image:** Single static hero image, centered, object-contain, rounded corners, subtle shadow

**Projects Included:**
1. **Hall of Champions** - Angular tutorial transformed into themed application
2. **My Account Balance Sheet** - Line item management, refactor work, Figma design parity
3. **Personal Project** - Lovable/AI-assisted development workflow

**Notable Components & Files:**
- `src/pages/Projects.tsx` - main component (recently updated)
- Modal state management with `useState`
- Single image display (carousel functionality removed)
- Enhanced badge styling for technologies
- Button interactions for modal open/close

**Presenter Bullets:**
- "Three distinct projects showcasing different skills"
- "From tutorial customization to enterprise development"
- "Real-world impact on internal tools and processes"
- "Modern tech stack and best practices applied"

## 6) Reflection (/reflection)

**Goals Section:**
- **Goal 1 (Networking):** "Build My Horizons and Expand My Professional Network" → Button links to `/connections`
- **Goal 2 (Pair Programming):** "Become a Better Pair Programmer" → Button links to `/projects`

**We Are Statements (FCSA Values):**
- **Teammates:** Pair programming improvement, DISC alignment, collaborative problem-solving
- **Leaders:** Balance sheet ownership, meeting contributions, Bytes & Insights facilitation
- **Experts:** Technical growth confidence, agile proficiency, independent project capability
- **Future-focused:** Reusable component development for Digital Services, maintainability focus
- **Difference Makers:** FO/customer impact prioritization, time savings, usability improvements

**Notable Components & Files:**
- `src/pages/Reflection.tsx` - comprehensive reflection component
- Gradient backgrounds with decorative elements
- Interactive buttons linking to other portfolio sections
- Color-coded value statements with unique icons
- Detailed bullet points for each FCSA value demonstration

**Presenter Bullets:**
- "Two concrete goals with measurable outcomes"
- "Direct alignment with FCSA's core values"
- "Evidence-based examples of growth and contribution"
- "Integration between reflection and portfolio sections"

## 7) Weekly Journey (/weekly-journey)

**Purpose:** Detailed chronological breakdown of 13-week internship experience.

**Data Structure:** 13 weeks with detailed tracking:
- **Completed:** Weeks 1-10 with full content
- **Current:** Week 11 (placeholder content)
- **Upcoming:** Weeks 12-13 (placeholder content)

**Week Content:** Each week includes title, dates, focus area, summary, achievements, highlights, skills developed, challenges overcome, status indicator

**Layout:** 
- Progress tracking header
- Timeline-style card layout
- Color-coded status badges (completed/current/upcoming)
- Two-column responsive grid within each week card
- Status icons (CheckCircle/Clock/Target)

**Notable Components & Files:**
- `src/pages/WeeklyJourney.tsx` - comprehensive timeline component
- Progress calculation based on completed weeks
- Responsive grid layout for week details
- Badge system for status and skill tracking

**Presenter Bullets:**
- "Comprehensive 13-week journey documentation"
- "Real-time progress tracking with 77% completion"
- "Detailed growth narrative with specific achievements"
- "Skills development and challenge documentation"

## 8) Appendix: Component Map

**Core Application:**
- `src/App.tsx` - Main app component with routing configuration
- `src/main.tsx` - Application entry point
- `src/components/Navigation.tsx` - Responsive navigation with mobile sheet

**Page Components:**
- `src/pages/Home.tsx` - Landing page with countdown timer
- `src/pages/Gallery.tsx` - Media gallery with modal viewer
- `src/pages/Projects.tsx` - Project portfolio with detailed modals
- `src/pages/Connections.tsx` - Professional networking showcase
- `src/pages/Reflection.tsx` - Goal reflection and values alignment
- `src/pages/WeeklyJourney.tsx` - Detailed timeline component
- `src/pages/Index.tsx` - Fallback component (unused)
- `src/pages/NotFound.tsx` - 404 error page

**UI Components:**
- `src/components/ui/button.tsx` - Button variants and styling
- `src/components/ui/card.tsx` - Card container components
- `src/components/ui/dialog.tsx` - Modal dialog components
- `src/components/ui/badge.tsx` - Tag and status indicators
- `src/components/ui/progress.tsx` - Progress bar component
- Additional shadcn/ui components for forms, navigation, etc.

**Design System:**
- `src/index.css` - Global styles and design tokens (HSL color system)
- `tailwind.config.ts` - Tailwind configuration and theme extension

## 9) Demo Pacing (8 minutes)

**Suggested Time Split:**
- **Home (1:00):** "Welcome overview, countdown timer, quick navigation tour"
- **Gallery (1:30):** "Visual story of internship moments, modal interaction demo"
- **Connections (1:00):** "Networking strategy and professional relationships built"
- **Projects (3:00):** "Deep dive into three key projects - technical skills and impact"
- **Reflection (1:30):** "Goal achievement and FCSA values demonstration"
- **Weekly Journey (1:00):** "Comprehensive timeline showing growth progression"

**Talking Prompts Per Section:**

**Home:**
- "This portfolio captures my 13-week internship journey"
- "Live countdown shows we're currently 77% complete"

**Gallery:**
- "18 curated moments showing both technical work and team culture"
- "Each image represents a different aspect of professional growth"

**Connections:**
- "Strategic networking across departments and roles"
- "Real conversations with documented takeaways and insights"

**Projects:**
- "Three projects showing progression from tutorials to enterprise impact"
- "Hall of Champions: Learning Angular through themed customization"
- "Balance Sheet: Real internal tool development with modern practices"

**Reflection:**
- "Two concrete goals with measurable outcomes achieved"
- "Direct demonstration of FCSA's five core values through specific examples"

**Weekly Journey:**
- "Detailed progression showing consistent growth and learning"
- "10 completed weeks of documented achievements and challenges"

---

*Document generated from current codebase state. All features and content reflect actual implementation.*
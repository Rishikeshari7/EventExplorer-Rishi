# 🎉 EventHub - Mini Events Explorer Application

A modern, responsive web application for discovering and exploring events happening around you. Built with Next.js 15, TypeScript, and Tailwind CSS.

![EventHub Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=EventHub+Preview)

## ✨ Features

### 🔍 **Event Discovery**
- Browse events with beautiful card layouts
- Advanced search functionality across titles, descriptions, and locations
- Filter by categories (Technology, Music, Business, Workshops, etc.)
- Sort by date, price, or name
- Grid and list view modes

### 🎨 **Modern UI/UX**
- Clean, modern design with gradient accents
- Fully responsive across all devices
- Dark/Light theme support with smooth transitions
- Smooth animations and hover effects
- Accessibility-first approach

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for tablets and desktops
- Touch-friendly interface
- Adaptive layouts

### 🌙 **Theme Support**
- Light and dark mode toggle
- System preference detection
- Smooth theme transitions
- Consistent styling across themes

### 📅 **Event Management**
- Detailed event pages with comprehensive information
- Event categorization and tagging
- Price display (Free/Paid events)
- Venue and location details
- Organizer information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/eventhub.git
   cd eventhub
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with latest features
- **TypeScript** - Type-safe development

### **Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Additional styling and animations
- **Responsive Design** - Mobile-first approach

### **Icons & UI**
- **Lucide React** - Beautiful, customizable icons
- **Custom Components** - Built from scratch without UI libraries

### **Theme Management**
- **next-themes** - Dark/light mode support

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

\`\`\`
eventhub/
├── app/                    # Next.js App Router
│   ├── events/
│   │   └── [id]/
│   │       └── page.tsx   # Event detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── badge.tsx         # Badge component
│   ├── card.tsx          # Card component
│   ├── event-card.tsx    # Event card component
│   ├── events-grid.tsx   # Events grid with filters
│   ├── events-section.tsx # Events section
│   ├── footer.tsx        # Footer component
│   ├── hero-section.tsx  # Hero section
│   ├── input.tsx         # Input component
│   ├── navbar.tsx        # Navigation bar
│   ├── select.tsx        # Select component
│   └── theme-toggle.tsx  # Theme switcher
├── data/                 # Static data
│   └── events.ts         # Mock event data
├── types/                # TypeScript types
│   └── event.ts          # Event type definitions
├── utils/                # Utility functions
│   └── date.ts           # Date utility functions
└── public/               # Static assets
\`\`\`

## 🎯 Key Components

### **EventCard**
Displays event information in both grid and list layouts with:
- Event image with gradient overlay
- Category badges
- Date and time information
- Location and venue details
- Price information
- Bookmark functionality

### **EventsGrid**
Advanced filtering and search functionality:
- Real-time search across multiple fields
- Category and location filters
- Sort options (date, price, name)
- View mode toggle (grid/list)
- Active filter display

### **Navbar**
Responsive navigation with:
- Logo and branding
- Search functionality
- Theme toggle
- Mobile hamburger menu
- User actions

### **Footer**
Comprehensive footer with:
- Company information
- Quick links
- Popular categories
- Contact details
- Newsletter signup
- Social media links

## 🎨 Design System

### **Colors**
- **Primary**: Violet (#8B5CF6)
- **Secondary**: Indigo (#6366F1)
- **Accent**: Purple (#A855F7)
- **Gray Scale**: Tailwind gray palette

### **Typography**
- **Headings**: Poppins font family
- **Body**: Inter font family
- **Responsive sizing**: Mobile-first approach

### **Spacing**
- **Consistent spacing**: Tailwind spacing scale
- **Grid system**: CSS Grid and Flexbox
- **Responsive breakpoints**: sm, md, lg, xl

## 📊 Data Structure

### **Event Type**
\`\`\`typescript
interface Event {
  id: number
  title: string
  description: string
  fullDescription: string
  date: string
  day: string
  time: string
  duration: string
  location: string
  venue: string
  category: string
  isPaid: boolean
  price?: number
  attendees: string
  organizer: string
  contact: string
  highlights?: string[]
}
\`\`\`

## 🔧 Utilities

### **DateUtils**
Custom date utility class providing:
- Date formatting functions
- Relative time calculations
- Date comparison methods
- Sorting and filtering helpers
- Lightweight alternative to date-fns

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Other Platforms**
\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Performance Features

- **Static Site Generation** - Pre-rendered pages for better performance
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting for faster loads
- **Responsive Images** - Optimized images for different screen sizes

## 🔒 SEO & Accessibility

- **Meta Tags** - Proper meta tags for each page
- **Semantic HTML** - Proper HTML structure
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - WCAG compliant color ratios

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icons
- **Vercel** - For the deployment platform

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact us at hello@eventhub.com
- Visit our website at [eventhub.com](https://eventhub.com)

---

**Made with ❤️ in India**

*EventHub - Discover Amazing Events Around You*

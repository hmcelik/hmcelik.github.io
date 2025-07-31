# Huseyin Melih Celik - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing expertise in robotics, software engineering, and full-stack development.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices  
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Professional Components**: Using shadcn/ui for high-quality UI components
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional background and passion for technology
3. **Experience** - Professional experience including AR/VR internship
4. **Projects** - Featured projects including:
   - Autonomous Rescue Robot Simulation (ROS + Unity)
   - Supermarket Tycoon (Java Game)
   - Telegram Moderation Platform (Full-stack)
5. **Skills** - Technical skills organized by category
6. **Contact** - Professional contact information and social links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd my-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience section
│   ├── Projects.tsx        # Projects section
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Skills.tsx          # Skills section
│   └── Contact.tsx         # Contact section
public/
├── cv.pdf                  # Resume/CV file (add your own)
└── [icons]                 # Project icons and images
\`\`\`

## 🎨 Customization

### Adding Your CV
1. Create your CV as a PDF file
2. Name it \`cv.pdf\`
3. Place it in the \`public\` folder

### Updating Content
- **Personal Info**: Update contact details in \`Contact.tsx\`
- **Projects**: Modify the projects array in \`Projects.tsx\`
- **Experience**: Update experience details in \`Experience.tsx\`
- **Skills**: Modify skill categories in \`Skills.tsx\`

### Styling
- Colors and themes are configured via Tailwind CSS
- shadcn/ui components use CSS variables for theming
- Global styles are in \`globals.css\`

## 📞 Contact

- **Email**: h.m.celik@student.tue.nl
- **LinkedIn**: [linkedin.com/in/huseyinmelih](https://linkedin.com/in/huseyinmelih)
- **GitHub**: [github.com/huseyinmelih](https://github.com/huseyinmelih)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Huseyin Melih Celik

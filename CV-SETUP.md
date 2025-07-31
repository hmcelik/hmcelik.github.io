# CV Setup Instructions

Your portfolio now has multiple CV options available. Here's how to set up the PDF download:

## 🚀 Quick Setup (Recommended)

### Option 1: Use Overleaf (Online LaTeX Editor)
1. Go to [Overleaf.com](https://overleaf.com/)
2. Create a free account
3. Create a new project
4. Copy the entire contents of `cv.tex` (in your project root)
5. Paste into Overleaf editor
6. Click "Recompile" to generate PDF
7. Download the PDF and save it as `public/cv.pdf`
8. Update the Hero component to use the PDF download again

### Option 2: Print HTML to PDF
1. Visit `http://localhost:3002/cv.html` in your browser
2. Press `Ctrl+P` (Windows) or `Cmd+P` (Mac) to print
3. Select "Save as PDF" as destination
4. Save as `public/cv.pdf`

## 🔧 Advanced Setup

### Install LaTeX Locally (Windows)
1. Download and install [MiKTeX](https://miktex.org/download)
2. Open Command Prompt in your project directory
3. Run: `pdflatex cv.tex`
4. Move generated `cv.pdf` to `public/cv.pdf`

### Update Download Button (After PDF is ready)
Replace the Hero component's CV button with:
```jsx
<Button 
  variant="outline" 
  size="lg"
  className="text-lg px-8 py-3"
  asChild
>
  <a href="/cv.pdf" download="Huseyin_Melih_Celik_CV.pdf">
    Download CV
    <Download className="ml-2 h-5 w-5" />
  </a>
</Button>
```

## 📄 Available CV Formats

1. **LaTeX Source**: `cv.tex` - Professional LaTeX template
2. **HTML Version**: `public/cv.html` - Web-friendly format that can be printed to PDF
3. **PDF Version**: `public/cv.pdf` - Final PDF file (needs to be generated)

## 🎨 Customization

To update CV content:
1. Edit `cv.tex` for the LaTeX version
2. Edit `public/cv.html` for the HTML version
3. Regenerate PDF using your preferred method

The CV includes all your information:
- Education (TU/e, The Koç School with achievements)
- Experience (AR/VR Internship at Reo-Tek)
- Projects (Telegram Platform, Pixel Bounce, Supermarket Tycoon)
- Skills (Languages, Frameworks, Tools, Concepts)
- Contact information with working links

## 🌐 Current Status

The "View CV" button currently opens the HTML version in a new tab, which users can print to PDF. Once you have a PDF file, you can switch back to the download functionality.

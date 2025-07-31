# CV Generation Instructions

Since LaTeX isn't installed locally, here are the options to generate your CV PDF:

## Option 1: Online LaTeX Compiler (Recommended for immediate use)
1. Go to https://overleaf.com/
2. Create a new project
3. Copy the contents of `cv.tex` into the editor
4. Compile to get your PDF
5. Download and save as `public/cv.pdf`

## Option 2: Local LaTeX Installation
1. Install MiKTeX (Windows) or TeX Live
2. Run: `pdflatex cv.tex` in the project directory
3. Copy the generated `cv.pdf` to `public/cv.pdf`

## Option 3: API Route (Future Enhancement)
I can create an API route that generates the PDF dynamically using an online LaTeX service.

For now, please use Option 1 to get your CV PDF quickly!

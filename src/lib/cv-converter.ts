import fs from 'fs';
import path from 'path';

// Simple LaTeX to HTML converter for CV
export function latexToHtml(latexContent: string): string {
  let html = latexContent;
  
  // Extract content between \begin{document} and \end{document}
  const documentMatch = html.match(/\\begin\{document\}([\s\S]*?)\\end\{document\}/);
  if (documentMatch) {
    html = documentMatch[1];
  }
  
  // Convert LaTeX commands to HTML
  html = html
    // Remove comments and LaTeX setup
    .replace(/\\pagestyle\{empty\}/g, '')
    .replace(/% ---.*?---/g, '')
    
    // Convert name
    .replace(/\\cvname\{([^}]+)\}/g, '<h1>$1</h1>')
    
    // Convert contact info
    .replace(/\\cvcontact\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}/g, 
      '<div class="contact-info">$1 • <a href="mailto:$2">$2</a> • <a href="https://linkedin.com/in/$3">linkedin.com/in/$3</a> • <a href="https://github.com/$4">github.com/$4</a></div>')
    
    // Convert sections
    .replace(/\\cvsection\{([^}]+)\}/g, '<div class="section-title">$1</div>')
    
    // Convert entries
    .replace(/\\cventry\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}/g, 
      '<div class="entry"><div class="entry-header"><div class="entry-title">$1</div><div class="entry-date">$2</div></div><div class="entry-subtitle">$3</div></div>')
    
    // Convert projects
    .replace(/\\cvproject\{([^}]+)\}\{([^}]+)\}/g, 
      '<div class="project"><div class="project-title">$1</div><div class="project-description">$2</div></div>')
    
    // Convert skills
    .replace(/\\cvskill\{([^}]+)\}\{([^}]+)\}/g, 
      '<div class="skills-category"><span class="skills-label">$1:</span> $2</div>')
    
    // Convert text formatting
    .replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>')
    .replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>')
    .replace(/\\href\{([^}]+)\}\{([^}]+)\}/g, '<a href="$1">$2</a>')
    
    // Convert lists
    .replace(/\\begin\{itemize\}.*?\\itemsep -2pt/g, '<ul class="achievements">')
    .replace(/\\end\{itemize\}/g, '</ul>')
    .replace(/\\item\s*/g, '<li>')
    
    // Clean up spacing and LaTeX artifacts
    .replace(/\\\\/g, '<br>')
    .replace(/\\vspace\{[^}]+\}/g, '')
    .replace(/\$\\cdot\$/g, '•')
    .replace(/\s+/g, ' ')
    .trim();
  
  return html;
}

export function updateHtmlFromLatex() {
  try {
    const latexPath = path.join(process.cwd(), 'cv.tex');
    const htmlPath = path.join(process.cwd(), 'public', 'cv.html');
    
    const latexContent = fs.readFileSync(latexPath, 'utf8');
    const convertedContent = latexToHtml(latexContent);
    
    // Read the current HTML template
    const currentHtml = fs.readFileSync(htmlPath, 'utf8');
    
    // Extract the body content between the opening and closing body tags
    const bodyMatch = currentHtml.match(/<body>([\s\S]*?)<\/body>/);
    if (bodyMatch) {
      // Replace the body content with the converted LaTeX
      const newHtml = currentHtml.replace(
        /<body>([\s\S]*?)<\/body>/,
        `<body>${convertedContent}</body>`
      );
      
      fs.writeFileSync(htmlPath, newHtml, 'utf8');
      console.log('HTML CV updated from LaTeX successfully');
    }
  } catch (error) {
    console.error('Failed to update HTML from LaTeX:', error);
  }
}

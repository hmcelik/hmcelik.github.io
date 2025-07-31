import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the LaTeX content
    const latexPath = path.join(process.cwd(), 'cv.tex');
    const latexContent = fs.readFileSync(latexPath, 'utf8');

    // Try the most reliable LaTeX compilation service
    try {
      console.log('Attempting LaTeX to PDF compilation...');
      
      // Method 1: Try latex.codecogs.com
      const response1 = await fetch('https://latex.codecogs.com/pdf.latex', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'formula': latexContent
        })
      });

      console.log('CodeCogs LaTeX service response:', response1.status, response1.statusText);
      
      if (response1.ok) {
        const contentType = response1.headers.get('content-type');
        if (contentType?.includes('application/pdf')) {
          const pdfBuffer = await response1.arrayBuffer();
          console.log('PDF compiled successfully with CodeCogs, size:', pdfBuffer.byteLength, 'bytes');
          
          return new NextResponse(pdfBuffer, {
            headers: {
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment; filename="Huseyin_Melih_Celik_CV.pdf"',
              'Cache-Control': 'no-cache',
            },
          });
        }
      }

      // Method 2: Try different latexonline URL
      const formData = new FormData();
      formData.append('filecontents[]', latexContent);
      formData.append('filename[]', 'cv.tex');

      const response2 = await fetch('https://latexonline.cc/compile', {
        method: 'POST',
        body: formData,
      });

      console.log('LatexOnline service response:', response2.status, response2.statusText);
      
      if (response2.ok) {
        const contentType = response2.headers.get('content-type');
        console.log('Response content type:', contentType);
        
        if (contentType?.includes('application/pdf')) {
          const pdfBuffer = await response2.arrayBuffer();
          console.log('PDF compiled successfully with LatexOnline, size:', pdfBuffer.byteLength, 'bytes');
          
          return new NextResponse(pdfBuffer, {
            headers: {
              'Content-Type': 'application/pdf',
              'Content-Disposition': 'attachment; filename="Huseyin_Melih_Celik_CV.pdf"',
              'Cache-Control': 'no-cache',
            },
          });
        } else {
          // Log the response for debugging
          const textResponse = await response2.text();
          console.log('LaTeX service returned non-PDF:', textResponse.substring(0, 500));
        }
      }
      
    } catch (compilationError) {
      console.error('LaTeX compilation error:', compilationError);
    }

    // If PDF compilation fails, return LaTeX source with clear instructions
    console.log('PDF compilation failed, returning LaTeX source with instructions');
    
    const enhancedLatex = `%=============================================================================
% PROFESSIONAL CV - HUSEYIN MELIH CELIK
%=============================================================================
%
% 🎯 QUICK COMPILATION GUIDE:
%
% OPTION 1 - OVERLEAF (RECOMMENDED):
% • Go to: https://overleaf.com/
% • Create new project → Upload this file
% • Click "Recompile" → Download PDF
%
% OPTION 2 - LOCAL LATEX:
% • Install TeX Live or MiKTeX
% • Run: pdflatex cv.tex
%
%=============================================================================

${latexContent}

%=============================================================================
% CV SOURCE END
%=============================================================================`;

    return new NextResponse(enhancedLatex, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': 'attachment; filename="CV_Huseyin_Melih_Celik.tex"',
      },
    });
    
  } catch (error) {
    console.error('API Error:', error);
    
    return new NextResponse(
      'Error generating CV. Please try again later or contact support.',
      {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );
  }
}

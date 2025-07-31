'use client';

import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';


const GitHubActivity = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  
  // --- JITTER FIX: State to control the fade animation ---
  const [isFading, setIsFading] = useState(false);

  // Generate array of years from 2022 to current year
  const years = Array.from({ length: currentYear - 2021 }, (_, i) => currentYear - i);

  // --- JITTER FIX: Improved handler for smooth transition ---
  const handleYearChange = (year: number) => {
    if (year === selectedYear) return;
    setIsFading(true);
    setTimeout(() => {
      setSelectedYear(year);
      setTimeout(() => {
        setIsFading(false);
      }, 50); // Small delay for smooth fade-in
    }, 200); // Longer fade-out duration
  };

  return (
    <section id="github-activity" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            My Coding Activity
          </h2>
          
          <div className="flex justify-center items-center">
            {/* --- LAYOUT FIX: Increased padding on this container --- */}
            <div className="bg-card/30 backdrop-blur-sm rounded-xl border border-border/50 p-4 md:p-6 w-full max-w-5xl">
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-around gap-4 lg:gap-6">
                {/* Calendar */}
                <div className="flex-1 min-h-[160px] md:min-h-[180px] flex justify-center items-center">
                  <div className="w-full">
                    <div className="flex justify-center">
                      {/* --- JITTER FIX: Improved transition with loading state --- */}
                      <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'} max-w-full`}>
                        <GitHubCalendar
                          key={`calendar-${selectedYear}`}
                          username="hmcelik"
                          year={selectedYear}
                          blockSize={14}
                          blockMargin={2}
                          fontSize={12}
                          showWeekdayLabels={true}
                          loading={isFading}
                          hideColorLegend={false}
                          hideMonthLabels={false}
                          hideTotalCount={false}
                          style={{
                            maxWidth: '100%',
                            overflow: 'visible'
                          }}
                          // --- JITTER FIX: Tooltip integration for contribution details ---
                          renderBlock={(block, activity) =>
                            React.cloneElement(block, {
                              'data-tooltip-id': 'react-tooltip',
                              'data-tooltip-html': `${activity.count} contributions on ${activity.date}`,
                            })
                          }
                          theme={{
                            light: ['#f1f5f9', '#c7d2fe', '#818cf8', '#6366f1', '#4338ca'],
                            dark: ['#0f0f23', '#1a1a3a', '#2d2d5f', '#4a4a7a', '#6b6b9d'],
                          }}
                        />
                        <Tooltip id="react-tooltip" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Year Selector */}
                <div className="flex flex-row lg:flex-col gap-2 justify-center lg:justify-start min-w-[60px]">
                  {years.map((year) => (
                    <button
                      key={year}
                      // --- JITTER FIX: Using the improved handler ---
                      onClick={() => handleYearChange(year)}
                      className={`px-3 py-1 text-sm rounded transition-all duration-200 whitespace-nowrap ${
                        selectedYear === year
                          ? 'bg-primary text-primary-foreground font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-lg">
            A visual journey of my dedication and progress in coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
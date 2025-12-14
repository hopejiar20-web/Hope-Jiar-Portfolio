import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  // Data for the portfolio
  const projects: Project[] = [
    {
      id: '1',
      title: 'Youth Employment and New Business Registrations in Nigeria (2020–2022)',
      description: 'This project investigates whether the rise of new business registrations in Nigeria between 2020 and 2022 effectively reduces youth unemployment or mainly indicates a shift towards self-employment amid a skills-opportunity mismatch. It marks the beginning of my learning journey in data analysis, data exploration, and reporting insights.',
      tools: ['Data Analysis', 'Data Exploration', 'Reporting'],
      youtubeId: '4zbWWDxgWNM', 
      imageUrl: 'https://picsum.photos/800/450', // Fallback
      slideDeckUrl: 'https://www.canva.com/design/DAG4fFa01ks/Q6ElFQRPrfWuUb7i6cAK2A/edit?utm_content=DAG4fFa01ks&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      date: 'Recent Work'
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-4 tracking-tight">Selected Works</h1>
          <p className="text-xl text-zinc-500 max-w-2xl">
            A collection of projects demonstrating my skills in data cleaning, analysis, and visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          
          {/* Placeholder for "More coming soon" */}
          <div className="min-h-[400px] rounded-2xl border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center p-8 text-center bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
               <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">More Projects In Progress</h3>
            <p className="text-zinc-500 max-w-sm">
              I am constantly learning and building. Check back soon for new case studies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
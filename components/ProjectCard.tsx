import React from 'react';
import { FileText, Youtube } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
      
      {/* Video Placeholder or Embed */}
      <div className="aspect-video w-full bg-zinc-100 relative overflow-hidden">
        {project.youtubeId ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-100 text-zinc-400">
             {project.imageUrl ? 
               <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" /> :
               <Youtube className="w-12 h-12" />
             }
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool) => (
            <span key={tool} className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-zinc-600 bg-zinc-100 rounded-full">
              {tool}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-zinc-900 mb-3 group-hover:text-zinc-700 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-zinc-500 mb-6 leading-relaxed flex-grow text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-50 mt-auto">
          {project.slideDeckUrl ? (
            <a 
              href={project.slideDeckUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-zinc-900 hover:text-blue-600 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" /> View Slide Deck
            </a>
          ) : (
            <span className="inline-flex items-center text-sm font-medium text-zinc-400 cursor-not-allowed">
              <FileText className="w-4 h-4 mr-2" /> Slides Coming Soon
            </span>
          )}
          
          <span className="inline-flex items-center text-xs font-medium text-zinc-400 ml-auto bg-zinc-50 px-2 py-1 rounded">
             {project.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
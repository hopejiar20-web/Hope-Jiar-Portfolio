export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  youtubeId?: string; // e.g., 'dQw4w9WgXcQ'
  slideDeckUrl?: string;
  imageUrl?: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}

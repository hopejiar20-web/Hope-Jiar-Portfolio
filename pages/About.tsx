import React from 'react';
import { Download, Code2, Database, Layout } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] w-full rounded-3xl bg-zinc-100 overflow-hidden shadow-xl shadow-zinc-200/50 rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://drive.google.com/thumbnail?id=1xj5o6MK04-B6BLIZrXfgl9rHnVsqjTb3&sz=w1000" 
                  alt="Hope Jiar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-heading font-bold text-zinc-900 mb-6">Bio</h1>
                <p className="text-lg text-zinc-600 leading-relaxed font-light">
                Hope Jiar is an aspiring Data Analytics Specialist with a Bachelor’s degree in Mathematics and a Master’s in Financial Economics. She is passionate about transforming complex data into actionable insights that drive meaningful decisions and create real-world impact. What makes Hope unique is her ability to notice patterns, not just in numbers, but in systems and processes, allowing her to uncover opportunities others might miss. Currently developing her skills through hands-on projects and online training, Hope has experience analyzing datasets, creating visualizations, and applying statistical techniques to practical problems. Her work in data analytics allows her to explore her passion for solving real challenges, particularly those that contribute to job creation and business growth. Outside of numbers, Hope has a quirky eye for patterns, sometimes even spotting trends in the most unexpected places, like people’s socks. This mix of analytical rigor and curiosity fuels her approach to learning and problem-solving, helping her transform insights into strategies that matter.
                </p>
            </div>

            <div className="pt-2">
                <h3 className="text-lg font-bold text-zinc-900 mb-4">Technical Toolkit</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                    <Database className="text-blue-600 w-5 h-5" />
                    <span className="text-zinc-700 font-medium text-sm">SQL (PostgreSQL)</span>
                  </div>
                   <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                    <Layout className="text-yellow-600 w-5 h-5" />
                    <span className="text-zinc-700 font-medium text-sm">Tableau / PowerBI</span>
                  </div>
                   <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                    <Code2 className="text-blue-500 w-5 h-5" />
                    <span className="text-zinc-700 font-medium text-sm">Python (Pandas)</span>
                  </div>
                   <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
                    <BarChart2 className="text-green-600 w-5 h-5" />
                    <span className="text-zinc-700 font-medium text-sm">Excel (Advanced)</span>
                  </div>
                </div>
            </div>

            <div className="pt-6">
              <Button variant="outline" className="rounded-full">
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the icon
const BarChart2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );

export default About;
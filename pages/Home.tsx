import React from 'react';
import { ArrowRight, BarChart2, PieChart, Database, FileSpreadsheet, Globe, Linkedin } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8 animate-fade-in-up">
            
            <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-500 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
              AVAILABLE FOR WORK
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-zinc-900 tracking-tight leading-[1.1]">
              Hi, I’m a <br />
              <span className="text-zinc-400">Data Analyst.</span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-500 max-w-xl leading-relaxed">
              I have experience transforming raw numbers into clear vision and mindful strategies for startups and established brands.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button to="/contact" className="h-14 px-8 text-base">
                Contact Us
              </Button>
              <Button to="/portfolio" variant="outline" className="h-14 px-8 text-base">
                View Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                href="https://www.linkedin.com/in/hope-jiar-7721b6361" 
                target="_blank" 
                variant="outline" 
                className="h-14 w-14 p-0 rounded-full flex items-center justify-center border-zinc-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-zinc-700" />
              </Button>
            </div>
          </div>

          {/* Right Column: Bento Grid Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Profile Image Card */}
              <div className="col-span-2 sm:col-span-1 bg-white p-2 rounded-3xl shadow-sm border border-zinc-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 z-10">
                 <div className="bg-zinc-100 rounded-[1.2rem] overflow-hidden aspect-[4/5] relative">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1xj5o6MK04-B6BLIZrXfgl9rHnVsqjTb3&sz=w1000" 
                      alt="Hope Jiar" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 m-3 rounded-xl border border-white/20">
                      <p className="font-bold text-xs text-zinc-900">Hope Jiar</p>
                      <p className="text-[10px] text-zinc-500">Data Analyst</p>
                    </div>
                 </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 mt-8 sm:mt-0">
                
                {/* Location/Info Card */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 rotate-[2deg] hover:rotate-0 transition-transform duration-300 flex flex-col justify-between h-48">
                   <div className="flex justify-between items-start">
                      <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
                        <Globe className="w-5 h-5 text-zinc-600" />
                      </div>
                      <span className="text-xs font-medium bg-zinc-100 px-2 py-1 rounded-full text-zinc-600">Remote</span>
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-zinc-900 leading-tight">Abuja,<br/>Nigeria</h3>
                     <p className="text-xs text-zinc-400 mt-1">Open to Relocation</p>
                   </div>
                </div>

                {/* Rate/Skills Card */}
                <div className="bg-zinc-900 p-6 rounded-3xl shadow-lg shadow-zinc-900/10 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <span className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Hourly Rate</span>
                    <h3 className="text-white font-bold text-2xl mt-1">$20 - $50</h3>
                  </div>
                </div>
              </div>

              {/* Bottom "Brands/Tools" Card */}
              <div className="col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 mt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">Tech Stack</p>
                  <p className="text-sm text-blue-700 max-w-[200px]">Tools I use to create data insights.</p>
                </div>
                <div className="flex gap-3">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600" title="SQL"><Database className="w-5 h-5"/></div>
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600" title="Excel"><FileSpreadsheet className="w-5 h-5"/></div>
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-yellow-600" title="PowerBI"><BarChart2 className="w-5 h-5"/></div>
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-500" title="Python"><PieChart className="w-5 h-5"/></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services/Highlights Section */}
      <section className="w-full bg-white border-t border-zinc-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900">What I do</h2>
                <p className="text-zinc-500 mt-4 max-w-md">I help businesses make sense of their data through cleaning, exploration, and visual storytelling.</p>
              </div>
              <Button to="/portfolio" variant="outline">View All Services</Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Data Visualization', desc: 'Crafting intuitive dashboards that tell the story behind the numbers.', icon: BarChart2 },
                { title: 'Trend Analysis', desc: 'Identifying patterns to forecast future opportunities and risks.', icon: FileSpreadsheet },
                { title: 'Strategic Insights', desc: 'Translating complex datasets into actionable business strategies.', icon: PieChart },
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
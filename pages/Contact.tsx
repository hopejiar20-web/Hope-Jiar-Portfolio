import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo form. In a real app, this would send an email.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-zinc-900 mb-6 tracking-tight">Get In Touch</h1>
              <p className="text-lg text-zinc-500 leading-relaxed">
                I'm currently open to full-time opportunities and freelance projects. 
                Feel free to reach out if you'd like to discuss data, technology, or just say hi!
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <div className="p-3 bg-zinc-100 rounded-full">
                  <Mail className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold text-sm">Email</h4>
                  <a href="mailto:hopejiar20@gmail.com" className="text-zinc-500 hover:text-black transition-colors text-sm">
                    hopejiar20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm">
                <div className="p-3 bg-zinc-100 rounded-full">
                  <MapPin className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-zinc-900 font-bold text-sm">Location</h4>
                  <p className="text-zinc-500 text-sm">
                    Abuja, Nigeria / Open to Relocation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-lg shadow-zinc-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-zinc-900 placeholder-zinc-400 transition-all outline-none"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-zinc-900 placeholder-zinc-400 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-zinc-900 focus:border-transparent text-zinc-900 placeholder-zinc-400 transition-all resize-none outline-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <Button type="submit" className="w-full rounded-xl">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
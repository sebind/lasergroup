import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);
  
  // Safe access to window location for SSR/static generation compatibility if needed, though this is CRA
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
        setIsShareOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const shareLinks = {
    x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check out the LASER Group website!`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out the LASER Group website! ${currentUrl}`)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };

  return (
    <footer className="border-t border-border-color bg-[#0b1218] text-white">
      <div className="px-4 sm:px-10 md:px-40 py-12 flex justify-center">
        <div className="max-w-[960px] w-full grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">hexagon</span>
              <h3 className="text-xl font-bold">LASER Group</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-[300px]">
              Laboratory for Advanced Simulations & Energy Research. We pioneer the discovery of materials through computational methods.
            </p>
            <div className="flex gap-4 mt-2 items-center">
              <button className="text-gray-400 hover:text-white transition-colors cursor-pointer"><span className="material-symbols-outlined">public</span></button>
              <a href="mailto:sebin@psgitech.ac.in" className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center justify-center">
                <span className="material-symbols-outlined">mail</span>
              </a>
              
              <div className="relative" ref={shareRef}>
                <button 
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className={`text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center ${isShareOpen ? 'text-white' : ''}`}
                >
                  <span className="material-symbols-outlined">share</span>
                </button>
                
                {isShareOpen && (
                  <div className="absolute left-0 bottom-full mb-2 flex flex-col gap-1 bg-surface-card border border-border-color rounded-lg shadow-xl p-2 min-w-[140px] z-50 animate-fade-in">
                    <a href={shareLinks.x} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                      X (Twitter)
                    </a>
                    <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors">
                       <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 1.973.911 3.287.912 3.181 0 5.768-2.587 5.768-5.765.001-3.186-2.586-5.769-5.768-5.769 5.768 0 7.218 0 10.436 10.43 1.001 3.228 1.001 6.643 0 9.871-2.229 1.001-4.045 2.229-5.274 3.287-2.654 3.287-1.313 5.274-1.314 8.082 0 10.432-2.35 10.432-5.274 0-2.924-1.001-5.274-2.229-6.643-4.045-1.001-6.643-1.001-9.871 0-10.432 2.35-10.432 5.274 0 2.924 1.001 5.274 2.229 6.643 4.045 1.001 6.643 1.001 9.871 0 1.001 3.228 2.229 6.643 4.045 7.218 6.643 7.218 12.031 7.218 6.643 0 12.031-5.388 12.031-12.031-.001-6.644-5.389-12.031-12.032-12.031zm0 3.828c.783 0 1.428.644 1.428 1.427 0 .784-.644 1.428-1.428 1.428-.784 0-1.428-.644-1.428-1.428 0-.783.644-1.427 1.428-1.427zm-1.879 5.922l-1.001 1.001c-.1.1-.264.101-.363 0-.099-.101-.099-.264 0-.363l1.001-1.001c.1-.1.264-.1.363 0 .1.1.1.264 0 .363zm2.564 3.031l-1.001 1.001c-.1.1-.264.101-.363 0-.099-.101-.099-.264 0-.363l1.001-1.001c.1-.1.264-.1.363 0 .1.1.1.264 0 .363zm2.564-3.031l-1.001 1.001c-.1.1-.264.101-.363 0-.099-.101-.099-.264 0-.363l1.001-1.001c.1-.1.264-.1.363 0 .1.1.1.264 0 .363z"></path></svg>
                       WhatsApp
                    </a>
                    <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                      LinkedIn
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-gray-300 uppercase tracking-wider">Research</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link to="/publications" className="hover:text-primary transition-colors">Publications</Link>
              <Link to="/research" className="hover:text-primary transition-colors">Projects</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-sm text-gray-300 uppercase tracking-wider">Group</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <Link to="/team" className="hover:text-primary transition-colors">Principal Investigator</Link>
              <Link to="/team" className="hover:text-primary transition-colors">Team Members</Link>
              <Link to="/opportunities" className="hover:text-primary transition-colors">Join Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border-color bg-[#0d141c] py-6 text-center">
        <p className="text-xs text-gray-600">© 2024 LASER Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
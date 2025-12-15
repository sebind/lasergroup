import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      isActive(path) ? 'text-primary' : 'text-adaptive hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-color bg-background-dark/90 backdrop-blur-md px-4 sm:px-10 py-3 transition-colors duration-300">
      <div className="flex items-center gap-4 text-adaptive">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-6 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">hexagon</span>
          </div>
          <h2 className="text-adaptive text-lg font-bold leading-tight tracking-[-0.015em]">LASER Group</h2>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-6 items-center">
        <nav className="flex items-center gap-8">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/research" className={linkClass('/research')}>Research</Link>
          <Link to="/publications" className={linkClass('/publications')}>Publications</Link>
          <Link to="/team" className={linkClass('/team')}>Team</Link>
          <Link to="/news" className={linkClass('/news')}>News</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/opportunities" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Join Us</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <div className="text-adaptive cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark border-b border-border-color p-4 flex flex-col gap-4 md:hidden shadow-2xl">
          <Link to="/" className={linkClass('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/research" className={linkClass('/research')} onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
          <Link to="/publications" className={linkClass('/publications')} onClick={() => setIsMobileMenuOpen(false)}>Publications</Link>
          <Link to="/team" className={linkClass('/team')} onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          <Link to="/news" className={linkClass('/news')} onClick={() => setIsMobileMenuOpen(false)}>News</Link>
          <Link to="/contact" className={linkClass('/contact')} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/opportunities" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold" onClick={() => setIsMobileMenuOpen(false)}>
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
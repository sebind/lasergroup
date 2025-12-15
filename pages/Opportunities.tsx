import React from 'react';
import { Link } from 'react-router-dom';

const Opportunities: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full bg-surface-dark border-b border-border-color">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[200%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-[960px] mx-auto px-4 sm:px-10 md:px-40 py-16 md:py-24 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card border border-border-color">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Open Positions</span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
            Join the <span className="text-primary">LASER</span> Group
          </h1>
          <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
            We are looking for passionate individuals to solve complex materials science challenges using state-of-the-art computational methods.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 max-w-[960px] w-full mx-auto px-4 md:px-10 py-12 gap-16">
        
        {/* Internship Section */}
        <section>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 border-l-4 border-primary pl-4">
              <h2 className="text-adaptive text-2xl md:text-3xl font-bold leading-tight">
                Internship opportunities in Computational materials
              </h2>
              <p className="text-text-secondary">
                We invite applications for research internships focusing on the following cutting-edge topics. Ideal for Masters students or motivated undergraduates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group flex flex-col bg-surface-card rounded-xl border border-border-color overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">science</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">DFT Calculations in Catalysis</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    Investigate reaction mechanisms and active sites on novel catalytic surfaces for energy conversion applications using Density Functional Theory.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group flex flex-col bg-surface-card rounded-xl border border-border-color overflow-hidden hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-purple-400"></div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">layers</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Ab-initio Calculations for Interfaces</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    Study the electronic and structural properties of heterostructure interfaces to engineer better charge transport in semiconductor devices.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group flex flex-col bg-surface-card rounded-xl border border-border-color overflow-hidden hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300">
                <div className="h-2 bg-gradient-to-r from-teal-600 to-teal-400"></div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">neurology</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Machine Learning & AI in Materials</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    Develop and apply machine learning models to accelerate material discovery, predict properties, and optimize synthesis parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements / How to Apply */}
        <section className="rounded-2xl bg-surface-card/50 border border-border-color p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">fact_check</span> Requirements
              </h3>
              <ul className="flex flex-col gap-3 text-text-secondary text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
                  <span>Strong background in Physics, Chemistry, or Materials Science.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
                  <span>Basic knowledge of quantum mechanics and solid-state physics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
                  <span>Experience with Linux/Unix environment and Python programming is a plus.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-500 text-lg mt-0.5">check_circle</span>
                  <span>Enthusiasm for computational research and problem-solving.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full flex flex-col gap-6 bg-surface-dark p-6 rounded-xl border border-border-color">
              <h3 className="text-xl font-bold text-white">How to Apply</h3>
              <p className="text-text-secondary text-sm">
                Interested candidates should send their CV and a brief statement of interest indicating their preferred topic.
              </p>
              <div className="flex flex-col gap-3">
                 <a 
                   href="mailto:sebin@psgitech.ac.in?subject=Internship Application - LASER Group" 
                   className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
                 >
                   <span className="material-symbols-outlined">mail</span> Apply via Email
                 </a>
                 <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-border-color hover:bg-surface-card text-white font-bold rounded-lg transition-colors">
                   Contact Page
                 </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Opportunities;
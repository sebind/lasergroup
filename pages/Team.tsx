import React from 'react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center py-5 w-full">
      <div className="flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl bg-surface-card/30 p-8 mb-8 border border-border-color">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#137fec 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
          <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <h1 className="text-adaptive text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Meet the <span className="text-primary">LASER</span> Team
            </h1>
            <p className="text-text-secondary text-lg font-normal leading-relaxed">
              We are a multidisciplinary group advancing computational materials science and optoelectronics. Our people are our greatest asset.
            </p>
          </div>
        </div>

        {/* Principal Investigator Section */}
        <div className="mb-10">
          <h2 className="text-adaptive tracking-light text-[24px] font-bold leading-tight mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">psychology</span>
            Principal Investigator
          </h2>
          <div className="flex flex-col md:flex-row gap-6 bg-surface-card rounded-xl p-6 border border-border-color hover:border-primary/50 transition-colors shadow-lg">
            <div className="shrink-0">
              <img 
                src="/images/pi.png" 
                alt="Dr. Sebin Devasia"
                className="rounded-lg h-48 w-48 md:h-56 md:w-56 object-cover shadow-inner mx-auto md:mx-0 block bg-surface-dark"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 gap-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-adaptive text-3xl font-bold tracking-tight">Dr. Sebin Devasia</h3>
                    <p className="text-primary text-lg font-medium mt-1">Assistant Professor of Physics</p>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    <a href="mailto:seb@psgias.ac.in" className="p-2 text-text-secondary hover:text-adaptive bg-background-dark rounded-full transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xl">mail</span></a>
                    <a href="https://sebindevasiamx.wixsite.com/sebin" target="_blank" rel="noopener noreferrer" className="p-2 text-text-secondary hover:text-adaptive bg-background-dark rounded-full transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xl">language</span></a>
                  </div>
                </div>
                <p className="text-text-secondary text-base leading-relaxed mt-4">
                  Leading the LASER group since 2023, Dr. Sebin focuses on the intersection of quantum materials and optoelectronic devices. His work aims to bridge the gap between theoretical simulations and practical optoelectronic applications.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-background-dark rounded text-xs text-primary font-medium border border-primary/20">Computataional Materials</span>
                  <span className="px-3 py-1 bg-background-dark rounded text-xs text-primary font-medium border border-primary/20">Lead-free perovskites</span>
                  <span className="px-3 py-1 bg-background-dark rounded text-xs text-primary font-medium border border-primary/20">Photodetectors</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-2 sm:mt-0">
                <a 
                  href="https://scholar.google.com/citations?hl=en&user=g2Z77WwAAAAJ&view_op=list_works&sortby=pubdate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">school</span> Google Scholar
                </a>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-background-dark border border-border-color text-adaptive text-sm font-bold hover:bg-surface-card transition-colors">
                  <span className="material-symbols-outlined text-[18px]">description</span> CV / Bio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="sticky top-[64px] z-40 bg-background-dark/95 backdrop-blur-sm py-4 border-b border-border-color mb-8 -mx-4 px-4 md:-mx-10 md:px-10 transition-colors duration-300">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 transition-transform hover:scale-105">
              <p className="text-white text-sm font-bold">Current Members</p>
            </button>
            <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-card px-5 border border-transparent hover:border-primary/50 transition-colors">
              <p className="text-text-secondary text-sm font-medium">Alumni</p>
            </button>
          </div>
        </div>

        {/* PhD Students Section */}
        <div className="mb-12">
          <h2 className="text-adaptive tracking-light text-[22px] font-bold leading-tight mb-6 pl-1 border-l-4 border-primary">PhD Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Aswathy A R */}
            <div className="group relative flex flex-col bg-surface-card rounded-xl p-5 border border-transparent hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center bg-surface-dark rounded-full h-20 w-20 border-2 border-background-dark group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-4xl text-text-secondary group-hover:text-primary">person</span>
                </div>
                <div className="flex gap-2">
                  <a href="#" className="text-text-secondary hover:text-primary transition-colors"><span className="material-symbols-outlined">mail</span></a>
                </div>
              </div>
              <h3 className="text-adaptive text-xl font-bold">Aswathy A R</h3>
              <p className="text-primary text-sm font-medium mb-3">1st Year PhD</p>
              <p className="text-text-secondary text-sm leading-normal mb-4 flex-grow">
                 Density functional theory and MLIPs to solve the disordered chalcogenides for thermoelectric applications.
              </p>
              <div className="border-t border-background-dark pt-3 mt-auto">
                <p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">Focus</p>
                <p className="text-adaptive text-sm mt-1">DFT, MLIPs</p>
              </div>
            </div>

          </div>
        </div>

        {/* Internship Students Section */}
        <div className="mb-12">
          <h2 className="text-adaptive tracking-light text-[22px] font-bold leading-tight mb-6 pl-1 border-l-4 border-purple-400">Internship Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder 1 */}
            <div className="group relative flex flex-col bg-surface-card rounded-xl p-5 border border-transparent hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center bg-surface-dark rounded-full h-16 w-16 border-2 border-background-dark group-hover:border-purple-400 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-text-secondary group-hover:text-purple-400">school</span>
                </div>
              </div>
              <h3 className="text-adaptive text-lg font-bold">Thanushia</h3>
              <p className="text-purple-400 text-sm font-medium mb-2">Masters Student (PSGCAS)</p>
              <p className="text-text-secondary text-sm leading-normal">
                 Machine Leaning for Exploration of Metal Halide Radiation Detectors.
              </p>
            </div>
             {/* Placeholder 2 */}
            <div className="group relative flex flex-col bg-surface-card rounded-xl p-5 border border-transparent hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center bg-surface-dark rounded-full h-16 w-16 border-2 border-background-dark group-hover:border-purple-400 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-text-secondary group-hover:text-purple-400">school</span>
                </div>
              </div>
              <h3 className="text-adaptive text-lg font-bold">Divya Dharshini</h3>
              <p className="text-purple-400 text-sm font-medium mb-2">Masters Student (PSGK)</p>
              <p className="text-text-secondary text-sm leading-normal">
                 Developing machine learning models for crystal structure prediction.
              </p>
            </div>
             {/* Placeholder 3 */}
            <div className="group relative flex flex-col bg-surface-card rounded-xl p-5 border border-transparent hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center bg-surface-dark rounded-full h-16 w-16 border-2 border-background-dark group-hover:border-purple-400 transition-colors">
                    <span className="material-symbols-outlined text-3xl text-text-secondary group-hover:text-purple-400">school</span>
                </div>
              </div>
              <h3 className="text-adaptive text-lg font-bold">Dhanushmathi</h3>
              <p className="text-purple-400 text-sm font-medium mb-2">Masters Student (PSGK)</p>
              <p className="text-text-secondary text-sm leading-normal">
                 Developing lead-free halide materials for Radiation detection.
              </p>
            </div>
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mb-12">
          <h2 className="text-adaptive tracking-light text-[22px] font-bold leading-tight mb-6 pl-1 border-l-4 border-slate-500">Alumni</h2>
          <div className="overflow-hidden rounded-xl border border-border-color bg-surface-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-text-secondary">
                <thead className="bg-surface-dark text-xs uppercase text-adaptive border-b border-border-color">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-4 font-bold tracking-wider">Role / Year</th>
                    <th scope="col" className="px-6 py-4 font-bold tracking-wider">Project</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color">
                  <tr className="hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-adaptive">Swetha</td>
                    <td className="px-6 py-4">Masters Student (2024)</td>
                    <td className="px-6 py-4">A Compuattional analysis of CdS for catalysis using Density functional theory</td>
                  </tr>
                  <tr className="hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-adaptive">Kalaipriya</td>
                    <td className="px-6 py-4">Masters Student (2024)</td>
                    <td className="px-6 py-4">Bismuth sulfide thin films by ultasonic spray deposition</td>
                  </tr>
                  <tr className="hover:bg-surface-dark/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-adaptive">Pavithra</td>
                    <td className="px-6 py-4">Masters Student (2024)</td>
                    <td className="px-6 py-4">Sprayed antimony sulfide thin films</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-8 mb-16 relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-r from-surface-card to-[#101f2e] p-8 md:p-12 text-center">
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
              <span className="material-symbols-outlined text-4xl">group_add</span>
            </div>
            <h2 className="text-white text-3xl font-bold">Join the Lab</h2>
            <p className="text-text-secondary max-w-lg mx-auto text-lg">
              We are always looking for motivated students and postdocs to join our team. Explore our open positions or send us a spontaneous application.
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="/opportunities" className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Openings
              </Link>
              <Link to="/contact" className="bg-transparent border border-gray-600 hover:border-white text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Contact PI
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;
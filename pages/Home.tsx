import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 z-0">
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: 'linear-gradient(to bottom, rgba(17, 26, 34, 0.4) 0%, rgba(17, 26, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAD8xVjo5pA3L3_PFoKV9DB5N_U1tzPnQ7RO2gRjDW3XJjugiOU3_5FIwZG4paj2df9lVb7eYNrrezxV-TT7GxMzaPE1sOOibEJHkoaRYKSgNRNNBujQbLhFO1qRjvFqX1JoZNnVwyGxx-3rNWwaN9Ui95yKO7w6FTwxu1xmnKSbRHb9aRdf1uQSdsYK8pNN8pqwO8nSIOkz7IcU_3O-lTfsPgXI7sx6ARCqf7BSvGRhosThiLKS_8QTaZpcD29M-SNUcK1M-A-vUtp")'
            }}
          ></div>
        </div>
        <div className="relative z-10 px-4 sm:px-10 md:px-40 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="max-w-[960px] flex flex-col gap-6">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-[#1c2a38] border border-[#2e4256] w-fit mx-auto">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-white uppercase tracking-wider">Advancing Materials Science</span>
            </div>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Laboratory for Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#60a5fa]">Simulations & Energy</span> Research
            </h1>
            <h2 className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed max-w-[720px] mx-auto">
              The LASER Group combines computational techniques with experimental research to discover novel materials for next-generation devices.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <Link to="/research" className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white transition hover:bg-blue-600">
                View Our Research
              </Link>
              <Link to="/team" className="flex h-12 items-center justify-center rounded-lg border border-[#324d67] bg-[#192633]/50 backdrop-blur-sm px-6 text-base font-bold text-white transition hover:bg-[#192633]">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </div>
  
      {/* Mission Section */}
      <div className="px-4 sm:px-10 md:px-40 py-16 flex justify-center bg-background-dark">
        <div className="max-w-[960px] w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-primary font-bold uppercase tracking-wider text-sm">Our Mission</h3>
                <h2 className="text-adaptive text-3xl md:text-4xl font-bold leading-tight">
                  Bridging Theory and Experiment
                </h2>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed">
                The Laboratory for Advanced Simulations & Energy Research (LASER) Group is dedicated to discovering novel materials through the power of first-principles calculations.
              </p>
              <p className="text-text-secondary leading-relaxed">
                By leveraging supercomputing resources, we simulate material properties at the atomic scale, predicting behaviors before synthesis. Our work accelerates the development of efficient catalysts, thermoelectric generators and radiation detectors.
              </p>
              <div className="pt-4">
                <Link to="/research" className="inline-flex items-center gap-2 text-primary font-bold hover:text-adaptive transition-colors">
                  Read about our methodology 
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative rounded-xl overflow-hidden aspect-video border border-border-color shadow-2xl">
                <img alt="Scientific laboratory equipment" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfa01ghN0BX0QoUlHeQqvhJ5cExLg9cVHhXNHDC6JikD7blqWJB3k16MZu7HBfUScaxMz8BEeI8fRiUN2f1m8OfwcTIEmwutKBY6Pp_R_7vX3MyVXOkG22JfW4t6loCz8n461iIc8AEiMaAIeS3ZaSlsr2_XYBMLEm7iczGeYoheJU571K6_FkFzO92JPdwVJ5RjokvTXhteJt3jqNOQgJX9sZ4z6aRqnYjVGCa5PKolAfV8KcU48cYPkz6HQ-jEOxrD8HNdKekMNL"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Focus Section */}
      <div className="px-4 sm:px-10 md:px-40 py-16 flex justify-center bg-surface-dark">
        <div className="max-w-[960px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-adaptive text-3xl md:text-4xl font-bold leading-tight">
              Research Focus
            </h2>
            <p className="text-text-secondary text-lg max-w-[720px]">
              We explore the cutting edge of materials science with a focus on these core computational areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-border-color bg-surface-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="size-12 rounded-lg bg-border-color flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">layers</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-adaptive text-xl font-bold">2D Materials</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Exploring graphene, transition metal dichalcogenides, and van der Waals heterostructures.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-border-color bg-surface-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="size-12 rounded-lg bg-border-color flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">solar_power</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-adaptive text-xl font-bold">Photovoltaics</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Designing perovskite, chalcogenide & oxide materials for next-generation solar energy harvesting.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-border-color bg-surface-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="size-12 rounded-lg bg-border-color flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">waves</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-adaptive text-xl font-bold">Quantum Transport</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Simulating non-equilibrium electron flow at the nanoscale to predict device performance.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-border-color bg-surface-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="size-12 rounded-lg bg-border-color flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">memory</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-adaptive text-xl font-bold">Machine Learning</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Accelerating material discovery by coupling DFT databases with neural network potentials.
                </p>
              </div>
            </div>
            {/* Card 5 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-border-color bg-surface-card p-6 hover:border-primary/50 transition-all duration-300">
              <div className="size-12 rounded-lg bg-border-color flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px]">grain</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-adaptive text-xl font-bold">Defect Physics</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Understanding how impurities affect optical and electronic properties in semiconductors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Highlights Section */}
      <div className="px-4 sm:px-10 md:px-40 py-16 flex justify-center bg-background-dark">
        <div className="max-w-[960px] w-full flex flex-col gap-8">
          <div className="flex justify-between items-end pb-4 border-b border-border-color">
            <h2 className="text-adaptive text-2xl font-bold">Recent Highlights</h2>
            <Link to="/news" className="text-primary text-sm font-medium hover:text-adaptive transition-colors">View Archive</Link>
          </div>
          <div className="flex flex-col gap-4">
            {/* News Item 1 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between rounded-lg bg-surface-card p-5 border border-border-color hover:border-primary/30 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">PUBLICATION</span>
                  <span className="text-xs text-text-secondary">December 01, 2025</span>
                </div>
                <h3 className="text-adaptive text-lg font-bold">Paper on "Surface-Roughened Silver Wires" published in ACS Applied Optical Materials</h3>
              </div>
              <span className="material-symbols-outlined text-text-secondary hidden sm:block">arrow_forward_ios</span>
            </div>
            {/* News Item 2 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between rounded-lg bg-surface-card p-5 border border-border-color hover:border-primary/30 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-purple-500/20 px-2 py-0.5 text-xs font-bold text-purple-400">CONFERENCE</span>
                  <span className="text-xs text-text-secondary">November 27, 2025</span>
                </div>
                <h3 className="text-adaptive text-lg font-bold">International Conference on Sustainable Technologies (ICSTEE-2025) organized at PSG IAS</h3>
              </div>
              <span className="material-symbols-outlined text-text-secondary hidden sm:block">arrow_forward_ios</span>
            </div>
            {/* News Item 3 */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between rounded-lg bg-surface-card p-5 border border-border-color hover:border-primary/30 transition-colors">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-bold text-primary">PUBLICATION</span>
                  <span className="text-xs text-text-secondary">September 08, 2025</span>
                </div>
                <h3 className="text-adaptive text-lg font-bold">Paper on "Optimization of hole transport layers" published in Journal of Physics and Chemistry of Solids</h3>
              </div>
              <span className="material-symbols-outlined text-text-secondary hidden sm:block">arrow_forward_ios</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
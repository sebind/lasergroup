import React from 'react';
import { Link } from 'react-router-dom';

const Research: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <div className="@container w-full">
        <div 
          className="relative w-full min-h-[480px] flex flex-col items-center justify-center p-8 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.7) 0%, rgba(16, 25, 34, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDn8uBVFbgsPPg1oCFs36aFqq7hq3XFyQw5yNZQZOHdbouiURIsKH5vgQT504tzWeZKAOKYCebDCxx2dPBJL8Yc8fURfTpn5eKb6HaEW1AP0Pz_soNTpeNd_0YLV_RCirUvl_PLko20WmhCmrQxJNM9ikxcNw-OZNPA3xXtzLtakQHn-BD5PlgapzUZS0MPZyJXsMSWLGM_mhs6STWZSAKOyfMT5FuY6VIMwv1_ijlWk4nWuTVcdxoxPQzTI_ikEpYJzIb_wF79yCGH")'
          }}
        >
          <div className="flex flex-col gap-4 text-center max-w-[800px] z-10 animate-fade-in-up">
            <div className="inline-flex mx-auto items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Research Focus</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Pioneering Computational <span className="text-primary">Materials Science</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
              From First-Principles calculations to AI-driven discovery, we are pushing the boundaries of optoelectronics and device physics.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="layout-container flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10 gap-8">
        
        {/* Side Navigation (Sticky) */}
        <aside className="hidden lg:flex w-64 flex-col gap-6 sticky top-28 self-start h-fit">
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-surface-card border border-border-color">
            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 px-3">Jump To</h3>
            <button onClick={() => scrollToSection('dft')} className="group flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary border-l-2 border-primary text-left w-full hover:bg-surface-dark transition-colors">
              <span className="material-symbols-outlined text-[20px]">calculate</span>
              <span className="text-sm font-medium">First-Principles (DFT)</span>
            </button>
            <button onClick={() => scrollToSection('ai-ml')} className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark text-slate-300 hover:text-white transition-colors border-l-2 border-transparent hover:border-slate-600 text-left w-full">
              <span className="material-symbols-outlined text-[20px]">neurology</span>
              <span className="text-sm font-medium">AI & Machine Learning</span>
            </button>
            <button onClick={() => scrollToSection('opto')} className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark text-slate-300 hover:text-white transition-colors border-l-2 border-transparent hover:border-slate-600 text-left w-full">
              <span className="material-symbols-outlined text-[20px]">light_mode</span>
              <span className="text-sm font-medium">Optoelectronics</span>
            </button>
            <button onClick={() => scrollToSection('emerging')} className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-dark text-slate-300 hover:text-white transition-colors border-l-2 border-transparent hover:border-slate-600 text-left w-full">
              <span className="material-symbols-outlined text-[20px]">layers</span>
              <span className="text-sm font-medium">Emerging Materials</span>
            </button>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
            <h4 className="text-white font-bold mb-2">Join the Lab</h4>
            <p className="text-slate-400 text-sm mb-4">We are always looking for talented postdocs and PhD students.</p>
            <Link to="/contact" className="text-primary text-sm font-bold hover:underline flex items-center gap-1">
              Apply Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </aside>

        {/* Detailed Content Area */}
        <div className="flex flex-col flex-1 gap-16">
          
          {/* Section 1: DFT */}
          <section id="dft" className="flex flex-col gap-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">calculate</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">First-Principles Calculations (DFT)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex flex-col gap-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  We utilize Density Functional Theory (DFT) to solve the Schrödinger equation for many-body systems. Our work focuses on predicting electronic, optical, and mechanical properties of novel materials before they are synthesized in the lab.
                </p>
                <p className="text-slate-300 text-base leading-relaxed">
                  By simulating charge density distributions and band structures, we can identify promising candidates for next-generation semiconductors and catalytic applications with high precision.
                </p>
                <div className="mt-4 pt-4 border-t border-border-color">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Key Publications</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 items-start group cursor-pointer">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">description</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-200 group-hover:text-primary transition-colors">Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications</p>
                        <p className="text-xs text-slate-500">ACS Applied Optical Materials, 2025</p>
                      </div>
                    </li>
                    <li className="flex gap-3 items-start group cursor-pointer">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">description</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-200 group-hover:text-primary transition-colors">High Aspect Ratio ZnO Nanorods for Improved Photoelectrochemical (PEC) Water Splitting Performances and Efficient Photocatalytic Hydrogen Evolution: An Integrated Experimental and DFT Studies</p>
                        <p className="text-xs text-slate-500">Applied Surface Science, 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl shadow-black/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoOTZfTdw84d0wrZTzJtjnX7rSVKAQ5aAx9KjaqlHFYzNgoeGP6VK8n1dcNQGBuZotsLnamvt-ZPIH7MJqhdb_lCnmg5GOpiQoG1GLoMBFGSkLsrjO0XDeluhLJQZ7pAPzdOb9hsL-T6Bgre_OGAORr6h0jl-HbNZ0UqdDD83sID0KuNrMl9Em5iUx8JqPGa1NxPqafE_btLSzxA61AlV7OohL8dzkfYe33FfqFwhKscQLjzZF1KIQkk2IpxvMuVhTybodODllIiwW")'}}></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-xs text-white border border-white/10">Electron Density Map</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border-color opacity-50" />

          {/* Section 2: AI & ML */}
          <section id="ai-ml" className="flex flex-col gap-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <span className="material-symbols-outlined text-3xl">neurology</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">AI & Machine Learning</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-1">
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl shadow-black/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL6cw1g7d9qWbcjnVvVJWOpeJ3I-X36hkShttfaD1AvwYaFSghrF_5JlIYSCWTyiFWo-RStnpQVSl3KbodYgI_oC4B0jm1XnEJJGX_2JQVMz9uMcbM79Iqg0G1uFa28qiDcZZzKFSukuRPhzykFigQ2NEkuolEB9LHpyIFJWY2nDa3RnWg2vbY53_XmBpw1HVVuUsXq2L6NJ94spzoDR09Q30nC-WshefsVMntKySNCMPHJmr2VCnsIGzfjCAUw_zFLcppVSa-huHk")'}}></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-xs text-white border border-white/10">Neural Crystal Graph</span>
                  </div>
                </div>
              </div>
              <div className="order-2 flex flex-col gap-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  We bridge the gap between big data and materials science. By training neural networks on large DFT datasets, we accelerate the discovery of new materials by orders of magnitude.
                </p>
                <div className="mt-4 pt-4 border-t border-border-color">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Key Publications</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 items-start group cursor-pointer">
                      <span className="material-symbols-outlined text-purple-400 text-[20px] mt-0.5">description</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-200 group-hover:text-purple-400 transition-colors"> </p>
                        <p className="text-xs text-slate-500">, </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border-color opacity-50" />

          {/* Section 3: Optoelectronics */}
          <section id="opto" className="flex flex-col gap-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <span className="material-symbols-outlined text-3xl">light_mode</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Optoelectronics & Photodetectors</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex flex-col gap-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Understanding light-matter interaction is crucial for developing efficient solar cells and photodetectors. We simulate exciton dynamics and carrier transport in nanostructured devices.
                </p>
                <div className="mt-4 pt-4 border-t border-border-color">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">Key Publications</h4>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-3 items-start group cursor-pointer">
                      <span className="material-symbols-outlined text-amber-400 text-[20px] mt-0.5">description</span>
                      <div>
                        <p className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">Ultrasonically sprayed Cs3Bi2I9 thin film based self-powered photodetector</p>
                        <p className="text-xs text-slate-500">Materials Chemistry & Physics, 2023</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl shadow-black/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7cLZSswT9p9Q8iEqXgG0vjAxrnif57_A0Hn5yOotplFXPoQs9zLuu-MQXVnlE8kgqFgid-KUwUHvon2QdXgE_vHFQl3CRGk-yCoS6fkkcawKjxCW6-5sqsmUfXPn5n-pZhu49mGOkmC7icQQvIMqrjPvSx3L3ETwGoX5wjlZbX92OUfm0nFLSXxIaIAHT6MQ0_PdGP1WfddzLq94QMm2TwNA9r7gMNr6a3jLyJANaEURw-qF2xWXmDU1l_ikJ7Dn3wCQ6FsUVQeYY")'}}></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-xs text-white border border-white/10">Device Schematic</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-border-color opacity-50" />

          {/* Section 4: Emerging Materials */}
          <section id="emerging" className="flex flex-col gap-6 scroll-mt-28">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                <span className="material-symbols-outlined text-3xl">layers</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Emerging Materials</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col rounded-xl bg-surface-card border border-border-color overflow-hidden hover:border-slate-600 transition-colors">
                <div className="h-48 w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAvbcLPHLOJcHWUTDytgmVYFa22txV0rag7fzv3F66-Og_fWnHgaK4AP6tSK1Hl6Dkxm9Chnj1tNYK6jyTMgz4hfpqyMaPsxFLuhp-jqxvbMm79py-3OZSLBpAum5Tc5vyIKJwH_w8hVk3kjUoMZaXnxKxnGnqYv8jrq55gtx_g3vvYtt59aUMUgiQmy9rZ2hTP7hlRcjhRRXr7eXLgT2JF9Mf9phZUqmb6nuVdMSCa7DHHsISHfXIvVjK_ydYxRBDt5gd2fKcTgzCW")'}}></div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">2D Materials</h3>
                  <p className="text-sm text-slate-400">Investigating graphene, hBN, and transition metal dichalcogenides.</p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl bg-surface-card border border-border-color overflow-hidden hover:border-slate-600 transition-colors">
                <div className="h-48 w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA215WsvpzRzhKKTUShDo73WybEWG5YrmsrrJKp-XwTA4wjrlWe6lkub8adYRiJhwZXITiqWf5IXIUv9lVlNoxPk2Jo52CzBf7hbAGr9A1yOj5zkDxl-Gz1uMgsK3lgM4JaSh-djPHXAHdyVX6fvxApSVoxnq-pyiIbrl29r7vRRJGwrH9xlEKAp-Dq0bGvWwFHSybUp8PntkBlWa1Ea97XUNARTtabZpglpQjaRjzhlqr-Kq5F2Q87rkqatR3URov9TUfZtw2OHBKg")'}}></div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">Perovskites</h3>
                  <p className="text-sm text-slate-400">Exploring halide perovskites for high-efficiency solar energy.</p>
                </div>
              </div>
              <div className="flex flex-col rounded-xl bg-surface-card border border-border-color overflow-hidden hover:border-slate-600 transition-colors">
                <div className="h-48 w-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc0ceJdMzTOQ2ZGrtAfRwi7Waojsw9pddd9lyzM0jKV9w5-trlBxK7mpcdAfc5wu84xRaKmfBkSLtKpaSGiPnLR0BXt7cWgp1W-yJiWajDkzf2C-gsBoxcCqqnD__pvyPtuHYivaMo0GhsE8IJuLfeCHIoDcbJOaPN-TcgE3cWu1x8U4z1_Z04DV5DpKPNJlnVYpEcQ4O5Rwfr11ht643DMpClnzgCp_y4jS06O3czbviZb3xPKvHtOK85iOCIncDIK5KECiY-IczQ")'}}></div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-white">Topological Insulators</h3>
                  <p className="text-sm text-slate-400">Studying protected surface states for dissipationless quantum computing.</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Research;
import React, { useState } from 'react';

type FilterType = 'All Updates' | 'Conferences' | 'Publications' | 'Awards' | 'Grants';

interface NewsItem {
  id: string;
  category: 'Conference' | 'Publication' | 'Grant' | 'Award';
  date: string;
  title: string;
  description: string;
  image?: string; // Thumbnail for timeline
  featuredImage?: string; // Large image for featured section
  location?: string;
  linkText?: string;
  linkUrl?: string;
  citation?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    category: 'Publication',
    date: 'Dec 01, 2025',
    title: 'Published: Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications',
    description: 'A collaborative work where we have contributed the DFT calculations of Silver nanowires is published in ACS Applied Optical Materials.',
    featuredImage: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2525&auto=format&fit=crop',
    linkText: 'Read Full Paper',
    linkUrl: '#'
  },
  {
    id: '2',
    category: 'Conference',
    date: 'Nov 27-29, 2025',
    title: 'ICSTEE-2025',
    description: 'PSG Institute of Advanced Studies have organized International Conference on Sustainable Technologies for Energy and Environment.',
    location: 'PSG IAS, Coimbatore',
    linkText: 'View Session Details',
    linkUrl: '#'
  },
  {
    id: '3',
    category: 'Publication',
    date: 'Sep 08, 2025',
    title: 'Paper Published in Journal of Physics and Chemistry of Solids',
    description: 'Optimization of hole transport layers for Cu2FeSnS4 solar cells via SCAPS-1D simulation: Investigating the impact of interface defects on practical efficiency limits.',
    image: 'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2574&auto=format&fit=crop',
    citation: true
  },
  {
    id: '4',
    category: 'Publication',
    date: 'Apr 10, 2025',
    title: 'Paper Published in Applied Surface Science',
    description: 'High Aspect Ratio ZnO Nanorods for Improved Photoelectrochemical (PEC) Water Splitting Performances and Efficient Photocatalytic Hydrogen Evolution: An Integrated Experimental and DFT Studies.',
    image: 'https://images.unsplash.com/photo-1605557202138-097824c3f2d4?q=80&w=2525&auto=format&fit=crop',
    citation: true
  },
  {
    id: '5',
    category: 'Grant',
    date: 'Mar 04, 2024',
    title: 'Grant received from UGC-DAE CSR Collaborative Research Scheme',
    description: 'Grant Funding',
  }
];

const News: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All Updates');

  const filters: FilterType[] = ['All Updates', 'Conferences', 'Publications', 'Awards', 'Grants'];

  const filteredNews = newsData.filter(item => {
    if (activeFilter === 'All Updates') return true;
    const catMap: Record<string, string> = {
      'Conferences': 'Conference',
      'Publications': 'Publication',
      'Awards': 'Award',
      'Grants': 'Grant'
    };
    return item.category === catMap[activeFilter];
  });

  // Determine if we show the Featured block.
  // We show it if the first item in the filtered list has a featuredImage.
  const featuredItem = filteredNews.length > 0 && filteredNews[0].featuredImage ? filteredNews[0] : null;
  const timelineItems = featuredItem ? filteredNews.slice(1) : filteredNews;

  // Helper to get category color styles
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case 'Conference': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'Grant': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Publication': return 'bg-blue-900/30 text-blue-300 border-blue-500/20'; // Custom blue for pubs
      case 'Award': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default: return 'bg-surface-dark text-text-secondary border-border-color';
    }
  };

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Conference': return 'mic';
      case 'Grant': return 'monetization_on';
      case 'Publication': return 'article';
      case 'Award': return 'emoji_events';
      default: return 'feed';
    }
  };

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Main Feed (Span 8) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2 pb-2">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white">News & Events</h1>
            <p className="text-text-secondary text-lg leading-normal">
              Latest updates, conferences, and achievements from the LASER computational materials science lab.
            </p>
          </div>
          
          {/* Filters (Chips) */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-9 shrink-0 items-center justify-center px-4 rounded-full text-sm font-medium transition-colors border ${
                  activeFilter === filter 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-surface-card text-white hover:bg-surface-dark border-border-color'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Featured Section (Conditionally Rendered) */}
          {featuredItem && (
            <div className="relative overflow-hidden rounded-xl bg-surface-card border border-border-color group hover:border-primary/50 transition-colors duration-300 animate-fade-in">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Featured</span>
                    <span className="text-text-secondary text-xs font-medium">{featuredItem.date}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
                    {featuredItem.title}
                  </h2>
                  <p className="text-text-secondary text-base leading-relaxed line-clamp-3">
                    {featuredItem.description}
                  </p>
                  {featuredItem.linkText && (
                    <button className="mt-2 flex items-center justify-center w-fit rounded-lg bg-primary h-10 px-5 text-white text-sm font-bold hover:bg-blue-600 transition-colors">
                      {featuredItem.linkText}
                    </button>
                  )}
                </div>
                <div className="w-full md:w-2/5 min-h-[200px] bg-cover bg-center relative" style={{backgroundImage: `url("${featuredItem.featuredImage}")`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-card to-transparent md:bg-gradient-to-l opacity-80"></div>
                </div>
              </div>
            </div>
          )}

          {/* Timeline Feed */}
          <div className="mt-4 min-h-[400px]">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span> 
              {activeFilter === 'All Updates' ? 'Chronological Feed' : `${activeFilter} Feed`}
            </h3>
            
            {filteredNews.length === 0 ? (
               <div className="p-8 text-center bg-surface-card rounded-xl border border-border-color">
                 <span className="material-symbols-outlined text-4xl text-text-secondary mb-2">search_off</span>
                 <p className="text-text-secondary">No updates found for this category.</p>
               </div>
            ) : (
            <div className="relative pl-2">
              <div className="absolute left-[27px] top-2 bottom-0 w-[2px] bg-border-color"></div>
              
              {timelineItems.map((item) => (
                <div key={item.id} className="relative grid grid-cols-[56px_1fr] gap-4 mb-8 group animate-fade-in-up">
                  {/* Timeline Icon */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center size-14 rounded-full bg-surface-card border-4 border-background-dark z-10 group-hover:border-primary/20 transition-all">
                      <span className="material-symbols-outlined text-white">{getIcon(item.category)}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex flex-col ${item.image ? 'md:flex-row' : ''} gap-4 bg-surface-card p-5 rounded-lg border border-border-color hover:border-primary/40 transition-colors shadow-sm`}>
                     
                     {/* Image if present */}
                     {item.image && (
                        <div className="w-full md:w-32 h-32 shrink-0 rounded-md bg-cover bg-center border border-gray-700" style={{backgroundImage: `url("${item.image}")`}}></div>
                     )}

                     <div className="flex flex-col flex-1">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className={`text-lg font-bold text-white ${item.category === 'Grant' ? 'text-base' : ''} leading-tight`}>{item.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded font-medium border ${getCategoryStyles(item.category)}`}>{item.category}</span>
                        </div>

                        {item.category === 'Grant' ? (
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm text-text-secondary">{item.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                            <span className="text-xs font-medium text-emerald-400">{item.description}</span>
                          </div>
                        ) : (
                          <>
                            <p className="text-xs text-text-secondary mt-1 mb-2">
                              {item.date} {item.location ? `• ${item.location}` : ''}
                            </p>
                            <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                              {item.description}
                            </p>
                            
                            {(item.linkText || item.citation) && (
                              <div className="flex gap-3 mt-auto">
                                {item.linkText ? (
                                  <a href={item.linkUrl || "#"} className="text-primary text-sm font-bold hover:underline inline-flex items-center gap-1">
                                    {item.linkText} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                  </a>
                                ) : (
                                  <>
                                    <button className="text-xs font-bold text-primary border border-primary/30 rounded px-3 py-1.5 hover:bg-primary/10 transition-colors">PDF</button>
                                    <button className="text-xs font-bold text-white border border-gray-600 rounded px-3 py-1.5 hover:bg-gray-700 transition-colors">Citation</button>
                                  </>
                                )}
                              </div>
                            )}
                          </>
                        )}
                     </div>
                  </div>
                </div>
              ))}
            </div>
            )}
            
            {filteredNews.length > 0 && (
              <button className="mt-8 mx-auto flex items-center gap-2 text-text-secondary hover:text-primary text-sm font-medium transition-colors">
                Load Older Updates <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Sidebar (Span 4) */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-card rounded-xl border border-border-color p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">October 2023</h3>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-gray-700 rounded text-text-secondary"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
                <button className="p-1 hover:bg-gray-700 rounded text-text-secondary"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-2 text-center">
              {['S','M','T','W','T','F','S'].map((d, i) => <span key={i} className="text-xs font-medium text-gray-500">{d}</span>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              <span></span><span></span>
              {[...Array(31)].map((_, i) => (
                <button key={i} className={`h-8 w-8 flex items-center justify-center rounded-full text-sm ${i + 1 === 24 ? 'font-bold bg-primary text-white shadow-lg shadow-primary/30 relative' : 'text-text-secondary hover:bg-border-color'}`}>
                  {i + 1}
                  {i + 1 === 24 && <span className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></span>}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-start gap-3">
                <div className="mt-1 min-w-[3px] h-[32px] bg-primary rounded-full"></div>
                <div>
                  <p className="text-sm font-bold text-white">APS Talk</p>
                  <p className="text-xs text-text-secondary">Today, 2:00 PM • Room 304</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-card rounded-xl border border-border-color p-6">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <span className="material-symbols-outlined">mail</span>
              <h3 className="text-sm font-bold uppercase tracking-wider">Stay Updated</h3>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Subscribe to our quarterly digest for a summary of new papers and open positions.
            </p>
            <div className="flex flex-col gap-3">
              <input type="email" className="w-full bg-[#111418] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:ring-1 focus:ring-primary focus:border-primary outline-none" placeholder="Email address" />
              <button className="w-full bg-white text-black font-bold text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors">Subscribe</button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default News;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Publication {
  id: number;
  year: number;
  type: 'Journal' | 'Conference' | 'Patent';
  category: string;
  title: string;
  authors: string;
  journal: string;
  details: string;
  link?: string;
}

const publicationsData: Publication[] = [
  // 2025
  {
    id: 36,
    year: 2025,
    type: 'Journal',
    category: 'Plasmonics',
    title: 'Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications',
    authors: 'Thazhathenair, A., Prakash, O., Devasia, S., Robert, G., Kalathingal, F. T., Singh, U. B., & Ghosh, S.',
    journal: 'ACS Applied Optical Materials',
    details: '',
  },
  {
    id: 1,
    year: 2025,
    type: 'Journal',
    category: 'Solar Cells',
    title: 'Optimization of Hole Transport Layers for Cu2FeSnS4 Solar Cells via SCAPS-1D Simulation: Investigating the Impact of Interface Defects on Practical Efficiency Limits',
    authors: 'MK Jyolsna Raj, Kallol Mohanta, S. Devasia, B Geetha Priyadarshini',
    journal: 'Journal of Physics and Chemistry of Solids',
    details: 'Vol. 208, 113193',
  },
  {
    id: 2,
    year: 2025,
    type: 'Journal',
    category: 'Water Splitting',
    title: 'High Aspect Ratio ZnO Nanorods for Improved Photoelectrochemical (PEC) Water Splitting Performances and Efficient Photocatalytic Hydrogen Evolution: An Integrated Experimental and DFT Studies',
    authors: 'A Das, S. Devasia, Nisha Banerjee, RG Nair',
    journal: 'Applied Surface Science',
    details: '699, 163160',
  },
  // 2024
  {
    id: 3,
    year: 2024,
    type: 'Journal',
    category: 'Photocatalysis',
    title: 'An experimental and theoretical validation of dual role of Fe on improving the photocatalytic performance of doped mixed phase titania',
    authors: 'SK Nikhil, GR Nair, A Das, S. Devasia, RG Nair',
    journal: 'Advanced Powder Technology',
    details: 'Vol. 35 (11), 104683',
  },
  {
    id: 4,
    year: 2024,
    type: 'Journal',
    category: 'Thermoelectrics',
    title: 'Enhancing thermoelectric properties of spinel ZnFe2O4 by Ni substitution through electron hopping mechanism',
    authors: 'John N., Davis N., Roshan J.C., Hussain S., S. Devasia, Srinivasan B., Ashok A.M.',
    journal: 'Ceramics International',
    details: 'Vol. 50 (22), 45251-45262',
  },
  {
    id: 5,
    year: 2024,
    type: 'Journal',
    category: 'Sensors',
    title: 'Characterisation of Sn-Cl co-doped β-Ga2O3 thin films deposited via spray pyrolysis and their application in UV detector devices',
    authors: 'R Raphael, S. Devasia, S. Shaji, E.I. Anila',
    journal: 'Sensors and Actuators A: Physical',
    details: 'Vol. 376, 115546',
  },
  {
    id: 6,
    year: 2024,
    type: 'Journal',
    category: 'Photodetectors',
    title: 'In situ grown Bi2S3 nanorods in Cs3Bi2I9 thin films as broadband self-driven photodetector with improved photostability',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A. Aguilar Martinez, B. Krishnan',
    journal: 'Optical Materials',
    details: 'Vol. 152, 115532',
  },
  // 2023
  {
    id: 7,
    year: 2023,
    type: 'Journal',
    category: 'Photodetectors',
    title: 'Ultrasonically sprayed Cs3Bi2I9 thin film based self-powered photodetector',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A. Aguilar Martinez, B. Krishnan',
    journal: 'Mater. Chem. Phys.',
    details: 'Vol. 296, 127295',
  },
  // 2022
  {
    id: 8,
    year: 2022,
    type: 'Journal',
    category: 'Sensors',
    title: 'Effect of substrate temperature on the properties of spray deposited Ga2O3 thin films, for solar blind UV detector applications',
    authors: 'R. Raphael, S. Devasia, S. Shaji, E.I. Anila',
    journal: 'Optical Materials',
    details: 'Vol. 133, 112915',
  },
  {
    id: 9,
    year: 2022,
    type: 'Conference',
    category: 'Nanomaterials',
    title: 'Bismuth sulfide nanorods decorated cesium bismuth iodide composite thin films by ultrasonic spray pyrolysis',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'XV International Conference on Surfaces, Materials and Vacuum',
    details: 'Puerto Vallarta, Mexico, 26-29 Sep 2022 (Oral)',
  },
  {
    id: 10,
    year: 2022,
    type: 'Conference',
    category: 'Perovskites',
    title: 'Perovskite-inspired Cs3Bi2I9 films via ultrasonic spray for self-powered photodetectors',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'XXX International Materials Research Congress (IMRC)',
    details: 'Cancun, Mexico, 14-19 Aug 2022 (Oral)',
  },
  // 2021
  {
    id: 11,
    year: 2021,
    type: 'Journal',
    category: 'Perovskites',
    title: 'In situ crystallization of 0D perovskite derivative Cs3Bi2I9 thin films via ultrasonic spray',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A.A. Martinez, B. Krishnan',
    journal: 'J. Alloys Compd.',
    details: 'Vol. 893, 162294',
  },
  {
    id: 12,
    year: 2021,
    type: 'Journal',
    category: 'Photovoltaics',
    title: 'Monoclinic AgSbS2 thin films for photovoltaic applications: Computation, growth and characterization approaches',
    authors: 'A. Nadukkandy, S. Devasia, P. Abraham, S. Shaji, D.A. Avellaneda, J.A. Aguilar-Martínez et al.',
    journal: 'Mater. Sci. Semicond. Process.',
    details: 'Vol. 135, 106074',
  },
  {
    id: 13,
    year: 2021,
    type: 'Journal',
    category: 'Thin Films',
    title: 'Photosensitive antimony triiodide thin films by rapid iodization of chemically deposited antimony sulfide',
    authors: 'A.A. Ramachandran, B. Krishnan, S. Devasia, D.A. Avellaneda, M.I. Mendivil Palma et al.',
    journal: 'Mater. Res. Bull.',
    details: 'Vol. 142, 111382',
  },
  {
    id: 14,
    year: 2021,
    type: 'Journal',
    category: 'Photodetectors',
    title: 'Metal–semiconductor–metal visible photodetector based on Al-doped (Cd:Zn)S nano thin films by hydrothermal synthesis',
    authors: 'J. Mathew, S. Devasia, S. Shaji, E.I. Anila',
    journal: 'Optik (Stuttg).',
    details: 'Vol. 241, 166878',
  },
  {
    id: 15,
    year: 2021,
    type: 'Conference',
    category: 'Thin Films',
    title: 'Effect of source-substrate distance on the transparent electrode properties of spray pyrolysed aluminium doped zinc oxide thin films',
    authors: 'S. Devasia, P.V. Athma, Rakhy Raphael, E.I. Anila',
    journal: 'Materials Today: Proceedings',
    details: 'ISSN 2214-7853',
  },
  {
    id: 16,
    year: 2021,
    type: 'Conference',
    category: 'Perovskites',
    title: 'Ultrasonically spray deposited cesium bismuth iodide thin films: Structure, morphology and photophysical properties',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'XXIX International Materials Research Congress (IMRC)',
    details: 'Cancun, Mexico, 15-19 Aug 2021 (Oral)',
  },
  {
    id: 17,
    year: 2021,
    type: 'Conference',
    category: 'Optoelectronics',
    title: 'Ultrasonic Spray deposited BiI3 thin films for Optoelectronic applications, Progress and promises in chemical sciences',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'PPCS-2021',
    details: 'Christ University, Bengaluru, India, 22 Mar 2021 (Oral)',
  },
  // 2020
  {
    id: 18,
    year: 2020,
    type: 'Journal',
    category: 'Optoelectronics',
    title: 'Tin antimony sulfide (Sn6Sb10S21) thin films by heating chemically deposited Sb2S3/SnS layers: Studies on the structure and their optoelectronic properties',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A.A. Martinez, B. Krishnan',
    journal: 'J. Alloys Compd.',
    details: 'Vol. 827, 154256',
  },
  {
    id: 19,
    year: 2020,
    type: 'Conference',
    category: 'Simulation',
    title: 'Ab initio simulations to ultrasonically sprayed thin films of bismuth triiodide',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: '12th International Conference on Hybrid and Organic Photovoltaics (HOPV20)',
    details: 'Online, 26-29 May 2020 (Poster)',
  },
  {
    id: 20,
    year: 2020,
    type: 'Conference',
    category: 'Simulation',
    title: 'Bismuth triiodide: Ab initio simulations to spray-cast thin films',
    authors: 'Sebin Devasia, S. Shaji, D. A. Avellaneda, J. A. Aguilar Martinez, B. Krishnan',
    journal: 'RSC Twitter Conference',
    details: '3 March 2020 (Poster)',
  },
  // 2019
  {
    id: 21,
    year: 2019,
    type: 'Journal',
    category: 'Optoelectronics',
    title: 'Spectral and nonlinear optical characterization of blue light emitting gahnite nanorods synthesized through radiation assisted sol-gel method',
    authors: 'P. J. Joffy, V. G. Sreeja, S. Devasia, E. I. Anila',
    journal: 'Solid State Sci.',
    details: 'Vol. 96, 105947',
  },
  {
    id: 22,
    year: 2019,
    type: 'Journal',
    category: 'Semiconductors',
    title: 'Controlling the zinc oxide unipolarity through dual acceptor doping for spray-cast homojunction diode',
    authors: 'S. Devasia, P. V. Athma, E. I. Anila',
    journal: 'Mater. Lett.',
    details: 'Vol. 238, 112–115',
  },
  {
    id: 23,
    year: 2019,
    type: 'Conference',
    category: 'Materials',
    title: 'A Study on the Emergence of P-Type Behaviour in Sr-Cu-O Mixed Phase Systems',
    authors: 'A. Mariya Thomas, S. Salam, M. C. Santhoshkumar, S. Devasia, E. I. Anila',
    journal: 'J. Phys. Conf. Ser.',
    details: 'Vol. 1172, 012008',
  },
  {
    id: 24,
    year: 2019,
    type: 'Conference',
    category: 'Optoelectronics',
    title: 'Bismuth triiodide: Ab-initio simulations to spray cast thin films for optoelectronic applications',
    authors: 'S. Devasia, S. Shaji, D.A. Avellaneda, J.A. Aguilar Martinez, B. Krishnan, Sebin Devasia',
    journal: 'Scientia',
    details: 'Vol. 15, 98-111',
  },
  // 2018
  {
    id: 25,
    year: 2018,
    type: 'Journal',
    category: 'Thin Films',
    title: 'Post-deposition thermal treatment of sprayed ZnO:Al thin films for enhancing the conductivity',
    authors: 'S. Devasia, P. V. Athma, M. Shaji, M. C. S. Kumar, E. I. Anila',
    journal: 'Phys. B Condens. Matter',
    details: 'Vol. 533, 83–89',
  },
  {
    id: 26,
    year: 2018,
    type: 'Conference',
    category: 'Materials',
    title: 'Tuning the surface morphology of aluminium doped zinc oxide thin films by arrayed nanorods through chemical growth process',
    authors: 'S. Devasia, E. I. Anila',
    journal: 'AIP Conference Proceedings',
    details: 'Vol. 1942, 080018',
  },
  {
    id: 27,
    year: 2018,
    type: 'Conference',
    category: 'Materials',
    title: 'Synthesis and characterization of photoconducting (Cd:Zn)S thin films by hydrothermal assisted chemical bath deposition',
    authors: 'J. Mathew, S. Devasia, E. I. Anila',
    journal: 'AIP Conference Proceedings',
    details: 'Vol. 1942, 080080',
  },
  // 2017
  {
    id: 28,
    year: 2017,
    type: 'Conference',
    category: 'Materials',
    title: 'Tuning the surface morphology of aluminium doped zinc oxide thin films by arrayed nanorods through chemical growth process',
    authors: 'Sebin Devasia, E I Anila',
    journal: 'DAE-Solid State Physics Symposium',
    details: 'BARC, Mumbai, 26–30 Dec 2017 (Poster)',
  },
  {
    id: 29,
    year: 2017,
    type: 'Conference',
    category: 'Materials',
    title: 'Highly conductive and transparent ZnO:Al thin film by spray pyrolysis for transparent electronics',
    authors: 'Sebin Devasia, P V Athma, Dr. E.I. Anila',
    journal: 'AMPC-2017',
    details: 'NIT Tiruchirappalli, 27-28 Feb 2017 (Poster)',
  },
  // 2016
  {
    id: 30,
    year: 2016,
    type: 'Conference',
    category: 'Materials',
    title: 'Investigation on the Structural, Electrical and Transmitting properties of Aluminium doped ZnO thin films',
    authors: 'S. Devasia, P V Athma, Anumol Jose, E I Anila',
    journal: 'IOP Conference Series: Mater. Sci. Eng.',
    details: 'Vol. 149, 012077',
  },
  {
    id: 31,
    year: 2016,
    type: 'Conference',
    category: 'Optics',
    title: 'Nonlinear optical characterization of graphite oxide thin film by open aperture Z-scan technique',
    authors: 'V G Sreeja, Ajina Cheruvalathu, S. Devasia, E I Anila',
    journal: 'AIP Conf. Proc.',
    details: 'Vol. 1731, 080023',
  },
  {
    id: 32,
    year: 2016,
    type: 'Conference',
    category: 'Materials',
    title: 'An investigation on the structural, electrical and transparent properties of aluminium doped ZnO thin films',
    authors: 'S. Devasia, P.V. Athma, E.I. Anila',
    journal: 'IConAMMA-2016',
    details: 'Amrita School of Engineering, 15–16 July 2016 (Oral)',
  },
  {
    id: 33,
    year: 2016,
    type: 'Conference',
    category: 'Nanophotonics',
    title: 'National Workshop on Nanophotonics',
    authors: 'S. Devasia',
    journal: 'CUSAT Cochin / SPIE CUSAT Student Chapter',
    details: '18-19 March 2016 (Poster)',
  },
  // 2015
  {
    id: 34,
    year: 2015,
    type: 'Journal',
    category: 'Semiconductors',
    title: 'Investigation on P-N dual acceptor doped p-type ZnO thin films and subsequent growth of pencil-like nanowires',
    authors: 'R. Amiruddin, S. Devasia, K. Mohammedali, M. C. Santhosh Kumar',
    journal: 'Semiconductor Science and Technology',
    details: 'Vol. 30, 035009',
  },
  // 2014
  {
    id: 35,
    year: 2014,
    type: 'Conference',
    category: 'Nanophotonics',
    title: 'Low resistive P,N dual acceptor doped p-type ZnO thin films',
    authors: 'S. Devasia',
    journal: 'National Conference on Nanophotonics (NCNP- 2014)',
    details: 'Bharathidasan University, 6-7 March 2014 (Oral)',
  }
];

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredPublications = publicationsData.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || pub.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Calculate statistics
  const journalCount = publicationsData.filter(pub => pub.type === 'Journal').length;
  const conferenceCount = publicationsData.filter(pub => pub.type === 'Conference').length;

  // Group by year
  const groupedPublications = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const sortedYears = Object.keys(groupedPublications).map(Number).sort((a, b) => b - a);

  return (
    <div className="flex flex-col flex-1 max-w-[960px] w-full mx-auto px-4 md:px-0 py-8 gap-8">
      {/* Page Heading & Stats Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-sm text-text-secondary px-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-white">Publications</span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 px-4">
          <div className="flex flex-col gap-3 max-w-xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight tracking-[-0.033em]">Group Publications</h1>
            <p className="text-text-secondary text-lg font-normal leading-relaxed">
              A comprehensive collection of our peer-reviewed articles and conference proceedings, spanning research in photovoltaics, optoelectronics, and materials science.
            </p>
          </div>
          <div className="flex flex-row gap-4 w-full lg:w-auto">
            <div className="flex-1 min-w-[140px] flex flex-col justify-center gap-1 rounded-lg p-5 bg-surface-card border border-border-color">
              <span className="text-text-secondary text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">auto_stories</span> Journals
              </span>
              <p className="text-white text-3xl font-bold">{journalCount}</p>
            </div>
            <div className="flex-1 min-w-[140px] flex flex-col justify-center gap-1 rounded-lg p-5 bg-surface-card border border-border-color">
              <span className="text-text-secondary text-sm font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">co_present</span> Proceedings
              </span>
              <p className="text-white text-3xl font-bold">{conferenceCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Controls Bar */}
      <div className="sticky top-16 z-20 -mx-4 px-4 py-4 backdrop-blur-xl bg-background-dark/80 border-b border-border-color/50 md:rounded-b-xl">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                type="text" 
                className="block w-full p-2.5 pl-10 text-sm text-white bg-surface-card border border-transparent rounded-lg focus:ring-primary focus:border-primary placeholder-text-secondary transition-all" 
                placeholder="Search keyword, author, or title..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full md:w-auto overflow-x-auto gap-2 no-scrollbar pb-1 md:pb-0">
            <button 
              onClick={() => setSelectedType('All')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors text-sm font-medium whitespace-nowrap ${selectedType === 'All' ? 'bg-primary/20 text-primary border-primary/30' : 'bg-surface-card text-text-secondary border-transparent hover:text-white'}`}
            >
              All Types
            </button>
            <button 
              onClick={() => setSelectedType('Journal')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors text-sm font-medium whitespace-nowrap ${selectedType === 'Journal' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 'bg-surface-card text-text-secondary border-transparent hover:text-white'}`}
            >
              Journals
            </button>
            <button 
              onClick={() => setSelectedType('Conference')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-colors text-sm font-medium whitespace-nowrap ${selectedType === 'Conference' ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' : 'bg-surface-card text-text-secondary border-transparent hover:text-white'}`}
            >
              Conference
            </button>
          </div>
        </div>
      </div>

      {/* Publications List */}
      <div className="flex flex-col gap-4 px-4">
        {sortedYears.map(year => (
          <React.Fragment key={year}>
            <div className="flex items-center gap-4 py-2 mt-4 first:mt-0">
              <h3 className="text-2xl font-bold text-white">{year}</h3>
              <div className="h-px bg-border-color flex-1"></div>
            </div>

            {groupedPublications[year].map(pub => (
              <div key={pub.id} className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-surface-card/40 border border-border-color hover:border-primary/50 hover:bg-surface-card/60 transition-all duration-300">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                      pub.type === 'Journal' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 
                      pub.type === 'Conference' ? 'bg-teal-500/20 text-teal-300 border-teal-500/30' : 
                      'bg-orange-500/20 text-orange-300 border-orange-500/30'
                    }`}>
                      {pub.type}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {pub.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-sm text-white/80 italic">
                    <span className="font-semibold text-white/90">{pub.journal}</span>
                    <span className="w-1 h-1 rounded-full bg-text-secondary"></span>
                    <span>{pub.details}</span>
                  </div>
                </div>
                <div className="flex md:flex-col items-center md:items-end justify-start md:justify-center gap-3 min-w-[120px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border-color md:pl-6">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">link</span> View
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors cursor-default">
                      <span className="material-symbols-outlined text-[20px]">description</span> View
                    </button>
                  )}
                  {pub.type === 'Journal' && (
                    <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span> PDF
                    </button>
                  )}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center pt-8 pb-16">
        <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-card hover:bg-surface-card/80 text-white font-bold transition-all border border-transparent hover:border-primary/50">
          <span>End of List</span>
        </button>
      </div>
    </div>
  );
};

export default Publications;
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
  viewLink?: string;
  pdfLink?: string;
}

const publicationsData: Publication[] = [
  {
    id: 36,
    year: 2025,
    type: 'Journal',
    category: 'Plasmonics',
    title: 'Surface-Roughened Silver Wires with Uniformly Distributed Plasmonic Hotspots for Highly Sensitive Surface-Enhanced Raman Scattering Applications',
    authors: 'Thazhathenair, A., Prakash, O., Devasia, S., Robert, G., Kalathingal, F. T., Singh, U. B., & Ghosh, S.',
    journal: 'ACS Applied Optical Materials',
    details: '',
    viewLink: 'https://doi.org/',
    pdfLink: '/pdfs/acs_applied_optical_materials_2025.pdf'
  },

  // Add remaining publications here exactly as before
  // Only add viewLink and pdfLink where available
];

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredPublications = publicationsData.filter(pub => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedType === 'All' || pub.type === selectedType;

    return matchesSearch && matchesType;
  });

  const journalCount = publicationsData.filter(pub => pub.type === 'Journal').length;
  const conferenceCount = publicationsData.filter(pub => pub.type === 'Conference').length;

  const groupedPublications = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {} as Record<number, Publication[]>);

  const sortedYears = Object.keys(groupedPublications)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="flex flex-col flex-1 max-w-[960px] w-full mx-auto px-4 md:px-0 py-8 gap-8">

      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-sm text-text-secondary px-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-white">Publications</span>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 px-4">
          <div className="flex flex-col gap-3 max-w-xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold">
              Group Publications
            </h1>
            <p className="text-text-secondary text-lg">
              A comprehensive collection of peer-reviewed articles and conference proceedings.
            </p>
          </div>

          <div className="flex flex-row gap-4 w-full lg:w-auto">
            <div className="flex-1 min-w-[140px] flex flex-col justify-center gap-1 rounded-lg p-5 bg-surface-card border border-border-color">
              <span className="text-text-secondary text-sm font-medium">Journals</span>
              <p className="text-white text-3xl font-bold">{journalCount}</p>
            </div>

            <div className="flex-1 min-w-[140px] flex flex-col justify-center gap-1 rounded-lg p-5 bg-surface-card border border-border-color">
              <span className="text-text-secondary text-sm font-medium">Proceedings</span>
              <p className="text-white text-3xl font-bold">{conferenceCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Publications */}
      <div className="flex flex-col gap-4 px-4">
        {sortedYears.map(year => (
          <React.Fragment key={year}>
            <div className="flex items-center gap-4 py-2 mt-4">
              <h3 className="text-2xl font-bold text-white">{year}</h3>
              <div className="h-px bg-border-color flex-1"></div>
            </div>

            {groupedPublications[year].map(pub => (
              <div key={pub.id}
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-surface-card/40 border border-border-color">

                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white">
                    {pub.title}
                  </h3>

                  <p className="text-text-secondary text-sm">
                    {pub.authors}
                  </p>

                  <div className="text-sm italic text-white/80">
                    {pub.journal} · {pub.details}
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex md:flex-col gap-3 min-w-[120px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-border-color md:pl-6">

                  {pub.viewLink ? (
                    <a
                      href={pub.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
                    >
                      <span className="material-symbols-outlined">link</span>
                      View
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="material-symbols-outlined">link_off</span>
                      View
                    </span>
                  )}

                  {pub.pdfLink ? (
                    <a
                      href={pub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
                    >
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                      PDF
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                      PDF
                    </span>
                  )}

                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Publications;

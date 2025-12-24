'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from './ProjectsHero';
import ProjectsFilter from './ProjectsFilter';
import ProjectsGrid from './ProjectsGrid';
import ProjectStats from './ProjectStats';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-[#1C474A] via-[#0F3A3E] to-[#1C474A]">
        <ProjectsHero />
        
        <section id="projects-section" className="py-20">
          <div className="container mx-auto px-6">
            <ProjectsFilter 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <ProjectsGrid activeFilter={activeFilter} searchTerm={searchTerm} />
          </div>
        </section>

        <ProjectStats />
      </main>
      <Footer />
    </div>
  );
}

'use client';

type ProjectsFilterProps = {
  activeFilter: string;
  onFilterChange: (value: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export default function ProjectsFilter({ activeFilter, onFilterChange, searchTerm, onSearchChange }: ProjectsFilterProps) {

  const filters = [
    { id: 'all', label: 'جميع المشاريع', icon: 'ri-apps-line' },
    { id: 'residential', label: 'مشاريع سكنية', icon: 'ri-home-4-line' },
    { id: 'commercial', label: 'مشاريع تجارية', icon: 'ri-building-line' }
  ];

  return (
    <div className="flex flex-col items-center gap-4 mb-16">
      <div className="w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ابحث عن مشروع..."
          className="w-full px-4 py-3 rounded-full border-2 border-[#1C474A]/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3A3E] focus:border-[#0F3A3E] text-sm bg-[#0A2F33]/20 text-[#F7F6F4] placeholder-[#CBC1B8]/60"
        />
      </div>
      <div className="inline-flex items-center gap-3 bg-[#0A2F33]/40 backdrop-blur-sm rounded-full p-2 shadow-lg border border-[#1C474A]/30">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap cursor-pointer
              ${activeFilter === filter.id 
                ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-md' 
                : 'text-[#CBC1B8]/80 hover:text-[#F7F6F4] hover:bg-[#1C474A]/30'
              }
            `}
          >
            <div className={`w-5 h-5 flex items-center justify-center ${activeFilter === filter.id ? 'text-[#0A1F21]' : ''}`}>
              <i className={filter.icon}></i>
            </div>
            <span className="text-sm">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

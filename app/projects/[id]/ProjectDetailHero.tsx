
'use client';

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  location: string;
  image: string;
}

export default function ProjectDetailHero({ title, category, location, image }: ProjectDetailHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-[#CBC1B8] text-[#0A1F21] px-6 py-3 rounded-full mb-6 shadow-xl">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-building-2-line text-lg"></i>
            </div>
            <span className="font-bold">{category}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Cairo'] font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          {/* Location */}
          <div className="flex items-center justify-center gap-3 text-white/90 text-xl">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-map-pin-line text-[#CBC1B8] text-2xl"></i>
            </div>
            <span className="font-medium">{location}</span>
          </div>

          {/* Decorative Line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-20 h-1 bg-[#CBC1B8] rounded-full"></div>
            <div className="w-3 h-3 bg-[#CBC1B8] rounded-full"></div>
            <div className="w-20 h-1 bg-[#CBC1B8] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

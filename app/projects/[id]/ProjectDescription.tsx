'use client';

interface ProjectDescriptionProps {
  description: string;
  challenges: string[];
  solutions: string[];
}

export default function ProjectDescription({ description, challenges, solutions }: ProjectDescriptionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1C474A] to-[#0A2F33]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-xl mb-16 border border-white/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#CBC1B8] rounded-full">
                <i className="ri-file-text-line text-2xl text-[#0A1F21]"></i>
              </div>
              <h2 className="text-3xl font-['Cairo'] font-bold text-white">
                نبذة عن المشروع
              </h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 shadow-lg border-2 border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-red-500 rounded-full">
                  <i className="ri-alert-line text-xl text-white"></i>
                </div>
                <h3 className="text-2xl font-['Cairo'] font-bold text-red-900">
                  التحديات
                </h3>
              </div>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-red-500 rounded-full mt-1 flex-shrink-0">
                      <i className="ri-close-line text-sm text-white"></i>
                    </div>
                    <span className="text-red-900/90 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg border-2 border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full">
                  <i className="ri-lightbulb-line text-xl text-white"></i>
                </div>
                <h3 className="text-2xl font-['Cairo'] font-bold text-green-900">
                  الحلول
                </h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-500 rounded-full mt-1 flex-shrink-0">
                      <i className="ri-check-line text-sm text-white"></i>
                    </div>
                    <span className="text-green-900/90 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

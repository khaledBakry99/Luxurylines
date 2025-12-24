'use client';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'الفحص والتقييم',
    description: 'فحص شامل للموقع وتقييم الاحتياجات وتحديد نطاق العمل',
    icon: 'ri-search-eye-line'
  },
  {
    number: '02',
    title: 'التخطيط والتسعير',
    description: 'وضع خطة عمل تفصيلية وتقديم عرض سعر شامل وواضح',
    icon: 'ri-file-list-3-line'
  },
  {
    number: '03',
    title: 'الأعمال الأولية',
    description: 'البدء بأعمال السباكة والكهرباء والأعمال المدنية الأساسية',
    icon: 'ri-tools-line'
  },
  {
    number: '04',
    title: 'التشطيبات الرئيسية',
    description: 'تنفيذ أعمال الأرضيات والجدران والأسقف والنجارة',
    icon: 'ri-paint-brush-line'
  },
  {
    number: '05',
    title: 'اللمسات النهائية',
    description: 'الدهانات النهائية وتركيب الإضاءة والإكسسوارات',
    icon: 'ri-magic-line'
  },
  {
    number: '06',
    title: 'التسليم والضمان',
    description: 'فحص نهائي شامل وتسليم المشروع مع ضمان الجودة',
    icon: 'ri-checkbox-circle-line'
  }
];

export default function ServiceProcess() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            مراحل العمل
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-white mb-4">
            كيف نعمل؟
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نتبع منهجية واضحة ومنظمة لضمان تنفيذ مشروعك بأعلى جودة
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 transition-all duration-700 ${
                visibleSteps.includes(index)
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                  ? 'translate-x-20 opacity-0'
                  : '-translate-x-20 opacity-0'
              }`}
            >
              {index < steps.length - 1 && (
                <div className="absolute right-[72px] top-24 w-0.5 h-20 bg-gradient-to-b from-[#CBC1B8]/30 to-transparent"></div>
              )}

              <div className="flex-shrink-0 relative">
                <div className="w-36 h-36 flex items-center justify-center bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-3xl shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                  <span className="text-5xl font-bold text-white">{step.number}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg">
                  <i className={`${step.icon} text-2xl text-[#0A1F21]`}></i>
                </div>
              </div>

              <div className="flex-1 bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-['Cairo'] font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
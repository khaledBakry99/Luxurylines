'use client';

import { useState, useEffect, useRef } from 'react';

export default function CompanyStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="company-story" ref={sectionRef} className="py-20 bg-gradient-to-b from-[#0A2F33] to-[#0F3A3E] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#CBC1B8] rounded-full transform rotate-45"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F7F6F4] rounded-full transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Cairo']">
              قصة النجاح
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              رحلة من الشغف والإبداع بدأت منذ عقد ونصف، لتصبح اليوم أحد أبرز الأسماء في عالم التصميم والتشطيب
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{transitionDelay: '0.2s'}}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 font-['Cairo']">
                البداية والرؤية
              </h3>
              
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  بدأت رحلتنا في عام 2009 بحلم بسيط: تحويل المساحات العادية إلى تحف معمارية تعكس شخصية أصحابها وتلبي احتياجاتهم. منذ ذلك الحين، نمونا لنصبح فريقاً من 50+ مهندس ومصمم متخصص.
                </p>
                
                <p className="text-white/80 leading-relaxed">
                  نؤمن بأن التصميم الجيد ليس مجرد شكل جميل، بل هو حل ذكي يجمع بين الوظيفة والجمال والاستدامة. هذا ما دفعنا لتطوير منهجية عمل فريدة تضمن تحقيق رؤية كل عميل بأعلى معايير الجودة.
                </p>

                <div className="bg-gradient-to-r from-[#CBC1B8]/10 to-[#F7F6F4]/10 p-6 rounded-2xl border-r-4 border-[#CBC1B8]">
                  <h4 className="text-xl font-bold text-white mb-3 font-['Cairo']">رؤيتنا</h4>
                  <p className="text-white/80">
                    أن نكون الخيار الأول في المملكة العربية السعودية للتصميم الداخلي والخارجي الفاخر، ونساهم في تشكيل مستقبل العمارة المعاصرة.
                  </p>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{transitionDelay: '0.4s'}}>
              <div className="relative mb-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://readdy.ai/api/search-image?query=modern%20luxury%20interior%20design%20office%20with%20team%20of%20professional%20architects%20and%20designers%20working%20on%20projects%2C%20elegant%20workspace%20with%20glass%20walls%20and%20contemporary%20furniture%2C%20bright%20natural%20lighting%2C%20professional%20atmosphere&width=600&height=450&seq=1&orientation=landscape"
                    alt="مكتب Luxurylines"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] p-4 rounded-2xl shadow-xl">
                  <div className="text-[#0A1F21] text-center">
                    <div className="text-2xl font-bold font-['Cairo']">2009</div>
                    <div className="text-sm font-semibold">سنة التأسيس</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'ri-award-line', title: 'جوائز التميز', count: '15+' },
                  { icon: 'ri-team-line', title: 'فريق العمل', count: '50+' },
                  { icon: 'ri-building-line', title: 'مدن العمل', count: '12' },
                  { icon: 'ri-heart-line', title: 'رضا العملاء', count: '99%' }
                ].map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 group"
                  >
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <i className={`${achievement.icon} text-[#0A1F21] text-xl`}></i>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white font-['Cairo']">{achievement.count}</div>
                        <div className="text-sm text-white/70">{achievement.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
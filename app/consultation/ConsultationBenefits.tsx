'use client';

export default function ConsultationBenefits() {
  const benefits = [
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'تحليل احترافي',
      description: 'نقوم بتحليل شامل لاحتياجاتك ومتطلبات مشروعك بدقة عالية',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: 'ri-pencil-ruler-2-line',
      title: 'تصميم مخصص',
      description: 'نقدم لك أفكار تصميمية مبتكرة تناسب ذوقك وميزانيتك',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'تقدير التكلفة',
      description: 'نوفر لك تقديراً دقيقاً للتكاليف والجدول الزمني للمشروع',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'ri-team-line',
      title: 'فريق متخصص',
      description: 'خبراء في التصميم الداخلي والخارجي بخبرة تزيد عن 15 عاماً',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-file-text-line',
      title: 'تقرير شامل',
      description: 'تحصل على تقرير مفصل يتضمن كل التفاصيل والتوصيات',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'متابعة مستمرة',
      description: 'نبقى على تواصل معك لضمان تحقيق رؤيتك بالشكل الأمثل',
      color: 'from-indigo-500 to-violet-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A] relative overflow-hidden">
      {/* عناصر خلفية زخرفية */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1C474A]/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0A2F33]/30 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-[#CBC1B8]/20 px-6 py-3 rounded-full mb-6">
            <i className="ri-star-line text-[#CBC1B8] text-xl"></i>
            <span className="text-[#CBC1B8] font-semibold">ماذا ستحصل عليه</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            فوائد الاستشارة المجانية
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نقدم لك استشارة شاملة ومجانية تماماً لمساعدتك في اتخاذ القرار الصحيح
          </p>
        </div>

        {/* شبكة الفوائد */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:border-[#CBC1B8]/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* الأيقونة */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>
              </div>

              {/* المحتوى */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#CBC1B8] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>

              {/* خط زخرفي */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#CBC1B8] to-white group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* قسم الضمان */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0A1F21] to-[#1C474A] rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            {/* عناصر زخرفية */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CBC1B8]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CBC1B8]/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-[#CBC1B8] rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-500">
                <i className="ri-shield-check-line text-4xl text-[#0A1F21]"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                ضمان الجودة والاحترافية
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                نلتزم بتقديم أفضل الحلول والاستشارات المهنية التي تساعدك على تحقيق مشروع أحلامك بأعلى معايير الجودة والإبداع
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
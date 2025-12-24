'use client';

export default function ServiceProcess() {
  const steps = [
    {
      number: '01',
      title: 'الاستشارة الأولية',
      description: 'نستمع لأفكارك ومتطلباتك ونناقش رؤيتك للمشروع',
      icon: 'ri-chat-3-line'
    },
    {
      number: '02',
      title: 'دراسة الموقع',
      description: 'نقوم بدراسة شاملة للموقع والمتطلبات الهندسية',
      icon: 'ri-map-pin-line'
    },
    {
      number: '03',
      title: 'التصميم الأولي',
      description: 'نقدم تصاميم أولية متعددة للاختيار من بينها',
      icon: 'ri-draft-line'
    },
    {
      number: '04',
      title: 'التطوير والتعديل',
      description: 'نطور التصميم المختار ونجري التعديلات المطلوبة',
      icon: 'ri-edit-line'
    },
    {
      number: '05',
      title: 'المخططات النهائية',
      description: 'نعد المخططات الهندسية النهائية والرسومات التنفيذية',
      icon: 'ri-file-list-3-line'
    },
    {
      number: '06',
      title: 'التسليم والمتابعة',
      description: 'نسلم جميع الوثائق ونتابع معك خلال مرحلة التنفيذ',
      icon: 'ri-checkbox-circle-line'
    }
  ];

  return (
    <section className="py-20 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Cairo'] font-bold text-[#0A1F21] mb-6">
            خطوات العمل
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            نتبع منهجية احترافية لضمان نجاح مشروعك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="absolute top-6 left-6 text-6xl font-bold text-teal-500/10 group-hover:text-teal-500/20 transition-colors duration-300">
                {step.number}
              </div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1C474A] to-[#0F3A3E] rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <i className={`${step.icon} text-3xl text-white`}></i>
                </div>
                
                <h3 className="text-2xl font-['Cairo'] font-bold text-[#0A1F21] mb-4">
                  {step.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
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
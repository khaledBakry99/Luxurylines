
const features = [
  {
    icon: 'ri-award-line',
    title: 'خبرة متميزة',
    description: 'أكثر من 15 عام من الخبرة في مجال التصميم والتشطيب'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'ضمان الجودة',
    description: 'نضمن أعلى معايير الجودة في جميع مراحل المشروع'
  },
  {
    icon: 'ri-time-line',
    title: 'التسليم في الوقت المحدد',
    description: 'نلتزم بالمواعيد المحددة ونحترم وقت عملائنا'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0A1F21]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Cairo'] font-bold text-[#F7F6F4] mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-lg text-[#CBC1B8]/90 max-w-2xl mx-auto">
            نحن نجمع بين الخبرة والإبداع لتقديم حلول تصميم متكاملة تلبي توقعاتك وتتجاوزها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-[#CBC1B8] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className={`${feature.icon} text-3xl text-[#0A1F21]`}></i>
              </div>
              <h3 className="text-xl font-['Cairo'] font-semibold text-[#F7F6F4] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#CBC1B8]/85 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

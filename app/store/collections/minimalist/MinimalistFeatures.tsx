'use client';

export default function MinimalistFeatures() {
  const features = [
    {
      icon: 'ri-focus-3-line',
      title: 'تصاميم وظيفية',
      description: 'كل قطعة مصممة لتكون عملية وجميلة في نفس الوقت'
    },
    {
      icon: 'ri-leaf-line',
      title: 'مواد طبيعية',
      description: 'خشب وأقمشة طبيعية صديقة للبيئة'
    },
    {
      icon: 'ri-palette-line',
      title: 'ألوان محايدة',
      description: 'تدرجات هادئة تخلق مساحات مريحة ومتناسقة'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'أسعار معقولة',
      description: 'جودة عالية بأسعار مناسبة للجميع'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6">
            لماذا تختار مجموعتنا البسيطة؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            حياة أبسط وأجمل مع تصاميم وظيفية ومريحة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 hover:border-[#FFA500]/30 transition-all duration-300 hover:shadow-xl"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-2xl shadow-lg">
                <i className={`${feature.icon} text-4xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            نصائح من خبرائنا لحياة أبسط
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في اختيار القطع المثالية لمساحة بسيطة ومريحة
          </p>
          <button className="bg-[#FFA500] hover:bg-[#FF8C00] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer">
            احصل على نصائح الخبراء
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

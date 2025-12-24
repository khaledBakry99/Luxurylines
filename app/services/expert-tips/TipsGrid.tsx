'use client';
import { useState } from 'react';

export default function TipsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع النصائح', icon: 'ri-apps-line' },
    { id: 'interior', name: 'التصميم الداخلي', icon: 'ri-home-4-line' },
    { id: 'exterior', name: 'التصميم الخارجي', icon: 'ri-building-line' },
    { id: 'colors', name: 'الألوان', icon: 'ri-palette-line' },
    { id: 'lighting', name: 'الإضاءة', icon: 'ri-lightbulb-line' },
    { id: 'furniture', name: 'الأثاث', icon: 'ri-sofa-line' }
  ];

  const tips = [
    {
      id: 1,
      category: 'interior',
      title: 'اختيار الألوان المناسبة',
      description: 'الألوان الفاتحة تجعل المساحات تبدو أكبر، بينما الألوان الداكنة تضيف عمقاً ودفئاً للغرفة',
      icon: 'ri-palette-line',
      color: 'from-[#1C474A] to-[#0F3A3E]',
      image: 'https://readdy.ai/api/search-image?query=interior%20design%20color%20palette%20selection%20with%20paint%20swatches%2C%20color%20wheels%2C%20room%20samples%2C%20professional%20color%20coordination&width=600&height=400&seq=tip-colors&orientation=landscape'
    },
    {
      id: 2,
      category: 'lighting',
      title: 'أهمية الإضاءة الطبيعية',
      description: 'استغل الإضاءة الطبيعية قدر الإمكان، فهي تحسن المزاج وتوفر الطاقة وتبرز جمال التصميم',
      icon: 'ri-sun-line',
      color: 'from-[#F7F6F4] to-[#CBC1B8]',
      image: 'https://readdy.ai/api/search-image?query=bright%20room%20with%20natural%20sunlight%20through%20large%20windows%2C%20beautiful%20daylight%20interior%2C%20natural%20lighting%20design&width=600&height=400&seq=tip-natural-light&orientation=landscape'
    },
    {
      id: 3,
      category: 'interior',
      title: 'استغلال المساحات الصغيرة',
      description: 'استخدم الأثاث متعدد الوظائف والمرايا لجعل المساحات الصغيرة تبدو أكبر وأكثر عملية',
      icon: 'ri-ruler-line',
      color: 'from-green-500 to-emerald-500',
      image: 'https://readdy.ai/api/search-image?query=small%20space%20interior%20design%20with%20multifunctional%20furniture%2C%20smart%20storage%20solutions%2C%20compact%20living%20area&width=600&height=400&seq=tip-small-space&orientation=landscape'
    },
    {
      id: 4,
      category: 'furniture',
      title: 'اختيار الأثاث المناسب',
      description: 'اختر أثاثاً يتناسب مع حجم الغرفة ووظيفتها، مع مراعاة الراحة والجودة',
      icon: 'ri-sofa-line',
      color: 'from-[#0A2F33] to-[#1C474A]',
      image: 'https://readdy.ai/api/search-image?query=modern%20furniture%20selection%20showroom%20with%20elegant%20sofas%2C%20chairs%2C%20tables%2C%20quality%20furniture%20pieces&width=600&height=400&seq=tip-furniture&orientation=landscape'
    },
    {
      id: 5,
      category: 'exterior',
      title: 'تنسيق الحدائق',
      description: 'اختر نباتات تتناسب مع المناخ المحلي وتحتاج لصيانة قليلة لحديقة جميلة طوال العام',
      icon: 'ri-plant-line',
      color: 'from-green-600 to-teal-600',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20landscaped%20garden%20with%20plants%2C%20flowers%2C%20outdoor%20design%2C%20garden%20coordination&width=600&height=400&seq=tip-garden&orientation=landscape'
    },
    {
      id: 6,
      category: 'lighting',
      title: 'طبقات الإضاءة',
      description: 'استخدم ثلاث طبقات من الإضاءة: العامة، والمهام، والمحيطة لإضاءة مثالية',
      icon: 'ri-lightbulb-flash-line',
      color: 'from-[#F7F6F4]-500 to-[#CBC1B8]-500',
      image: 'https://readdy.ai/api/search-image?query=layered%20lighting%20design%20interior%20with%20ambient%2C%20task%2C%20and%20accent%20lighting%2C%20modern%20light%20fixtures&width=600&height=400&seq=tip-lighting-layers&orientation=landscape'
    },
    {
      id: 7,
      category: 'colors',
      title: 'قاعدة 60-30-10',
      description: '60% لون أساسي، 30% لون ثانوي، 10% لون مميز - هذه القاعدة تضمن توازناً مثالياً',
      icon: 'ri-pie-chart-line',
      color: 'from-[#CBC1B8]-500 to-[#0F3A3E]-500',
      image: 'https://readdy.ai/api/search-image?query=color%20theory%2060-30-10%20rule%20interior%20design%20with%20balanced%20color%20scheme%2C%20harmonious%20room%20colors&width=600&height=400&seq=tip-color-rule&orientation=landscape'
    },
    {
      id: 8,
      category: 'interior',
      title: 'النقطة المحورية',
      description: 'كل غرفة تحتاج نقطة محورية تجذب الانتباه، قد تكون لوحة فنية أو قطعة أثاث مميزة',
      icon: 'ri-focus-3-line',
      color: 'from-[#0A2F33] to-[#0F3A3E]',
      image: 'https://readdy.ai/api/search-image?query=room%20focal%20point%20with%20statement%20piece%2C%20eye-catching%20interior%20design%20element%2C%20featured%20artwork%20or%20furniture&width=600&height=400&seq=tip-focal-point&orientation=landscape'
    },
    {
      id: 9,
      category: 'exterior',
      title: 'الواجهات الخارجية',
      description: 'اختر مواد متينة ومقاومة للعوامل الجوية مع تصميم يتناسب مع البيئة المحيطة',
      icon: 'ri-building-2-line',
      color: 'from-gray-600 to-gray-800',
      image: 'https://readdy.ai/api/search-image?query=modern%20building%20exterior%20facade%20with%20durable%20materials%2C%20weather-resistant%20design%2C%20architectural%20beauty&width=600&height=400&seq=tip-facade&orientation=landscape'
    }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-white shadow-lg scale-105'
                  : 'bg-white text-white/80 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              <i className={`${category.icon} text-lg`}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTips.map((tip, index) => (
            <div
              key={tip.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${tip.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <i className={`${tip.icon} text-2xl bg-gradient-to-br ${tip.color} bg-clip-text text-transparent`}></i>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-['Cairo'] font-bold text-[#0A1F21] mb-3">
                  {tip.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
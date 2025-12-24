'use client';
import { useState } from 'react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="consultation-form" className="py-24 bg-gradient-to-b from-[#1C474A] to-[#0A1F21] relative overflow-hidden">
      {/* عناصر خلفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #CBC1B8 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* العنوان */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-[#CBC1B8]/20 px-6 py-3 rounded-full mb-6">
              <i className="ri-edit-line text-[#CBC1B8] text-xl"></i>
              <span className="text-[#CBC1B8] font-semibold">املأ البيانات</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              احجز استشارتك المجانية
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              املأ النموذج أدناه وسيتواصل معك أحد خبرائنا خلال 24 ساعة
            </p>
          </div>

          {/* النموذج */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* الصف الأول */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* الاسم */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-user-line text-[#CBC1B8]"></i>
                    <span>الاسم الكامل</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 placeholder-white/50"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-mail-line text-[#CBC1B8]"></i>
                    <span>البريد الإلكتروني</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 placeholder-white/50"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* الصف الثاني */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* رقم الهاتف */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-phone-line text-[#CBC1B8]"></i>
                    <span>رقم الهاتف</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 placeholder-white/50"
                    placeholder="+966 5X XXX XXXX"
                  />
                </div>

                {/* نوع المشروع */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-building-line text-[#CBC1B8]"></i>
                    <span>نوع المشروع</span>
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 pr-8 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23CBC1B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    <option value="" className="bg-[#0A1F21]">اختر نوع المشروع</option>
                    <option value="residential" className="bg-[#0A1F21]">سكني</option>
                    <option value="commercial" className="bg-[#0A1F21]">تجاري</option>
                    <option value="villa" className="bg-[#0A1F21]">فيلا</option>
                    <option value="apartment" className="bg-[#0A1F21]">شقة</option>
                    <option value="office" className="bg-[#0A1F21]">مكتب</option>
                    <option value="other" className="bg-[#0A1F21]">أخرى</option>
                  </select>
                </div>
              </div>

              {/* الصف الثالث */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* الميزانية */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-money-dollar-circle-line text-[#CBC1B8]"></i>
                    <span>الميزانية التقريبية</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 pr-8 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23CBC1B8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left 1rem center',
                      backgroundSize: '1.5rem'
                    }}
                  >
                    <option value="" className="bg-[#0A1F21]">اختر الميزانية</option>
                    <option value="50k-100k" className="bg-[#0A1F21]">50,000 - 100,000 ريال</option>
                    <option value="100k-200k" className="bg-[#0A1F21]">100,000 - 200,000 ريال</option>
                    <option value="200k-500k" className="bg-[#0A1F21]">200,000 - 500,000 ريال</option>
                    <option value="500k+" className="bg-[#0A1F21]">أكثر من 500,000 ريال</option>
                  </select>
                </div>

                {/* الموقع */}
                <div className="group">
                  <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                    <i className="ri-map-pin-line text-[#CBC1B8]"></i>
                    <span>موقع المشروع</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 placeholder-white/50"
                    placeholder="المدينة أو المنطقة"
                  />
                </div>
              </div>

              {/* الرسالة */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 flex items-center space-x-2 space-x-reverse">
                  <i className="ri-message-3-line text-[#CBC1B8]"></i>
                  <span>تفاصيل إضافية</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-5 py-4 rounded-xl border-2 border-white/20 focus:border-[#CBC1B8] focus:ring-4 focus:ring-[#CBC1B8]/10 transition-all duration-300 text-white bg-white/5 resize-none placeholder-white/50"
                  placeholder="أخبرنا المزيد عن مشروعك وتوقعاتك... (حد أقصى 500 حرف)"
                ></textarea>
                <div className="text-left mt-2 text-sm text-white/60">
                  {formData.message.length}/500 حرف
                </div>
              </div>

              {/* زر الإرسال */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-5 rounded-xl font-bold text-lg shadow-2xl transition-all duration-500 overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3 space-x-reverse">
                    <span>إرسال الطلب</span>
                    <i className="ri-send-plane-fill text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-l from-[#CBC1B8] to-[#F7F6F4] translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>

              {/* ملاحظة */}
              <div className="bg-[#CBC1B8]/10 border-r-4 border-[#CBC1B8] rounded-lg p-5 flex items-start space-x-3 space-x-reverse">
                <i className="ri-information-line text-[#CBC1B8] text-xl mt-1"></i>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong>ملاحظة:</strong> جميع المعلومات المقدمة سرية تماماً ولن يتم مشاركتها مع أي طرف ثالث. سيتم التواصل معك خلال 24 ساعة من تقديم الطلب.
                </p>
              </div>
            </form>
          </div>

          {/* معلومات التواصل السريع */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'ri-phone-fill', title: 'اتصل بنا', value: '+966 50 123 4567', color: 'from-[#1C474A] to-[#0A1F21]' },
              { icon: 'ri-mail-fill', title: 'راسلنا', value: 'info@luxurylin.com', color: 'from-[#0F3A3E] to-[#0A2F33]' },
              { icon: 'ri-time-fill', title: 'ساعات العمل', value: 'السبت - الخميس: 9ص - 6م', color: 'from-[#1C474A] to-[#0F3A3E]' }
            ].map((contact, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 text-center"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${contact.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="text-white font-bold mb-2">{contact.title}</h4>
                <p className="text-white/70 text-sm">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
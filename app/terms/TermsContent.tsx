'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TermsContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: '1. القبول بالشروط',
      content: 'باستخدامك لموقع Luxurylines وخدماته، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.'
    },
    {
      title: '2. الخدمات المقدمة',
      content: 'نحن نقدم خدمات التصميم الداخلي والديكور، بما في ذلك التصميم والتنفيذ والإشراف على المشاريع. جميع الخدمات تخضع للاتفاقيات المحددة مع كل عميل.'
    },
    {
      title: '3. حقوق الملكية الفكرية',
      content: 'جميع التصاميم والمحتوى المقدم من Luxurylines محمي بحقوق الملكية الفكرية. لا يجوز نسخ أو توزيع أو استخدام أي محتوى دون إذن كتابي مسبق.'
    },
    {
      title: '4. المدفوعات والأسعار',
      content: 'جميع الأسعار المعروضة على الموقع قابلة للتغيير دون إشعار مسبق. يتم تحديد الأسعار النهائية في العقود الموقعة مع العملاء. الدفعات تتم وفقاً للجدول الزمني المتفق عليه.'
    },
    {
      title: '5. الإلغاء والاسترجاع',
      content: 'سياسة الإلغاء والاسترجاع تختلف حسب نوع الخدمة ومرحلة المشروع. يرجى الرجوع إلى العقد الخاص بك للحصول على تفاصيل محددة. بشكل عام، المبالغ المدفوعة مقابل الخدمات المنجزة غير قابلة للاسترداد.'
    },
    {
      title: '6. المسؤولية',
      content: 'نحن نبذل قصارى جهدنا لتقديم خدمات عالية الجودة. ومع ذلك، لا نتحمل المسؤولية عن أي أضرار غير مباشرة أو تبعية قد تنتج عن استخدام خدماتنا.'
    },
    {
      title: '7. الخصوصية',
      content: 'نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. يرجى الاطلاع على سياسة الخصوصية الخاصة بنا لمزيد من التفاصيل حول كيفية جمع واستخدام بياناتك.'
    },
    {
      title: '8. التعديلات على الشروط',
      content: 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على الموقع.'
    },
    {
      title: '9. القانون الحاكم',
      content: 'تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن هذه الشروط سيتم حله وفقاً للقوانين السعودية.'
    },
    {
      title: '10. الاتصال بنا',
      content: 'إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا عبر البريد الإلكتروني: info@luxurylin.com أو الهاتف: +966 50 123 4567'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] overflow-hidden">
      {/* خلفية ديكورية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#CBC1B8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F7F6F4]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* العنوان */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-[#CBC1B8]/10 backdrop-blur-sm border border-[#CBC1B8]/20 rounded-full mb-6">
            <i className="ri-file-text-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">الشروط القانونية</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Cairo'] font-bold text-white mb-6">
            الشروط والأحكام
          </h1>
          <p className="text-xl text-[#CBC1B8]/90 max-w-3xl mx-auto leading-relaxed">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا
          </p>
          <p className="text-sm text-white/60 mt-4">
            آخر تحديث: ديسمبر 2024
          </p>
        </div>

        {/* المحتوى */}
        <div className={`max-w-4xl mx-auto space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-card-glow hover:shadow-card-glow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-['Cairo'] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#CBC1B8]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-checkbox-circle-line text-[#CBC1B8] text-xl"></i>
                </div>
                {section.title}
              </h2>
              <p className="text-white/80 leading-relaxed text-lg pr-13">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* ملاحظة مهمة */}
        <div className={`max-w-4xl mx-auto mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#CBC1B8]/20 to-[#F7F6F4]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#CBC1B8]/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#CBC1B8]/30 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-information-line text-2xl text-[#CBC1B8]"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-['Cairo']">ملاحظة مهمة</h3>
                <p className="text-white/80 leading-relaxed">
                  باستخدامك لخدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على جميع الشروط والأحكام المذكورة أعلاه. 
                  إذا كان لديك أي استفسارات أو تحتاج إلى توضيح، لا تتردد في الاتصال بفريق الدعم لدينا.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* أزرار التنقل */}
        <div className={`max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center gap-3 bg-white/10 border-2 border-[#CBC1B8]/50 text-[#CBC1B8] px-8 py-4 rounded-xl font-bold hover:bg-[#CBC1B8]/10 hover:shadow-lg hover:shadow-[#CBC1B8]/15 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <i className="ri-user-add-line text-xl group-hover:animate-pulse"></i>
              <span>أوافق وأريد التسجيل</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CBC1B8]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 bg-white/5 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:shadow-lg hover:shadow-white/15 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <i className="ri-customer-service-line text-xl group-hover:animate-pulse"></i>
              <span>لدي استفسار</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitAddr, setSubmitAddr] = useState("");

  useEffect(() => {
    setIsVisible(true);
    fetchFormUrl();
  }, []);

  const fetchFormUrl = async () => {
    try {
      const response = await fetch("/api/get-form-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "contact-form" }),
      });
      const data = await response.json();
      if (data.url) {
        setSubmitAddr(data.url);
      }
    } catch (error) {
      console.error("Error fetching form URL:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "message") {
      if (value.length <= 500) {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (charCount > 500) {
      alert("الرجاء تقليل عدد الأحرف في الرسالة إلى 500 حرف أو أقل");
      return;
    }

    if (!submitAddr) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch(submitAddr, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });
        setCharCount(0);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0A2F33] via-[#0F3A3E] to-[#0A2F33] overflow-hidden">
      {/* خلفية ديكورية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#CBC1B8]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F7F6F4]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#CBC1B8]/3 to-[#F7F6F4]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#CBC1B8]/10 to-[#F7F6F4]/10 backdrop-blur-sm border border-[#CBC1B8]/20 rounded-full mb-6">
            <i className="ri-lightbulb-line text-[#CBC1B8] text-lg ml-2"></i>
            <span className="text-[#CBC1B8] font-semibold">
              احصل على نصائح مجانية من خبرائنا
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Cairo'] font-bold text-white mb-6">
            املأ النموذج أدناه وسيتواصل معك أحد خبرائنا خلال 24 ساعة
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <form
            id="contact-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 shadow-card-glow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* الاسم الكامل */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 text-lg flex items-center">
                  <i className="ri-user-line text-[#CBC1B8] ml-2"></i>
                  الاسم الكامل <span className="text-red-500 mr-1">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 group-hover:border-[#CBC1B8]/30 placeholder-white/50"
                />
              </div>

              {/* رقم الهاتف */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 text-lg flex items-center">
                  <i className="ri-phone-line text-[#CBC1B8] ml-2"></i>
                  رقم الهاتف <span className="text-red-500 mr-1">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="‎+966 55 930 0791"
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 group-hover:border-[#CBC1B8]/30 placeholder-white/50"
                  dir="ltr"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* البريد الإلكتروني */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 text-lg flex items-center">
                  <i className="ri-mail-line text-[#CBC1B8] ml-2"></i>
                  البريد الإلكتروني <span className="text-red-500 mr-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  dir="ltr"
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 group-hover:border-[#CBC1B8]/30 placeholder-white/50"
                />
              </div>

              {/* نوع الخدمة */}
              <div className="group">
                <label className="block text-white font-semibold mb-3 text-lg flex items-center">
                  <i className="ri-service-line text-[#CBC1B8] ml-2"></i>
                  نوع الخدمة
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 appearance-none cursor-pointer group-hover:border-[#CBC1B8]/30 pr-8"
                  >
                    <option value="" className="bg-[#0A1F21] text-white">
                      اختر نوع الخدمة
                    </option>
                    <option
                      value="interior"
                      className="bg-[#0A1F21] text-white"
                    >
                      التصميم الداخلي
                    </option>
                    <option
                      value="exterior"
                      className="bg-[#0A1F21] text-white"
                    >
                      التصميم الخارجي
                    </option>
                    <option
                      value="finishing"
                      className="bg-[#0A1F21] text-white"
                    >
                      التشطيبات
                    </option>
                    <option value="supply" className="bg-[#0A1F21] text-white">
                      التوريد
                    </option>
                    <option
                      value="management"
                      className="bg-[#0A1F21] text-white"
                    >
                      إدارة المشاريع
                    </option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8] text-xl pointer-events-none"></i>
                </div>
              </div>
            </div>

            {/* الميزانية المتوقعة */}
            <div className="mb-8 group">
              <label className="block text-white font-semibold mb-3 text-lg flex items-center">
                <i className="ri-money-dollar-circle-line text-[#CBC1B8] ml-2"></i>
                الميزانية المتوقعة
              </label>
              <div className="relative">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 appearance-none cursor-pointer group-hover:border-[#CBC1B8]/30 pr-8"
                >
                  <option value="" className="bg-[#0A1F21] text-white">
                    اختر الميزانية المتوقعة
                  </option>
                  <option value="50k-100k" className="bg-[#0A1F21] text-white">
                    50,000 - 100,000 ريال
                  </option>
                  <option value="100k-250k" className="bg-[#0A1F21] text-white">
                    100,000 - 250,000 ريال
                  </option>
                  <option value="250k-500k" className="bg-[#0A1F21] text-white">
                    250,000 - 500,000 ريال
                  </option>
                  <option value="500k+" className="bg-[#0A1F21] text-white">
                    أكثر من 500,000 ريال
                  </option>
                </select>
                <i className="ri-arrow-down-s-line absolute left-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8] text-xl pointer-events-none"></i>
              </div>
            </div>

            {/* تفاصيل المشروع */}
            <div className="mb-8 group">
              <label className="block text-white font-semibold mb-3 text-lg flex items-center">
                <i className="ri-file-text-line text-[#CBC1B8] ml-2"></i>
                تفاصيل المشروع
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                maxLength={500}
                placeholder="اكتب تفاصيل مشروعك ومتطلباتك الخاصة..."
                className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white text-sm focus:outline-none focus:border-[#CBC1B8] focus:bg-white/15 transition-all duration-300 resize-none group-hover:border-[#CBC1B8]/30 placeholder-white/50"
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-white/60">
                  الرجاء تحديد الرسالة بـ 500 حرف كحد أقصى
                </p>
                <p
                  className={`text-sm font-semibold ${
                    charCount > 500 ? "text-red-500" : "text-[#CBC1B8]"
                  }`}
                >
                  {charCount}/500 حرف
                </p>
              </div>
            </div>

            {/* موافقة على الشروط */}
            <div className="mb-8">
              <label className="flex items-start cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="mt-1 ml-3 w-5 h-5 text-[#CBC1B8] border-2 border-white/30 rounded focus:ring-[#CBC1B8] focus:ring-2 cursor-pointer bg-white/10"
                />
                <span className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                  أوافق على سياسة الخصوصية وأوافق على تلقي اتصالات تسويقية من
                  لوكس لين
                </span>
              </label>
            </div>

            {/* زر الإرسال */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || charCount > 500}
                className="group relative bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-16 py-5 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3 space-x-reverse">
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line text-xl animate-spin"></i>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-fill text-xl group-hover:animate-pulse"></i>
                      <span>إرسال الطلب</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {submitStatus === "success" && (
                <div className="mt-6 p-4 bg-green-500/20 border-2 border-green-500/40 rounded-2xl backdrop-blur-sm">
                  <p className="text-green-300 font-semibold flex items-center justify-center">
                    <i className="ri-checkbox-circle-fill text-2xl ml-2"></i>
                    تم إرسال طلبك بنجاح! سنتواصل معك قريباً
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-6 p-4 bg-red-500/20 border-2 border-red-500/40 rounded-2xl backdrop-blur-sm">
                  <p className="text-red-300 font-semibold flex items-center justify-center">
                    <i className="ri-error-warning-fill text-2xl ml-2"></i>
                    حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* معلومات إضافية */}
        <div
          className={`max-w-4xl mx-auto mt-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E] rounded-3xl p-10 text-center shadow-2xl border border-[#CBC1B8]/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-[#CBC1B8]/20 rounded-2xl flex items-center justify-center">
                <i className="ri-customer-service-2-fill text-3xl text-[#CBC1B8]"></i>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              هل لديك استفسار حول النصائح؟
            </h3>
            <p className="text-white/80 text-lg mb-8">
              فريق خدمة العملاء لدينا جاهز لمساعدتك في أي وقت
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966501234567"
                className="group relative bg-[#CBC1B8] text-[#0A1F21] px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#CBC1B8]/15 whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
                  <i className="ri-phone-fill text-lg group-hover:animate-pulse"></i>
                  <span>تواصل معنا</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A1F21]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              <a
                href="tel:+966501234567"
                className="group relative border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/15 whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 space-x-reverse">
                  <i className="ri-phone-fill text-lg group-hover:animate-pulse"></i>
                  <span>اتصل بنا الآن</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append('rating', rating.toString());

    try {
      const response = await fetch('https://readdy.ai/api/form/d4jv22cr7gp1ld6nhs70', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setRating(0);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="review-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <i className="ri-edit-box-line text-white text-4xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4">شاركنا رأيك</h2>
            <p className="text-gray-600 text-lg">
              رأيك يهمنا! ساعدنا في تحسين خدماتنا من خلال مشاركة تجربتك معنا
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} data-readdy-form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#001F3F] font-semibold mb-3 text-lg">
                    <i className="ri-user-line text-[#FFA500] ml-2"></i>
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 text-lg"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-[#001F3F] font-semibold mb-3 text-lg">
                    <i className="ri-mail-line text-[#FFA500] ml-2"></i>
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 text-lg"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[#001F3F] font-semibold mb-3 text-lg">
                  <i className="ri-service-line text-[#FFA500] ml-2"></i>
                  الخدمة المقدمة
                </label>
                <select
                  name="service"
                  required
                  className="w-full px-5 py-4 pr-8 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 text-lg cursor-pointer"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="التصميم الداخلي">التصميم الداخلي</option>
                  <option value="التصميم الخارجي">التصميم الخارجي</option>
                  <option value="التشطيب الكامل">التشطيب الكامل</option>
                  <option value="إدارة المشاريع">إدارة المشاريع</option>
                  <option value="التوريد والتركيب">التوريد والتركيب</option>
                  <option value="الاستشارات">الاستشارات</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-[#001F3F] font-semibold mb-4 text-lg">
                  <i className="ri-star-line text-[#FFA500] ml-2"></i>
                  التقييم
                </label>
                <div className="flex items-center justify-center space-x-3 space-x-reverse bg-gray-50 rounded-2xl p-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-all duration-200 transform hover:scale-125 cursor-pointer"
                    >
                      <i
                        className={`text-5xl ${
                          star <= (hoveredRating || rating)
                            ? 'ri-star-fill text-[#FFA500]'
                            : 'ri-star-line text-gray-300'
                        }`}
                      ></i>
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-center mt-3 text-[#FFA500] font-semibold text-lg">
                    {rating === 5 && 'ممتاز! 🌟'}
                    {rating === 4 && 'جيد جداً! 👍'}
                    {rating === 3 && 'جيد 👌'}
                    {rating === 2 && 'مقبول'}
                    {rating === 1 && 'يحتاج تحسين'}
                  </p>
                )}
              </div>

              <div className="mb-8">
                <label className="block text-[#001F3F] font-semibold mb-3 text-lg">
                  <i className="ri-message-3-line text-[#FFA500] ml-2"></i>
                  تعليقك
                </label>
                <textarea
                  name="comment"
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 resize-none text-lg"
                  placeholder="شاركنا تجربتك مع خدماتنا... (الحد الأقصى 500 حرف)"
                ></textarea>
              </div>

              {showSuccess && (
                <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center space-x-3 space-x-reverse">
                  <i className="ri-checkbox-circle-fill text-green-500 text-2xl"></i>
                  <p className="text-green-700 font-semibold">تم إرسال تقييمك بنجاح! شكراً لك 🎉</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="w-full bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2 space-x-reverse">
                    <i className="ri-loader-4-line animate-spin text-2xl"></i>
                    <span>جاري الإرسال...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2 space-x-reverse">
                    <i className="ri-send-plane-fill text-2xl"></i>
                    <span>إرسال التقييم</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

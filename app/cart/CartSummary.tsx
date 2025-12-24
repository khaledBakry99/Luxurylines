'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CartSummary() {
  const router = useRouter();
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  const subtotal = 3650;
  const shipping = 50;
  const taxRate = 0.15;
  const tax = (subtotal + shipping) * taxRate;
  const total = subtotal + shipping + tax - appliedDiscount;

  const applyDiscount = () => {
    if (!discountCode.trim()) {
      setDiscountMessage('يرجى إدخال كود الخصم ❌');
      return;
    }

    if (discountCode === 'SAVE10') {
      setAppliedDiscount(subtotal * 0.1);
      setDiscountMessage('تم تطبيق خصم 10%! 🎉');
    } else if (discountCode === 'SAVE20') {
      setAppliedDiscount(subtotal * 0.2);
      setDiscountMessage('تم تطبيق خصم 20%! 🎉');
    } else if (discountCode === 'WELCOME15') {
      setAppliedDiscount(subtotal * 0.15);
      setDiscountMessage('تم تطبيق خصم الترحيب 15%! 🎉');
    } else {
      setDiscountMessage('كود الخصم غير صالح ❌');
      setAppliedDiscount(0);
    }
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      router.push('/checkout');
    }, 1000);
  };

  const handlePaymentMethodClick = (method: string) => {
    alert(`تم اختيار طريقة الدفع: ${method} 💳`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 transform hover:shadow-2xl transition-all duration-500">
      <div className="bg-gradient-to-r from-[#FFA500] to-[#ff8c00] p-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <i className="ri-file-list-3-line text-xl"></i>
          </div>
          <span>ملخص الطلب</span>
        </h2>
      </div>

      <div className="p-6">
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-gray-700 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
            <span className="flex items-center gap-2">
              <i className="ri-shopping-bag-line text-[#FFA500]"></i>
              <span>المجموع الفرعي</span>
            </span>
            <span className="font-semibold">{subtotal.toFixed(2)} ر.س</span>
          </div>

          <div className="flex justify-between text-gray-700 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
            <span className="flex items-center gap-2">
              <i className="ri-truck-line text-blue-500"></i>
              <span>الشحن</span>
            </span>
            <span className="font-semibold">{shipping.toFixed(2)} ر.س</span>
          </div>

          <div className="flex justify-between text-gray-700 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300">
            <span className="flex items-center gap-2">
              <i className="ri-percent-line text-green-500"></i>
              <span>الضريبة (15%)</span>
            </span>
            <span className="font-semibold">{tax.toFixed(2)} ر.س</span>
          </div>

          {appliedDiscount > 0 && (
            <div className="flex justify-between text-green-600 p-3 bg-green-50 rounded-xl border-2 border-green-200 animate-pulse">
              <span className="flex items-center gap-2">
                <i className="ri-gift-line"></i>
                <span>الخصم</span>
              </span>
              <span className="font-bold">-{appliedDiscount.toFixed(2)} ر.س</span>
            </div>
          )}

          <div className="border-t-2 border-gray-200 pt-4 mt-4">
            <div className="flex justify-between text-xl font-bold text-gray-900 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-inner">
              <span className="flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-[#FFA500]"></i>
                <span>المجموع الكلي</span>
              </span>
              <span className="text-[#FFA500]">{total.toFixed(2)} ر.س</span>
            </div>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100">
          <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
            <i className="ri-coupon-line text-purple-500"></i>
            <span>كود الخصم</span>
          </label>
          <div className="flex gap-2">
            <input
              placeholder="أدخل كود الخصم"
              className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm font-medium transition-all duration-300"
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && applyDiscount()}
            />
            <button 
              onClick={applyDiscount}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-semibold whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <i className="ri-check-line"></i>
                <span>تطبيق</span>
              </span>
            </button>
          </div>
          {discountMessage && (
            <p className={`mt-3 text-sm font-semibold ${appliedDiscount > 0 ? 'text-green-600' : 'text-red-600'} animate-bounce`}>
              {discountMessage}
            </p>
          )}
          <p className="mt-2 text-xs text-gray-500">جرب: SAVE10 أو SAVE20 أو WELCOME15</p>
        </div>

        <div className="space-y-3 mb-6">
          <button 
            onClick={handleCheckout}
            disabled={isProcessing}
            className={`w-full ${isProcessing ? 'bg-gray-400' : 'bg-gradient-to-r from-[#FFA500] to-[#ff8c00]'} text-white py-4 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg whitespace-nowrap cursor-pointer group`}
          >
            <span className="flex items-center justify-center gap-2">
              {isProcessing ? (
                <>
                  <i className="ri-loader-4-line text-xl animate-spin"></i>
                  <span>جاري المعالجة...</span>
                </>
              ) : (
                <>
                  <i className="ri-shopping-cart-line text-xl group-hover:animate-bounce"></i>
                  <span>إتمام الشراء</span>
                  <i className="ri-arrow-left-line text-xl group-hover:translate-x-2 transition-transform"></i>
                </>
              )}
            </span>
          </button>

          <Link 
            href="/store"
            className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl hover:bg-gray-50 hover:border-[#FFA500] hover:text-[#FFA500] transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer group flex items-center justify-center"
          >
            <span className="flex items-center justify-center gap-2">
              <i className="ri-store-line group-hover:animate-pulse"></i>
              <span>متابعة التسوق</span>
            </span>
          </Link>
        </div>

        <div className="pt-6 border-t-2 border-gray-200 space-y-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i className="ri-shield-star-line text-[#FFA500]"></i>
            <span>ضمانات الشراء</span>
          </h3>

          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-300 group cursor-pointer"
               onClick={() => alert('دفع آمن ومضمون مع تشفير SSL 🔒')}>
            <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <i className="ri-shield-check-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">دفع آمن ومضمون</p>
              <p className="text-sm text-gray-600">حماية كاملة لبياناتك</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group cursor-pointer"
               onClick={() => alert('شحن مجاني للطلبات أكثر من 500 ر.س 🚚')}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <i className="ri-truck-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">شحن مجاني</p>
              <p className="text-sm text-gray-600">للطلبات أكثر من 500 ر.س</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-300 group cursor-pointer"
               onClick={() => alert('يمكنك إرجاع المنتجات خلال 30 يوم 🔄')}>
            <div className="w-10 h-10 flex items-center justify-center bg-[#FFA500] rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <i className="ri-refresh-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">إمكانية الإرجاع</p>
              <p className="text-sm text-gray-600">خلال 30 يوم من الشراء</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300 group cursor-pointer"
               onClick={() => alert('فريق الدعم متاح 24/7 لمساعدتك 📞')}>
            <div className="w-10 h-10 flex items-center justify-center bg-purple-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
              <i className="ri-customer-service-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900">دعم فني 24/7</p>
              <p className="text-sm text-gray-600">نحن هنا لمساعدتك دائماً</p>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
          <div className="flex items-center gap-3 mb-2">
            <i className="ri-secure-payment-line text-2xl text-yellow-600"></i>
            <p className="font-bold text-gray-900">طرق الدفع المتاحة</p>
            <button 
              onClick={() => setShowPaymentMethods(!showPaymentMethods)}
              className="mr-auto text-sm text-[#FFA500] hover:text-[#ff8c00] transition-colors cursor-pointer"
            >
              {showPaymentMethods ? 'إخفاء' : 'عرض التفاصيل'}
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div 
              className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
              onClick={() => handlePaymentMethodClick('بطاقة ائتمان')}
            >
              <i className="ri-bank-card-line text-xl text-blue-600"></i>
            </div>
            <div 
              className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
              onClick={() => handlePaymentMethodClick('ماستركارد')}
            >
              <i className="ri-mastercard-line text-xl text-red-600"></i>
            </div>
            <div 
              className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
              onClick={() => handlePaymentMethodClick('فيزا')}
            >
              <i className="ri-visa-line text-xl text-blue-700"></i>
            </div>
            <div 
              className="bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer transform hover:scale-105"
              onClick={() => handlePaymentMethodClick('باي بال')}
            >
              <i className="ri-paypal-line text-xl text-blue-500"></i>
            </div>
          </div>
          
          {showPaymentMethods && (
            <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 animate-slide-down">
              <h4 className="font-semibold text-gray-900 mb-2">معلومات إضافية:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• دفع آمن بتشفير SSL</li>
                <li>• لا توجد رسوم إضافية</li>
                <li>• معالجة فورية للدفع</li>
                <li>• إمكانية الدفع بالتقسيط</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
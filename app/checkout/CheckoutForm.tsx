'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type PaymentMethod = 'credit-card' | 'mada' | 'apple-pay' | 'stc-pay' | 'bank-transfer';

export default function CheckoutForm() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showShippingInfo, setShowShippingInfo] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    agreeTerms: false
  });

  const paymentMethods = [
    {
      id: 'credit-card' as PaymentMethod,
      name: 'بطاقة ائتمان',
      icon: 'ri-bank-card-line',
      description: 'Visa, Mastercard, American Express',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'mada' as PaymentMethod,
      name: 'مدى',
      icon: 'ri-bank-card-2-line',
      description: 'بطاقة مدى السعودية',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'apple-pay' as PaymentMethod,
      name: 'Apple Pay',
      icon: 'ri-apple-line',
      description: 'الدفع عبر Apple Pay',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'stc-pay' as PaymentMethod,
      name: 'STC Pay',
      icon: 'ri-smartphone-line',
      description: 'الدفع عبر STC Pay',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'bank-transfer' as PaymentMethod,
      name: 'تحويل بنكي',
      icon: 'ri-bank-line',
      description: 'تحويل مباشر من البنك',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      alert('يرجى الموافقة على الشروط والأحكام');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        router.push('/orders');
      }, 3000);
    }, 2500);
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-16 text-center border border-gray-100 animate-scaleIn">
        <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce">
          <i className="ri-checkbox-circle-line text-white text-6xl"></i>
        </div>
        <h2 className="text-4xl font-bold text-[#001F3F] mb-4">تمت العملية بنجاح!</h2>
        <p className="text-xl text-gray-600 mb-8">تم استلام طلبك وسيتم معالجته قريباً</p>
        <div className="inline-flex items-center gap-2 text-[#FFA500] font-semibold">
          <i className="ri-loader-4-line animate-spin"></i>
          <span>جاري التحويل إلى صفحة الطلبات...</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 overflow-hidden">
        <button
          type="button"
          onClick={() => setShowShippingInfo(!showShippingInfo)}
          className="w-full flex items-center justify-between gap-4 mb-6 cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#FFA500] to-[#ff8c00] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <i className="ri-user-line text-white text-2xl"></i>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold text-[#001F3F]">معلومات الشحن</h2>
              <p className="text-gray-600 text-sm">أدخل عنوان التوصيل</p>
            </div>
          </div>
          <div className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center transition-transform duration-300 ${showShippingInfo ? 'rotate-180' : ''}`}>
            <i className="ri-arrow-down-s-line text-2xl text-gray-600"></i>
          </div>
        </button>

        <div className={`transition-all duration-500 ease-in-out ${showShippingInfo ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">الاسم الكامل *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300"
                placeholder="أدخل اسمك الكامل"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">البريد الإلكتروني *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">رقم الجوال *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300"
                placeholder="+966 5X XXX XXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">المدينة *</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300"
                placeholder="الرياض"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-800 mb-2">العنوان الكامل *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300"
                placeholder="الشارع، الحي، رقم المبنى"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">الرمز البريدي</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#FFA500] focus:border-transparent transition-all duration-300"
                placeholder="12345"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-[#001F3F] to-[#003366] rounded-2xl flex items-center justify-center shadow-lg">
            <i className="ri-secure-payment-line text-white text-2xl"></i>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#001F3F]">طريقة الدفع</h2>
            <p className="text-gray-600 text-sm">اختر الطريقة المناسبة لك</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelectedPayment(method.id)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer text-right group ${
                selectedPayment === method.id
                  ? 'border-[#FFA500] bg-gradient-to-br from-orange-50 to-amber-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-[#FFA500] hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <i className={`${method.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#001F3F] text-lg mb-1">{method.name}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
                {selectedPayment === method.id && (
                  <div className="w-8 h-8 bg-[#FFA500] rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-white text-lg"></i>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedPayment === 'credit-card' && (
          <div className="space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">رقم البطاقة *</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                maxLength={19}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-2">اسم حامل البطاقة *</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="الاسم كما هو مكتوب على البطاقة"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">تاريخ الانتهاء *</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  maxLength={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="MM/YY"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">CVV *</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  maxLength={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="123"
                />
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="saveCard"
                checked={formData.saveCard}
                onChange={handleInputChange}
                className="w-5 h-5 text-[#FFA500] border-gray-300 rounded focus:ring-[#FFA500] cursor-pointer"
              />
              <span className="text-sm text-gray-700 font-semibold">حفظ البطاقة للمشتريات المستقبلية</span>
            </label>
          </div>
        )}

        {selectedPayment === 'mada' && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <i className="ri-bank-card-2-line text-white text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">الدفع عبر مدى</h3>
            <p className="text-gray-600 mb-6">سيتم تحويلك إلى بوابة الدفع الآمنة لإتمام العملية</p>
          </div>
        )}

        {selectedPayment === 'apple-pay' && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <i className="ri-apple-line text-white text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">الدفع عبر Apple Pay</h3>
            <p className="text-gray-600 mb-6">استخدم Apple Pay للدفع السريع والآمن</p>
          </div>
        )}

        {selectedPayment === 'stc-pay' && (
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <i className="ri-smartphone-line text-white text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-3">الدفع عبر STC Pay</h3>
            <p className="text-gray-600 mb-6">سيتم تحويلك إلى تطبيق STC Pay لإتمام الدفع</p>
          </div>
        )}

        {selectedPayment === 'bank-transfer' && (
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <i className="ri-bank-line text-white text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-[#001F3F] mb-4 text-center">معلومات التحويل البنكي</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                <span className="text-gray-600">اسم البنك:</span>
                <span className="font-bold text-[#001F3F]">البنك الأهلي السعودي</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                <span className="text-gray-600">رقم الحساب:</span>
                <span className="font-bold text-[#001F3F]">SA1234567890123456789012</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                <span className="text-gray-600">اسم المستفيد:</span>
                <span className="font-bold text-[#001F3F]">Luxurylines</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <label className="flex items-start gap-4 cursor-pointer group">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            required
            className="w-6 h-6 text-[#FFA500] border-gray-300 rounded focus:ring-[#FFA500] cursor-pointer mt-1"
          />
          <span className="text-gray-700 leading-relaxed">
            أوافق على{' '}
            <a href="/policies/return-policy" className="text-[#FFA500] font-bold hover:underline">
              الشروط والأحكام
            </a>
            {' '}و{' '}
            <a href="/policies/shipping-policy" className="text-[#FFA500] font-bold hover:underline">
              سياسة الخصوصية
            </a>
            {' '}الخاصة بالموقع
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className={`w-full ${
          isProcessing
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-[#FFA500] to-[#ff8c00] hover:shadow-2xl hover:scale-105'
        } text-white py-6 rounded-2xl font-bold text-xl transition-all duration-300 whitespace-nowrap cursor-pointer`}
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-3">
            <i className="ri-loader-4-line text-2xl animate-spin"></i>
            <span>جاري معالجة الدفع...</span>
          </span>
        ) : (
          <span className="flex items-center justify-center gap-3">
            <i className="ri-secure-payment-line text-2xl"></i>
            <span>تأكيد الدفع والشراء</span>
            <i className="ri-arrow-left-line text-2xl"></i>
          </span>
        )}
      </button>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </form>
  );
}

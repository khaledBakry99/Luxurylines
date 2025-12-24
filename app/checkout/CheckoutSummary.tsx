'use client';

export default function CheckoutSummary() {
  const subtotal = 3650;
  const shipping = 50;
  const taxRate = 0.15;
  const discount = 365;
  const tax = (subtotal + shipping - discount) * taxRate;
  const total = subtotal + shipping - discount + tax;

  const items = [
    {
      name: 'طقم أثاث غرفة المعيشة الحديث',
      quantity: 1,
      price: 2500,
      image: 'https://readdy.ai/api/search-image?query=modern%20living%20room%20furniture%20set%20with%20sofa%20and%20coffee%20table%20in%20neutral%20colors%2C%20clean%20background%2C%20professional%20product%20photography&width=100&height=100&seq=checkout-item1&orientation=squarish'
    },
    {
      name: 'مصباح أرضي عصري',
      quantity: 2,
      price: 350,
      image: 'https://readdy.ai/api/search-image?query=modern%20floor%20lamp%20with%20sleek%20design%2C%20minimalist%20style%2C%20white%20background%2C%20product%20photography&width=100&height=100&seq=checkout-item2&orientation=squarish'
    },
    {
      name: 'سجادة فاخرة مزخرفة',
      quantity: 1,
      price: 800,
      image: 'https://readdy.ai/api/search-image?query=luxury%20decorative%20carpet%20with%20elegant%20patterns%2C%20high%20quality%20texture%2C%20neutral%20background%2C%20product%20photography&width=100&height=100&seq=checkout-item3&orientation=squarish'
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
      <div className="bg-gradient-to-r from-[#001F3F] to-[#003366] p-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <i className="ri-shopping-bag-3-line text-2xl"></i>
          </div>
          <span>ملخص الطلب</span>
        </h2>
      </div>

      <div className="p-6">
        <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl shadow-md"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-[#001F3F] text-sm mb-1 truncate">{item.name}</h4>
                <p className="text-xs text-gray-600 mb-2">الكمية: {item.quantity}</p>
                <p className="text-[#FFA500] font-bold">{(item.price * item.quantity).toFixed(2)} ر.س</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-gray-200 pt-6 space-y-4">
          <div className="flex justify-between text-gray-700 p-3 bg-gray-50 rounded-xl">
            <span className="flex items-center gap-2">
              <i className="ri-shopping-bag-line text-[#FFA500]"></i>
              <span>المجموع الفرعي</span>
            </span>
            <span className="font-semibold">{subtotal.toFixed(2)} ر.س</span>
          </div>

          <div className="flex justify-between text-gray-700 p-3 bg-blue-50 rounded-xl">
            <span className="flex items-center gap-2">
              <i className="ri-truck-line text-blue-500"></i>
              <span>الشحن</span>
            </span>
            <span className="font-semibold">{shipping.toFixed(2)} ر.س</span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between text-green-600 p-3 bg-green-50 rounded-xl border-2 border-green-200">
              <span className="flex items-center gap-2">
                <i className="ri-gift-line"></i>
                <span>الخصم</span>
              </span>
              <span className="font-bold">-{discount.toFixed(2)} ر.س</span>
            </div>
          )}

          <div className="flex justify-between text-gray-700 p-3 bg-green-50 rounded-xl">
            <span className="flex items-center gap-2">
              <i className="ri-percent-line text-green-500"></i>
              <span>الضريبة (15%)</span>
            </span>
            <span className="font-semibold">{tax.toFixed(2)} ر.س</span>
          </div>

          <div className="border-t-2 border-gray-200 pt-4">
            <div className="flex justify-between text-xl font-bold text-gray-900 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-inner">
              <span className="flex items-center gap-2">
                <i className="ri-money-dollar-circle-line text-[#FFA500]"></i>
                <span>المجموع الكلي</span>
              </span>
              <span className="text-[#FFA500]">{total.toFixed(2)} ر.س</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-gray-200 space-y-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <i className="ri-shield-star-line text-[#FFA500]"></i>
            <span>ضمانات الشراء</span>
          </h3>

          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
            <div className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-xl shadow-lg">
              <i className="ri-shield-check-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">دفع آمن ومضمون</p>
              <p className="text-xs text-gray-600">حماية كاملة لبياناتك</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-xl shadow-lg">
              <i className="ri-truck-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">شحن مجاني</p>
              <p className="text-xs text-gray-600">للطلبات أكثر من 500 ر.س</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-xl">
            <div className="w-10 h-10 flex items-center justify-center bg-[#FFA500] rounded-xl shadow-lg">
              <i className="ri-refresh-line text-white text-lg"></i>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">إمكانية الإرجاع</p>
              <p className="text-xs text-gray-600">خلال 30 يوم من الشراء</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

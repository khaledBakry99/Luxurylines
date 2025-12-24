'use client';
import { useState } from 'react';

export default function ProfileContent() {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileImage, setProfileImage] = useState('https://readdy.ai/api/search-image?query=Professional%20Arab%20businessman%20portrait%2C%20confident%20smile%2C%20modern%20business%20attire%2C%20clean%20background%2C%20high%20quality%20professional%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=200&height=200&seq=profile-default&orientation=squarish');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setIsEditing(false);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className="lg:col-span-1 bg-gradient-to-b from-[#001F3F] to-[#003366] p-8">
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#FFA500] shadow-xl mx-auto"
                    />
                    <label className="absolute bottom-0 right-0 w-10 h-10 bg-[#FFA500] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#e6940a] transition-all duration-300 shadow-lg">
                      <i className="ri-camera-line text-white text-lg"></i>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <h2 className="text-2xl font-bold text-white mt-4">أحمد محمد</h2>
                  <p className="text-white/70 mt-1">عميل مميز</p>
                  <div className="flex items-center justify-center space-x-1 space-x-reverse mt-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="ri-star-fill text-[#FFA500] text-sm"></i>
                    ))}
                  </div>
                </div>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab('personal')}
                    className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeTab === 'personal'
                        ? 'bg-[#FFA500] text-white shadow-lg'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <i className="ri-user-line text-xl"></i>
                    <span className="font-semibold">المعلومات الشخصية</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeTab === 'security'
                        ? 'bg-[#FFA500] text-white shadow-lg'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <i className="ri-lock-line text-xl"></i>
                    <span className="font-semibold">الأمان وكلمة المرور</span>
                  </button>
                </nav>
              </div>

              <div className="lg:col-span-3 p-8 md:p-12">
                {showSuccess && (
                  <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-center space-x-3 space-x-reverse">
                    <i className="ri-checkbox-circle-fill text-green-500 text-2xl"></i>
                    <p className="text-green-700 font-semibold">تم حفظ التغييرات بنجاح! ✅</p>
                  </div>
                )}

                {activeTab === 'personal' && (
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-3xl font-bold text-[#001F3F]">المعلومات الشخصية</h3>
                      <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="flex items-center space-x-2 space-x-reverse bg-[#FFA500] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e6940a] transition-all duration-300 cursor-pointer whitespace-nowrap"
                      >
                        <i className={`${isEditing ? 'ri-close-line' : 'ri-edit-line'} text-lg`}></i>
                        <span>{isEditing ? 'إلغاء' : 'تعديل'}</span>
                      </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-user-line text-[#FFA500] ml-2"></i>
                            الاسم الأول
                          </label>
                          <input
                            type="text"
                            defaultValue="أحمد"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 disabled:bg-gray-50"
                          />
                        </div>

                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-user-line text-[#FFA500] ml-2"></i>
                            اسم العائلة
                          </label>
                          <input
                            type="text"
                            defaultValue="محمد"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 disabled:bg-gray-50"
                          />
                        </div>

                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-mail-line text-[#FFA500] ml-2"></i>
                            البريد الإلكتروني
                          </label>
                          <input
                            type="email"
                            defaultValue="ahmed.mohamed@email.com"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 disabled:bg-gray-50"
                          />
                        </div>

                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-phone-line text-[#FFA500] ml-2"></i>
                            رقم الهاتف
                          </label>
                          <input
                            type="tel"
                            defaultValue="+966 50 123 4567"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 disabled:bg-gray-50"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-map-pin-line text-[#FFA500] ml-2"></i>
                            العنوان
                          </label>
                          <input
                            type="text"
                            defaultValue="الرياض، المملكة العربية السعودية"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 disabled:bg-gray-50"
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-calendar-line text-[#FFA500] ml-2"></i>
                            تاريخ الميلاد
                          </label>
                          <input
                            type="date"
                            defaultValue="1990-01-15"
                            disabled={!isEditing}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300 disabled:bg-gray-50"
                          />
                        </div>
                      </div>

                      {isEditing && (
                        <div className="mt-8">
                          <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                          >
                            <span className="flex items-center justify-center space-x-2 space-x-reverse">
                              <i className="ri-save-line text-xl"></i>
                              <span>حفظ التغييرات</span>
                            </span>
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div>
                    <h3 className="text-3xl font-bold text-[#001F3F] mb-8">الأمان وكلمة المرور</h3>

                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-lock-line text-[#FFA500] ml-2"></i>
                            كلمة المرور الحالية
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300"
                            placeholder="أدخل كلمة المرور الحالية"
                          />
                        </div>

                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-lock-password-line text-[#FFA500] ml-2"></i>
                            كلمة المرور الجديدة
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300"
                            placeholder="أدخل كلمة المرور الجديدة"
                          />
                        </div>

                        <div>
                          <label className="block text-[#001F3F] font-semibold mb-2">
                            <i className="ri-lock-password-line text-[#FFA500] ml-2"></i>
                            تأكيد كلمة المرور الجديدة
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FFA500] focus:outline-none transition-all duration-300"
                            placeholder="أعد إدخال كلمة المرور الجديدة"
                          />
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                          <h4 className="font-semibold text-[#001F3F] mb-2 flex items-center space-x-2 space-x-reverse">
                            <i className="ri-information-line text-blue-500"></i>
                            <span>متطلبات كلمة المرور:</span>
                          </h4>
                          <ul className="text-gray-700 space-y-1 mr-6">
                            <li>• على الأقل 8 أحرف</li>
                            <li>• حرف كبير واحد على الأقل</li>
                            <li>• حرف صغير واحد على الأقل</li>
                            <li>• رقم واحد على الأقل</li>
                            <li>• رمز خاص واحد على الأقل</li>
                          </ul>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
                        >
                          <span className="flex items-center justify-center space-x-2 space-x-reverse">
                            <i className="ri-shield-check-line text-xl"></i>
                            <span>تحديث كلمة المرور</span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

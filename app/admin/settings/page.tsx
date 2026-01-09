"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileImage, setProfileImage] = useState(
    "https://readdy.ai/api/search-image?query=professional%20business%20person%20portrait%20with%20neutral%20background%20modern%20office%20setting&width=400&height=400&seq=admin-profile-img-1&orientation=squarish"
  );

  const tabs = [
    { id: "profile", name: "الملف الشخصي", icon: "ri-user-line" },
    { id: "general", name: "الإعدادات العامة", icon: "ri-settings-line" },
    { id: "contact", name: "معلومات التواصل", icon: "ri-phone-line" },
    { id: "social", name: "وسائل التواصل", icon: "ri-share-line" },
    { id: "seo", name: "تحسين محركات البحث", icon: "ri-search-line" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8 border border-[#CBC1B8]/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-2xl flex items-center justify-center shadow-lg">
              <i className="ri-settings-3-line text-3xl text-[#0A1F21]"></i>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#F7F6F4] font-['Cairo']">
                الإعدادات
              </h1>
              <p className="text-[#CBC1B8]/90 mt-1">
                إدارة الملف الشخصي وإعدادات الموقع
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-[#CBC1B8]/20">
          <div className="border-b border-[#CBC1B8]/20 bg-white/5">
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-5 font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? "text-[#CBC1B8] border-b-4 border-[#CBC1B8] bg-white/10"
                      : "text-[#CBC1B8]/70 hover:text-[#F7F6F4] hover:bg-white/5"
                  }`}
                >
                  <i className={`${tab.icon} text-xl`}></i>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === "profile" && (
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-6 pb-8 border-b border-[#CBC1B8]/20">
                  <div className="relative group">
                    <img
                      src={profileImage}
                      alt="صورة الملف الشخصي"
                      className="w-32 h-32 rounded-full object-cover object-top border-4 border-[#CBC1B8] shadow-lg"
                    />
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all cursor-pointer">
                      <i className="ri-camera-line text-lg"></i>
                    </button>
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-[#F7F6F4] mb-1">
                      أحمد محمد العلي
                    </h2>
                    <p className="text-[#CBC1B8]/90">مدير النظام</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                      الاسم الأول *
                    </label>
                    <input
                      type="text"
                      defaultValue="أحمد"
                      className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                      اسم العائلة *
                    </label>
                    <input
                      type="text"
                      defaultValue="العلي"
                      className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      defaultValue="admin@luxurylines.com"
                      className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      defaultValue="+966 55 930 0791"
                      className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-[#CBC1B8]/20">
                  <h3 className="text-xl font-bold text-[#F7F6F4] mb-6">
                    تغيير كلمة المرور
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                        كلمة المرور الحالية *
                      </label>
                      <input
                        type="password"
                        placeholder="أدخل كلمة المرور الحالية"
                        className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                        كلمة المرور الجديدة *
                      </label>
                      <input
                        type="password"
                        placeholder="أدخل كلمة المرور الجديدة"
                        className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                        تأكيد كلمة المرور *
                      </label>
                      <input
                        type="password"
                        placeholder="أعد إدخال كلمة المرور الجديدة"
                        className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                    <i className="ri-save-line ml-2"></i>
                    حفظ التغييرات
                  </button>
                  <button className="bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer">
                    <i className="ri-close-line ml-2"></i>
                    إلغاء
                  </button>
                </div>
              </div>
            )}

            {activeTab === "general" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    اسم الموقع *
                  </label>
                  <input
                    type="text"
                    defaultValue="Luxurylines"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    وصف الموقع *
                  </label>
                  <textarea
                    rows={4}
                    defaultValue="متجر ومعرض خدمات متكامل للتصميم الداخلي والخارجي، التشطيب، وتعهد المشاريع"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    شعار الموقع
                  </label>
                  <div className="border-2 border-dashed border-[#CBC1B8]/30 rounded-xl p-12 text-center hover:border-[#CBC1B8] transition-colors cursor-pointer bg-white/5">
                    <i className="ri-upload-cloud-line text-5xl text-[#CBC1B8] mb-3"></i>
                    <p className="text-[#F7F6F4] font-semibold mb-1">
                      اسحب الشعار هنا أو انقر للتحميل
                    </p>
                    <p className="text-sm text-[#CBC1B8]/70">
                      PNG, JPG, SVG (الحد الأقصى: 2MB)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                    <i className="ri-save-line ml-2"></i>
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    defaultValue="+966 11 123 4567"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    defaultValue="Luxlins@gmail.com"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    العنوان *
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="شارع انس بن مالك - مبنى امازون - الدور الثاني - مكتب رقم ١٥ - حي الصحافه - الرياض - المملكه العربيه السعوديه"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  ></textarea>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                    <i className="ri-save-line ml-2"></i>
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    فيسبوك
                  </label>
                  <div className="relative">
                    <i className="ri-facebook-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl"></i>
                    <input
                      type="url"
                      placeholder="https://facebook.com/luxurylines"
                      className="w-full pr-12 pl-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    إنستغرام
                  </label>
                  <div className="relative">
                    <i className="ri-instagram-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-400 text-xl"></i>
                    <input
                      type="url"
                      placeholder="https://instagram.com/luxurylines"
                      className="w-full pr-12 pl-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    تويتر (X)
                  </label>
                  <div className="relative">
                    <i className="ri-twitter-x-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8] text-xl"></i>
                    <input
                      type="url"
                      placeholder="https://twitter.com/luxurylines"
                      className="w-full pr-12 pl-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    واتساب
                  </label>
                  <div className="relative">
                    <i className="ri-whatsapp-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400 text-xl"></i>
                    <input
                      type="tel"
                      placeholder="‎+966 55 930 0791"
                      className="w-full pr-12 pl-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    لينكد إن
                  </label>
                  <div className="relative">
                    <i className="ri-linkedin-fill absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 text-xl"></i>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/company/luxurylines"
                      className="w-full pr-12 pl-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                    <i className="ri-save-line ml-2"></i>
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            )}

            {activeTab === "seo" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    عنوان الصفحة (Title) *
                  </label>
                  <input
                    type="text"
                    defaultValue="Luxurylines - التصميم الداخلي والخارجي الفاخر"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  />
                  <p className="text-sm text-[#CBC1B8]/70 mt-2">
                    الحد الأقصى: 60 حرف
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    الوصف (Meta Description) *
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="متجر ومعرض خدمات متكامل للتصميم الداخلي والخارجي، التشطيب، وتعهد المشاريع في المملكة العربية السعودية"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  ></textarea>
                  <p className="text-sm text-[#CBC1B8]/70 mt-2">
                    الحد الأقصى: 160 حرف
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#F7F6F4] mb-3">
                    الكلمات المفتاحية
                  </label>
                  <input
                    type="text"
                    defaultValue="تصميم داخلي، تصميم خارجي، تشطيب، ديكور، أثاث فاخر"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] focus:border-transparent text-[#F7F6F4]"
                  />
                  <p className="text-sm text-[#CBC1B8]/70 mt-2">
                    افصل الكلمات بفاصلة
                  </p>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap cursor-pointer">
                    <i className="ri-save-line ml-2"></i>
                    حفظ التغييرات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

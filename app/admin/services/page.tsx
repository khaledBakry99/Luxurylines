'use client';

import { useState } from 'react';

interface ServicePackage {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
}

interface GalleryImage {
  id: number;
  url: string;
  title: string;
}

interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  packages: ServicePackage[];
  gallery: GalleryImage[];
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: 'التصميم الداخلي',
      slug: 'interior-design',
      description: 'تصاميم داخلية مبتكرة تجمع بين الجمال والوظيفة مع مراعاة أحدث الاتجاهات',
      icon: 'https://readdy.ai/api/search-image?query=interior%20design%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon1&orientation=squarish',
      features: ['تصميم المساحات', 'اختيار الألوان', 'الأثاث والديكور', 'الإضاءة'],
      packages: [
        { id: 1, name: 'الباقة الأساسية', price: '15000', description: 'مثالية للمساحات الصغيرة والمتوسطة', features: ['تصميم 2D', 'استشارة أولية', 'اختيار الألوان'] },
        { id: 2, name: 'الباقة المتقدمة', price: '25000', description: 'الأكثر طلباً للمشاريع المتوسطة', features: ['تصميم 3D', 'استشارات متعددة', 'اختيار الأثاث', 'الإشراف'] },
        { id: 3, name: 'الباقة الشاملة', price: '40000', description: 'للمشاريع الفاخرة والمساحات الكبيرة', features: ['جميع مميزات الباقة المتقدمة', 'تصميم كامل المشروع', 'إدارة كاملة', 'ضمان لمدة سنتين'] }
      ],
      gallery: [
        { id: 1, url: 'https://readdy.ai/api/search-image?query=modern%20luxury%20interior%20design%20living%20room%20with%20elegant%20furniture%20soft%20lighting%20neutral%20colors%20minimalist%20decor%20clean%20background%20professional%20photography&width=800&height=600&seq=int1&orientation=landscape', title: 'غرفة معيشة عصرية' },
        { id: 2, url: 'https://readdy.ai/api/search-image?query=contemporary%20bedroom%20interior%20design%20with%20comfortable%20bed%20warm%20lighting%20cozy%20atmosphere%20simple%20background%20high%20quality%20photo&width=800&height=600&seq=int2&orientation=landscape', title: 'غرفة نوم مريحة' }
      ]
    },
    {
      id: 2,
      name: 'التصميم الخارجي',
      slug: 'exterior-design',
      description: 'تصاميم خارجية متميزة تعكس هوية المبنى وتتناسب مع البيئة المحيطة',
      icon: 'https://readdy.ai/api/search-image?query=exterior%20design%20icon%20building%20facade%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon2&orientation=squarish',
      features: ['الواجهات', 'المداخل', 'الحدائق', 'الإضاءة الخارجية'],
      packages: [
        { id: 1, name: 'الباقة الأساسية', price: '8000', description: 'مثالية للمساحات الصغيرة والمتوسطة', features: ['تصميم الواجهة', 'اختيار المواد', 'رسومات تنفيذية'] }
      ],
      gallery: []
    },
    {
      id: 3,
      name: 'التشطيب',
      slug: 'finishing',
      description: 'خدمات تشطيب شاملة بأعلى معايير الجودة لإنهاء مشروعك بشكل مثالي',
      icon: 'https://readdy.ai/api/search-image?query=finishing%20construction%20icon%20paint%20brush%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon3&orientation=squarish',
      features: ['الدهانات', 'الأرضيات', 'الأسقف', 'التفاصيل النهائية'],
      packages: [],
      gallery: []
    },
    {
      id: 4,
      name: 'توريد الأساس',
      slug: 'supply',
      description: 'توريد مواد بناء وتشطيب عالية الجودة من أفضل الموردين',
      icon: 'https://readdy.ai/api/search-image?query=supply%20truck%20delivery%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon4&orientation=squarish',
      features: ['مواد البناء', 'الأدوات الصحية', 'الكهربائيات', 'الديكورات'],
      packages: [],
      gallery: []
    },
    {
      id: 5,
      name: 'إدارة المشاريع',
      slug: 'project-management',
      description: 'إدارة احترافية لمشروعك من البداية حتى التسليم النهائي',
      icon: 'https://readdy.ai/api/search-image?query=project%20management%20icon%20checklist%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon5&orientation=squarish',
      features: ['التخطيط', 'التنفيذ', 'المتابعة', 'ضمان الجودة'],
      packages: [],
      gallery: []
    },
    {
      id: 6,
      name: 'نصائح من الخبراء',
      slug: 'expert-tips',
      description: 'نصائح هندسية متخصصة من خبراء لضمان نجاح مشروعك وتحقيق أفضل النتائج',
      icon: 'https://readdy.ai/api/search-image?query=expert%20advice%20lightbulb%20idea%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon6&orientation=squarish',
      features: ['دراسة الجدوى', 'التصاميم الهندسية', 'الإشراف الفني', 'حلول مبتكرة'],
      packages: [],
      gallery: []
    },
    {
      id: 7,
      name: 'التصميم المعماري',
      slug: 'architectural-design',
      description: 'تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة مع مراعاة أحدث المعايير الهندسية',
      icon: 'https://readdy.ai/api/search-image?query=architectural%20design%20ruler%20blueprint%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon7&orientation=squarish',
      features: ['التصميم الإنشائي', 'المخططات الهندسية', 'التصاريح والموافقات', 'الرسومات التنفيذية'],
      packages: [],
      gallery: []
    },
    {
      id: 8,
      name: 'الديكور والتنسيق',
      slug: 'decoration',
      description: 'خدمات ديكور وتنسيق متكاملة لإضافة لمسة جمالية فريدة على مساحتك',
      icon: 'https://readdy.ai/api/search-image?query=decoration%20palette%20colors%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon8&orientation=squarish',
      features: ['اختيار الألوان', 'الإكسسوارات', 'الستائر والمفروشات', 'اللوحات الفنية'],
      packages: [],
      gallery: []
    },
    {
      id: 9,
      name: 'الإضاءة الذكية',
      slug: 'smart-lighting',
      description: 'حلول إضاءة ذكية ومبتكرة تجمع بين الكفاءة والجمال لخلق أجواء مثالية',
      icon: 'https://readdy.ai/api/search-image?query=smart%20lighting%20bulb%20technology%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon9&orientation=squarish',
      features: ['إضاءة LED', 'التحكم الذكي', 'توفير الطاقة', 'تصميم الإضاءة'],
      packages: [],
      gallery: []
    },
    {
      id: 10,
      name: 'الأثاث المخصص',
      slug: 'custom-furniture',
      description: 'تصميم وتصنيع أثاث مخصص يناسب احتياجاتك ومساحتك بأعلى معايير الجودة',
      icon: 'https://readdy.ai/api/search-image?query=custom%20furniture%20sofa%20chair%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon10&orientation=squarish',
      features: ['تصميم حسب الطلب', 'خامات فاخرة', 'تصنيع محلي', 'ضمان طويل'],
      packages: [],
      gallery: []
    },
    {
      id: 11,
      name: 'المطابخ الفاخرة',
      slug: 'luxury-kitchens',
      description: 'تصميم وتنفيذ مطابخ فاخرة بأحدث التقنيات والتجهيزات العالمية',
      icon: 'https://readdy.ai/api/search-image?query=luxury%20kitchen%20restaurant%20chef%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon11&orientation=squarish',
      features: ['تصميم عصري', 'أجهزة متطورة', 'خامات مقاومة', 'تخزين ذكي'],
      packages: [],
      gallery: []
    },
    {
      id: 12,
      name: 'الحمامات العصرية',
      slug: 'modern-bathrooms',
      description: 'تصميم حمامات عصرية فاخرة تجمع بين الراحة والأناقة مع أفضل التجهيزات',
      icon: 'https://readdy.ai/api/search-image?query=modern%20bathroom%20water%20drop%20spa%20icon%20simple%20minimalist%20clean%20background%20professional%20modern%20style&width=200&height=200&seq=icon12&orientation=squarish',
      features: ['تصميم سبا', 'أدوات صحية فاخرة', 'إضاءة مميزة', 'مواد مقاومة للماء'],
      packages: [],
      gallery: []
    }
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showPackagesModal, setShowPackagesModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [showAddPackageModal, setShowAddPackageModal] = useState(false);
  const [showAddImageModal, setShowAddImageModal] = useState(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [editingPackage, setEditingPackage] = useState<ServicePackage | null>(null);

  const handleEditService = (service: Service) => {
    setSelectedService(service);
    setShowEditModal(true);
  };

  const handleManagePackages = (service: Service) => {
    setSelectedService(service);
    setShowPackagesModal(true);
  };

  const handleManageGallery = (service: Service) => {
    setSelectedService(service);
    setShowGalleryModal(true);
  };

  const handleAddPackage = () => {
    setEditingPackage(null);
    setShowAddPackageModal(true);
  };

  const handleEditPackage = (pkg: ServicePackage) => {
    setEditingPackage(pkg);
    setShowAddPackageModal(true);
  };

  const handleDeletePackage = (pkgId: number) => {
    if (selectedService && confirm('هل أنت متأكد من حذف هذه الباقة؟')) {
      const updatedServices = services.map(s => {
        if (s.id === selectedService.id) {
          return {
            ...s,
            packages: s.packages.filter(p => p.id !== pkgId)
          };
        }
        return s;
      });
      setServices(updatedServices);
      setSelectedService({
        ...selectedService,
        packages: selectedService.packages.filter(p => p.id !== pkgId)
      });
    }
  };

  const handleAddImage = () => {
    setShowAddImageModal(true);
  };

  const handleDeleteImage = (imageId: number) => {
    if (selectedService && confirm('هل أنت متأكد من حذف هذه الصورة؟')) {
      const updatedServices = services.map(s => {
        if (s.id === selectedService.id) {
          return {
            ...s,
            gallery: s.gallery.filter(img => img.id !== imageId)
          };
        }
        return s;
      });
      setServices(updatedServices);
      setSelectedService({
        ...selectedService,
        gallery: selectedService.gallery.filter(img => img.id !== imageId)
      });
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إدارة الخدمات</h1>
          <p className="text-gray-600 mt-2">إدارة جميع الخدمات والباقات ومعارض الأعمال</p>
        </div>
        <button
          onClick={() => setShowAddServiceModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <i className="ri-add-line text-xl"></i>
          إضافة خدمة جديدة
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الخدمة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الوصف</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المميزات</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الباقات</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">معرض الأعمال</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={service.icon} alt={service.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{service.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">{service.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{service.features.length} مميزة</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{service.packages.length} باقة</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{service.gallery.length} صورة</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditService(service)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                        title="تعديل الخدمة"
                      >
                        <i className="ri-edit-line text-lg"></i>
                      </button>
                      <button
                        onClick={() => handleManagePackages(service)}
                        className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer"
                        title="إدارة الباقات"
                      >
                        <i className="ri-stack-line text-lg"></i>
                      </button>
                      <button
                        onClick={() => handleManageGallery(service)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                        title="معرض الأعمال"
                      >
                        <i className="ri-gallery-line text-lg"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">تعديل الخدمة</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم الخدمة</label>
                <input
                  type="text"
                  defaultValue={selectedService.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الوصف</label>
                <textarea
                  defaultValue={selectedService.description}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صورة الخدمة</label>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={selectedService.icon} alt="معاينة" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-2">أو أدخل رابط الصورة:</p>
                    <input
                      type="text"
                      defaultValue={selectedService.icon}
                      placeholder="https://..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mt-1"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">المميزات (كل مميزة في سطر)</label>
                <textarea
                  defaultValue={selectedService.features.join('\n')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  alert('تم حفظ التعديلات بنجاح');
                  setShowEditModal(false);
                }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer"
              >
                حفظ التعديلات
              </button>
            </div>
          </div>
        </div>
      )}

      {showPackagesModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">إدارة باقات: {selectedService.name}</h2>
              <button
                onClick={handleAddPackage}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-add-line ml-2"></i>
                إضافة باقة
              </button>
            </div>
            <div className="p-6">
              {selectedService.packages.length === 0 ? (
                <div className="text-center py-12">
                  <i className="ri-stack-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500">لا توجد باقات لهذه الخدمة</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedService.packages.map((pkg) => (
                    <div key={pkg.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900">{pkg.name}</h3>
                          <p className="text-orange-600 font-semibold mt-1">{pkg.price} ريال</p>
                          <p className="text-sm text-gray-600 mt-1">{pkg.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditPackage(pkg)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <i className="ri-edit-line"></i>
                          </button>
                          <button
                            onClick={() => handleDeletePackage(pkg.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          >
                            <i className="ri-delete-bin-line"></i>
                          </button>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <i className="ri-check-line text-green-600"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowPackagesModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {showGalleryModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">معرض الأعمال: {selectedService.name}</h2>
              <button
                onClick={handleAddImage}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer"
              >
                <i className="ri-add-line ml-2"></i>
                إضافة صورة
              </button>
            </div>
            <div className="p-6">
              {selectedService.gallery.length === 0 ? (
                <div className="text-center py-12">
                  <i className="ri-gallery-line text-6xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500">لا توجد صور في معرض الأعمال</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedService.gallery.map((image) => (
                    <div key={image.id} className="group relative">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{image.title}</p>
                        <button
                          onClick={() => handleDeleteImage(image.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setShowGalleryModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddPackageModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {editingPackage ? 'تعديل الباقة' : 'إضافة باقة جديدة'}
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم الباقة</label>
                <input
                  type="text"
                  defaultValue={editingPackage?.name || ''}
                  placeholder="الباقة الأساسية"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">السعر (بالريال)</label>
                <input
                  type="text"
                  defaultValue={editingPackage?.price || ''}
                  placeholder="15000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">وصف الباقة</label>
                <input
                  type="text"
                  defaultValue={editingPackage?.description || ''}
                  placeholder="مثالية للمساحات الصغيرة والمتوسطة"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">المميزات (كل مميزة في سطر)</label>
                <textarea
                  defaultValue={editingPackage?.features.join('\n') || ''}
                  rows={6}
                  placeholder="تصميم 2D&#10;استشارة أولية&#10;اختيار الألوان"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddPackageModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  alert(editingPackage ? 'تم تعديل الباقة بنجاح' : 'تم إضافة الباقة بنجاح');
                  setShowAddPackageModal(false);
                }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer"
              >
                {editingPackage ? 'حفظ التعديلات' : 'إضافة الباقة'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddImageModal && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">إضافة صورة لمعرض الأعمال</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">عنوان الصورة</label>
                <input
                  type="text"
                  placeholder="مثال: غرفة معيشة عصرية"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رابط الصورة</label>
                <input
                  type="text"
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <i className="ri-information-line text-blue-600 text-xl"></i>
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">نصيحة:</p>
                    <p>يمكنك رفع الصورة أو استخدام رابط صورة من الإنترنت. تأكد من أن الصورة بجودة عالية وتمثل العمل بشكل احترافي.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddImageModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  alert('تم إضافة الصورة بنجاح');
                  setShowAddImageModal(false);
                }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer"
              >
                إضافة الصورة
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddServiceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">إضافة خدمة جديدة</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم الخدمة</label>
                <input
                  type="text"
                  placeholder="مثال: التصميم الداخلي"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الوصف</label>
                <textarea
                  rows={3}
                  placeholder="وصف مختصر عن الخدمة"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">صورة الخدمة</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-2">أو أدخل رابط الصورة:</p>
                <input
                  type="text"
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">المميزات (كل مميزة في سطر)</label>
                <textarea
                  rows={4}
                  placeholder="تصميم المساحات&#10;اختيار الألوان&#10;الأثاث والديكور"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowAddServiceModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={() => {
                  alert('تم إضافة الخدمة بنجاح');
                  setShowAddServiceModal(false);
                }}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all whitespace-nowrap cursor-pointer"
              >
                إضافة الخدمة
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

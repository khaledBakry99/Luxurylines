'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminStorePage() {
  const [activeTab, setActiveTab] = useState<'products' | 'categories'>('products');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [showDeleteCategoryConfirm, setShowDeleteCategoryConfirm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('الكل');
  const [productImages, setProductImages] = useState<string[]>([]);
  const [newImage, setNewImage] = useState('');
  const [productColors, setProductColors] = useState<string[]>(['#D4C5B9']);
  const [newColor, setNewColor] = useState('#000000');
  const [productFeatures, setProductFeatures] = useState<string[]>(['ضمان 5 سنوات']);
  const [newFeature, setNewFeature] = useState('');
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [newSubCategory, setNewSubCategory] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    category: 'أثاث',
    price: '',
    originalPrice: '',
    discount: '',
    stock: '',
    description: '',
    rating: '4.5',
    reviews: '0',
    badge: '',
    badgeColor: 'bg-red-500'
  });

  const products = [
    {
      id: 1,
      name: 'كنبة فاخرة مودرن',
      category: 'أثاث',
      price: 12500,
      originalPrice: 15000,
      discount: 17,
      stock: 15,
      status: 'متوفر',
      rating: 4.9,
      reviews: 127,
      description: 'منتج فاخر مصنوع من أجود الخامات العالمية، يجمع بين التصميم العصري والجودة العالية.',
      badge: 'الأكثر مبيعاً',
      badgeColor: 'bg-red-500',
      colors: ['#D4C5B9', '#8B7355', '#2C2416'],
      features: ['ضمان 5 سنوات', 'شحن مجاني', 'تركيب احترافي', 'إمكانية الإرجاع خلال 30 يوم'],
      images: ['https://readdy.ai/api/search-image?query=luxury%20modern%20sofa%20with%20simple%20background&width=600&height=600&seq=admin-prod-1&orientation=squarish']
    },
    {
      id: 2,
      name: 'ثريا كريستال فاخرة',
      category: 'إضاءة',
      price: 8900,
      originalPrice: null,
      discount: 0,
      stock: 8,
      status: 'متوفر',
      rating: 5.0,
      reviews: 89,
      description: 'ثريا كريستال فاخرة بتصميم عصري أنيق، تضيف لمسة من الفخامة والأناقة لمنزلك.',
      badge: 'جديد',
      badgeColor: 'bg-green-500',
      colors: ['#FFD700', '#C0C0C0'],
      features: ['ضمان 3 سنوات', 'شحن مجاني', 'تركيب احترافي'],
      images: ['https://readdy.ai/api/search-image?query=luxury%20crystal%20chandelier%20with%20simple%20background&width=600&height=600&seq=admin-prod-2&orientation=squarish']
    },
    {
      id: 3,
      name: 'طاولة طعام رخام',
      category: 'أثاث',
      price: 9800,
      originalPrice: 11500,
      discount: 15,
      stock: 3,
      status: 'قليل',
      rating: 4.8,
      reviews: 156,
      description: 'طاولة طعام فاخرة من الرخام الطبيعي، تجمع بين الفخامة والمتانة.',
      badge: 'خصم 15%',
      badgeColor: 'bg-[#FFA500]',
      colors: ['#FFFFFF', '#000000', '#C9B037'],
      features: ['ضمان 5 سنوات', 'شحن مجاني', 'تركيب احترافي', 'رخام طبيعي'],
      images: ['https://readdy.ai/api/search-image?query=luxury%20marble%20dining%20table%20with%20simple%20background&width=600&height=600&seq=admin-prod-3&orientation=squarish']
    }
  ];

  const [categories, setCategories] = useState([
    { id: 'all', name: 'الكل', count: 487, icon: 'ri-apps-line', subCategories: [] },
    { id: 'furniture', name: 'الأثاث', count: 156, icon: 'ri-sofa-line', subCategories: ['كنب وأرائك', 'طاولات', 'كراسي', 'خزائن'] },
    { id: 'lighting', name: 'الإضاءة', count: 89, icon: 'ri-lightbulb-line', subCategories: ['ثriات فاخرة', 'إضاءة مخفية', 'أباجورات', 'إضاءة LED'] },
    { id: 'decor', name: 'الديكور', count: 124, icon: 'ri-palette-line', subCategories: ['لوحات فنية', 'مرايا', 'تحف', 'نباتات زينة'] },
    { id: 'textiles', name: 'المنسوجات', count: 67, icon: 'ri-t-shirt-line', subCategories: ['ستائر فاخرة', 'سجاد', 'وسائد', 'مفروشات'] },
    { id: 'kitchens', name: 'المطابخ', count: 51, icon: 'ri-restaurant-line', subCategories: ['مطابخ خشب', 'ألمنيوم', 'رخام', 'أجهزة مدمجة'] }
  ]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterCategory === 'الكل' || product.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const handleAddProduct = () => {
    setFormData({
      name: '',
      category: 'أثاث',
      price: '',
      originalPrice: '',
      discount: '',
      stock: '',
      description: '',
      rating: '4.5',
      reviews: '0',
      badge: '',
      badgeColor: 'bg-red-500'
    });
    setProductImages([]);
    setProductColors(['#D4C5B9']);
    setProductFeatures(['ضمان 5 سنوات']);
    setShowAddModal(true);
  };

  const handleEditProduct = (product: any) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      discount: product.discount?.toString() || '',
      stock: product.stock.toString(),
      description: product.description,
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      badge: product.badge || '',
      badgeColor: product.badgeColor || 'bg-red-500'
    });
    setProductImages(product.images || []);
    setProductColors(product.colors || ['#D4C5B9']);
    setProductFeatures(product.features || ['ضمان 5 سنوات']);
    setShowEditModal(true);
  };

  const handleAddImage = () => {
    if (newImage.trim()) {
      setProductImages([...productImages, newImage.trim()]);
      setNewImage('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setProductImages(productImages.filter((_, i) => i !== index));
  };

  const handleAddColor = () => {
    if (newColor && !productColors.includes(newColor)) {
      setProductColors([...productColors, newColor]);
    }
  };

  const handleRemoveColor = (index: number) => {
    if (productColors.length > 1) {
      setProductColors(productColors.filter((_, i) => i !== index));
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setProductFeatures([...productFeatures, newFeature.trim()]);
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setProductFeatures(productFeatures.filter((_, i) => i !== index));
  };

  const handleAddCategory = () => {
    setSelectedCategory(null);
    setSubCategories([]);
    setShowCategoryModal(true);
  };

  const handleEditCategory = (category: any) => {
    setSelectedCategory(category);
    setSubCategories(category.subCategories || []);
    setShowEditCategoryModal(true);
  };

  const handleDeleteProduct = (productId: number) => {
    setSelectedProduct(products.find(p => p.id === productId) || null);
    setShowDeleteConfirm(true);
  };

  const handleAddSubCategory = () => {
    if (newSubCategory.trim()) {
      setSubCategories([...subCategories, newSubCategory.trim()]);
      setNewSubCategory('');
    }
  };

  const handleRemoveSubCategory = (index: number) => {
    setSubCategories(subCategories.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-2xl flex items-center justify-center shadow-lg">
              <i className="ri-store-2-line text-3xl text-white"></i>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#001F3F] font-['Cairo']">إدارة المتجر</h1>
              <p className="text-gray-600 mt-1">إدارة المنتجات والتصنيفات والمخزون</p>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-r-4 border-green-500">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-checkbox-circle-line text-2xl text-white"></i>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-200 px-3 py-1 rounded-full">متوفر</span>
              </div>
              <h3 className="text-gray-700 text-sm font-semibold mb-1">إجمالي المنتجات</h3>
              <p className="text-3xl font-bold text-green-700">{products.filter(p => p.stock > 0).length}</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-r-4 border-yellow-500">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-alert-line text-2xl text-white"></i>
                </div>
                <span className="text-sm font-bold text-yellow-700 bg-yellow-200 px-3 py-1 rounded-full">قليل</span>
              </div>
              <h3 className="text-gray-700 text-sm font-semibold mb-1">قليل المخزون</h3>
              <p className="text-3xl font-bold text-yellow-700">{products.filter(p => p.stock > 0 && p.stock <= 5).length}</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-r-4 border-red-500">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-close-circle-line text-2xl text-white"></i>
                </div>
                <span className="text-sm font-bold text-red-700 bg-red-200 px-3 py-1 rounded-full">نفذ</span>
              </div>
              <h3 className="text-gray-700 text-sm font-semibold mb-1">غير متوفر</h3>
              <p className="text-3xl font-bold text-red-700">{products.filter(p => p.stock === 0).length}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-r-4 border-blue-500">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-price-tag-3-line text-2xl text-white"></i>
                </div>
                <span className="text-sm font-bold text-blue-700 bg-blue-200 px-3 py-1 rounded-full">فئات</span>
              </div>
              <h3 className="text-gray-700 text-sm font-semibold mb-1">إجمالي التصنيفات</h3>
              <p className="text-3xl font-bold text-blue-700">{categories.length}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons & Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <button
              onClick={handleAddProduct}
              className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 font-bold text-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-circle-line text-2xl"></i>
              إضافة منتج جديد
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab('products')}
                className={`flex-1 md:flex-none px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'products'
                    ? 'bg-gradient-to-r from-[#001F3F] to-[#003366] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className="ri-shopping-bag-3-line ml-2"></i>
                المنتجات
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex-1 md:flex-none px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === 'categories'
                    ? 'bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <i className="ri-price-tag-3-line ml-2"></i>
                التصنيفات
              </button>
            </div>
          </div>
        </div>

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-50 to-orange-50 border-b-2 border-orange-200">
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">الصورة</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">اسم المنتج</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">التصنيف</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">السعر</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">الخصم</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">المخزون</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">الحالة</th>
                    <th className="py-4 px-6 text-right text-sm font-bold text-gray-700">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                      <td className="py-5 px-6">
                        <img src={product.images[0]} alt={product.name} className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                      </td>
                      <td className="py-5 px-6">
                        <div className="font-semibold text-gray-800">{product.name}</div>
                      </td>
                      <td className="py-5 px-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {product.category}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-800">{product.price} ر.س</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">{product.originalPrice} ر.س</span>
                          )}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        {product.discount ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
                            <i className="ri-price-tag-3-fill"></i>
                            {product.discount}%
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="py-5 px-6">
                        <span className={`font-semibold ${
                          product.stock > 20 ? 'text-green-600' : 
                          product.stock > 0 ? 'text-yellow-600' : 
                          'text-red-600'
                        }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                          product.status === 'متوفر' 
                            ? 'bg-green-100 text-green-700' 
                            : product.status === 'مخزون قليل'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          <i className={`${
                            product.status === 'متوفر' 
                              ? 'ri-checkbox-circle-fill' 
                              : product.status === 'مخزون قليل'
                              ? 'ri-error-warning-fill'
                              : 'ri-close-circle-fill'
                          }`}></i>
                          {product.status}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="w-9 h-9 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          >
                            <i className="ri-edit-line text-lg"></i>
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="w-9 h-9 flex items-center justify-center bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          >
                            <i className="ri-delete-bin-line text-lg"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div className="space-y-6">
            <div className="flex items-center justify-end">
              <button
                onClick={handleAddCategory}
                className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-add-circle-line text-2xl"></i>
                إضافة تصنيف جديد
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.filter(cat => cat.id !== 'all').map((category) => (
                <div key={category.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#FFA500]">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-xl flex items-center justify-center shadow-md">
                        <i className={`${category.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <h3 className="font-['Cairo'] text-xl font-bold text-[#001F3F]">{category.name}</h3>
                        <p className="text-sm text-gray-600 font-semibold">{category.count} منتج</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="w-9 h-9 flex items-center justify-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md cursor-pointer"
                      >
                        <i className="ri-edit-line"></i>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowDeleteCategoryConfirm(true);
                        }}
                        className="w-9 h-9 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all shadow-md cursor-pointer"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  </div>

                  {category.subCategories && category.subCategories.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-bold text-gray-700 mb-3">التصنيفات الفرعية:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subCategories.map((sub, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modals */}
        {(showAddModal || showEditModal) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => { setShowAddModal(false); setShowEditModal(false); }}>
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-[#001F3F] font-['Cairo']">
                  {showAddModal ? 'إضافة منتج جديد' : 'تعديل المنتج'}
                </h2>
                <button
                  onClick={() => { setShowAddModal(false); setShowEditModal(false); }}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">اسم المنتج *</label>
                    <input
                      type="text"
                      placeholder="أدخل اسم المنتج"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">التصنيف *</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer pr-8"
                    >
                      {categories.filter(cat => cat.id !== 'all').map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">السعر الحالي *</label>
                    <input
                      type="number"
                      placeholder="أدخل السعر"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">السعر الأصلي (قبل الخصم)</label>
                    <input
                      type="number"
                      placeholder="أدخل السعر الأصلي"
                      value={formData.originalPrice}
                      onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">نسبة الخصم (%)</label>
                    <input
                      type="number"
                      placeholder="أدخل نسبة الخصم"
                      value={formData.discount}
                      onChange={(e) => setFormData({...formData, discount: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">الكمية المتوفرة *</label>
                    <input
                      type="number"
                      placeholder="أدخل الكمية"
                      value={formData.stock}
                      onChange={(e) => setFormData({...formData, stock: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">التقييم</label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      placeholder="التقييم من 5"
                      value={formData.rating}
                      onChange={(e) => setFormData({...formData, rating: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">عدد التقييمات</label>
                    <input
                      type="number"
                      placeholder="عدد التقييمات"
                      value={formData.reviews}
                      onChange={(e) => setFormData({...formData, reviews: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">الشارة (Badge)</label>
                    <input
                      type="text"
                      placeholder="مثل: الأكثر مبيعاً، جديد، خصم 20%"
                      value={formData.badge}
                      onChange={(e) => setFormData({...formData, badge: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">لون الشارة</label>
                    <select
                      value={formData.badgeColor}
                      onChange={(e) => setFormData({...formData, badgeColor: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] cursor-pointer pr-8"
                    >
                      <option value="bg-red-500">أحمر (الأكثر مبيعاً)</option>
                      <option value="bg-green-500">أخضر (جديد)</option>
                      <option value="bg-[#FFA500]">برتقالي (خصم)</option>
                      <option value="bg-purple-500">بنفسجي (عرض خاص)</option>
                      <option value="bg-blue-500">أزرق (حصري)</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">وصف المنتج *</label>
                    <textarea
                      rows={4}
                      placeholder="أدخل وصف المنتج"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">صور المنتج</label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="أدخل رابط الصورة"
                          value={newImage}
                          onChange={(e) => setNewImage(e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                        />
                        <button
                          onClick={handleAddImage}
                          className="px-6 py-3 bg-[#FFA500] text-white rounded-xl font-semibold hover:bg-[#ff8c00] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-add-line ml-1"></i>
                          إضافة
                        </button>
                      </div>
                      {productImages.length > 0 && (
                        <div className="grid grid-cols-4 gap-3">
                          {productImages.map((img, idx) => (
                            <div key={idx} className="relative group">
                              <img src={img} alt={`صورة ${idx + 1}`} className="w-full h-24 object-cover object-top rounded-lg" />
                              <button
                                onClick={() => handleRemoveImage(idx)}
                                className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                              >
                                <i className="ri-close-line text-sm"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">الألوان المتاحة</label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="color"
                          value={newColor}
                          onChange={(e) => setNewColor(e.target.value)}
                          className="w-20 h-12 border border-gray-300 rounded-xl cursor-pointer"
                        />
                        <input
                          type="text"
                          value={newColor}
                          onChange={(e) => setNewColor(e.target.value)}
                          placeholder="#000000"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                        />
                        <button
                          onClick={handleAddColor}
                          className="px-6 py-3 bg-[#FFA500] text-white rounded-xl font-semibold hover:bg-[#ff8c00] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-add-line ml-1"></i>
                          إضافة
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {productColors.map((color, idx) => (
                          <div key={idx} className="relative group">
                            <div
                              className="w-12 h-12 rounded-lg border-2 border-gray-300"
                              style={{ backgroundColor: color }}
                            ></div>
                            {productColors.length > 1 && (
                              <button
                                onClick={() => handleRemoveColor(idx)}
                                className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                              >
                                <i className="ri-close-line text-xs"></i>
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">مميزات المنتج</label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="أدخل ميزة جديدة"
                          value={newFeature}
                          onChange={(e) => setNewFeature(e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                        />
                        <button
                          onClick={handleAddFeature}
                          className="px-6 py-3 bg-[#FFA500] text-white rounded-xl font-semibold hover:bg-[#ff8c00] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-add-line ml-1"></i>
                          إضافة
                        </button>
                      </div>
                      <div className="space-y-2">
                        {productFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl group">
                            <i className="ri-checkbox-circle-fill text-green-500"></i>
                            <span className="flex-1 text-gray-700">{feature}</span>
                            <button
                              onClick={() => handleRemoveFeature(idx)}
                              className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                              <i className="ri-close-line text-sm"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button 
                    onClick={() => {
                      setShowAddModal(false);
                      setShowEditModal(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    {showAddModal ? 'حفظ المنتج' : 'حفظ التعديلات'}
                  </button>
                  <button
                    onClick={() => { setShowAddModal(false); setShowEditModal(false); }}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteConfirm && selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-delete-bin-line text-3xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">تأكيد الحذف</h3>
                <p className="text-gray-600">هل أنت متأكد من حذف المنتج "{selectedProduct.name}"؟</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setShowDeleteConfirm(false);
                  }}
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  حذف
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}

        {showCategoryModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowCategoryModal(false)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-[#001F3F] font-['Cairo']">إضافة تصنيف جديد</h2>
                <button
                  onClick={() => setShowCategoryModal(false)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">اسم التصنيف *</label>
                    <input
                      type="text"
                      placeholder="أدخل اسم التصنيف"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">الأيقونة (Remix Icon) *</label>
                    <input
                      type="text"
                      placeholder="مثل: ri-sofa-line"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      يمكنك اختيار الأيقونة من <a href="https://remixicon.com" target="_blank" className="text-[#FFA500] hover:underline">remixicon.com</a>
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">التصنيفات الفرعية</label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="أدخل تصنيف فرعي"
                          value={newSubCategory}
                          onChange={(e) => setNewSubCategory(e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                        />
                        <button
                          onClick={handleAddSubCategory}
                          className="px-6 py-3 bg-[#FFA500] text-white rounded-xl font-semibold hover:bg-[#ff8c00] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-add-line ml-1"></i>
                          إضافة
                        </button>
                      </div>
                      {subCategories.length > 0 && (
                        <div className="space-y-2">
                          {subCategories.map((sub, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl group">
                              <span className="flex-1 text-gray-700">{sub}</span>
                              <button
                                onClick={() => handleRemoveSubCategory(idx)}
                                className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                              >
                                <i className="ri-close-line text-sm"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button 
                    onClick={() => setShowCategoryModal(false)}
                    className="flex-1 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    حفظ التصنيف
                  </button>
                  <button
                    onClick={() => setShowCategoryModal(false)}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showEditCategoryModal && selectedCategory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditCategoryModal(false)}>
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                <h2 className="text-2xl font-bold text-[#001F3F] font-['Cairo']">تعديل التصنيف</h2>
                <button
                  onClick={() => setShowEditCategoryModal(false)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-2xl text-gray-600"></i>
                </button>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">اسم التصنيف *</label>
                    <input
                      type="text"
                      defaultValue={selectedCategory.name}
                      placeholder="أدخل اسم التصنيف"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">الأيقونة (Remix Icon) *</label>
                    <input
                      type="text"
                      defaultValue={selectedCategory.icon}
                      placeholder="مثل: ri-sofa-line"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">عدد المنتجات</label>
                    <input
                      type="number"
                      defaultValue={selectedCategory.count}
                      placeholder="عدد المنتجات"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#001F3F] mb-2">التصنيفات الفرعية</label>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="أدخل تصنيف فرعي"
                          value={newSubCategory}
                          onChange={(e) => setNewSubCategory(e.target.value)}
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                        />
                        <button
                          onClick={handleAddSubCategory}
                          className="px-6 py-3 bg-[#FFA500] text-white rounded-xl font-semibold hover:bg-[#ff8c00] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <i className="ri-add-line ml-1"></i>
                          إضافة
                        </button>
                      </div>
                      {subCategories.length > 0 && (
                        <div className="space-y-2">
                          {subCategories.map((sub, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-3 rounded-xl group">
                              <span className="flex-1 text-gray-700">{sub}</span>
                              <button
                                onClick={() => handleRemoveSubCategory(idx)}
                                className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                              >
                                <i className="ri-close-line text-sm"></i>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button 
                    onClick={() => setShowEditCategoryModal(false)}
                    className="flex-1 bg-gradient-to-r from-[#FFA500] to-[#ff8c00] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
                  >
                    حفظ التعديلات
                  </button>
                  <button
                    onClick={() => setShowEditCategoryModal(false)}
                    className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showDeleteCategoryConfirm && selectedCategory && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-delete-bin-line text-3xl text-red-600"></i>
                </div>
                <h3 className="text-xl font-bold text-[#001F3F] mb-2">تأكيد الحذف</h3>
                <p className="text-gray-600">هل أنت متأكد من حذف التصنيف "{selectedCategory.name}"؟</p>
                <p className="text-sm text-red-600 mt-2">سيتم حذف جميع المنتجات المرتبطة بهذا التصنيف</p>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => {
                    setShowDeleteCategoryConfirm(false);
                  }}
                  className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  حذف
                </button>
                <button
                  onClick={() => setShowDeleteCategoryConfirm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

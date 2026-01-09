"use client";

import { useState } from "react";

export default function AdminStorePage() {
  const [activeTab, setActiveTab] = useState<"products" | "categories">(
    "products"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("الكل");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showEditCategoryModal, setShowEditCategoryModal] = useState(false);
  const [showDeleteCategoryConfirm, setShowDeleteCategoryConfirm] =
    useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [productImages, setProductImages] = useState<string[]>([]);
  const [newImage, setNewImage] = useState("");
  const [productColors, setProductColors] = useState<string[]>(["#D4C5B9"]);
  const [newColor, setNewColor] = useState("#000000");
  const [productFeatures, setProductFeatures] = useState<string[]>([
    "ضمان 5 سنوات",
  ]);
  const [newFeature, setNewFeature] = useState("");
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [newSubCategory, setNewSubCategory] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    category: "أثاث",
    price: "",
    originalPrice: "",
    discount: "",
    stock: "",
    description: "",
    rating: "4.5",
    reviews: "0",
    badge: "",
    badgeColor: "bg-red-500",
  });

  const products = [
    {
      id: 1,
      name: "كنبة فاخرة مودرن",
      category: "أثاث",
      price: 12500,
      originalPrice: 15000,
      discount: 17,
      stock: 15,
      status: "متوفر",
      rating: 4.9,
      reviews: 127,
      description:
        "منتج فاخر مصنوع من أجود الخامات العالمية، يجمع بين التصميم العصري والجودة العالية.",
      badge: "الأكثر مبيعاً",
      badgeColor: "bg-red-500",
      colors: ["#D4C5B9", "#8B7355", "#2C2416"],
      features: [
        "ضمان 5 سنوات",
        "شحن مجاني",
        "تركيب احترافي",
        "إمكانية الإرجاع خلال 30 يوم",
      ],
      images: [
        "https://readdy.ai/api/search-image?query=luxury%20modern%20sofa%20with%20simple%20background&width=600&height=600&seq=admin-prod-1&orientation=squarish",
      ],
    },
    {
      id: 2,
      name: "ثريا كريستال فاخرة",
      category: "إضاءة",
      price: 8900,
      originalPrice: null,
      discount: 0,
      stock: 8,
      status: "متوفر",
      rating: 5.0,
      reviews: 89,
      description:
        "ثريا كريستال فاخرة بتصميم عصري أنيق، تضيف لمسة من الفخامة والأناقة لمنزلك.",
      badge: "جديد",
      badgeColor: "bg-green-500",
      colors: ["#FFD700", "#C0C0C0"],
      features: ["ضمان 3 سنوات", "شحن مجاني", "تركيب احترافي"],
      images: [
        "https://readdy.ai/api/search-image?query=luxury%20crystal%20chandelier%20with%20simple%20background&width=600&height=600&seq=admin-prod-2&orientation=squarish",
      ],
    },
    {
      id: 3,
      name: "طاولة طعام رخام",
      category: "أثاث",
      price: 9800,
      originalPrice: 11500,
      discount: 15,
      stock: 3,
      status: "قليل",
      rating: 4.8,
      reviews: 156,
      description:
        "طاولة طعام فاخرة من الرخام الطبيعي، تجمع بين الفخامة والمتانة.",
      badge: "خصم 15%",
      badgeColor: "bg-[#FFA500]",
      colors: ["#FFFFFF", "#000000", "#C9B037"],
      features: ["ضمان 5 سنوات", "شحن مجاني", "تركيب احترافي", "رخام طبيعي"],
      images: [
        "https://readdy.ai/api/search-image?query=luxury%20marble%20dining%20table%20with%20simple%20background&width=600&height=600&seq=admin-prod-3&orientation=squarish",
      ],
    },
  ];

  const [categories, setCategories] = useState([
    {
      id: "all",
      name: "الكل",
      count: 487,
      icon: "ri-apps-line",
      subCategories: [],
    },
    {
      id: "furniture",
      name: "الأثاث",
      count: 156,
      icon: "ri-sofa-line",
      subCategories: ["كنب وأرائك", "طاولات", "كراسي", "خزائن"],
    },
    {
      id: "lighting",
      name: "الإضاءة",
      count: 89,
      icon: "ri-lightbulb-line",
      subCategories: ["ثريات فاخرة", "إضاءة مخفية", "أباجورات", "إضاءة LED"],
    },
    {
      id: "decor",
      name: "الديكور",
      count: 124,
      icon: "ri-palette-line",
      subCategories: ["لوحات فنية", "مرايا", "تحف", "نباتات زينة"],
    },
    {
      id: "textiles",
      name: "المنسوجات",
      count: 67,
      icon: "ri-t-shirt-line",
      subCategories: ["ستائر فاخرة", "سجاد", "وسائد", "مفروشات"],
    },
    {
      id: "kitchens",
      name: "المطابخ",
      count: 51,
      icon: "ri-restaurant-line",
      subCategories: ["مطابخ خشب", "ألمنيوم", "رخام", "أجهزة مدمجة"],
    },
  ]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterCategory === "الكل" || product.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const handleAddProduct = () => {
    setFormData({
      name: "",
      category: "أثاث",
      price: "",
      originalPrice: "",
      discount: "",
      stock: "",
      description: "",
      rating: "4.5",
      reviews: "0",
      badge: "",
      badgeColor: "bg-red-500",
    });
    setProductImages([]);
    setProductColors(["#D4C5B9"]);
    setProductFeatures(["ضمان 5 سنوات"]);
    setShowAddModal(true);
  };

  const handleEditProduct = (product: any) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || "",
      discount: product.discount?.toString() || "",
      stock: product.stock.toString(),
      description: product.description,
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      badge: product.badge || "",
      badgeColor: product.badgeColor || "bg-red-500",
    });
    setProductImages(product.images || []);
    setProductColors(product.colors || ["#D4C5B9"]);
    setProductFeatures(product.features || ["ضمان 5 سنوات"]);
    setShowEditModal(true);
  };

  const handleAddImage = () => {
    if (newImage.trim()) {
      setProductImages([...productImages, newImage.trim()]);
      setNewImage("");
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
      setNewFeature("");
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
    setSelectedProduct(products.find((p) => p.id === productId) || null);
    setShowDeleteConfirm(true);
  };

  const handleAddSubCategory = () => {
    if (newSubCategory.trim()) {
      setSubCategories([...subCategories, newSubCategory.trim()]);
      setNewSubCategory("");
    }
  };

  const handleRemoveSubCategory = (index: number) => {
    setSubCategories(subCategories.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] py-8 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#F7F6F4] font-['Cairo']">
                إدارة المتجر
              </h1>
              <p className="text-[#CBC1B8]/90 mt-1">
                إدارة المنتجات والتصنيفات والمخزون
              </p>
            </div>
            <button
              onClick={handleAddProduct}
              className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-add-line text-xl"></i>
              <span>إضافة منتج جديد</span>
            </button>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-checkbox-circle-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/70 text-sm mb-1">
                إجمالي المنتجات
              </h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {products.filter((p) => p.stock > 0).length}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                  <i className="ri-alert-line text-2xl text-[#CBC1B8]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/70 text-sm mb-1">قليل المخزون</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {products.filter((p) => p.stock > 0 && p.stock <= 5).length}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-[#CBC1B8]/20 rounded-xl flex items-center justify-center">
                  <i className="ri-close-circle-line text-2xl text-[#CBC1B8]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/70 text-sm mb-1">غير متوفر</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {products.filter((p) => p.stock === 0).length}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-price-tag-3-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/70 text-sm mb-1">
                إجمالي التصنيفات
              </h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">
                {categories.length}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("products")}
              className={`flex-1 md:flex-none px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                  : "bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/20 hover:bg-white/20"
              }`}
            >
              <i className="ri-shopping-bag-3-line ml-2"></i>
              المنتجات
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={`flex-1 md:flex-none px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === "categories"
                  ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                  : "bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/20 hover:bg-white/20"
              }`}
            >
              <i className="ri-price-tag-3-line ml-2"></i>
              التصنيفات
            </button>
          </div>

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-[#CBC1B8]/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]/50"></i>
                  <input
                    type="text"
                    placeholder="البحث عن منتج..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-12 pl-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-6 py-3 bg-[#0F3A3E] border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer pr-8 text-[#F7F6F4] hover:bg-[#1C474A] transition-colors"
                >
                  <option value="الكل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                    جميع الفئات
                  </option>
                  <option value="أثاث" className="bg-[#0F3A3E] text-[#F7F6F4]">
                    أثاث
                  </option>
                  <option value="إضاءة" className="bg-[#0F3A3E] text-[#F7F6F4]">
                    إضاءة
                  </option>
                  <option value="ديكور" className="bg-[#0F3A3E] text-[#F7F6F4]">
                    ديكور
                  </option>
                  <option
                    value="منسوجات"
                    className="bg-[#0F3A3E] text-[#F7F6F4]"
                  >
                    منسوجات
                  </option>
                  <option value="مطابخ" className="bg-[#0F3A3E] text-[#F7F6F4]">
                    مطابخ
                  </option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#CBC1B8]/20">
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        الصورة
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        اسم المنتج
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        التصنيف
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        السعر
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        الخصم
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        المخزون
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        الحالة
                      </th>
                      <th className="py-4 px-6 text-right text-sm font-bold text-[#F7F6F4]">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-[#CBC1B8]/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-5 px-6">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded-lg shadow-sm"
                          />
                        </td>
                        <td className="py-5 px-6">
                          <div className="font-semibold text-[#F7F6F4]">
                            {product.name}
                          </div>
                        </td>
                        <td className="py-5 px-6">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {product.category}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex flex-col">
                            <span className="font-bold text-[#CBC1B8]">
                              {product.price} ر.س
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-[#CBC1B8]/50 line-through">
                                {product.originalPrice} ر.س
                              </span>
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
                            <span className="text-[#CBC1B8]/50">-</span>
                          )}
                        </td>
                        <td className="py-5 px-6">
                          <span
                            className={`font-semibold ${
                              product.stock > 20
                                ? "text-green-400"
                                : product.stock > 0
                                ? "text-yellow-400"
                                : "text-red-400"
                            }`}
                          >
                            {product.stock}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                              product.status === "متوفر"
                                ? "bg-green-100 text-green-700"
                                : product.status === "قليل"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            <i
                              className={`${
                                product.status === "متوفر"
                                  ? "ri-checkbox-circle-fill"
                                  : product.status === "قليل"
                                  ? "ri-error-warning-fill"
                                  : "ri-close-circle-fill"
                              }`}
                            ></i>
                            {product.status}
                          </span>
                        </td>
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="w-9 h-9 flex items-center justify-center bg-[#CBC1B8]/20 text-[#CBC1B8] rounded-lg hover:bg-[#CBC1B8]/30 transition-colors cursor-pointer"
                            >
                              <i className="ri-edit-line text-lg"></i>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="w-9 h-9 flex items-center justify-center bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors cursor-pointer"
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
          {activeTab === "categories" && (
            <div className="space-y-6">
              <div className="flex items-center justify-end">
                <button
                  onClick={handleAddCategory}
                  className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-add-line text-xl"></i>
                  <span>إضافة تصنيف جديد</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories
                  .filter((cat) => cat.id !== "all")
                  .map((category) => (
                    <div
                      key={category.id}
                      className="bg-white/5 border border-[#CBC1B8]/20 rounded-xl p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                            <i
                              className={`${category.icon} text-2xl text-[#0A1F21]`}
                            ></i>
                          </div>
                          <div>
                            <h3 className="font-['Cairo'] text-xl font-bold text-[#F7F6F4]">
                              {category.name}
                            </h3>
                            <p className="text-sm text-[#CBC1B8]/70 font-semibold">
                              {category.count} منتج
                            </p>
                          </div>
                        </div>
                      </div>

                      {category.subCategories &&
                        category.subCategories.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-[#CBC1B8]/20">
                            <h4 className="text-sm font-bold text-[#CBC1B8]/90 mb-3">
                              التصنيفات الفرعية:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {category.subCategories.map((sub, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white/10 text-[#CBC1B8] rounded-full text-sm font-semibold"
                                >
                                  {sub}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => handleEditCategory(category)}
                          className="flex-1 bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/30 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all cursor-pointer text-sm"
                        >
                          <i className="ri-edit-line ml-1"></i>
                          تعديل
                        </button>
                        <button
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowDeleteCategoryConfirm(true);
                          }}
                          className="flex-1 bg-red-500/20 text-red-400 border border-red-500/30 py-2 rounded-lg font-semibold hover:bg-red-500/30 transition-all cursor-pointer text-sm"
                        >
                          <i className="ri-delete-bin-line ml-1"></i>
                          حذف
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Add/Edit Product Modal */}
          {(showAddModal || showEditModal) && (
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
              onClick={() => {
                setShowAddModal(false);
                setShowEditModal(false);
              }}
            >
              <div
                className="bg-[#0F3A3E] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between z-10 border-b border-[#CBC1B8]/20">
                  <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                    {showAddModal ? "إضافة منتج جديد" : "تعديل المنتج"}
                  </h2>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setShowEditModal(false);
                    }}
                    className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
                  </button>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        اسم المنتج *
                      </label>
                      <input
                        type="text"
                        placeholder="أدخل اسم المنتج"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        التصنيف *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer pr-8 text-[#F7F6F4]"
                      >
                        {categories
                          .filter((cat) => cat.id !== "all")
                          .map((cat) => (
                            <option key={cat.id} value={cat.name}>
                              {cat.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        السعر الحالي *
                      </label>
                      <input
                        type="number"
                        placeholder="أدخل السعر"
                        value={formData.price}
                        onChange={(e) =>
                          setFormData({ ...formData, price: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        السعر الأصلي (قبل الخصم)
                      </label>
                      <input
                        type="number"
                        placeholder="أدخل السعر الأصلي"
                        value={formData.originalPrice}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            originalPrice: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        نسبة الخصم (%)
                      </label>
                      <input
                        type="number"
                        placeholder="أدخل نسبة الخصم"
                        value={formData.discount}
                        onChange={(e) =>
                          setFormData({ ...formData, discount: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        المخزون *
                      </label>
                      <input
                        type="number"
                        placeholder="أدخل الكمية المتوفرة"
                        value={formData.stock}
                        onChange={(e) =>
                          setFormData({ ...formData, stock: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        الوصف *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="أدخل وصف المنتج"
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      ></textarea>
                    </div>

                    {/* Images Section */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        صور المنتج
                      </label>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          placeholder="أدخل رابط الصورة"
                          value={newImage}
                          onChange={(e) => setNewImage(e.target.value)}
                          className="flex-1 px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                        />
                        <button
                          onClick={handleAddImage}
                          className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                        >
                          إضافة
                        </button>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        {productImages.map((img, idx) => (
                          <div key={idx} className="relative group">
                            <img
                              src={img}
                              alt={`Product ${idx + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handleRemoveImage(idx)}
                              className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                              <i className="ri-close-line text-sm"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Colors Section */}
                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        الألوان المتاحة
                      </label>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="color"
                          value={newColor}
                          onChange={(e) => setNewColor(e.target.value)}
                          className="w-16 h-12 rounded-lg cursor-pointer"
                        />
                        <button
                          onClick={handleAddColor}
                          className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                        >
                          إضافة لون
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {productColors.map((color, idx) => (
                          <div key={idx} className="relative group">
                            <div
                              className="w-12 h-12 rounded-lg border-2 border-[#CBC1B8]/30"
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

                    {/* Features Section */}
                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        المميزات
                      </label>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          placeholder="أدخل ميزة"
                          value={newFeature}
                          onChange={(e) => setNewFeature(e.target.value)}
                          className="flex-1 px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                        />
                        <button
                          onClick={handleAddFeature}
                          className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                        >
                          إضافة
                        </button>
                      </div>
                      <div className="space-y-2">
                        {productFeatures.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg"
                          >
                            <span className="text-[#CBC1B8] text-sm">
                              {feature}
                            </span>
                            <button
                              onClick={() => handleRemoveFeature(idx)}
                              className="text-red-400 hover:text-red-300 cursor-pointer"
                            >
                              <i className="ri-close-line"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                      {showAddModal ? "إضافة المنتج" : "حفظ التعديلات"}
                    </button>
                    <button
                      onClick={() => {
                        setShowAddModal(false);
                        setShowEditModal(false);
                      }}
                      className="px-8 py-3 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] rounded-xl font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add/Edit Category Modal */}
          {(showCategoryModal || showEditCategoryModal) && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
              <div className="bg-[#0F3A3E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20">
                <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between border-b border-[#CBC1B8]/20">
                  <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                    {showCategoryModal ? "إضافة تصنيف جديد" : "تعديل التصنيف"}
                  </h2>
                  <button
                    onClick={() => {
                      setShowCategoryModal(false);
                      setShowEditCategoryModal(false);
                    }}
                    className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
                  </button>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        اسم التصنيف
                      </label>
                      <input
                        type="text"
                        defaultValue={selectedCategory?.name}
                        placeholder="أدخل اسم التصنيف"
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        الأيقونة
                      </label>
                      <input
                        type="text"
                        defaultValue={selectedCategory?.icon}
                        placeholder="ri-apps-line"
                        className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                        التصنيفات الفرعية
                      </label>
                      <div className="flex gap-2 mb-3">
                        <input
                          type="text"
                          placeholder="أدخل تصنيف فرعي"
                          value={newSubCategory}
                          onChange={(e) => setNewSubCategory(e.target.value)}
                          className="flex-1 px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                        />
                        <button
                          onClick={handleAddSubCategory}
                          className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                        >
                          إضافة
                        </button>
                      </div>
                      <div className="space-y-2">
                        {subCategories.map((sub, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg"
                          >
                            <span className="text-[#CBC1B8] text-sm">
                              {sub}
                            </span>
                            <button
                              onClick={() => handleRemoveSubCategory(idx)}
                              className="text-red-400 hover:text-red-300 cursor-pointer"
                            >
                              <i className="ri-close-line"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                      {showCategoryModal ? "إضافة التصنيف" : "حفظ التعديلات"}
                    </button>
                    <button
                      onClick={() => {
                        setShowCategoryModal(false);
                        setShowEditCategoryModal(false);
                      }}
                      className="px-8 py-3 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] rounded-xl font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && selectedProduct && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
              <div className="bg-[#0F3A3E] rounded-2xl max-w-md w-full border border-[#CBC1B8]/20">
                <div className="p-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-error-warning-line text-4xl text-red-400"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-[#F7F6F4] text-center mb-2 font-['Cairo']">
                    تأكيد الحذف
                  </h2>
                  <p className="text-[#CBC1B8]/90 text-center mb-6">
                    هل أنت متأكد من حذف المنتج "{selectedProduct.name}"؟ لا يمكن
                    التراجع عن هذا الإجراء.
                  </p>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer">
                      حذف المنتج
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(false)}
                      className="flex-1 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] py-3 rounded-xl font-semibold hover:bg-white/20 transition-all cursor-pointer"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Delete Category Confirmation Modal */}
          {showDeleteCategoryConfirm && selectedCategory && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
              <div className="bg-[#0F3A3E] rounded-2xl max-w-md w-full border border-[#CBC1B8]/20">
                <div className="p-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-error-warning-line text-4xl text-red-400"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-[#F7F6F4] text-center mb-2 font-['Cairo']">
                    تأكيد الحذف
                  </h2>
                  <p className="text-[#CBC1B8]/90 text-center mb-6">
                    هل أنت متأكد من حذف التصنيف "{selectedCategory.name}"؟ لا
                    يمكن التراجع عن هذا الإجراء.
                  </p>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer">
                      حذف التصنيف
                    </button>
                    <button
                      onClick={() => setShowDeleteCategoryConfirm(false)}
                      className="flex-1 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] py-3 rounded-xl font-semibold hover:bg-white/20 transition-all cursor-pointer"
                    >
                      إلغاء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {(showAddModal || showEditModal) && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => {
            setShowAddModal(false);
            setShowEditModal(false);
          }}
        >
          <div
            className="bg-[#0F3A3E] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between z-10 border-b border-[#CBC1B8]/20">
              <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                {showAddModal ? "إضافة منتج جديد" : "تعديل المنتج"}
              </h2>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setShowEditModal(false);
                }}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    اسم المنتج *
                  </label>
                  <input
                    type="text"
                    placeholder="أدخل اسم المنتج"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    التصنيف *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer pr-8 text-[#F7F6F4]"
                  >
                    {categories
                      .filter((cat) => cat.id !== "all")
                      .map((cat) => (
                        <option key={cat.id} value={cat.name}>
                          {cat.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    السعر الحالي *
                  </label>
                  <input
                    type="number"
                    placeholder="أدخل السعر"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    السعر الأصلي (قبل الخصم)
                  </label>
                  <input
                    type="number"
                    placeholder="أدخل السعر الأصلي"
                    value={formData.originalPrice}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        originalPrice: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    نسبة الخصم (%)
                  </label>
                  <input
                    type="number"
                    placeholder="أدخل نسبة الخصم"
                    value={formData.discount}
                    onChange={(e) =>
                      setFormData({ ...formData, discount: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    المخزون *
                  </label>
                  <input
                    type="number"
                    placeholder="أدخل الكمية المتوفرة"
                    value={formData.stock}
                    onChange={(e) =>
                      setFormData({ ...formData, stock: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الوصف *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="أدخل وصف المنتج"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  ></textarea>
                </div>

                {/* Images Section */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    صور المنتج
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="أدخل رابط الصورة"
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                    <button
                      onClick={handleAddImage}
                      className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                    >
                      إضافة
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {productImages.map((img, idx) => (
                      <div key={idx} className="relative group">
                        <img
                          src={img}
                          alt={`Product ${idx + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <i className="ri-close-line text-sm"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors Section */}
                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الألوان المتاحة
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="color"
                      value={newColor}
                      onChange={(e) => setNewColor(e.target.value)}
                      className="w-16 h-12 rounded-lg cursor-pointer"
                    />
                    <button
                      onClick={handleAddColor}
                      className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                    >
                      إضافة لون
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {productColors.map((color, idx) => (
                      <div key={idx} className="relative group">
                        <div
                          className="w-12 h-12 rounded-lg border-2 border-[#CBC1B8]/30"
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

                {/* Features Section */}
                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    المميزات
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="أدخل ميزة"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                    <button
                      onClick={handleAddFeature}
                      className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                    >
                      إضافة
                    </button>
                  </div>
                  <div className="space-y-2">
                    {productFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg"
                      >
                        <span className="text-[#CBC1B8] text-sm">
                          {feature}
                        </span>
                        <button
                          onClick={() => handleRemoveFeature(idx)}
                          className="text-red-400 hover:text-red-300 cursor-pointer"
                        >
                          <i className="ri-close-line"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  {showAddModal ? "إضافة المنتج" : "حفظ التعديلات"}
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setShowEditModal(false);
                  }}
                  className="px-8 py-3 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] rounded-xl font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Category Modal */}
      {(showCategoryModal || showEditCategoryModal) && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#0F3A3E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#CBC1B8]/20">
            <div className="sticky top-0 bg-gradient-to-r from-[#0A1F21] to-[#0F3A3E] px-6 py-4 flex items-center justify-between border-b border-[#CBC1B8]/20">
              <h2 className="text-2xl font-bold text-[#F7F6F4] font-['Cairo']">
                {showCategoryModal ? "إضافة تصنيف جديد" : "تعديل التصنيف"}
              </h2>
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setShowEditCategoryModal(false);
                }}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-[#CBC1B8]"></i>
              </button>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    اسم التصنيف
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedCategory?.name}
                    placeholder="أدخل اسم التصنيف"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    الأيقونة
                  </label>
                  <input
                    type="text"
                    defaultValue={selectedCategory?.icon}
                    placeholder="ri-apps-line"
                    className="w-full px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#F7F6F4] mb-2">
                    التصنيفات الفرعية
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="أدخل تصنيف فرعي"
                      value={newSubCategory}
                      onChange={(e) => setNewSubCategory(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                    />
                    <button
                      onClick={handleAddSubCategory}
                      className="px-6 py-3 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-xl font-semibold hover:shadow-lg transition-all cursor-pointer"
                    >
                      إضافة
                    </button>
                  </div>
                  <div className="space-y-2">
                    {subCategories.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg"
                      >
                        <span className="text-[#CBC1B8] text-sm">{sub}</span>
                        <button
                          onClick={() => handleRemoveSubCategory(idx)}
                          className="text-red-400 hover:text-red-300 cursor-pointer"
                        >
                          <i className="ri-close-line"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="flex-1 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer">
                  {showCategoryModal ? "إضافة التصنيف" : "حفظ التعديلات"}
                </button>
                <button
                  onClick={() => {
                    setShowCategoryModal(false);
                    setShowEditCategoryModal(false);
                  }}
                  className="px-8 py-3 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] rounded-xl font-semibold hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#0F3A3E] rounded-2xl max-w-md w-full border border-[#CBC1B8]/20">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-error-warning-line text-4xl text-red-400"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#F7F6F4] text-center mb-2 font-['Cairo']">
                تأكيد الحذف
              </h2>
              <p className="text-[#CBC1B8]/90 text-center mb-6">
                هل أنت متأكد من حذف المنتج "{selectedProduct.name}"؟ لا يمكن
                التراجع عن هذا الإجراء.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer">
                  حذف المنتج
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] py-3 rounded-xl font-semibold hover:bg-white/20 transition-all cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Category Confirmation Modal */}
      {showDeleteCategoryConfirm && selectedCategory && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#0F3A3E] rounded-2xl max-w-md w-full border border-[#CBC1B8]/20">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-error-warning-line text-4xl text-red-400"></i>
              </div>
              <h2 className="text-2xl font-bold text-[#F7F6F4] text-center mb-2 font-['Cairo']">
                تأكيد الحذف
              </h2>
              <p className="text-[#CBC1B8]/90 text-center mb-6">
                هل أنت متأكد من حذف التصنيف "{selectedCategory.name}"؟ لا يمكن
                التراجع عن هذا الإجراء.
              </p>
              <div className="flex gap-4">
                <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all cursor-pointer">
                  حذف التصنيف
                </button>
                <button
                  onClick={() => setShowDeleteCategoryConfirm(false)}
                  className="flex-1 bg-white/10 border border-[#CBC1B8]/30 text-[#CBC1B8] py-3 rounded-xl font-semibold hover:bg-white/20 transition-all cursor-pointer"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";

export default function AdminReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRating, setFilterRating] = useState("الكل");

  const reviews = [
    {
      id: 1,
      customer: "أحمد محمد",
      rating: 5,
      comment:
        "خدمة ممتازة وتصميم رائع! فريق محترف جداً وملتزم بالمواعيد. أنصح بشدة بالتعامل معهم.",
      project: "فيلا الأناقة الحديثة",
      date: "2024-03-15",
      status: "منشور",
    },
    {
      id: 2,
      customer: "سارة أحمد",
      rating: 4,
      comment:
        "تجربة جيدة بشكل عام. التصميم جميل والتنفيذ جيد، لكن كان هناك بعض التأخير في التسليم.",
      project: "شقة عصرية فاخرة",
      date: "2024-03-14",
      status: "منشور",
    },
    {
      id: 3,
      customer: "خالد سعيد",
      rating: 5,
      comment:
        "أفضل شركة تصميم داخلي تعاملت معها! الاهتمام بالتفاصيل والجودة العالية.",
      project: "مكتب تجاري راقي",
      date: "2024-03-13",
      status: "قيد المراجعة",
    },
  ];

  const getStatusColor = (status: string) => {
    return status === "منشور"
      ? "bg-green-100 text-green-600"
      : "bg-yellow-100 text-yellow-600";
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0A1F21] via-[#0F3A3E] to-[#1C474A] py-8 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#F7F6F4] font-['Cairo']">
                إدارة التقييمات
              </h1>
              <p className="text-[#CBC1B8]/90 mt-1">
                مراجعة وإدارة تقييمات العملاء
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-star-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">
                إجمالي التقييمات
              </h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">342</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-star-fill text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">متوسط التقييم</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">4.8</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-check-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">منشور</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">298</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
              <div className="flex items-center justify-between mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl flex items-center justify-center shadow-md">
                  <i className="ri-time-line text-2xl text-[#0A1F21]"></i>
                </div>
              </div>
              <h3 className="text-[#CBC1B8]/90 text-sm mb-1">قيد المراجعة</h3>
              <p className="text-2xl font-bold text-[#F7F6F4]">44</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#CBC1B8]/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <i className="ri-search-line absolute right-4 top-1/2 transform -translate-y-1/2 text-[#CBC1B8]"></i>
                <input
                  type="text"
                  placeholder="البحث في التقييمات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 bg-white/5 border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] text-[#F7F6F4] placeholder:text-[#CBC1B8]/50"
                />
              </div>
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="px-6 py-3 bg-[#0F3A3E] border border-[#CBC1B8]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CBC1B8] cursor-pointer text-[#F7F6F4] hover:bg-[#1C474A] transition-colors"
              >
                <option value="الكل" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  جميع التقييمات
                </option>
                <option value="5" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  5 نجوم
                </option>
                <option value="4" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  4 نجوم
                </option>
                <option value="3" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  3 نجوم
                </option>
                <option value="2" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  2 نجوم
                </option>
                <option value="1" className="bg-[#0F3A3E] text-[#F7F6F4]">
                  1 نجمة
                </option>
              </select>
            </div>

            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white/5 border border-[#CBC1B8]/20 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-full flex items-center justify-center">
                        <span className="text-[#0A1F21] font-bold">
                          {review.customer.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#F7F6F4]">
                          {review.customer}
                        </h3>
                        <p className="text-sm text-[#CBC1B8]/90">
                          {review.project}
                        </p>
                        <p className="text-xs text-[#CBC1B8]/70">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        review.status
                      )}`}
                    >
                      {review.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`${
                          i < review.rating
                            ? "ri-star-fill text-[#CBC1B8]"
                            : "ri-star-line text-[#CBC1B8]/30"
                        } text-lg`}
                      ></i>
                    ))}
                    <span className="mr-2 text-sm text-[#CBC1B8]/90">
                      ({review.rating}/5)
                    </span>
                  </div>

                  <p className="text-[#F7F6F4]/90 mb-4">{review.comment}</p>

                  <div className="flex gap-2">
                    {review.status === "قيد المراجعة" && (
                      <>
                        <button className="px-4 py-2 bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer">
                          <i className="ri-check-line ml-1"></i>
                          نشر
                        </button>
                        <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-semibold hover:bg-red-500/30 transition-all cursor-pointer">
                          <i className="ri-close-line ml-1"></i>
                          رفض
                        </button>
                      </>
                    )}
                    {review.status === "منشور" && (
                      <button className="px-4 py-2 bg-white/10 text-[#CBC1B8] border border-[#CBC1B8]/30 rounded-lg font-semibold hover:bg-white/20 transition-all cursor-pointer">
                        <i className="ri-eye-off-line ml-1"></i>
                        إخفاء
                      </button>
                    )}
                    <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg font-semibold hover:bg-red-500/30 transition-all cursor-pointer">
                      <i className="ri-delete-bin-line ml-1"></i>
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

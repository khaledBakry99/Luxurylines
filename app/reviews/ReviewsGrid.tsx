"use client";
import { useState } from "react";

export default function ReviewsGrid() {
  const [filter, setFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "أحمد محمد العلي",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20Arab%20businessman%20portrait%2C%20confident%20smile%2C%20modern%20business%20attire%2C%20clean%20background%2C%20high%20quality%20professional%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=100&height=100&seq=review-1&orientation=squarish",
      rating: 5,
      date: "15 ديسمبر 2024",
      service: "التصميم الداخلي",
      comment:
        "تجربة رائعة مع فريق Luxurylines! التصميم كان أكثر من رائع وتم تنفيذ كل التفاصيل بدقة عالية. الفريق محترف جداً ومتعاون، وأنصح الجميع بالتعامل معهم.",
      project: "فيلا سكنية - الرياض",
    },
    {
      id: 2,
      name: "فاطمة السعيد",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20Arab%20businesswoman%20portrait%2C%20elegant%20hijab%2C%20confident%20expression%2C%20modern%20professional%20attire%2C%20clean%20background%2C%20high%20quality%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=100&height=100&seq=review-2&orientation=squarish",
      rating: 5,
      date: "10 ديسمبر 2024",
      service: "التشطيب الكامل",
      comment:
        "خدمة ممتازة من البداية للنهاية. الجودة عالية جداً والأسعار مناسبة. شكراً لفريق العمل على الاهتمام بكل التفاصيل الصغيرة.",
      project: "شقة سكنية - جدة",
    },
    {
      id: 3,
      name: "خالد بن سعود",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20Arab%20businessman%20portrait%2C%20traditional%20Saudi%20attire%2C%20warm%20smile%2C%20modern%20office%20background%2C%20high%20quality%20professional%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=100&height=100&seq=review-3&orientation=squarish",
      rating: 5,
      date: "5 ديسمبر 2024",
      service: "التصميم الخارجي",
      comment:
        "تصميم خارجي مبتكر وعصري. الفريق فهم رؤيتي تماماً وحولها لواقع يفوق التوقعات. احترافية عالية في التعامل والتنفيذ.",
      project: "مبنى تجاري - الدمام",
    },
    {
      id: 4,
      name: "نورة المطيري",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20Arab%20businesswoman%20portrait%2C%20elegant%20professional%20style%2C%20confident%20smile%2C%20modern%20office%20background%2C%20high%20quality%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=100&height=100&seq=review-4&orientation=squarish",
      rating: 4,
      date: "1 ديسمبر 2024",
      service: "إدارة المشاريع",
      comment:
        "إدارة احترافية للمشروع من البداية للنهاية. تم الالتزام بالمواعيد والميزانية المحددة. تجربة جيدة جداً.",
      project: "مكتب إداري - الخبر",
    },
    {
      id: 5,
      name: "عبدالله الحربي",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20Arab%20businessman%20portrait%2C%20modern%20business%20suit%2C%20friendly%20expression%2C%20clean%20background%2C%20high%20quality%20professional%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=100&height=100&seq=review-5&orientation=squarish",
      rating: 5,
      date: "28 نوفمبر 2024",
      service: "التوريد والتركيب",
      comment:
        "جودة المواد المستخدمة ممتازة والتركيب كان احترافي. الفريق ملتزم ومحترف. أنصح بشدة بالتعامل معهم.",
      project: "فيلا فاخرة - الرياض",
    },
    {
      id: 6,
      name: "سارة القحطاني",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20Arab%20businesswoman%20portrait%2C%20modern%20hijab%20style%2C%20warm%20smile%2C%20professional%20attire%2C%20clean%20background%2C%20high%20quality%20headshot%2C%20natural%20lighting%2C%20realistic%20photography&width=100&height=100&seq=review-6&orientation=squarish",
      rating: 5,
      date: "25 نوفمبر 2024",
      service: "التصميم الداخلي",
      comment:
        "تصميم داخلي راقي وأنيق. المصممين لديهم ذوق رفيع وأفكار مبتكرة. النتيجة النهائية كانت أفضل مما تخيلت.",
      project: "شقة عصرية - مكة",
    },
  ];

  const services = [
    "all",
    "التصميم الداخلي",
    "التصميم الخارجي",
    "التشطيب الكامل",
    "إدارة المشاريع",
    "التوريد والتركيب",
  ];

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((review) => review.service === filter);

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#F7F6F4] mb-4">
            آراء عملائنا
          </h2>
          <p className="text-[#CBC1B8] text-lg max-w-2xl mx-auto">
            اكتشف تجارب عملائنا السابقين ورضاهم عن خدماتنا المتميزة
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setFilter(service)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                filter === service
                  ? "bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21] shadow-lg"
                  : "bg-[#1C474A]/40 text-[#CBC1B8] border-2 border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
              }`}
            >
              {service === "all" ? "جميع التقييمات" : service}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm rounded-2xl p-6 shadow-card-glow hover:shadow-card-glow-hover transition-all duration-500 transform hover:-translate-y-2 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#CBC1B8]"
                  />
                  <div>
                    <h3 className="font-bold text-[#F7F6F4] text-lg">
                      {review.name}
                    </h3>
                    <p className="text-[#CBC1B8]/70 text-sm">{review.date}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`${
                      index < review.rating
                        ? "ri-star-fill text-[#CBC1B8]"
                        : "ri-star-line text-[#CBC1B8]/30"
                    } text-lg`}
                  ></i>
                ))}
              </div>

              <div className="mb-4">
                <span className="inline-block bg-[#CBC1B8]/20 text-[#CBC1B8] px-4 py-1 rounded-full text-sm font-semibold border border-[#CBC1B8]/30">
                  {review.service}
                </span>
              </div>

              <p className="text-[#CBC1B8]/90 leading-relaxed mb-4">
                {review.comment}
              </p>

              <div className="pt-4 border-t border-[#CBC1B8]/20">
                <div className="flex items-center space-x-2 space-x-reverse text-[#CBC1B8]">
                  <i className="ri-building-line text-[#CBC1B8]"></i>
                  <span className="text-sm font-medium">{review.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

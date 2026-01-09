export default function ReviewsStats() {
  const stats = [
    {
      icon: "ri-star-fill",
      value: "4.9",
      label: "التقييم العام",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
    },
    {
      icon: "ri-user-star-fill",
      value: "850+",
      label: "عميل راضٍ",
      color: "from-[#1C474A] to-[#0A2F33]",
    },
    {
      icon: "ri-chat-smile-3-fill",
      value: "720+",
      label: "تقييم إيجابي",
      color: "from-[#CBC1B8] to-[#F7F6F4]",
    },
    {
      icon: "ri-trophy-fill",
      value: "98%",
      label: "نسبة الرضا",
      color: "from-[#1C474A] to-[#0A2F33]",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#0A2F33] to-[#0A1F21]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1C474A]/40 to-[#0A1F21]/40 backdrop-blur-sm rounded-2xl p-8 shadow-card-glow hover:shadow-card-glow-hover transition-all duration-500 transform hover:-translate-y-2 border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <i className={`${stat.icon} text-[#0A1F21] text-3xl`}></i>
              </div>
              <h3 className="text-4xl font-bold text-[#F7F6F4] text-center mb-2">
                {stat.value}
              </h3>
              <p className="text-[#CBC1B8] text-center font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

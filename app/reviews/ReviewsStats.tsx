export default function ReviewsStats() {
  const stats = [
    {
      icon: 'ri-star-fill',
      value: '4.9',
      label: 'التقييم العام',
      color: 'from-[#FFA500] to-[#ff8c00]'
    },
    {
      icon: 'ri-user-star-fill',
      value: '850+',
      label: 'عميل راضٍ',
      color: 'from-[#001F3F] to-[#003366]'
    },
    {
      icon: 'ri-chat-smile-3-fill',
      value: '720+',
      label: 'تقييم إيجابي',
      color: 'from-[#FFA500] to-[#ff8c00]'
    },
    {
      icon: 'ri-trophy-fill',
      value: '98%',
      label: 'نسبة الرضا',
      color: 'from-[#001F3F] to-[#003366]'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                <i className={`${stat.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-4xl font-bold text-[#001F3F] text-center mb-2">{stat.value}</h3>
              <p className="text-gray-600 text-center font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

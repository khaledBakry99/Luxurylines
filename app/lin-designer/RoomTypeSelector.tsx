'use client';

import { useDesignerStore } from '@/lib/designerStore';

const roomTypes = [
  {
    id: 'bedroom',
    name: 'غرفة نوم',
    icon: 'ri-hotel-bed-line',
    description: 'صمم غرفة نوم مريحة وأنيقة',
    color: 'from-purple-500 to-purple-600',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20bedroom%20interior%20design%20with%20elegant%20furniture%20soft%20lighting%20and%20minimalist%20decor%20clean%20white%20background%20professional%20photography%20high%20quality&width=400&height=300&seq=bedroom001&orientation=landscape',
  },
  {
    id: 'living',
    name: 'صالة معيشة',
    icon: 'ri-sofa-line',
    description: 'صمم صالة عصرية للاسترخاء والترفيه',
    color: 'from-blue-500 to-blue-600',
    image: 'https://readdy.ai/api/search-image?query=modern%20living%20room%20interior%20design%20with%20comfortable%20sofa%20coffee%20table%20and%20contemporary%20decor%20bright%20natural%20lighting%20clean%20background%20professional%20photography&width=400&height=300&seq=living001&orientation=landscape',
  },
  {
    id: 'kitchen',
    name: 'مطبخ',
    icon: 'ri-restaurant-line',
    description: 'صمم مطبخ عملي وأنيق',
    color: 'from-orange-500 to-orange-600',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20kitchen%20interior%20design%20with%20elegant%20cabinets%20marble%20countertops%20and%20professional%20appliances%20clean%20bright%20lighting%20high%20quality%20photography&width=400&height=300&seq=kitchen001&orientation=landscape',
  },
  {
    id: 'bathroom',
    name: 'حمام',
    icon: 'ri-drop-line',
    description: 'صمم حمام فاخر ومريح',
    color: 'from-teal-500 to-teal-600',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20bathroom%20interior%20design%20with%20elegant%20fixtures%20marble%20tiles%20and%20spa%20like%20atmosphere%20clean%20bright%20lighting%20professional%20photography%20high%20quality&width=400&height=300&seq=bathroom001&orientation=landscape',
  },
  {
    id: 'office',
    name: 'مكتب',
    icon: 'ri-briefcase-line',
    description: 'صمم مكتب منزلي احترافي',
    color: 'from-gray-600 to-gray-700',
    image: 'https://readdy.ai/api/search-image?query=modern%20home%20office%20interior%20design%20with%20elegant%20desk%20comfortable%20chair%20and%20professional%20setup%20clean%20organized%20space%20natural%20lighting%20high%20quality%20photography&width=400&height=300&seq=office001&orientation=landscape',
  },
  {
    id: 'dining',
    name: 'غرفة طعام',
    icon: 'ri-restaurant-2-line',
    description: 'صمم غرفة طعام أنيقة للعائلة',
    color: 'from-red-500 to-red-600',
    image: 'https://readdy.ai/api/search-image?query=modern%20elegant%20dining%20room%20interior%20design%20with%20beautiful%20dining%20table%20comfortable%20chairs%20and%20sophisticated%20decor%20warm%20lighting%20professional%20photography%20high%20quality&width=400&height=300&seq=dining001&orientation=landscape',
  },
];

export default function RoomTypeSelector() {
  const { setSelectedRoomType, setRoomDimensions, setWallColor, setFloorColor, setCeilingColor, setFloorType } = useDesignerStore();

  const handleSelectRoom = (type: string) => {
    switch (type) {
      case 'bedroom':
        setRoomDimensions({ width: 5, height: 3, depth: 4.5 });
        setWallColor('#f5f0e8');
        setFloorColor('#d4a574');
        setCeilingColor('#ffffff');
        setFloorType('wood');
        break;
      case 'living':
        setRoomDimensions({ width: 7, height: 3.2, depth: 6 });
        setWallColor('#f8f8f8');
        setFloorColor('#c9b8a0');
        setCeilingColor('#ffffff');
        setFloorType('wood');
        break;
      case 'kitchen':
        setRoomDimensions({ width: 4.5, height: 3, depth: 4 });
        setWallColor('#ffffff');
        setFloorColor('#e8e8e8');
        setCeilingColor('#ffffff');
        setFloorType('ceramic');
        break;
      case 'bathroom':
        setRoomDimensions({ width: 3, height: 3, depth: 3.5 });
        setWallColor('#f0f8ff');
        setFloorColor('#d0d0d0');
        setCeilingColor('#ffffff');
        setFloorType('marble');
        break;
      case 'office':
        setRoomDimensions({ width: 4, height: 3, depth: 4 });
        setWallColor('#f5f5f5');
        setFloorColor('#8b7355');
        setCeilingColor('#ffffff');
        setFloorType('wood');
        break;
      case 'dining':
        setRoomDimensions({ width: 5, height: 3, depth: 4.5 });
        setWallColor('#faf8f5');
        setFloorColor('#c9b8a0');
        setCeilingColor('#ffffff');
        setFloorType('wood');
        break;
    }
    setSelectedRoomType(type);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-2xl flex items-center justify-center shadow-2xl">
              <i className="ri-home-smile-line text-4xl text-white"></i>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            اختر نوع الغرفة
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ابدأ رحلتك في التصميم باختيار نوع الغرفة التي تريد تصميمها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              onClick={() => handleSelectRoom(room.id)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${room.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <i className={`${room.icon} text-6xl text-white mb-3`}></i>
                      <p className="text-white font-semibold text-lg">انقر للبدء</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${room.color} rounded-xl flex items-center justify-center ml-4 shadow-lg`}>
                      <i className={`${room.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{room.description}</p>
                  
                  <div className="mt-4 flex items-center text-[#ff6b35] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>ابدأ التصميم</span>
                    <i className="ri-arrow-left-line mr-2"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            <i className="ri-lightbulb-line ml-2"></i>
            يمكنك تغيير الأبعاد والألوان لاحقاً من لوحة التحكم
          </p>
        </div>
      </div>
    </div>
  );
}

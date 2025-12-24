'use client';

import { useState } from 'react';
import { useDesignerStore } from '@/lib/designerStore';
import { furnitureCategories, floorTextures } from '@/lib/furnitureData';
import { HexColorPicker } from 'react-colorful';

type TabType = 'furniture' | 'colors' | 'dimensions' | 'cost';

export default function ControlPanel() {
  const [activeTab, setActiveTab] = useState<TabType>('furniture');
  const [selectedCategory, setSelectedCategory] = useState(furnitureCategories[0].id);
  const [showWallPicker, setShowWallPicker] = useState(false);
  const [showFloorPicker, setShowFloorPicker] = useState(false);
  const [showCeilingPicker, setShowCeilingPicker] = useState(false);

  const {
    roomDimensions,
    wallColor,
    floorColor,
    ceilingColor,
    furnitureItems,
    selectedItemId,
    setRoomDimensions,
    setWallColor,
    setFloorColor,
    setCeilingColor,
    setFloorType,
    addFurnitureItem,
    removeFurnitureItem,
    clearAllFurniture,
  } = useDesignerStore();

  const tabs = [
    { id: 'furniture' as TabType, name: 'الأثاث', icon: 'ri-home-4-line' },
    { id: 'colors' as TabType, name: 'الألوان', icon: 'ri-palette-line' },
    { id: 'dimensions' as TabType, name: 'الأبعاد', icon: 'ri-ruler-line' },
    { id: 'cost' as TabType, name: 'التكلفة', icon: 'ri-money-dollar-circle-line' },
  ];

  const handleAddFurniture = (template: any) => {
    addFurnitureItem({
      name: template.name,
      type: template.type,
      price: template.price,
      position: [0, 0.5, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: template.color || '#8B4513',
      image: template.thumbnail,
    });
  };

  const selectedCategoryData = furnitureCategories.find(cat => cat.id === selectedCategory);

  const totalCost = furnitureItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-96 h-full bg-white border-l border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
        <h2 className="text-2xl font-bold text-gray-900">لوحة التحكم</h2>
        <p className="text-sm text-gray-600 mt-1">صمم غرفتك بالطريقة التي تحبها</p>
      </div>

      <div className="flex border-b border-gray-200 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-[#ff6b35] border-b-2 border-[#ff6b35]'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <i className={`${tab.icon} text-lg`}></i>
            <div className="text-xs mt-1">{tab.name}</div>
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'furniture' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-700">
                <i className="ri-information-line text-blue-600 ml-2"></i>
                <strong>نصيحة:</strong> اضغط على "إضافة للغرفة" لإسقاط القطعة، ثم اضغط عليها لتحديدها وتحريكها أو تدويرها
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              {furnitureCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-[#ff6b35] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <i className={`${category.icon} ml-2`}></i>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {selectedCategoryData?.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200 hover:border-[#ff6b35] hover:shadow-lg transition-all"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-lg mb-3 shadow-md"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-[#ff6b35] font-bold text-lg">{item.price.toLocaleString()} ر.س</p>
                  <button 
                    onClick={() => handleAddFurniture(item)}
                    className="w-full mt-3 bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white py-2.5 rounded-lg hover:shadow-lg transition-all whitespace-nowrap font-semibold"
                  >
                    <i className="ri-add-circle-line ml-2 text-lg"></i>
                    إضافة للغرفة
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'colors' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">لون الجدران</label>
              <div className="flex items-center gap-3">
                <div
                  className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-[#ff6b35] transition-all shadow-md"
                  style={{ backgroundColor: wallColor }}
                  onClick={() => setShowWallPicker(!showWallPicker)}
                ></div>
                <input
                  type="text"
                  value={wallColor}
                  onChange={(e) => setWallColor(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35]"
                />
              </div>
              {showWallPicker && (
                <div className="mt-3">
                  <HexColorPicker color={wallColor} onChange={setWallColor} />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">لون الأرضية</label>
              <div className="flex items-center gap-3">
                <div
                  className="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer hover:border-[#ff6b35] transition-all shadow-md"
                  style={{ backgroundColor: floorColor }}
                  onClick={() => setShowFloorPicker(!showFloorPicker)}
                ></div>
                <input
                  type="text"
                  value={floorColor}
                  onChange={(e) => setFloorColor(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35]"
                />
              </div>
              {showFloorPicker && (
                <div className="mt-3">
                  <HexColorPicker color={floorColor} onChange={setFloorColor} />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">نوع الأرضية</label>
              <div className="grid grid-cols-2 gap-3">
                {floorTextures.map((texture) => (
                  <div
                    key={texture.id}
                    onClick={() => {
                      setFloorType(texture.id);
                      setFloorColor(texture.color);
                    }}
                    className="cursor-pointer rounded-lg overflow-hidden border-2 border-gray-300 hover:border-[#ff6b35] hover:shadow-lg transition-all"
                  >
                    <img src={texture.thumbnail} alt={texture.name} className="w-full h-24 object-cover" />
                    <div className="p-2 bg-white">
                      <p className="text-xs font-medium text-gray-900 text-center">{texture.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dimensions' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">العرض (متر)</label>
              <input
                type="number"
                value={roomDimensions.width}
                onChange={(e) => setRoomDimensions({ ...roomDimensions, width: parseFloat(e.target.value) || 6 })}
                min="3"
                max="15"
                step="0.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">الارتفاع (متر)</label>
              <input
                type="number"
                value={roomDimensions.height}
                onChange={(e) => setRoomDimensions({ ...roomDimensions, height: parseFloat(e.target.value) || 3 })}
                min="2.5"
                max="5"
                step="0.1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">العمق (متر)</label>
              <input
                type="number"
                value={roomDimensions.depth}
                onChange={(e) => setRoomDimensions({ ...roomDimensions, depth: parseFloat(e.target.value) || 5 })}
                min="3"
                max="15"
                step="0.5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff6b35]"
              />
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                <i className="ri-information-line text-[#ff6b35] ml-2"></i>
                معلومات الغرفة
              </h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p>المساحة: {(roomDimensions.width * roomDimensions.depth).toFixed(2)} م²</p>
                <p>الحجم: {(roomDimensions.width * roomDimensions.height * roomDimensions.depth).toFixed(2)} م³</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
              <p className="text-sm opacity-90 mb-2">التكلفة الإجمالية</p>
              <p className="text-4xl font-bold">{totalCost.toLocaleString()} ر.س</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">قائمة الأثاث ({furnitureItems.length})</h3>
              <div className="space-y-2">
                {furnitureItems.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <i className="ri-inbox-line text-4xl mb-2"></i>
                    <p>لم تقم بإضافة أي أثاث بعد</p>
                  </div>
                ) : (
                  furnitureItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        selectedItemId === item.id
                          ? 'bg-orange-50 border-[#ff6b35] shadow-md'
                          : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-[#ff6b35] font-semibold">{item.price.toLocaleString()} ر.س</p>
                      </div>
                      <button
                        onClick={() => removeFurnitureItem(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {furnitureItems.length > 0 && (
              <button
                onClick={clearAllFurniture}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-all font-semibold whitespace-nowrap"
              >
                <i className="ri-delete-bin-line ml-2"></i>
                مسح جميع العناصر
              </button>
            )}
          </div>
        )}
      </div>

      <div className="p-6 border-t border-gray-200 bg-gray-50">
        <button className="w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white py-4 rounded-xl hover:shadow-lg transition-all font-bold text-lg whitespace-nowrap">
          <i className="ri-save-line ml-2"></i>
          حفظ التصميم
        </button>
        <p className="text-xs text-gray-500 text-center mt-3">
          <i className="ri-lightbulb-line ml-1"></i>
          اضغط على القطعة مرة لتحديدها، مرتين للحذف
        </p>
      </div>
    </div>
  );
}

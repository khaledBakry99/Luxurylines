
'use client';

import type { DesignData as BaseDesignData } from './DesignControls';

type RoomData = {
  length: number;
  width: number;
  height: number;
};

type FloorType = 'ceramic' | 'wood' | 'marble' | 'carpet' | string;

type WallpaperType = 'none' | 'floral' | 'geometric' | 'stripes' | string;

// امتداد لـ DesignControls.DesignData مع حقل ورق جدران اختياري لجزء العرض فقط
type DesignData = BaseDesignData & {
  wallpaper?: WallpaperType;
};

type SavedDesign = {
  id: number;
  name: string;
  createdAt: string;
  roomData: RoomData;
  designData: DesignData;
  thumbnail: string;
};

type SavedDesignsProps = {
  savedDesigns: SavedDesign[];
  onLoadDesign: (design: SavedDesign) => void;
};

export default function SavedDesigns({ savedDesigns, onLoadDesign }: SavedDesignsProps) {
  const getFloorTypeName = (type: FloorType): string => {
    switch (type) {
      case 'ceramic': return 'سيراميك';
      case 'wood': return 'خشب';
      case 'marble': return 'رخام';
      case 'carpet': return 'موكيت';
      default: return type;
    }
  };

  const getWallpaperName = (type: WallpaperType): string => {
    switch (type) {
      case 'none': return 'بدون';
      case 'floral': return 'نقوش زهرية';
      case 'geometric': return 'أشكال هندسية';
      case 'stripes': return 'خطوط';
      default: return type;
    }
  };

  if (savedDesigns.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center py-12">
          <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-6">
            <i className="ri-folder-open-line text-4xl text-gray-400"></i>
          </div>
          <h3 className="text-xl font-['Cairo'] font-semibold text-[#001F3F] mb-4">
            لا توجد تصاميم محفوظة
          </h3>
          <p className="text-gray-600 mb-6">
            ابدأ بإنشاء تصميم جديد وحفظه لتتمكن من الوصول إليه لاحقاً
          </p>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 max-w-md mx-auto">
            <div className="flex items-start space-x-3 space-x-reverse">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-lightbulb-line text-blue-600"></i>
              </div>
              <div className="text-right">
                <h4 className="font-['Cairo'] font-semibold text-blue-800 mb-2">
                  كيفية حفظ التصميم
                </h4>
                <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
                  <li>أدخل أبعاد الغرفة</li>
                  <li>اختر الألوان والمواد</li>
                  <li>اضغط على &quot;حفظ التصميم&quot;</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-['Cairo'] font-bold text-[#001F3F] mb-6">
        التصاميم المحفوظة ({savedDesigns.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedDesigns.map((design) => (
          <div key={design.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Cairo'] font-semibold text-[#001F3F]">
                {design.name}
              </h3>
              <span className="text-sm text-gray-500">{design.createdAt}</span>
            </div>

            {/* Room Preview */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="relative" style={{ perspective: '500px' }}>
                <div 
                  className="relative mx-auto"
                  style={{
                    width: '120px',
                    height: '80px',
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(-10deg) rotateY(-20deg)'
                  }}
                >
                  {/* Floor */}
                  <div
                    className="absolute bottom-0 left-0 border border-gray-300"
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f0f0f0',
                      transform: 'rotateX(90deg)',
                      transformOrigin: 'bottom'
                    }}
                  />
                  
                  {/* Back Wall */}
                  <div
                    className="absolute top-0 left-0 border border-gray-300"
                    style={{
                      width: '100%',
                      height: '60px',
                      backgroundColor: design.designData.wallColor,
                      transform: 'translateZ(-40px)'
                    }}
                  />
                  
                  {/* Left Wall */}
                  <div
                    className="absolute top-0 left-0 border border-gray-300"
                    style={{
                      width: '40px',
                      height: '60px',
                      backgroundColor: design.designData.wallColor,
                      transform: 'rotateY(90deg)',
                      transformOrigin: 'left'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Design Details */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">الأبعاد:</span>
                <span className="font-semibold">
                  {design.roomData.length}×{design.roomData.width}×{design.roomData.height}م
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">المساحة:</span>
                <span className="font-semibold text-[#FFA500]">
                  {(design.roomData.length * design.roomData.width).toFixed(1)} م²
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">لون الجدران:</span>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: design.designData.wallColor }}
                  ></div>
                  <span className="text-xs">{design.designData.wallColor}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">الأرضية:</span>
                <span className="font-semibold">
                  {getFloorTypeName(design.designData.floorType)}
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">ورق الجدران:</span>
                <span className="font-semibold">
                  {getWallpaperName(design.designData.wallpaper ?? 'none')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2 space-x-reverse">
              <button
                onClick={() => onLoadDesign(design)}
                className="flex-1 bg-[#FFA500] text-white px-4 py-2 rounded-lg font-['Cairo'] font-semibold hover:bg-[#e6940a] transition-colors text-sm whitespace-nowrap cursor-pointer"
              >
                تحميل التصميم
              </button>
              <button
                onClick={() => {
                  if (confirm('هل أنت متأكد من حذف هذا التصميم؟')) {
                    alert('سيتم إضافة وظيفة الحذف قريباً');
                  }
                }}
                className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <div className="flex items-start space-x-3 space-x-reverse">
          <div className="w-6 h-6 flex items-center justify-center">
            <i className="ri-information-line text-blue-600"></i>
          </div>
          <div>
            <h4 className="font-['Cairo'] font-semibold text-[#001F3F] mb-2">
              إدارة التصاميم المحفوظة
            </h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• يمكنك حفظ عدد غير محدود من التصاميم</li>
              <li>• اضغط على &quot;تحميل التصميم&quot; لاستكمال العمل عليه</li>
              <li>• التصاميم محفوظة محلياً في متصفحك</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

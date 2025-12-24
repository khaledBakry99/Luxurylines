'use client';

import { useState } from 'react';

interface ModelUploaderProps {
  onModelAdd: (model: any) => void;
}

export default function ModelUploader({ onModelAdd }: ModelUploaderProps) {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedModels, setUploadedModels] = useState([]);

  const sampleModels = [
    {
      id: 'sample-sofa-1',
      name: 'كنبة حديثة',
      type: 'sofa',
      source: 'Sketchfab',
      url: 'https://sketchfab.com/3d-models/modern-sofa',
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20gray%20fabric%20sofa%203d%20model%20realistic%20furniture%20piece%20minimalist%20design%20comfortable%20seating%20elegant%20contemporary%20style&width=200&height=150&seq=model-sofa-1&orientation=landscape',
      width: 180,
      height: 80,
      depth: 90,
      color: '#6B7280'
    },
    {
      id: 'sample-chair-1',
      name: 'كرسي مكتب',
      type: 'chair',
      source: 'Sketchfab',
      url: 'https://sketchfab.com/3d-models/office-chair',
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20office%20chair%203d%20model%20realistic%20ergonomic%20furniture%20piece%20black%20leather%20elegant%20contemporary%20style&width=200&height=150&seq=model-chair-1&orientation=landscape',
      width: 60,
      height: 95,
      depth: 60,
      color: '#2D3748'
    },
    {
      id: 'sample-table-1',
      name: 'طاولة قهوة',
      type: 'table',
      source: 'Sketchfab',
      url: 'https://sketchfab.com/3d-models/coffee-table',
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20wooden%20coffee%20table%203d%20model%20realistic%20furniture%20piece%20natural%20wood%20finish%20elegant%20contemporary%20style&width=200&height=150&seq=model-table-1&orientation=landscape',
      width: 110,
      height: 45,
      depth: 60,
      color: '#8B4513'
    },
    {
      id: 'sample-shelf-1',
      name: 'رف كتب',
      type: 'shelf',
      source: 'Sketchfab',
      url: 'https://sketchfab.com/3d-models/bookshelf',
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20white%20bookshelf%203d%20model%20realistic%20tall%20storage%20unit%20furniture%20piece%20elegant%20contemporary%20style&width=200&height=150&seq=model-shelf-1&orientation=landscape',
      width: 120,
      height: 160,
      depth: 35,
      color: '#FFFFFF'
    },
    {
      id: 'sample-plant-1',
      name: 'نبتة داخلية',
      type: 'plant',
      source: 'Sketchfab',
      url: 'https://sketchfab.com/3d-models/indoor-plant',
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20indoor%20potted%20plant%203d%20model%20realistic%20green%20leaves%20white%20ceramic%20pot%20elegant%20contemporary%20style&width=200&height=150&seq=model-plant-1&orientation=landscape',
      width: 35,
      height: 70,
      depth: 35,
      color: '#22543D'
    },
    {
      id: 'sample-lamp-1',
      name: 'مصباح أرضي',
      type: 'lamp',
      source: 'Sketchfab',
      url: 'https://sketchfab.com/3d-models/floor-lamp',
      thumbnail: 'https://readdy.ai/api/search-image?query=modern%20floor%20lamp%203d%20model%20realistic%20standing%20light%20fixture%20metal%20stand%20fabric%20shade%20elegant%20contemporary%20style&width=200&height=150&seq=model-lamp-1&orientation=landscape',
      width: 25,
      height: 140,
      depth: 25,
      color: '#F6E05E'
    }
  ];

  const handleAddModel = (model: any) => {
    const newFurniture = {
      id: `${model.id}-${Date.now()}`,
      name: model.name,
      type: model.type,
      icon: `ri-${model.type === 'sofa' ? 'sofa' : model.type === 'chair' ? 'armchair' : model.type === 'table' ? 'table' : model.type === 'shelf' ? 'bookshelf' : model.type === 'plant' ? 'plant' : 'lightbulb'}-line`,
      color: model.color,
      width: model.width,
      height: model.height,
      depth: model.depth,
      x: 300,
      y: 300,
      z: 0,
      rotation: 0,
      modelUrl: model.url
    };
    
    onModelAdd(newFurniture);
    setShowUploadModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowUploadModal(true)}
        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 rounded-lg font-['Cairo'] font-semibold hover:from-purple-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
      >
        <i className="ri-upload-cloud-line text-xl"></i>
        إضافة مجسمات خاصة
      </button>

      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 flex items-center justify-between">
              <h3 className="text-2xl font-['Cairo'] font-bold text-white flex items-center gap-2">
                <i className="ri-3d-view-line"></i>
                مكتبة المجسمات ثلاثية الأبعاد
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg transition-all cursor-pointer"
              >
                <i className="ri-close-line text-white text-2xl"></i>
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="font-['Cairo'] font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <i className="ri-information-line"></i>
                  كيفية إضافة مجسماتك الخاصة:
                </h4>
                <div className="space-y-2 text-sm text-blue-800 font-['Cairo']">
                  <p><strong>1. مواقع تحميل المجسمات المجانية:</strong></p>
                  <ul className="mr-6 space-y-1">
                    <li>• <a href="https://sketchfab.com" target="_blank" className="text-blue-600 hover:underline">Sketchfab.com</a> - آلاف المجسمات المجانية</li>
                    <li>• <a href="https://free3d.com" target="_blank" className="text-blue-600 hover:underline">Free3D.com</a> - مجسمات مجانية متنوعة</li>
                    <li>• <a href="https://cgtrader.com/free-3d-models" target="_blank" className="text-blue-600 hover:underline">CGTrader.com</a> - مجسمات احترافية</li>
                    <li>• <a href="https://polyhaven.com" target="_blank" className="text-blue-600 hover:underline">PolyHaven.com</a> - مجسمات عالية الجودة</li>
                  </ul>
                  
                  <p className="mt-3"><strong>2. أنواع الملفات المدعومة:</strong></p>
                  <ul className="mr-6 space-y-1">
                    <li>• <strong>GLB/GLTF</strong> - الأفضل للويب (موصى به) ⭐⭐⭐⭐⭐</li>
                    <li>• <strong>FBX</strong> - شائع في برامج التصميم ⭐⭐⭐⭐</li>
                    <li>• <strong>OBJ</strong> - بسيط وسهل الاستخدام ⭐⭐⭐</li>
                  </ul>

                  <p className="mt-3"><strong>3. كيفية الرفع:</strong></p>
                  <ul className="mr-6 space-y-1">
                    <li>• حمّل المجسم بصيغة GLB من أحد المواقع أعلاه</li>
                    <li>• ضع الملف في مجلد: <code className="bg-blue-100 px-2 py-1 rounded">public/models/</code></li>
                    <li>• استخدم الأزرار أدناه لإضافة المجسم للغرفة</li>
                  </ul>
                </div>
              </div>

              <h4 className="font-['Cairo'] font-bold text-gray-800 mb-4 text-lg">مجسمات جاهزة للاستخدام:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleModels.map((model) => (
                  <div
                    key={model.id}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-purple-500 transition-all hover:shadow-lg group"
                  >
                    <div className="relative h-40 bg-gray-100 overflow-hidden">
                      <img
                        src={model.thumbnail}
                        alt={model.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded text-xs font-['Cairo']">
                        {model.source}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h5 className="font-['Cairo'] font-bold text-gray-800 mb-2">{model.name}</h5>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                        <span>{model.width}×{model.depth}×{model.height} سم</span>
                      </div>
                      
                      <button
                        onClick={() => handleAddModel(model)}
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg font-['Cairo'] font-semibold hover:from-purple-600 hover:to-purple-700 transition-all whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-add-line ml-1"></i>
                        إضافة للغرفة
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800 font-['Cairo']">
                  <i className="ri-lightbulb-line ml-1"></i>
                  <strong>نصيحة:</strong> للحصول على أفضل أداء، استخدم ملفات GLB بحجم أقل من 5 ميجابايت. يمكنك تحسين المجسمات باستخدام أدوات مثل <a href="https://gltf.report" target="_blank" className="text-yellow-900 hover:underline font-bold">gltf.report</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

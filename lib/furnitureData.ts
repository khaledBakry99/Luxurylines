export interface FurnitureCategory {
  id: string;
  name: string;
  icon: string;
  items: FurnitureTemplate[];
}

export interface FurnitureTemplate {
  id: string;
  name: string;
  type: string;
  modelPath: string;
  price: number;
  thumbnail: string;
  defaultScale: [number, number, number];
}

export const furnitureCategories: FurnitureCategory[] = [
  {
    id: 'beds',
    name: 'أسرّة',
    icon: 'ri-hotel-bed-line',
    items: [
      {
        id: 'bed-1',
        name: 'سرير مزدوج فاخر',
        type: 'bed',
        modelPath: '/models/bed-luxury.glb',
        price: 3500,
        thumbnail: 'https://readdy.ai/api/search-image?query=luxury%20modern%20double%20bed%20with%20elegant%20headboard%20white%20bedding%20minimalist%20bedroom%20furniture%20clean%20simple%20background%20product%20photography&width=300&height=200&seq=bed1&orientation=landscape',
        defaultScale: [1, 1, 1],
      },
      {
        id: 'bed-2',
        name: 'سرير مفرد عصري',
        type: 'bed',
        modelPath: '/models/bed-single.glb',
        price: 2200,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20single%20bed%20contemporary%20design%20wooden%20frame%20simple%20clean%20background%20bedroom%20furniture%20product%20shot&width=300&height=200&seq=bed2&orientation=landscape',
        defaultScale: [0.8, 0.8, 0.8],
      },
      {
        id: 'bed-3',
        name: 'سرير كلاسيكي',
        type: 'bed',
        modelPath: '/models/bed-classic.glb',
        price: 4200,
        thumbnail: 'https://readdy.ai/api/search-image?query=classic%20elegant%20bed%20traditional%20design%20carved%20wooden%20headboard%20luxury%20bedding%20simple%20white%20background%20furniture%20photography&width=300&height=200&seq=bed3&orientation=landscape',
        defaultScale: [1, 1, 1],
      },
    ],
  },
  {
    id: 'chairs',
    name: 'كراسي',
    icon: 'ri-armchair-line',
    items: [
      {
        id: 'chair-1',
        name: 'كرسي استرخاء',
        type: 'chair',
        modelPath: '/models/chair-lounge.glb',
        price: 1800,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20lounge%20chair%20comfortable%20armchair%20contemporary%20design%20fabric%20upholstery%20clean%20white%20background%20furniture%20product%20photography&width=300&height=200&seq=chair1&orientation=landscape',
        defaultScale: [0.6, 0.6, 0.6],
      },
      {
        id: 'chair-2',
        name: 'كرسي طعام',
        type: 'chair',
        modelPath: '/models/chair-dining.glb',
        price: 850,
        thumbnail: 'https://readdy.ai/api/search-image?query=elegant%20dining%20chair%20modern%20design%20wooden%20legs%20cushioned%20seat%20simple%20background%20furniture%20product%20shot&width=300&height=200&seq=chair2&orientation=landscape',
        defaultScale: [0.5, 0.5, 0.5],
      },
      {
        id: 'chair-3',
        name: 'كرسي مكتب',
        type: 'chair',
        modelPath: '/models/chair-office.glb',
        price: 1200,
        thumbnail: 'https://readdy.ai/api/search-image?query=ergonomic%20office%20chair%20modern%20design%20adjustable%20height%20black%20leather%20clean%20background%20workspace%20furniture&width=300&height=200&seq=chair3&orientation=landscape',
        defaultScale: [0.6, 0.6, 0.6],
      },
    ],
  },
  {
    id: 'tables',
    name: 'طاولات',
    icon: 'ri-table-line',
    items: [
      {
        id: 'table-1',
        name: 'طاولة طعام',
        type: 'table',
        modelPath: '/models/table-dining.glb',
        price: 2800,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20dining%20table%20rectangular%20wooden%20top%20metal%20legs%20contemporary%20design%20clean%20white%20background%20furniture%20photography&width=300&height=200&seq=table1&orientation=landscape',
        defaultScale: [1, 1, 1],
      },
      {
        id: 'table-2',
        name: 'طاولة قهوة',
        type: 'table',
        modelPath: '/models/table-coffee.glb',
        price: 1500,
        thumbnail: 'https://readdy.ai/api/search-image?query=stylish%20coffee%20table%20modern%20design%20glass%20top%20wooden%20base%20living%20room%20furniture%20simple%20background%20product%20shot&width=300&height=200&seq=table2&orientation=landscape',
        defaultScale: [0.8, 0.8, 0.8],
      },
      {
        id: 'table-3',
        name: 'طاولة جانبية',
        type: 'table',
        modelPath: '/models/table-side.glb',
        price: 950,
        thumbnail: 'https://readdy.ai/api/search-image?query=elegant%20side%20table%20small%20accent%20table%20modern%20design%20wooden%20finish%20clean%20background%20bedroom%20furniture%20product%20photography&width=300&height=200&seq=table3&orientation=landscape',
        defaultScale: [0.5, 0.5, 0.5],
      },
    ],
  },
  {
    id: 'storage',
    name: 'خزائن',
    icon: 'ri-archive-drawer-line',
    items: [
      {
        id: 'wardrobe-1',
        name: 'خزانة ملابس كبيرة',
        type: 'wardrobe',
        modelPath: '/models/wardrobe-large.glb',
        price: 5500,
        thumbnail: 'https://readdy.ai/api/search-image?query=large%20modern%20wardrobe%20sliding%20doors%20contemporary%20design%20white%20finish%20bedroom%20storage%20furniture%20clean%20background%20product%20photography&width=300&height=200&seq=wardrobe1&orientation=landscape',
        defaultScale: [1.2, 1.2, 1.2],
      },
      {
        id: 'dresser-1',
        name: 'خزانة أدراج',
        type: 'dresser',
        modelPath: '/models/dresser.glb',
        price: 2400,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20dresser%20chest%20of%20drawers%20wooden%20finish%20metal%20handles%20contemporary%20bedroom%20furniture%20simple%20white%20background&width=300&height=200&seq=dresser1&orientation=landscape',
        defaultScale: [0.9, 0.9, 0.9],
      },
      {
        id: 'shelf-1',
        name: 'رف كتب',
        type: 'shelf',
        modelPath: '/models/bookshelf.glb',
        price: 1800,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20bookshelf%20open%20shelving%20unit%20wooden%20design%20contemporary%20style%20clean%20background%20living%20room%20furniture%20product%20shot&width=300&height=200&seq=shelf1&orientation=landscape',
        defaultScale: [1, 1, 1],
      },
    ],
  },
  {
    id: 'kitchen',
    name: 'مطبخ',
    icon: 'ri-fridge-line',
    items: [
      {
        id: 'cabinet-1',
        name: 'خزانة مطبخ علوية',
        type: 'cabinet',
        modelPath: '/models/kitchen-cabinet-upper.glb',
        price: 3200,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20kitchen%20upper%20cabinet%20white%20finish%20glass%20doors%20contemporary%20design%20clean%20background%20kitchen%20furniture%20product%20photography&width=300&height=200&seq=cabinet1&orientation=landscape',
        defaultScale: [1, 1, 1],
      },
      {
        id: 'cabinet-2',
        name: 'خزانة مطبخ سفلية',
        type: 'cabinet',
        modelPath: '/models/kitchen-cabinet-lower.glb',
        price: 2800,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20kitchen%20base%20cabinet%20drawers%20and%20doors%20contemporary%20design%20white%20finish%20simple%20background%20kitchen%20furniture&width=300&height=200&seq=cabinet2&orientation=landscape',
        defaultScale: [1, 1, 1],
      },
      {
        id: 'island-1',
        name: 'جزيرة مطبخ',
        type: 'island',
        modelPath: '/models/kitchen-island.glb',
        price: 6500,
        thumbnail: 'https://readdy.ai/api/search-image?query=luxury%20kitchen%20island%20marble%20countertop%20storage%20cabinets%20modern%20design%20clean%20white%20background%20kitchen%20furniture%20product%20shot&width=300&height=200&seq=island1&orientation=landscape',
        defaultScale: [1.2, 1.2, 1.2],
      },
    ],
  },
  {
    id: 'decor',
    name: 'ديكور',
    icon: 'ri-plant-line',
    items: [
      {
        id: 'plant-1',
        name: 'نبات زينة كبير',
        type: 'plant',
        modelPath: '/models/plant-large.glb',
        price: 450,
        thumbnail: 'https://readdy.ai/api/search-image?query=large%20indoor%20plant%20potted%20green%20leaves%20modern%20ceramic%20pot%20home%20decor%20clean%20white%20background%20product%20photography&width=300&height=200&seq=plant1&orientation=landscape',
        defaultScale: [0.7, 0.7, 0.7],
      },
      {
        id: 'lamp-1',
        name: 'مصباح أرضي',
        type: 'lamp',
        modelPath: '/models/floor-lamp.glb',
        price: 850,
        thumbnail: 'https://readdy.ai/api/search-image?query=modern%20floor%20lamp%20contemporary%20design%20metal%20stand%20fabric%20shade%20elegant%20lighting%20simple%20background%20home%20decor&width=300&height=200&seq=lamp1&orientation=landscape',
        defaultScale: [0.8, 0.8, 0.8],
      },
      {
        id: 'rug-1',
        name: 'سجادة فاخرة',
        type: 'rug',
        modelPath: '/models/rug.glb',
        price: 1200,
        thumbnail: 'https://readdy.ai/api/search-image?query=luxury%20area%20rug%20modern%20pattern%20soft%20texture%20elegant%20design%20home%20decor%20clean%20white%20background%20product%20photography&width=300&height=200&seq=rug1&orientation=landscape',
        defaultScale: [1.5, 0.1, 1.5],
      },
    ],
  },
];

export const floorTextures = [
  {
    id: 'wood-oak',
    name: 'خشب بلوط',
    type: 'wood',
    color: '#d4a574',
    thumbnail: 'https://readdy.ai/api/search-image?query=oak%20wood%20floor%20texture%20natural%20grain%20pattern%20light%20brown%20color%20seamless%20flooring%20material%20clean%20background&width=200&height=200&seq=floor1&orientation=squarish',
  },
  {
    id: 'wood-walnut',
    name: 'خشب جوز',
    type: 'wood',
    color: '#8b6f47',
    thumbnail: 'https://readdy.ai/api/search-image?query=walnut%20wood%20floor%20texture%20rich%20brown%20color%20natural%20grain%20seamless%20pattern%20flooring%20material%20clean%20background&width=200&height=200&seq=floor2&orientation=squarish',
  },
  {
    id: 'tile-marble',
    name: 'رخام أبيض',
    type: 'tile',
    color: '#f0f0f0',
    thumbnail: 'https://readdy.ai/api/search-image?query=white%20marble%20tile%20floor%20texture%20elegant%20veining%20pattern%20luxury%20flooring%20material%20seamless%20clean%20background&width=200&height=200&seq=floor3&orientation=squarish',
  },
  {
    id: 'tile-ceramic',
    name: 'سيراميك رمادي',
    type: 'tile',
    color: '#c0c0c0',
    thumbnail: 'https://readdy.ai/api/search-image?query=gray%20ceramic%20tile%20floor%20texture%20modern%20design%20seamless%20pattern%20flooring%20material%20clean%20background&width=200&height=200&seq=floor4&orientation=squarish',
  },
  {
    id: 'concrete',
    name: 'خرسانة مصقولة',
    type: 'concrete',
    color: '#9e9e9e',
    thumbnail: 'https://readdy.ai/api/search-image?query=polished%20concrete%20floor%20texture%20industrial%20modern%20design%20smooth%20surface%20gray%20color%20seamless%20pattern&width=200&height=200&seq=floor5&orientation=squarish',
  },
  {
    id: 'carpet',
    name: 'موكيت بيج',
    type: 'carpet',
    color: '#e8d5b7',
    thumbnail: 'https://readdy.ai/api/search-image?query=beige%20carpet%20texture%20soft%20fabric%20pattern%20comfortable%20flooring%20material%20seamless%20clean%20background&width=200&height=200&seq=floor6&orientation=squarish',
  },
];

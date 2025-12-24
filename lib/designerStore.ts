import { create } from 'zustand';

export interface FurnitureItem {
  id: string;
  type: string;
  name: string;
  price: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  image: string;
}

interface DesignerStore {
  selectedRoomType: string | null;
  roomDimensions: { width: number; height: number; depth: number };
  wallColor: string;
  floorColor: string;
  ceilingColor: string;
  floorType: string;
  furnitureItems: FurnitureItem[];
  selectedItemId: string | null;
  cameraControlsEnabled: boolean;
  
  setSelectedRoomType: (type: string | null) => void;
  setRoomDimensions: (dimensions: { width: number; height: number; depth: number }) => void;
  setWallColor: (color: string) => void;
  setFloorColor: (color: string) => void;
  setCeilingColor: (color: string) => void;
  setFloorType: (type: string) => void;
  addFurnitureItem: (item: Omit<FurnitureItem, 'id'>) => void;
  updateFurnitureItem: (id: string, updates: Partial<FurnitureItem>) => void;
  removeFurnitureItem: (id: string) => void;
  setSelectedItemId: (id: string | null) => void;
  clearAllFurniture: () => void;
  setCameraControlsEnabled: (enabled: boolean) => void;
}

export const useDesignerStore = create<DesignerStore>((set) => ({
  selectedRoomType: null,
  roomDimensions: { width: 5, height: 3, depth: 4.5 },
  wallColor: '#F5F5DC',
  floorColor: '#8B4513',
  ceilingColor: '#FFFFFF',
  floorType: 'wood',
  furnitureItems: [],
  selectedItemId: null,
  cameraControlsEnabled: true,

  setSelectedRoomType: (type) => set({ selectedRoomType: type }),
  setRoomDimensions: (dimensions) => set({ roomDimensions: dimensions }),
  setWallColor: (color) => set({ wallColor: color }),
  setFloorColor: (color) => set({ floorColor: color }),
  setCeilingColor: (color) => set({ ceilingColor: color }),
  setFloorType: (type) => set({ floorType: type }),
  
  addFurnitureItem: (item) =>
    set((state) => ({
      furnitureItems: [
        ...state.furnitureItems,
        { ...item, id: `furniture-${Date.now()}-${Math.random()}` },
      ],
      cameraControlsEnabled: false,
    })),
  
  updateFurnitureItem: (id, updates) =>
    set((state) => ({
      furnitureItems: state.furnitureItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),
  
  removeFurnitureItem: (id) =>
    set((state) => ({
      furnitureItems: state.furnitureItems.filter((item) => item.id !== id),
      selectedItemId: state.selectedItemId === id ? null : state.selectedItemId,
    })),
  
  setSelectedItemId: (id) => set({ 
    selectedItemId: id,
    cameraControlsEnabled: id === null,
  }),
  
  clearAllFurniture: () => set({ furnitureItems: [], selectedItemId: null }),
  
  setCameraControlsEnabled: (enabled) => set({ cameraControlsEnabled: enabled }),
}));

'use client';

import { useDesignerStore } from '@/lib/designerStore';
import FurnitureItem from './FurnitureItem';

export default function FurnitureObjects() {
  const furniture = useDesignerStore((state) => state.furnitureItems);

  return (
    <group>
      {furniture.map((item) => (
        <FurnitureItem
          key={item.id}
          type={item.type}
          name={item.name}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
          color={item.color}
          image={item.image}
          onClick={() => {}}
          isSelected={false}
        />
      ))}
    </group>
  );
}

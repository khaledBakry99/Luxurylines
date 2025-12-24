'use client';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export default function FavoriteButton({ 
  isFavorite, 
  onClick,
  size = 'md'
}: FavoriteButtonProps) {
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-14 h-14 text-2xl'
  };

  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-red-500/20 rounded-full transition-all duration-300 cursor-pointer group`}
    >
      <i 
        className={`${isFavorite ? 'ri-heart-fill' : 'ri-heart-line'} ${
          isFavorite ? 'text-red-500' : 'text-white group-hover:text-red-500'
        } transition-colors duration-300`}
        style={{ fontSize: size === 'sm' ? '18px' : size === 'md' ? '20px' : '24px' }}
      ></i>
    </button>
  );
}

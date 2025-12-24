'use client';

import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#CBC1B8]/20 px-6 py-3 rounded-full mb-6">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-gallery-line text-[#CBC1B8] text-xl"></i>
              </div>
              <span className="text-[#CBC1B8] font-medium">معرض الصور</span>
            </div>
            <h2 className="text-4xl font-['Cairo'] font-bold text-white">
              صور المشروع
            </h2>
          </div>

          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 group">
            <img
              src={images[selectedImage]}
              alt={`صورة ${selectedImage + 1}`}
              className="w-full h-[600px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 shadow-xl cursor-pointer group/btn"
                >
                  <i className="ri-arrow-right-line text-2xl group-hover/btn:scale-110 transition-transform duration-300"></i>
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#CBC1B8] hover:text-[#0A1F21] transition-all duration-300 shadow-xl cursor-pointer group/btn"
                >
                  <i className="ri-arrow-left-line text-2xl group-hover/btn:scale-110 transition-transform duration-300"></i>
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <span className="font-semibold">{selectedImage + 1} / {images.length}</span>
            </div>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-xl overflow-hidden h-32 cursor-pointer transform transition-all duration-300 ${
                    selectedImage === index
                      ? 'ring-4 ring-[#1C474A] scale-105 shadow-xl'
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                >
                  <img
                    src={image}
                    alt={`صورة مصغرة ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                  {selectedImage !== index && (
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition-colors duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

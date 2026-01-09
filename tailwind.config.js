/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luna: {
          // الألوان الأساسية
          dark: "#0A1F21", // أخضر داكن جداً - الخلفيات الرئيسية
          teal: "#1C474A", // أخضر داكن - التدرجات والتفاصيل
          forest: "#0F3A3E", // أخضر غابة - تدرجات إضافية
          ocean: "#0A2F33", // أخضر محيطي - تدرجات إضافية
          beige: "#CBC1B8", // بيج - الأزرار والعناصر البارزة
          light: "#F7F6F4", // بيج فاتح - النصوص والخلفيات الفاتحة
        },
      },
      backgroundImage: {
        // تدرجات الأقسام - كلها خضراء
        "hero-gradient":
          "linear-gradient(to bottom right, #0A1F21, #1C474A, #0F3A3E)",
        "services-gradient": "linear-gradient(to right, #0F3A3E, #1C474A)",
        "projects-gradient":
          "linear-gradient(to bottom, #1C474A, #0F3A3E, #0A1F21)",
        "testimonials-gradient":
          "linear-gradient(to bottom right, #0A2F33, #0A1F21)",
        "designer-gradient": "linear-gradient(to left, #0A1F21, #0F3A3E)",
        "cta-gradient": "linear-gradient(to right, #0A1F21, #1C474A, #0F3A3E)",
        "benefits-gradient": "linear-gradient(to bottom, #0F3A3E, #1C474A)",
        "form-gradient": "linear-gradient(to bottom, #1C474A, #0A1F21)",
        "gallery-gradient": "linear-gradient(to bottom, #0F3A3E, #1C474A)",
        "related-gradient": "linear-gradient(to bottom, #0A2F33, #0A1F21)",
        "info-gradient": "linear-gradient(to bottom, #0A1F21, #0F3A3E)",
        "description-gradient": "linear-gradient(to bottom, #1C474A, #0A2F33)",

        // تدرجات الأزرار
        "btn-primary": "linear-gradient(to right, #CBC1B8, #F7F6F4)",
        "btn-primary-hover": "linear-gradient(to left, #CBC1B8, #F7F6F4)",
        "btn-secondary": "linear-gradient(to right, #1C474A, #0A1F21)",
        "btn-secondary-hover": "linear-gradient(to left, #1C474A, #0A1F21)",

        // تدرجات الكاردات
        "card-dark": "linear-gradient(to bottom right, #1C474A, #0A1F21)",
        "card-forest": "linear-gradient(to bottom right, #0F3A3E, #0A2F33)",
        "card-ocean": "linear-gradient(to bottom right, #0A2F33, #0A1F21)",
        "card-teal": "linear-gradient(to bottom right, #1C474A, #0F3A3E)",
      },
      boxShadow: {
        "luna-sm": "0 2px 8px rgba(203, 193, 184, 0.1)",
        "luna-md": "0 4px 16px rgba(203, 193, 184, 0.15)",
        "luna-lg": "0 8px 32px rgba(203, 193, 184, 0.2)",
        "luna-xl": "0 12px 48px rgba(203, 193, 184, 0.25)",
        "luna-dark": "0 8px 32px rgba(10, 31, 33, 0.3)",
        // توهج الكاردات - للاستخدام العام
        "card-glow": "0 4px 20px rgba(203, 193, 184, 0.2)",
        "card-glow-hover": "0 8px 32px rgba(203, 193, 184, 0.3)",
        "card-glow-strong":
          "0 8px 32px rgba(203, 193, 184, 0.25), 0 4px 16px rgba(203, 193, 184, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animationDelay: {
        100: "100ms",
        200: "200ms",
      },
    },
  },
  plugins: [],
};

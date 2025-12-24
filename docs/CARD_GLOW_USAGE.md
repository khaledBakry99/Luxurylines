# استخدام توهج الكاردات (Card Glow)

## الموقع
تم إضافة أنماط التوهج في `tailwind.config.js`

## الأنماط المتاحة

### 1. `shadow-card-glow`
توهج دائم للكاردات (يظهر دائماً)
```tsx
className="shadow-card-glow"
```
**القيمة:** `0 4px 20px rgba(203, 193, 184, 0.2)`

### 2. `shadow-card-glow-hover`
توهج أقوى عند التمرير
```tsx
className="hover:shadow-card-glow-hover"
```
**القيمة:** `0 8px 32px rgba(203, 193, 184, 0.3)`

### 3. `shadow-card-glow-strong`
توهج قوي متعدد الطبقات
```tsx
className="shadow-card-glow-strong"
```
**القيمة:** `0 8px 32px rgba(203, 193, 184, 0.25), 0 4px 16px rgba(203, 193, 184, 0.15)`

## أمثلة الاستخدام

### مثال 1: كارد بتوهج دائم
```tsx
<div className="bg-white rounded-2xl shadow-card-glow hover:shadow-card-glow-hover transition-all duration-500">
  {/* محتوى الكارد */}
</div>
```

### مثال 2: كارد بتوهج قوي
```tsx
<div className="bg-gradient-to-br from-[#1C474A] to-[#0A1F21] rounded-3xl shadow-card-glow-strong border border-[#CBC1B8]/20">
  {/* محتوى الكارد */}
</div>
```

### مثال 3: كارد تفاعلي
```tsx
<div className="group rounded-2xl shadow-card-glow hover:shadow-card-glow-hover hover:-translate-y-2 transition-all duration-500">
  {/* محتوى الكارد */}
</div>
```

## الصفحات المطبقة

### ✅ الصفحة الرئيسية
1. **كاردات الخدمات** (`components/home/ServicesSection.tsx`)
   - 4 كاردات للخدمات الرئيسية
   - توهج دائم مع زيادة عند التمرير

2. **كاردات المشاريع** (`components/home/FeaturedProjects.tsx`)
   - 3 كاردات للمشاريع المميزة
   - توهج دائم مع تأثير رفع عند التمرير

### ✅ صفحة المتجر
1. **كاردات المنتجات** (`app/store/shop/ProductsShowcase.tsx`)
   - جميع كاردات المنتجات
   - توهج مخصص مع تأثيرات إضافية

2. **كاردات المميزات** (`app/store/shop/ShopFeatures.tsx`)
   - 4 كاردات للمميزات
   - توهج دائم للكاردات والأيقونات

## نصائح الاستخدام

### 1. التوهج الدائم
استخدم `shadow-card-glow` للكاردات التي تحتاج عمقاً دائماً:
```tsx
className="shadow-card-glow"
```

### 2. التوهج التفاعلي
أضف `hover:shadow-card-glow-hover` للتفاعل:
```tsx
className="shadow-card-glow hover:shadow-card-glow-hover transition-all duration-500"
```

### 3. الجمع مع الحدود
للحصول على أفضل نتيجة، اجمع التوهج مع الحدود:
```tsx
className="shadow-card-glow border border-[#CBC1B8]/20 hover:border-[#CBC1B8]/40"
```

### 4. الجمع مع الحركة
أضف حركة للكارد مع التوهج:
```tsx
className="shadow-card-glow hover:shadow-card-glow-hover hover:-translate-y-2 transition-all duration-500"
```

## الألوان المستخدمة

التوهج يستخدم ألوان البيج من لوحة الألوان:
- **اللون الأساسي:** `#CBC1B8` (البيج)
- **اللون الفاتح:** `#F7F6F4` (البيج الفاتح)

## التخصيص

لتعديل قيم التوهج، قم بتحرير `tailwind.config.js`:

```javascript
boxShadow: {
  'card-glow': '0 4px 20px rgba(203, 193, 184, 0.2)',
  'card-glow-hover': '0 8px 32px rgba(203, 193, 184, 0.3)',
  'card-glow-strong': '0 8px 32px rgba(203, 193, 184, 0.25), 0 4px 16px rgba(203, 193, 184, 0.15)',
}
```

## ملاحظات مهمة

1. ✅ التوهج متوافق مع جميع المتصفحات
2. ✅ يعمل مع الوضع الداكن والفاتح
3. ✅ متناسق مع لوحة ألوان Luxury Lines
4. ✅ يعطي عمقاً وبُعداً ثلاثي الأبعاد للكاردات
5. ⚠️ استخدم `transition-all duration-500` للحصول على انتقال سلس

## أمثلة إضافية

### كارد بتوهج وأيقونة
```tsx
<div className="shadow-card-glow hover:shadow-card-glow-hover transition-all duration-500 p-6 rounded-2xl">
  <div className="w-16 h-16 bg-gradient-to-br from-[#CBC1B8] to-[#F7F6F4] rounded-xl shadow-[#CBC1B8]/40">
    <i className="ri-star-line text-2xl"></i>
  </div>
  <h3>عنوان الكارد</h3>
  <p>وصف الكارد</p>
</div>
```

### كارد بتوهج وحركة
```tsx
<div className="group shadow-card-glow hover:shadow-card-glow-hover hover:-translate-y-3 transition-all duration-500 rounded-3xl overflow-hidden">
  <img src="..." alt="..." className="group-hover:scale-110 transition-transform duration-700" />
  <div className="p-6">
    <h3>عنوان</h3>
  </div>
</div>
```

# لوحة الألوان - الأخضر الداكن والبيج فقط

## الألوان الأساسية

### الأخضر الداكن (للخلفيات فقط)
```css
#0A1F21  /* الأخضر الداكن الأساسي */
#1C474A  /* الأخضر المتوسط */

#0F3A3E  /* الأخضر الداكن المتوسط */
#0A2F33  /* الأخضر الداكن الإضافي */
```

### البيج (للأزرار والعناصر البارزة فقط)
```css
#CBC1B8  /* البيج الأساسي */
#F7F6F4  /* البيج الفاتح */
```

## ⚠️ قواعد صارمة

### ✅ يُسمح:
1. **الخلفيات الكبيرة**: تدرجات خضراء فقط
2. **الكاردات**: خلفية خضراء شفافة (bg-white/10) أو تدرج أخضر
3. **الأزرار**: بيج فقط
4. **النصوص**: بيضاء أو بيج على الخلفيات الخضراء
5. **الأيقونات**: بيج أو بيضاء

### ❌ ممنوع:
1. **لا خلفيات بيضاء** (bg-white) للأقسام الكبيرة
2. **لا خلفيات بيج** (bg-beige) للأقسام الكبيرة
3. **لا خلفيات رمادية** (bg-gray-50, bg-gray-100) للأقسام الكبيرة

## أمثلة صحيحة

### Hero Section
```tsx
<section className="bg-gradient-to-br from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90">
```

### قسم الكاردات
```tsx
<section className="bg-gradient-to-b from-[#0F3A3E] to-[#1C474A]">
  <div className="bg-white/10 backdrop-blur-sm border border-white/20">
    {/* محتوى الكارد */}
  </div>
</section>
```

### قسم الباقات
```tsx
<section className="bg-gradient-to-br from-[#1C474A] to-[#0A2F33]">
  <div className="bg-white/10 backdrop-blur-sm">
    {/* محتوى الباقة */}
  </div>
</section>
```

### قسم العملية
```tsx
<section className="bg-gradient-to-br from-[#0A1F21] to-[#0F3A3E]">
```

### الأزرار
```tsx
/* زر أساسي */
<button className="bg-[#CBC1B8] text-[#0A1F21]">

/* زر متدرج */
<button className="bg-gradient-to-r from-[#CBC1B8] to-[#F7F6F4] text-[#0A1F21]">

/* زر بحدود */
<button className="border-2 border-[#CBC1B8] text-[#CBC1B8] hover:bg-[#CBC1B8] hover:text-[#0A1F21]">
```

## تدرجات مختلفة لكل قسم

```tsx
/* Hero */
from-[#0A1F21]/95 via-[#0F3A3E]/85 to-[#1C474A]/90

/* Services Grid */
from-[#0F3A3E] to-[#1C474A]

/* Process */
from-[#0A1F21] to-[#0F3A3E]

/* Packages */
from-[#1C474A] to-[#0A2F33]

/* CTA */
from-[#0A1F21] via-[#1C474A] to-[#0F3A3E]

/* Gallery */
from-[#0F3A3E] to-[#1C474A]

/* Features */
from-[#1C474A] to-[#0A1F21]
```

## الكاردات

```tsx
/* كارد شفاف على خلفية خضراء */
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">

/* كارد بتدرج أخضر */
<div className="bg-gradient-to-br from-[#0F3A3E] to-[#0A2F33] rounded-2xl">

/* كارد بتدرج أخضر آخر */
<div className="bg-gradient-to-br from-[#1C474A] to-[#0A1F21] rounded-2xl">
```

## النصوص

```tsx
/* على خلفية خضراء */
text-white
text-[#CBC1B8]
text-[#F7F6F4]
text-white/80
text-white/90

/* على كارد شفاف */
text-white
text-[#CBC1B8]
```

## الأيقونات

```tsx
/* أيقونة بيج */
<i className="text-[#CBC1B8]"></i>

/* أيقونة بيضاء */
<i className="text-white"></i>

/* خلفية أيقونة */
<div className="bg-[#CBC1B8] rounded-full">
  <i className="text-[#0A1F21]"></i>
</div>
```

## ملاحظات مهمة

1. **كل قسم يجب أن يكون له خلفية خضراء مختلفة**
2. **لا تستخدم bg-white أو bg-gray-50 للأقسام الكبيرة**
3. **استخدم bg-white/10 للكاردات الشفافة فقط**
4. **البيج للأزرار والعناصر البارزة فقط**
5. **راجع الصفحة الرئيسية وصفحة المشاريع كمرجع**

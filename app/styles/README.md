# Custom Scrollbar Styles

## الموقع
`app/styles/customScrollbar.css`

## الاستخدام

### 1. الاستيراد التلقائي
الملف مستورد تلقائياً في `app/globals.css`، لذلك يعمل في جميع صفحات المشروع.

### 2. استخدام الكلاس المخصص
لتطبيق السكرول المخصص على عنصر معين، أضف الكلاس `custom-scrollbar`:

```tsx
<div className="overflow-y-auto custom-scrollbar">
  {/* المحتوى */}
</div>
```

### 3. الأمثلة

#### نافذة منبثقة (Modal)
```tsx
<div className="fixed inset-0 overflow-y-auto custom-scrollbar">
  <div className="max-h-[80vh] overflow-y-auto custom-scrollbar">
    {/* محتوى النافذة */}
  </div>
</div>
```

#### قائمة طويلة
```tsx
<div className="h-96 overflow-y-auto custom-scrollbar">
  {items.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</div>
```

## المواصفات

### الألوان
- **Thumb (المقبض)**: تدرج بيج من `#CBC1B8` إلى `#F7F6F4`
- **Track (المسار)**: أخضر داكن شفاف `rgba(10, 31, 33, 0.3)`

### الأبعاد
- **العرض**: 6px للعناصر المخصصة، 8px للصفحة العامة
- **الارتفاع**: 6px للعناصر المخصصة، 8px للصفحة العامة

### المتصفحات المدعومة
- ✅ Chrome
- ✅ Safari
- ✅ Edge
- ✅ Firefox
- ✅ Opera

## التخصيص

لتعديل الألوان أو الأبعاد، قم بتحرير ملف `app/styles/customScrollbar.css`.

### مثال: تغيير اللون
```css
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### مثال: تغيير العرض
```css
.custom-scrollbar::-webkit-scrollbar {
  width: 8px; /* بدلاً من 6px */
}
```

## ملاحظات
- السكرول المخصص يطبق تلقائياً على جميع الصفحات
- استخدم `custom-scrollbar` للعناصر التي تحتاج سكرول أنحف
- التصميم متوافق مع لوحة ألوان Luxury Lines (الأخضر الداكن والبيج)

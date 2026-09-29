# oyadabu — Mevcut Tasarım Denetimi ve Yön

oyadabu: iki seçenekten birini swipe ile seçtiren, kategori bazlı "hangisi?" oyunu
(React + Tailwind + Capacitor iOS). Ekranlar: `CategoryScreen` → `GameScreen` → `ResultScreen`.
Bu dosya ilk commit'teki (6a990e9) durumun denetimidir; UI değiştikçe güncelle.

## Bulgular (önem sırasıyla)

### Erişilebilirlik — kontrast (WCAG AA)
Ölçülen oranlar (beyaz metinle):

| Nerede | Renk | Oran | Durum |
|---|---|---|---|
| GameScreen üst kart | `#4dd395` | 1.90 | ✗ büyük metin için bile (<3) |
| GameScreen alt kart | `#f8be3d` | 1.69 | ✗ |
| ResultScreen kazanan kartı | `#4dd395` | 1.90 | ✗ |
| "şampiyonu!" metni / tekrar butonu | `#14b8a6` | 2.49 | ✗ |
| WhatsApp butonu | `#25d366` | 1.98 | ✗ |
| Kategori: Yemek | `#f97316` | 2.80 | ✗ |
| Kategori: Para | `#10b981` | 2.54 | ✗ |
| Kategori: Ünlü / Sosyal / Süper Güç / Teknoloji | pembe/mavi/mor/indigo | 3.5–4.5 | 24px metin için geçer, küçük metin için kalmaz |

Düzeltme yönü: kart zeminlerini koyulaştır (ör. yeşil → `#0f766e` 5.47:1) **veya** açık zemin + koyu
metin kullan (ör. sarı `#fde68a` + `#27272a` 11.96:1).

### Renk — 60-30-10 yok
Toplamda ~12 doymuş renk yarışıyor: 6 kategori rengi, 2 kart rengi, teal, ilerleme mavisi, 3 paylaşım
markası (+ Instagram'ın 5 renkli gradyanı). Hiçbiri "vurgu" değil çünkü hepsi vurgu.
Yön: nötr zemin (%60) + logodaki yeşil/sarı ikilisi (%30) + tek vurgu (%10, sadece birincil CTA/ilerleme).
Kategori kimliği renk yerine ikon/emoji + ince renk şeridi ile taşınabilir.

### Akış
- GameScreen'de seçim **yalnızca swipe** ile; dokunarak seçme yok → keşfedilebilirlik ve erişilebilirlik sorunu.
- Oyun ortasında "geri" onay sormadan ilerlemeyi siliyor.
- Firestore oyu başarısız olursa kullanıcıya bir şey gösterilmiyor (sessiz `console.error`).
- Instagram paylaşımı `alert()` kullanıyor → yerel his yerine tarayıcı diyaloğu.

### Boşluk ve ızgara
- Kategori butonlarının genişliği `100 - i*3 %` → sağ kenarlar kademeli; ızgarayı bilinçsizce kırıyor
  ve bir sonraki öğenin neden daha kısa olduğunun anlamı yok.
- Boşluklar karışık (`pt-10 pb-6`, `pt-4 pb-2`, `py-3`, `my-4`, `pt-6`) — tanımlı bir ölçek yok.

### Tutarlılık
- Köşe yarıçapı: kategori butonu `rounded-2xl`, oyun kartı `rounded-3xl`, paylaşım butonu `rounded-2xl`.
  Bilinçli bir sistem değil.
- Renkler hem `tailwind.config.js` token'ı hem inline hex olarak tekrar ediyor (`#4dd395` 3 yerde inline).
- `App.css` CRA şablon artığı, kullanılmıyor.

### İkonlar
- Emoji (kategori) + çizgi SVG (ok) + marka logoları (paylaşım) aynı ekranlarda. Farklı bölgelerde
  olduğu için kabul edilebilir, ama kategori butonunda emoji ile chevron yan yana.

### Gereksiz öğeler
- Kartlarda "swipe + ok" ipucu her turda tekrar ediyor; ilk turdan sonra gereksiz görsel gürültü.
  (İlk tur için öğretici göster, sonra kaldır.)

### Etkileşim geri bildirimi
- Kategori butonlarında `active:scale-95` var ✓. Paylaşım ve "tekrar" butonlarında basılı durum yok.
- Oyun kartlarında sürükleme sırasında parmağı takip eden hareket yok; eşik aşılınca birden fırlıyor.

### Hiyerarşi
- GameScreen: kanca = iki kart ✓, ikincil = "hangisi?" ✓, bitirici = ilerleme ✓ — iyi kurulmuş.
- ResultScreen: kazanan kartı ve "şampiyonu!" başlığı aynı bilgiyi iki kez söylüyor; paylaşım
  (asıl büyüme eylemi) üç eşit ağırlıklı renkli butona bölünmüş, birincil CTA belirsiz.

### Karanlık mod
- Yok. Eklenirse ters çevirme değil, ayrı palet.

## Önerilen token'lar (başlangıç taslağı)

```js
// tailwind.config.js → theme.extend
colors: {
  bg:      { DEFAULT: "#f7f7f8" },        // %60 nötr zemin
  surface: { DEFAULT: "#ffffff" },
  ink:     { DEFAULT: "#27272a", muted: "#71717a" }, // 13.9:1 / 4.5:1
  pick: {
    a: "#0f766e", aInk: "#ffffff",        // yeşil kart, 5.47:1
    b: "#fde68a", bInk: "#27272a",        // sarı kart, 11.96:1
  },
  accent:  { DEFAULT: "#0f766e" },        // %10 — sadece birincil CTA / ilerleme
  danger:  { DEFAULT: "#dc2626" },
},
borderRadius: { control: "12px", card: "24px" },
// boşluk: Tailwind 1/2/3/4/6/8/12 (4–48px) dışına çıkma
```

Bunlar öneri; logonun parlak yeşil/sarısı marka kimliği olarak logoda kalabilir, UI'da koyulaştırılmış
akrabaları kullanılır ("marka rengini iyi tasarım için uyarlamaktan korkma" — Kole Jain).

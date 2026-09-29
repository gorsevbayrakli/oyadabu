# Tasarım Promptu Şablonu

Lovable, Figma, Canva, v0 veya görsel üretim araçlarına prompt yazarken kullan. Kötü prompt
"modern, şık bir uygulama yap" der; iyi prompt tasarım kararlarını **sayısal ve gerekçeli** verir.
Araç ne kadar az tahmin yürütürse sonuç o kadar tutarlı olur — AI şablonlarının birbirine benzemesinin
sebebi belirsiz promptlardır (Satori "visual gravity").

## Şablon

```
## Amaç
[Ekran/tasarım ne işe yarıyor, 1–2 cümle.]
Kaçınılacaklar: [ör. gereksiz animasyon, çok renkli kartlar, gradyan, sert gölge]

## Kullanıcı
[Kim, hangi bağlamda (ör. telefonda, hızlı, arkadaşlarıyla), ne hissetmeli]

## Akış ve durumlar
- Ekranlar: [liste]
- Her ekranda: geri, [atla/hiçbiri], boş / yükleniyor / hata durumları
- Birincil eylem: [tek CTA], alt üçte birde

## Hiyerarşi
1. Kanca: [en büyük öğe]
2. İkincil: [...]
3. Bitirici: [küçük ama kritik bilgi + CTA]

## Düzen ve boşluk
- Izgara: [ör. mobil 4 sütun, 16px kenar boşluğu]
- Boşluk ölçeği: 4 / 8 / 12 / 16 / 24 / 32 / 48 (başka değer yok)
- İlişkili öğeler yakın; bölümler arası en az 32px

## Renk (60-30-10)
- %60 nötr: [zemin hex], yüzey [hex]
- %30 ikincil: [hex]
- %10 vurgu: [hex] — sadece CTA ve aktif durum
- Metin: birincil [koyu gri hex], ikincil [orta gri hex]; saf siyah yok
- Durum: hata [kırmızı], başarı [yeşil]
- Tüm metinler WCAG AA (≥4.5:1)
- Karanlık mod: [var/yok; varsa ters çevirme değil, açık gri metin, belirgin kenarlık]

## Tipografi
- Aile: [1–2 font]
- Ölçek: gövde [16px], H2 [~%140], H1 [~%190]; satır aralığı %130; satır ≤ 90 karakter
- Gövde sola hizalı

## Bileşenler
- Köşe yarıçapı: küçük [10–12px], kart [20–24px]
- İkonlar: [tek set, ör. Lucide 2px çizgi]; emoji ile karıştırma
- Gölge: yok veya çok yumuşak (açık gri, büyük blur)
- Durumlar: basılı = %8 koyu + scale 0.97; pasif = desatüre gri; yükleniyor = spinner

## Hareket (varsa)
- Amaçlı ve kısa (150–300ms), hiyerarşiyi güçlendirmek için; süs animasyonu yok

## Karakter / duygu
[Ton: ör. oyuncu ve samimi — el yapımı hissi veren tek bir öğe (kontrast 2.0)]
```

## Görsel üretimi (afiş, sosyal medya, ambalaj) için ek satırlar

- Kompozisyon: odak noktası [ne], okuma yolu [Z/F], negatif alan [nerede]
- Izgara/hizalama: metin bloğu [sol alt] hizalı, kenardan güvenli boşluk
- Palet: görseldeki tonlardan çekilmiş [açık ton] zemin + [koyu ton] metin + tek vurgu
- Kontrast 2.0: pürüzsüz zemin + tek dokulu/el çizimi öğe; ya da durağan düzen + tek hareketli öğe
- Hedef kitle ve his: [lüks → serif, altın vurgu; samimi/doğal → el çizimi; teknoloji → sans-serif]
- Trend fontlardan kaçın; marka mesajına uygun seç

## Örnek (oyadabu, kısa)

```
Amaç: İki seçenekten birini swipe veya dokunarak seçtiren "hangisi?" oyunu ekranı.
Kaçın: 3'ten fazla renk, gradyan, gölge, ok+yazı gibi gereksiz ipuçları.
Kullanıcı: 16–30 yaş, telefonda, arkadaşlarla eğlenirken; hızlı ve oyuncu hissetmeli.
Hiyerarşi: 1) iki seçenek kartı (ekranın ~%80'i) 2) "hangisi?" 3) ilerleme + tur sayısı.
Renk: zemin #f7f7f8, kart A #0f766e (koyu yeşil, beyaz metin 5.5:1), kart B #fde68a (açık sarı, koyu metin),
metin #27272a / #71717a. Vurgu yalnızca ilerleme çubuğunda.
Tipografi: Outfit; kart metni 24px/130% semibold sola hizalı; başlık 28px.
Boşluk: 16px kenar, kartlar arası 12px; yarıçap kart 24px, buton 12px.
Etkileşim: dokununca scale 0.97, seçilen kart yana kayar (300ms), diğeri solar.
```

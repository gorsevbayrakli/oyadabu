# UI Denetim Listesi

Bir ekranı, Figma dosyasını veya React/Tailwind kodunu incelerken sırayla geç. Bulguları önem
sırasıyla raporla: **Erişilebilirlik/akış → Hiyerarşi/boşluk → Tutarlılık → Estetik**.

Kaynak: Kole Jain "7 UI/UX mistakes", "7 Color Mistakes"; Chainlift "Science of Perfect Spacing";
DesignWithArash & Figma kursları.

## 1. Akış (Kole Jain #1)
- [ ] Geri butonu var mı? Atla / "hiçbiri" seçeneği gerekli mi?
- [ ] Hazır seçenekler yetmezse arama/serbest giriş var mı?
- [ ] Boş, yükleniyor, hata ve başarı durumları tasarlanmış mı?
- [ ] Küçük dokunuşlar: arama çubuğunda filtre ikonu, üstte kaydet butonu, navigasyon linkleri.
- [ ] Sadece jestle (swipe) yapılan eylemin dokunmayla alternatifi var mı?

## 2. Efekt fazlalığı (#2)
- [ ] Farklı tonlar arası gradyan var mı? → aynı rengin tonları veya hiç.
- [ ] Gölgeler sert mi? → açık gri renk + büyük blur, veya kaldır.
- [ ] Parıltı/cam efekti bir işe yarıyor mu?

## 3. Boşluk (#3 + Chainlift)
- [ ] Izgara tanımlı mı (mobilde 2–4 sütun)? Öğeler ızgaraya oturuyor mu?
- [ ] Boşluklar bir ölçekten mi (4'ün/8'in katları), yoksa rastgele mi?
- [ ] İlişki gücü → mesafe: güçlü ilişki yakın, zayıf ilişki uzak. A (bölüm arası) > B > C (başlık–alt başlık).
- [ ] Gerçek içerikle kontrol: lorem ipsum yerine gerçek metin koyunca ilişkiler değişebilir.
- [ ] Kart iç boşluğunda optik düzeltme: üst boşluk göze fazla mı görünüyor?
- [ ] Mobilde yeterince nefes var mı?
- [ ] Figma: auto layout (hug/fill/fixed), "vertical trim" kapalıyken piksel kontrolü.

## 4. Tutarlılık (#4)
- [ ] Aynı iş gören bileşenler (geri/atla, iki arama çubuğu) birebir aynı mı?
- [ ] Köşe yarıçapları bir sistemde mi (küçükler tek değer, kartlar tek değer)?
- [ ] Renkler stil/token, ölçüler değişken, UI parçaları bileşen olarak mı tanımlı?
- [ ] Kodda sabit hex ve sihirli sayılar yerine token/Tailwind teması mı kullanılıyor?

## 5. İkonlar (#5)
- [ ] Kartlarda okumayı hızlandıracak ikon eksik mi?
- [ ] Tüm ikonlar aynı set, aynı çizgi kalınlığı, aynı dolgu/kontur stilinde mi? (Feather, Phosphor, Lucide)
- [ ] Emoji ve çizgi ikon aynı bölgede karışık mı?
- [ ] Az bilinen ikonların etiketi/tooltip'i var mı?

## 6. Gereksiz elemanlar (#6)
- [ ] Swipe'lanan şeyde ok gerçekten gerekli mi?
- [ ] Gereksiz kontur/çerçeve var mı?
- [ ] Aynı bilgiyi iki kez söyleyen metin var mı?

## 7. Etkileşim geri bildirimi (#7)
- [ ] Butonların basılı (active) durumu var mı? (hafif koyulaşma veya scale 0.97)
- [ ] Gecikmeli işlemde buton pasifleşiyor / spinner görünüyor mu?
- [ ] Kaydet gibi eylemlerde durum değişimi görünür mü (dolu ikon + sekmede nokta)?
- [ ] Pasif durum: doygunluk düşük + açık gri, başka ipucuna gerek kalmadan anlaşılıyor mu?

## 8. Renk (Kole Jain renk videosu)
- [ ] Kaç farklı vurgu rengi var? 60-30-10'u bozan rekabet eden renkler?
- [ ] Önemsiz bir öğe en parlak renkle mi boyanmış?
- [ ] Tüm metinler WCAG AA'yı geçiyor mu (4.5:1 / büyük metin 3:1)?
- [ ] Arka plan nötr mü? Kartlar için arka plan yerine sadece kenarlık yeterli mi?
- [ ] Saf siyah/beyaz yerine hiyerarşik griler kullanılmış mı?
- [ ] Yıkıcı eylemler kırmızı mı?
- [ ] Karanlık mod ayrı düşünülmüş mü (ters çevirme değil)?

## 9. Grafik/veri (bonus)
- [ ] Eksen var mı? Bar sayısı veri sayısıyla eşleşiyor mu? Yuvarlak bar uçları okumayı bozuyor mu?

## 10. Son kontrol
- [ ] 3 saniye testi: göz ilk nereye, sonra nereye? Net cevap var mı?
- [ ] Farklı ekran boyutlarında (küçük iPhone, büyük iPhone, tablet) test edildi mi?
- [ ] Her öğe bir amaca hizmet ediyor mu?

## Bulgu yazım biçimi

```
[Önem] Kısa başlık
Nerede: dosya:satır veya ekran/bölge
Sorun: ne, hangi kurala aykırı
Öneri: somut değer (ör. #0f766e, gap-4, rounded-xl)
```

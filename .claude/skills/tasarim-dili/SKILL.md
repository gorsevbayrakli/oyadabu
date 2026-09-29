---
name: tasarim-dili
description: oyadabu'nun tasarım dili ve tasarım denetim rehberi — 20 tasarım videosundan (Kole Jain, Chainlift, Satori Graphics, Envato Tuts+, Shapes By Sean, Kittl, Figma, DesignWithArash) damıtılmış kurallar. Herhangi bir ekran, bileşen, renk paleti, tipografi, boşluk, ikon, logo, afiş/sosyal medya görseli tasarlarken veya düzeltirken; Tailwind/CSS ile UI yazarken; bir tasarımı eleştirirken/denetlerken; ya da Lovable, Figma, Canva, Midjourney gibi araçlara tasarım promptu yazarken MUTLAKA kullan. Kullanıcı "tasarım", "UI", "ekran", "renk", "görsel", "logo", "prompt yaz", "daha profesyonel görünsün", "amatör duruyor" dediğinde de tetiklenir.
---

# Tasarım Dili

Bu skill, "güzel görünsün" yerine **gerekçesi olan** tasarım kararları vermek için var.
Videoların ortak mesajı: profesyonel tasarım sezgiyle değil, ilkelerle yapılır; deneme-yanılma
zaman kaybettirir. Her karar şu soruya cevap vermeli: *Bu eleman kullanıcıya ne iş görüyor?*

## Çalışma akışı

Her tasarım işinde bu sırayı izle — sıra önemli, çünkü erken adımlar sonrakileri sınırlar:

1. **Amaç ve kullanıcı** — Tasarımın amacını 1–2 cümleyle yaz. Ayrıca **neyin olmayacağını** yaz
   (ör. "gereksiz animasyon yok, kalabalık yok"). Hedef kitleyi belirt; tipografi ve renk buna göre seçilir.
2. **Akış** — Ekranları kutular halinde düşün: geri/atla butonları, boş durumlar, yükleniyor,
   hata, "hiçbiri" seçeneği var mı? Eksik akış kullanıcıya anında hissettirir.
3. **Hiyerarşi** — Göz nereye iner, sonra nereye gider, nerede biter? (kanca → ikincil → bitirici).
   En büyük eleman kanca; CTA bitiriciye.
4. **Izgara ve boşluk** — Izgara kur, boşlukları bir ölçekten seç (göz kararı değil), ilişkili
   öğeleri yakınlaştır.
5. **Renk** — 60-30-10, nötr arka plan, tek vurgu rengi, kontrast kontrolü, durum renkleri.
6. **Tipografi** — En fazla 2 aile, net boyut kademeleri, sola hizalı gövde.
7. **Bileşen tutarlılığı** — Aynı iş gören her şey aynı görünür: köşe yarıçapı, ikon seti, buton stili.
8. **Etkileşim geri bildirimi** — Basılı / pasif / yükleniyor / seçildi durumları.
9. **Sadeleştirme** — Her elemanı sorgula: işlevi var mı yoksa süs mü? Süsse çıkar.
10. **3 saniye testi** — Tasarıma sosyal medyada kaydırırken bakar gibi bak. Göz ilk nereye
    düştü, sonra nereye gitti? Cevaplayamıyorsan hiyerarşide kopukluk var.

## Çekirdek kurallar (hızlı referans)

**Renk**
- 60% baskın nötr / 30% ikincil / 10% vurgu. Her şey farklı renk olmasın; renk az olunca anlam kazanır.
- Arka plan neredeyse hiç parlak olmaz: nötr gri zemin + beyaz/çok açık yüzey. Markaya ton katmak
  için nötr griye markanın bir tutamını karıştır.
- Metin kontrastı WCAG AA: normal metin ≥ 4.5:1, büyük metin (≥24px veya ≥18.66px kalın) ≥ 3:1.
  Parlak marka rengi beyaz metinle geçmiyorsa: rengi koyulaştır, metni koyu yap veya tamamlayıcı renk seç.
- Saf siyah yerine koyu gri/koyu marka tonu; ikincil bilgi daha açık gri. Gri kullanmaya alışmak
  vasatı profesyonelden ayırır.
- İkonlar varsayılan olarak renksiz; renk durumu (aktif sekme, uyarı) anlatmak için.
- Yıkıcı eylem kırmızı, başarı yeşil — marka renginde olmasalar bile.
- Durumlar: hover = biraz açık, basılı = biraz koyu, pasif = doygunluğu düşür. Mobilde hover yok → basılı durum şart.
- Karanlık mod açık modun tersi değil: kenarlıkları/kartları daha belirgin aç, metni saf beyaz
  yerine açık gri yap, beyazı en önemli öğelere sakla, doygun renkleri biraz söndür.

**Boşluk ve düzen**
- Yakınlık = ilişki. İlişki güçlüyse yakın, zayıfsa uzak. Başlık–alt başlık < alt başlık–paragraf < paragraf–yeni bölüm.
- Boşlukları ölçekten seç (ör. 4/8/12/16/24/32/48/64). Göz kararı yok, "parametreli göz kararı" var.
- Boşluk, iki öğeden büyük olanına (daha büyük metne) uygulanır.
- Optik düzeltme: kart içinde üst iç boşluk matematiksel olarak eşit olunca fazla görünür (metin kutusu
  harften yüksektir). Üstü biraz azalt ki *göze* eşit görünsün.
- Mobil, sandığından fazla boşluk ister. Sıkışık düzen amatör görünür.
- Izgaraya hizala; kırmak bilinçli olsun (tek bir vurgu öğesi) — geri kalan her şey hizalıysa kural kırılabilir.
- Negatif alan doldurulacak boşluk değil, tasarımın parçası.

**Tipografi**
- 1–2 font ailesi; hiyerarşiyi boyut ve kalınlıkla kur.
- Gövde: web 15–25px (mobilde 16px+). Satır aralığı 120–145%. Satır uzunluğu 45–90 karakter.
- H1 ≈ gövdenin 180–200%'ü; H2 ≈ 130–150%'ü.
- Gövde metni sola hizalı; ortalama sadece kısa başlıklar için. Kelime bölme (tire) yok.

**Bileşen, efekt, ikon**
- Köşe yarıçapı sistemi: küçük bileşenler tek değer (ör. 10–12px), kartlar tek değer. Aynı iş gören iki buton farklı görünmez.
- Gradyan ancak aynı rengin tonlarıyla; çoğu zaman hiç gradyan daha temiz.
- Gölge: varsayılanlar sert. Gölge rengini açık griye çek, blur'u artır — ya da tamamen kaldır.
- İkonlar tek kütüphaneden, aynı çizgi kalınlığı ve köşe stiliyle. (Farklı stiller ancak görsel olarak
  ayrı bölgelerde ve farklı işlerde kullanılıyorsa olur.) Bilinmeyen ikon = etiket veya tooltip.
- Gereksiz eleman temizliği: swipe edilebilen şeyde ok, gereksiz kontur, tekrar eden etiketler.
- Grafiklerde süs yok: eksen olsun, bar sayısı veriyle eşleşsin.

**Dikkat çekme ("görsel yerçekimi")**
- Ölçek + hareket: büyük öğe gözü çeker; küçük, amaçlı bir hareket (hafif pulse/scale) çekimi güçlendirir.
- Kontrast 2.0: sadece açık/koyu değil — doku, hareket, "insan eli" (el çizimi, samimi fotoğraf) vs. pürüzsüz yüzey.
- Duygu: ton, espri, samimiyet akılda kalır.
- Etkileşim alışkanlığı: kullanıcı CTA'yı alt üçte birde arar; buton, ok, chevron gibi ipuçlarını oraya koy.
- Okuma kalıpları: F (metin ağırlıklı) ve Z (görsel ağırlıklı).

## Referans dosyaları — ne zaman oku

- `references/ilkeler.md` — Tasarımın 12 ilkesi (denge, birlik, kontrast, vurgu, tekrar, desen, ritim,
  hareket, oran, uyum, çeşitlilik, beyaz alan) + düzen yasaları. Afiş, sosyal görsel, landing page veya
  kompozisyon eleştirisinde oku.
- `references/ui-denetim-listesi.md` — Bir ekranı/kodu denetlerken madde madde geç. UI incelemesi,
  "amatör duruyor" şikayeti veya PR öncesi kontrol için.
- `references/prompt-sablonu.md` — Lovable, Figma, Canva veya görsel üretim aracına prompt yazarken.
- `references/marka-logo-baski.md` — Logo, logotype, ikon çizimi, ambalaj, kartvizit/baskı işi için.
- `references/oyadabu.md` — oyadabu uygulamasının mevcut tasarım denetimi ve önerilen token'lar.
  Bu repoda UI değiştirirken oku.
- `references/kaynaklar.md` — Hangi kuralın hangi videodan geldiği.

## Çıktı biçimi

Tasarım önerirken veya kod yazarken, önemli kararların yanına kısa gerekçe ekle
(ör. "CTA alt üçte birde — etkileşim alışkanlığı"). Denetimde bulguları önem sırasına göre ver:
önce erişilebilirlik ve akış eksikleri, sonra hiyerarşi/boşluk, en son estetik rötuşlar.
Kurallar mutlak değil; kıracaksan bilerek ve gerekçesiyle kır.

// All seed content for VeYa. Copy is taken verbatim from the Figma design
// (file ZQOdgQo6JjujoWGzcLX8su) so the app reads exactly like the mockups.

export const ONBOARDING_STEPS = 7;

export const GOALS = [
  {
    id: "understand-message",
    title: "Bir mesajı anlamak",
    description: "Ne demek istediğinden emin olamadığın mesajlar var.",
  },
  {
    id: "handle-conflict",
    title: "Çatışmayla başa çıkmak",
    description: "Gerilimli konuşmalarda ne yapacağını bilmek istiyorsun.",
  },
  {
    id: "strengthen",
    title: "İlişkimi güçlendirmek",
    description: "Daha açık, daha yakın bir iletişim kurmak istiyorsun.",
  },
  {
    id: "social-anxiety",
    title: "Sosyal kaygıyı yönetmek",
    description: "Mesajlaşırken içini sıkan o gerginliği azaltmak.",
  },
  {
    id: "boundaries",
    title: "Sınır koymak",
    description: "Hayır demeyi ve sınırlarını sakince ifade etmeyi öğrenmek.",
  },
];

export const RELATIONSHIPS = [
  {
    id: "partner",
    title: "Partnerim",
    description: "Romantik ilişkimdeki iletişim",
  },
  {
    id: "dating",
    title: "Flört ettiğim biri",
    description: "Yeni tanıştığın ya da görüştüğün biri",
  },
  {
    id: "friend",
    title: "Arkadaşım",
    description: "Yakın ya da sosyal çevrenden biri",
  },
  {
    id: "family",
    title: "Ailemden biri",
    description: "Anne, baba, kardeş ya da akraba",
  },
  {
    id: "colleague",
    title: "İş arkadaşım",
    description: "Meslektaşın, yöneticin ya da bir müşteri",
  },
];

export const NEEDS = [
  {
    id: "clarity",
    title: "Ne olduğunu anlamak",
    description: "Kafandaki karışıklığı netliğe kavuşturmak.",
  },
  {
    id: "overthinking",
    title: "Fazla düşünmeyi bırakmak",
    description: "Aynı mesajı tekrar tekrar okumaktan kurtulmak.",
  },
  {
    id: "words",
    title: "Ne söyleyeceğimi bilmek",
    description: "Doğru kelimeleri, kendi sesinle bulmak.",
  },
  {
    id: "calm",
    title: "Sakin kalmak",
    description: "Gerilim anında düşünerek yanıt verebilmek.",
  },
];

export const PRIVACY_PROMISES = [
  {
    id: "yours",
    title: "Konuşmaların sana ait",
    description:
      "Paylaştığın her şey yalnızca sana yardımcı olmak için kullanılır; kimseyle paylaşılmaz.",
  },
  {
    id: "delete",
    title: "İstediğin an silersin",
    description:
      "Bir konuşmayı ya da tüm verilerini tek dokunuşla silebilirsin. Soru sormayız.",
  },
  {
    id: "aliases",
    title: "İsimleri gizleyebilirsin",
    description:
      "Dilersen kişi adları yerine takma adlar kullanılır; kimse tanınmaz.",
  },
];

export const NOTIFICATION_INTRO = [
  {
    id: "daily",
    title: "Günlük yansıma",
    description: "Akşam 21:00'de kısa bir soru: bugün nasıl geçti?",
  },
  {
    id: "ready",
    title: "Analizin hazır olduğunda",
    description: "Uzun süren bir analiz bittiğinde tek bir sessiz haber.",
  },
];

// Coach tone/detail/empathy dials. Shared by onboarding step 5 and the
// "Koçunun tarzı" settings screen.
export const COACH_DIALS = [
  {
    id: "directness",
    title: "Doğrudanlık",
    onboardingTitle: "Ne kadar doğrudan?",
    description: "Kimi nazik ister, kimi net. İkisi de tamam.",
    onboardingDescription: "Yumuşak mı söylesin, açık açık mı?",
    options: ["Nazik", "Dengeli", "Doğrudan"],
    defaultValue: 1,
  },
  {
    id: "detail",
    title: "Detay seviyesi",
    onboardingTitle: "Ne kadar detaylı?",
    description: "Kısa özetler mi, derin analizler mi?",
    onboardingDescription: "Kısa bir bakış mı, derinlemesine bir okuma mı?",
    options: ["Kısa özetler", "Dengeli", "Derin analizler"],
    onboardingOptions: ["Kısa özet", "Dengeli", "Derin analiz"],
    defaultValue: 1,
  },
  {
    id: "empathy",
    title: "Empati tonu",
    description: "Zor günlerde biraz daha yumuşak olabilir.",
    options: ["Az", "Dengeli", "Yüksek"],
    defaultValue: 1,
    settingsOnly: true,
  },
];

export const PEOPLE = [
  { id: "elif", name: "Elif", relation: "Partnerim", analyses: 8 },
  { id: "mert", name: "Mert", relation: "İş arkadaşım", analyses: 3 },
  { id: "annem", name: "Annem", relation: "Ailem", analyses: 5 },
  { id: "zeynep", name: "Zeynep", relation: "Arkadaşım", analyses: 2 },
];

// The Figma file mocks the same transcript inside all three "Konuşma" frames.
// Elif's conversation keeps that exact transcript; the other two get
// transcripts consistent with their own title and person so the list does not
// read as broken. See README for the full list of deliberate deviations.
export const CONVERSATIONS = [
  {
    id: "aksam-plani",
    title: "Akşam planı hakkında",
    personId: "elif",
    person: "Elif",
    relation: "Partnerim",
    when: "Bugün",
    excerpt: "“Her şey yolunda mı?” mesajının ardındaki gerilim…",
    tag: "Çatışma",
    sensitive: true,
    messages: [
      { from: "Elif", time: "22:41", text: "Her şey yolunda mı?", mine: false },
      { from: "Sen", time: "22:44", text: "Evet, neden sordun?", mine: true },
      {
        from: "Elif",
        time: "22:47",
        text: "Bilmiyorum, biraz uzak gibisin sanki.",
        mine: false,
      },
    ],
  },
  {
    id: "proje-teslim",
    title: "Proje teslim tarihi",
    personId: "mert",
    person: "Mert",
    relation: "İş arkadaşım",
    when: "Dün",
    excerpt: "Pasif agresif tonun fark edilmesi ve yanıt stratejisi…",
    tag: "İş",
    sensitive: true,
    messages: [
      {
        from: "Mert",
        time: "17:12",
        text: "Sunumu bugün göndereceğini sanıyordum, herkes bekliyor.",
        mine: false,
      },
      {
        from: "Sen",
        time: "17:20",
        text: "Teslim tarihini cuma olarak konuşmuştuk, yanlış mı hatırlıyorum?",
        mine: true,
      },
      {
        from: "Mert",
        time: "17:26",
        text: "Neyse, ben hallederim.",
        mine: false,
      },
    ],
  },
  {
    id: "hafta-sonu",
    title: "Hafta sonu ziyareti",
    personId: "annem",
    person: "Annem",
    relation: "Ailem",
    when: "3 gün önce",
    excerpt: "Suçluluk hissi uyandıran ifadelerin analizi…",
    tag: "Aile",
    sensitive: true,
    messages: [
      {
        from: "Annem",
        time: "10:03",
        text: "Bu hafta sonu da gelmiyorsun herhalde.",
        mine: false,
      },
      {
        from: "Sen",
        time: "10:15",
        text: "Bu hafta çok yoğunum, önümüzdeki hafta gelsem olur mu?",
        mine: true,
      },
      {
        from: "Annem",
        time: "10:18",
        text: "Sen bilirsin, biz hep buradayız.",
        mine: false,
      },
    ],
  },
  {
    id: "geri-cekilme",
    title: "Geri çekilme dönemi",
    personId: "zeynep",
    person: "Zeynep",
    relation: "Arkadaşım",
    when: "Geçen hafta",
    excerpt: "Mesafeli davranışların olası anlamları…",
    tag: "Arkadaşlık",
    sensitive: false,
    messages: [
      {
        from: "Zeynep",
        time: "13:40",
        text: "Bu aralar biraz kendime çekilmek istiyorum, kusura bakma.",
        mine: false,
      },
      {
        from: "Sen",
        time: "14:02",
        text: "Anlıyorum, buradayım. Hazır olduğunda konuşuruz.",
        mine: true,
      },
    ],
  },
];

export const CONVERSATION_TABS = [
  "Konuşma",
  "Analiz",
  "Koçluk",
  "Yanıtlar",
  "Yansımalar",
];

export const PATTERNS = [
  {
    id: "late-night",
    metric: "%62",
    title: "Geç saat iletişimi",
    description:
      "Analizlerinin %62'si gece 22:00 sonrası yapılan konuşmalarla ilgili. Bu saatlerdeki mesajlarda yanlış anlaşılma oranı daha yüksek.",
  },
  {
    id: "short-replies",
    metric: "4/5",
    title: "Kısa yanıt kaygısı",
    description:
      "Kısa yanıtları (“tamam”, “iyi”) olumsuz yorumlama eğilimin, son 5 analizin 4'ünde tekrar ediyor.",
  },
  {
    id: "boundaries",
    metric: "+40%",
    title: "Sınır koyma pratiği",
    description:
      "Son iki haftada sınır koyan yanıt seçeneklerini daha sık seçiyorsun. Bu, önceki aya göre belirgin bir değişim.",
  },
];

export const SEARCH_INSIGHTS = [
  { id: "conflict-style", title: "Çatışma tarzın değişiyor" },
  { id: "night-messages", title: "Gece mesajları seni yoruyor" },
];

export const DAILY_PROMPT = {
  question: "Bugün hangi konuşma zihninde kaldı?",
  help: "O konuşmada kendini nasıl ifade ettin? Keşke farklı söyleseydim dediğin bir şey var mı?",
};

export const PAST_REFLECTIONS = [
  {
    id: "today",
    title: "Günlük yansıma",
    when: "Bugün",
    body: "Bugün hangi konuşma zihninde kaldı? O konuşmada kendini nasıl ifade ettin?",
  },
  {
    id: "elif",
    title: "Elif ile konuşma",
    when: "Dün",
    body: "Gerilimi fark edip telefonda konuşmayı önermek iyi bir adımdı. Yazışarak çözmeye çalışmamak bir ilerleme.",
  },
  {
    id: "work",
    title: "İş yerinde sınır",
    when: "2 gün önce",
    body: "Mert'in teslim baskısına sakin bir sınırla yanıt verdin. Bu, kaygılı yanıt döngüsünden çıkış işareti.",
  },
];

export const ANALYSIS_SOURCES = [
  {
    id: "screenshot",
    title: "Ekran görüntüsü yükle",
    description: "Mesajlaşma uygulamasından bir ekran görüntüsü.",
  },
  {
    id: "paste",
    title: "Konuşma yapıştır",
    description: "Mesajları metin olarak kopyala-yapıştır.",
  },
  {
    id: "describe",
    title: "Etkileşimi tarif et",
    description: "Yüz yüze ya da telefonda geçen bir konuşmayı anlat.",
  },
  {
    id: "question",
    title: "Bir soru sor",
    description: "Belirli bir mesaj ya da durum hakkında merak ettiklerin.",
  },
];

export const NOTIFICATION_SETTINGS = [
  {
    id: "daily",
    title: "Günlük yansıma",
    description: "Her akşam 21:00'de kısa, nazik bir davet",
    defaultOn: true,
  },
  {
    id: "ready",
    title: "Analiz hazır",
    description: "Uzun süren analizler tamamlandığında haber ver",
    defaultOn: true,
  },
  {
    id: "weekly",
    title: "Haftalık özet",
    description: "Kalıplarının ve ilerlemelerinin kısa özeti",
    defaultOn: false,
  },
];

export const PLANS = [
  {
    id: "free",
    name: "Ücretsiz",
    price: "0₺",
    current: true,
    features: ["Haftada 3 analiz", "Temel yanıt önerileri", "Günlük yansıma"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "149₺/ay",
    current: false,
    features: [
      "Sınırsız analiz",
      "Koçla sınırsız sohbet",
      "Kalıp ve içgörü raporları",
      "Öncelikli işleme",
    ],
  },
];

export const FAQ = [
  {
    id: "therapy",
    question: "VeYa terapi yerine geçer mi?",
    answer:
      "Hayır. VeYa bir iletişim koçudur; tıbbi ya da psikolojik tavsiye vermez. Kriz durumlarında profesyonel destek almanı öneririz.",
  },
  {
    id: "sharing",
    question: "Konuşmalarım kimlerle paylaşılıyor?",
    answer:
      "Hiç kimseyle. İçeriklerin yalnızca analiz için işlenir ve hesabında saklanır; dilediğin zaman silebilirsin.",
  },
  {
    id: "accuracy",
    question: "Analiz neden yanılabilir?",
    answer:
      "Analizler yazılı metne ve olasılıklara dayanır. Bağlamın tamamını bilemediğimiz için sonuçlar tahmindir.",
  },
];

export const COACH_INTRO_MESSAGES = [
  {
    id: "intro",
    mine: false,
    text: "Merhaba. Buradayım. Aklına takılan neyse anlat, birlikte bakalım — acele etmene gerek yok.",
  },
  {
    id: "user-1",
    mine: true,
    text: "“Her şey yolunda mı?” diye sorması beni tedirgin etti. Kötü bir şey mi ima ediyor?",
  },
  {
    id: "coach-1",
    mine: false,
    text: "Tedirgin olman çok anlaşılır. Mesajın tonu suçlayıcıdan çok temkinli görünüyor; en güçlü ihtimal, karşı tarafın kendi huzursuzluğunu açmaya çalışması. Sence son günlerde onu endişelendiren bir şey oldu mu?",
  },
];

export const USER = {
  name: "Aylin",
  email: "aylin@ornek.com",
};

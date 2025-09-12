const texte = {
  de: {
    titel: "Blühende Akademie",
    erstefrage: "Welche ist staerker? Warum?",
    zweitefrage: "Was für eine Beziehung gibt es inzwischen? Weshalb?",
    drittefrage:
      "Was waere, ob die ganze Fliege, die nur in einem Sommer sterben sind, nicht zerstört wurden? Wieso?",
    simplenote:
      "Willkommen in unserem SimpleNote-Kanal. Bleibe auf dem Laufenden und erfahre mehr!",
    zurbuecher:
      "Sag ein Stichwort und finde es in deinem Telefon, wähl eine Abschnitt und lies!",
    zumtranskript:
      "Lass uns eine kurze Abschnitt vom Transkript des Videos auf Deutsch übersetzen!",
    kahoot: "Kahoot Zeit!",
    suchefaehigkeit: "Wie ist effektive Suche zu machen?",
    gebetuebung: "Namaz Übung! Rezitier laut!",
    gebetauswendiglernen:
      "Zeit, ein Gebet auswendig zu lernen! Zusammen und 7 Mal in der Reihe laut vorlesen!",
    fazit:
      "Lass uns heute, was wir gelernt haben, was wir gefühlen haben, was wir verstanden haben, was wir gedachten haben, als einen kurzen Text im Blog auf Deutsch oder auf Türkisch schreiben!",
  },
  tr: {
    titel: "Medresetü'z Zehra",
    erstefrage: "Hangisi daha güçlü? Neden?",
    zweitefrage: "Şu anda aralarında nasıl bir ilişki var? Neden?",
    drittefrage: "Bir yazda ölen tüm sinekler yok edilmeselerdi ne olurdu? Neden?",
    simplenote:
      "SimpleNote Kanalımıza hoş geldiniz. Güncel kalın ve daha fazla bilgi alın!",
    zurbuecher: "Anahtar kelime söyle, bölüm seç ve oku!",
    zumtranskript:
      "Haydi videonun transkriptinden kısa bir bölümü Almancaya çevirelim!",
    kahoot: "Kahoot Zamanı!",
    suchefaehigkeit: "Etkili arama nasıl yapılır?",
    gebetuebung: "Namaz alıştırması! Yüksek sesle ezberden Kur'an tilaveti!",
    gebetauswendiglernen:
      "Ezberleme zamanı! Birlikte ve sırayla 7 kez yüksek sesle okuyalım!",
    fazit:
      "Bugün öğrendiklerimizi, hissettiklerimizi, anladıklarımızı, düşündüklerimizi, blogda Almanca veya Türkçe olarak kısa bir metin şeklinde yazalım!",
  },
};

function wechselSprache(sprache) {
  for (let elID in texte[sprache]) {
    const el = document.getElementById(elID);

    if (el) {
      el.innerText = texte[sprache][elID];
    }
  }
}

wechselSprache("de");

document.getElementById("sprache").addEventListener("change", function () {
  const sprache = this.value;
  wechselSprache(sprache);
  document.documentElement.lang = sprache; // 'de' oder 'tr'
});

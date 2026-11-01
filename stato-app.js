// ============================================================
//  APP NON ANCORA DISPONIBILI SU GOOGLE PLAY
//  Scrivi qui sotto, tra le parentesi quadre, le app che devono
//  mostrare "Disponibile a breve" invece di "Scarica su Google Play".
//  Quando un'app esce sul Play Store, cancella il suo nome
//  (con le virgolette e la virgola).
//  Nomi possibili: "blockflare", "flicker", "hopbonk", "assistix"
// ============================================================

var PRESTO = ["flicker", "hopbonk", "assistix"];

// ---- da qui in giù non serve toccare niente ----
(function () {
  var en = (document.documentElement.lang || "").indexOf("en") === 0;
  var testo = en ? "Coming soon" : "Disponibile a breve";
  var pulsanti = document.querySelectorAll("a.btn.play[data-app]");
  for (var i = 0; i < pulsanti.length; i++) {
    var a = pulsanti[i];
    if (PRESTO.indexOf(a.getAttribute("data-app")) === -1) continue;
    var s = document.createElement("span");
    s.className = "btn presto";
    s.textContent = testo;
    a.parentNode.replaceChild(s, a);
  }
})();

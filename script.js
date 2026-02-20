console.log("Das Gehirn ist online!");

// 1. Das Element finden (Selektieren)
const button = document.getElementById('theme-btn');

// 2. Eine Funktion definieren, was passieren soll
function wechselModus() {
    // Wir greifen auf den body zu und schalten eine CSS-Klasse um
    document.body.classList.toggle('dark-mode');
    console.log("Modus wurde gewechselt!");
}

// 3. Dem Button sagen: "Hör zu! Wenn du geklickt wirst, führ die Funktion aus."
button.addEventListener('click', wechselModus);
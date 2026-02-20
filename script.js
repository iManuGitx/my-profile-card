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

// 1. Elemente selektieren (ändern sich nicht -> const)
const likeBtn = document.getElementById('like-btn');
const likeDisplay = document.getElementById('like-count');

// 2. Den Startwert festlegen (wird sich ändern -> let)
let count = 0;

// 3. Die Funktion schreiben
likeBtn.addEventListener('click', () => {
    count = count + 1; // Erhöhe den Wert um 1
    likeDisplay.innerText = count; // Schreibe den neuen Wert ins HTML
    
    // Kleiner Bonus: Konsolenausgabe zur Kontrolle
    console.log("Aktuelle Likes: " + count);
});
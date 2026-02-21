// ==========================================
// 1. DATEN INITIALISIEREN (Laden aus Speicher)
// ==========================================

// Likes laden: Wenn nichts im Speicher ist, starte bei 0. 
// Number() ist wichtig, da LocalStorage nur Text speichert.
let count = Number(localStorage.getItem('likes')) || 0;

// Skills laden: Wenn nichts im Speicher ist, nimm die Standard-Liste.
// JSON.parse verwandelt den gespeicherten Text zurück in ein Array.
const savedSkills = localStorage.getItem('mySkills');
const mySkills = savedSkills ? JSON.parse(savedSkills) : ["HTML5", "CSS3", "JavaScript", "Git"];

// ==========================================
// 2. HTML-ELEMENTE SELEKTIEREN
// ==========================================
const skillsContainer = document.getElementById('skills-container');
const skillInput = document.getElementById('skill-input');
const addBtn = document.getElementById('add-skill-btn');
const themeBtn = document.getElementById('theme-btn');
const likeBtn = document.getElementById('like-btn');
const likeDisplay = document.getElementById('like-count');

// ==========================================
// 3. FUNKTIONEN (Die Logik)
// ==========================================

// Zeigt die aktuelle Zahl der Likes an
function updateLikeDisplay() {
    likeDisplay.innerText = count;
}

// Zeichnet die Skill-Badges neu
function renderSkills() {
    skillsContainer.innerHTML = ''; // Container leeren
    
    mySkills.forEach(skill => {
        const badge = document.createElement('span');
        badge.classList.add('badge');
        badge.innerText = skill;
        skillsContainer.appendChild(badge);
    });
}

// ==========================================
// 4. EVENT LISTENER (Die Interaktion)
// ==========================================

// Skill hinzufügen
addBtn.addEventListener('click', () => {
    const newSkill = skillInput.value.trim(); // .trim() entfernt Leerzeichen am Anfang/Ende
    
    if (newSkill !== "") {
        mySkills.push(newSkill); // In die Liste schreiben
        
        // IM SPEICHER SICHERN:
        localStorage.setItem('mySkills', JSON.stringify(mySkills));
        
        renderSkills(); // Anzeige aktualisieren
        skillInput.value = ""; // Eingabefeld leeren
    }
});

// Like-Button
likeBtn.addEventListener('click', () => {
    count++; // Hochzählen
    updateLikeDisplay(); // Anzeige aktualisieren
    
    // IM SPEICHER SICHERN:
    localStorage.setItem('likes', count);
});

// Dark Mode
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ==========================================
// 5. START (Beim Laden der Seite)
// ==========================================
renderSkills();
updateLikeDisplay();
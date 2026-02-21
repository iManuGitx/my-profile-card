// --- 1. DATEN (Zustand der App) ---
const mySkills = ["HTML5", "CSS3", "JavaScript", "Git"];
let count = 0;

// --- 2. ELEMENTE SELEKTIEREN ---
const skillsContainer = document.getElementById('skills-container');
const skillInput = document.getElementById('skill-input');
const addBtn = document.getElementById('add-skill-btn');
const themeBtn = document.getElementById('theme-btn');
const likeBtn = document.getElementById('like-btn');
const likeDisplay = document.getElementById('like-count');

// --- 3. FUNKTIONEN ---

// Funktion: Skills im HTML anzeigen
function renderSkills() {
    // Container leeren
    skillsContainer.innerHTML = ''; 

    // Für jeden Skill im Array ein Element erstellen
    mySkills.forEach(skill => {
        const badge = document.createElement('span');
        badge.classList.add('badge');
        badge.innerText = skill;
        skillsContainer.appendChild(badge);
    });
}

// --- 4. EVENT LISTENER ---

// Skill hinzufügen
addBtn.addEventListener('click', () => {
    const newSkill = skillInput.value;
    if (newSkill !== "") {
        mySkills.push(newSkill);
        renderSkills(); // Neu zeichnen
        skillInput.value = ""; // Input leeren
    }
});

// Dark Mode Toggle
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Like Counter
likeBtn.addEventListener('click', () => {
    count++;
    likeDisplay.innerText = count;
});

// --- 5. INITIALISIERUNG ---
// Diese Zeile sorgt dafür, dass die Skills beim Laden sofort da sind!
renderSkills();
// Nastavení data turnaje (za 14 dní od teď)
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 14);

// Odpočítávání
function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = d.toString().padStart(2, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Logika registrace
let count = 42; // Výchozí počet hráčů
const form = document.getElementById("regForm");
const countDisplay = document.getElementById("playerCount");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Animace zvýšení počtu hráčů
    count++;
    countDisplay.innerText = count;
    
    // Skrytí formuláře a zobrazení úspěchu
    form.style.display = "none";
    successMsg.classList.remove("hidden");

    console.log("Hráč zaregistrován pomocí AI simulace");
});
// العداد التنازلي
function updateCountdown() {
    const targetDate = new Date("June 11, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    document.getElementById('days').innerText = Math.floor(diff / (1000*60*60*24));
    document.getElementById('hours').innerText = Math.floor((diff % (86400000)) / 3600000);
    document.getElementById('minutes').innerText = Math.floor((diff % 3600000) / 60000);
    document.getElementById('seconds').innerText = Math.floor((diff % 60000) / 1000);
}

// عرض المباريات
function displayMatches() {
    const container = document.getElementById('todayMatches');
    if(!container) return;
    
    container.innerHTML = matches.map(match => `
        <div class="match-card">
            <div class="match-teams">
                <span>${match.team1}</span>
                <span>${match.score || 'VS'}</span>
                <span>${match.team2}</span>
            </div>
            <div class="match-info">⏰ ${match.time}</div>
            <div class="match-status">${match.status}</div>
        </div>
    `).join('');
}

// تبديل الوضع
document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

updateCountdown();
setInterval(updateCountdown, 1000);
displayMatches();

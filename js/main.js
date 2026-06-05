// العداد التنازلي لانطلاق كأس العالم 2026
function updateCountdown() {
    const targetDate = new Date("June 11, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

// عرض المباريات بشكل احترافي
function displayMatches() {
    const container = document.getElementById('todayMatches');
    if (!container) return;

    container.innerHTML = matches.map(match => `
        <div class="match-card ${match.status === 'live' ? 'live' : ''}">
            <div class="match-teams">
                <strong>${match.team1}</strong>
                <span class="score">${match.score || 'VS'}</span>
                <strong>${match.team2}</strong>
            </div>
            <div class="match-info">⏰ ${match.time} | المجموعة ${match.group}</div>
            <div class="match-status ${match.status === 'live' ? 'live' : ''}">
                ${match.status === 'live' ? '🔴 مباشر' : match.status === 'finished' ? '✅ انتهت' : '⏳ قادمة'}
            </div>
        </div>
    `).join('');
}

// تبديل الوضع الليلي/النهاري
document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const toggle = document.getElementById('themeToggle');
    toggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// تشغيل كل شيء عند تحميل الصفحة
updateCountdown();
setInterval(updateCountdown, 1000);
displayMatches();

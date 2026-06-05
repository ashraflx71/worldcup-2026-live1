// بيانات المباريات مع أعلام وأسماء حقيقية
const matches = [
    { team1: "🇧🇷 البرازيل", team2: "🇦🇷 الأرجنتين", score: "2-2", time: "20:00", group: "A", status: "live" },
    { team1: "🇫🇷 فرنسا", team2: "🇩🇪 ألمانيا", score: "1-0", time: "18:00", group: "B", status: "finished" },
    { team1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 إنجلترا", team2: "🇪🇸 إسبانيا", score: "", time: "22:00", group: "C", status: "upcoming" },
    { team1: "🇲🇦 المغرب", team2: "🇪🇬 مصر", score: "", time: "20:30", group: "D", status: "upcoming" },
    { team1: "🇵🇹 البرتغال", team2: "🇳🇱 هولندا", score: "", time: "21:00", group: "E", status: "upcoming" },
    { team1: "🇮🇹 إيطاليا", team2: "🇧🇪 بلجيكا", score: "", time: "19:30", group: "F", status: "upcoming" }
];

// ترتيب المجموعات
const groupStandings = {
    "A": [{ name: "البرازيل", points: 4, goals: 5 }, { name: "الأرجنتين", points: 4, goals: 3 }],
    "B": [{ name: "فرنسا", points: 6, goals: 7 }, { name: "ألمانيا", points: 3, goals: 2 }]
};

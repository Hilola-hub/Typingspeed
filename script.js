// ==========================================
// TYPING SPEED GAME
// O‘yin yaratuvchisi: Sultonova Hilola
// ==========================================

// ---------- MATNLAR ----------

const texts = {
    uz: [
        {
            topic: "🌱 Tabiat",
            text: "Tabiat bizning eng katta boyligimizdir. Daraxtlar havoni tozalaydi, daryolar esa hayot uchun zarur bo‘lgan suvni beradi. Biz tabiatni asrashimiz va atrof-muhitga g‘amxo‘rlik qilishimiz kerak."
        },
        {
            topic: "📚 Kitob",
            text: "Kitob o‘qish insonning bilimini oshiradi va tasavvurini kengaytiradi. Har kuni bir necha sahifa kitob o‘qish foydali odatdir. Kitoblar bizga yangi dunyolarni kashf etishga yordam beradi."
        },
        {
            topic: "🎓 Ta'lim",
            text: "Ta'lim inson hayotida muhim o‘rin tutadi. Maktabda biz nafaqat fanlarni, balki do‘stlik, hurmat va mas'uliyatni ham o‘rganamiz. Bilim olish kelajakdagi muvaffaqiyatning asosidir."
        },
        {
            topic: "💻 Texnologiya",
            text: "Zamonaviy texnologiyalar hayotimizni ancha qulaylashtirdi. Internet orqali ma'lumot izlash, masofadan o‘qish va odamlar bilan muloqot qilish mumkin. Texnologiyadan to‘g‘ri foydalanish juda muhim."
        },
        {
            topic: "🌍 Sayohat",
            text: "Sayohat qilish yangi joylarni ko‘rish va turli xalqlarning madaniyatini o‘rganish imkonini beradi. Har bir sayohat inson xotirasida unutilmas taassurot qoldiradi."
        },
        {
            topic: "🏃 Sport",
            text: "Sport bilan shug‘ullanish sog‘liq uchun foydalidir. Muntazam jismoniy mashqlar insonni kuchli va faol qiladi. Har kuni ozgina vaqtni sportga ajratish yaxshi natija beradi."
        },
        {
            topic: "🚀 Kelajak",
            text: "Kelajakda texnologiyalar yanada rivojlanadi. Aqlli shaharlar, zamonaviy transport va yangi kashfiyotlar hayotimizni o‘zgartirishi mumkin. Buning uchun yoshlar yaxshi ta'lim olishi kerak."
        },
        {
            topic: "🤝 Do‘stlik",
            text: "Haqiqiy do‘stlik ishonch va hurmatga asoslanadi. Yaxshi do‘stlar qiyin paytlarda bir-biriga yordam beradi. Do‘stlikni saqlash uchun samimiy va mehribon bo‘lish kerak."
        },
        {
            topic: "🌟 Orzular",
            text: "Har bir insonning o‘z orzulari bor. Orzuga erishish uchun aniq maqsad qo‘yish va muntazam harakat qilish kerak. Kichik qadamlar ham katta natijalarga olib kelishi mumkin."
        },
        {
            topic: "🏆 Muvaffaqiyat",
            text: "Muvaffaqiyatga erishish uchun mehnat, sabr va qat'iyat zarur. Xatolar bizga tajriba beradi. Eng muhimi, qiyinchiliklardan qo‘rqmasdan oldinga intilishdir."
        }
    ],

    en: [
        {
            topic: "🌱 Nature",
            text: "Nature is one of the greatest treasures of our planet. Trees clean the air, while rivers provide water for life. We should protect the environment and take care of the world around us."
        },
        {
            topic: "📚 Books",
            text: "Reading books increases our knowledge and expands our imagination. Reading a few pages every day is a useful habit. Books help us discover new worlds and understand different ideas."
        },
        {
            topic: "🎓 Education",
            text: "Education plays an important role in our lives. At school, we learn not only subjects but also friendship, respect, and responsibility. Knowledge is the foundation of future success."
        },
        {
            topic: "💻 Technology",
            text: "Modern technology has made our lives much easier. We can search for information, study online, and communicate with people around the world. Using technology wisely is very important."
        },
        {
            topic: "🌍 Travel",
            text: "Travelling gives us the opportunity to see new places and learn about different cultures. Every journey creates unforgettable memories and helps us understand the world better."
        },
        {
            topic: "🏃 Sport",
            text: "Doing sports is good for our health. Regular physical activity makes people stronger and more active. Spending a little time on exercise every day can bring great results."
        },
        {
            topic: "🚀 Future",
            text: "Technology will continue to develop in the future. Smart cities, modern transport, and new discoveries may change our lives. Young people need a good education to prepare for this future."
        },
        {
            topic: "🤝 Friendship",
            text: "True friendship is based on trust and respect. Good friends help each other during difficult times. To keep a friendship strong, people should be honest, kind, and supportive."
        },
        {
            topic: "🌟 Dreams",
            text: "Every person has their own dreams. To achieve a dream, we need to set clear goals and work regularly. Even small steps can lead to great results when we never give up."
        },
        {
            topic: "🏆 Success",
            text: "Success requires hard work, patience, and determination. Mistakes give us valuable experience. The most important thing is to keep moving forward and never be afraid of challenges."
        }
    ],

    ru: [
        {
            topic: "🌱 Природа",
            text: "Природа является одним из величайших богатств нашей планеты. Деревья очищают воздух, а реки дают воду для жизни. Мы должны беречь окружающую среду и заботиться о мире вокруг нас."
        },
        {
            topic: "📚 Книги",
            text: "Чтение книг увеличивает наши знания и развивает воображение. Читать несколько страниц каждый день — полезная привычка. Книги помогают нам открывать новые миры и понимать разные идеи."
        },
        {
            topic: "🎓 Образование",
            text: "Образование играет важную роль в нашей жизни. В школе мы изучаем не только предметы, но и дружбу, уважение и ответственность. Знания являются основой будущего успеха."
        },
        {
            topic: "💻 Технологии",
            text: "Современные технологии сделали нашу жизнь намного удобнее. Мы можем искать информацию, учиться онлайн и общаться с людьми со всего мира. Очень важно правильно использовать технологии."
        },
        {
            topic: "🌍 Путешествия",
            text: "Путешествия дают нам возможность увидеть новые места и узнать о разных культурах. Каждая поездка оставляет незабываемые воспоминания и помогает лучше понять мир."
        },
        {
            topic: "🏃 Спорт",
            text: "Занятия спортом полезны для здоровья. Регулярная физическая активность делает человека сильнее и активнее. Даже небольшое количество времени, посвящённое спорту каждый день, приносит хорошие результаты."
        },
        {
            topic: "🚀 Будущее",
            text: "В будущем технологии будут продолжать развиваться. Умные города, современный транспорт и новые открытия могут изменить нашу жизнь. Молодым людям необходимо хорошее образование для подготовки к будущему."
        },
        {
            topic: "🤝 Дружба",
            text: "Настоящая дружба основана на доверии и уважении. Хорошие друзья помогают друг другу в трудные времена. Чтобы сохранить дружбу, нужно быть честным, добрым и внимательным."
        },
        {
            topic: "🌟 Мечты",
            text: "У каждого человека есть свои мечты. Чтобы достичь мечты, нужно поставить ясные цели и регулярно работать. Даже маленькие шаги могут привести к большим результатам."
        },
        {
            topic: "🏆 Успех",
            text: "Для достижения успеха необходимы труд, терпение и решительность. Ошибки дают нам ценный опыт. Самое главное — продолжать двигаться вперёд и не бояться трудностей."
        }
    ]
};


// ---------- O‘YIN HOLATI ----------

let currentLanguage = "uz";
let currentLevel = 1;
let currentText = "";
let startTime = null;
let timerInterval = null;
let gameFinished = false;
let totalTyped = 0;
let correctTyped = 0;


// ---------- ELEMENTLAR ----------

const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const languageSelect = document.getElementById("languageSelect");
const levelGrid = document.getElementById("levelGrid");
const typingInput = document.getElementById("typingInput");
const textDisplay = document.getElementById("textDisplay");

const timeDisplay = document.getElementById("timeDisplay");
const wpmDisplay = document.getElementById("wpmDisplay");
const accuracyDisplay = document.getElementById("accuracyDisplay");
const progressBar = document.getElementById("progressBar");


// ---------- DARAJALAR ----------

const difficulties = [
    "Oson",
    "Oson",
    "Oson",
    "O‘rtacha",
    "O‘rtacha",
    "O‘rtacha",
    "Qiyin",
    "Qiyin",
    "Juda qiyin",
    "Usta"
];

function createLevelButtons() {
    levelGrid.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const button = document.createElement("button");
        button.className = "level-btn";

        button.innerHTML = `
            <span class="number">${i}</span>
            <span class="difficulty">${difficulties[i - 1]}</span>
        `;

        button.addEventListener("click", () => startGame(i));

        levelGrid.appendChild(button);
    }
}


// ---------- EKRAN ALMASHTIRISH ----------

function showScreen(screen) {
    menuScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    screen.classList.add("active");
}


// ---------- O‘YINNI BOSHLASH ----------

function startGame(level) {
    currentLanguage = languageSelect.value;
    currentLevel = level;

    const selectedText = texts[currentLanguage][level - 1];
    currentText = selectedText.text;

    document.getElementById("gameLevel").textContent =
        `${level}-daraja`;

    document.getElementById("gameTopic").textContent =
        selectedText.topic;

    showScreen(gameScreen);

    resetGame();
}


// ---------- O‘YINNI QAYTA BOSHLASH ----------

function resetGame() {
    clearInterval(timerInterval);

    startTime = null;
    gameFinished = false;
    totalTyped = 0;
    correctTyped = 0;

    typingInput.value = "";
    typingInput.disabled = false;

    timeDisplay.textContent = "0:00";
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "100%";
    progressBar.style.width = "0%";

    renderText();

    setTimeout(() => typingInput.focus(), 300);
}


// ---------- MATNNI KO‘RSATISH ----------

function renderText() {
    const typedText = typingInput.value;

    textDisplay.innerHTML = "";

    for (let i = 0; i < currentText.length; i++) {
        const span = document.createElement("span");
        span.textContent = currentText[i];

        if (i < typedText.length) {
            if (typedText[i] === currentText[i]) {
                span.className = "correct";
            } else {
                span.className = "incorrect";
            }
        } else if (i === typedText.length) {
            span.className = "current";
        }

        textDisplay.appendChild(span);
    }
}


// ---------- VAQTNI FORMATLASH ----------

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}


// ---------- STATISTIKANI YANGILASH ----------

function updateStats() {
    if (!startTime) return;

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const minutes = elapsedSeconds / 60;

    const typedText = typingInput.value;

    totalTyped = typedText.length;

    correctTyped = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === currentText[i]) {
            correctTyped++;
        }
    }

    const accuracy = totalTyped > 0
        ? Math.round((correctTyped / totalTyped) * 100)
        : 100;

    const words = typedText.trim()
        ? typedText.trim().split(/\s+/).length
        : 0;

    const wpm = minutes > 0
        ? Math.round(words / minutes)
        : 0;

    timeDisplay.textContent = formatTime(elapsedSeconds);
    wpmDisplay.textContent = wpm;
    accuracyDisplay.textContent = `${accuracy}%`;

    const progress = Math.min(
        (typedText.length / currentText.length) * 100,
        100
    );

    progressBar.style.width = `${progress}%`;
}


// ---------- TYPING INPUT ----------

typingInput.addEventListener("input", () => {
    if (gameFinished) return;

    if (!startTime) {
        startTime = Date.now();

        timerInterval = setInterval(() => {
            updateStats();
        }, 100);
    }

    renderText();
    updateStats();

    if (typingInput.value.length >= currentText.length) {
        finishGame();
    }
});


// ---------- O‘YINNI YAKUNLASH ----------

function finishGame() {
    if (gameFinished) return;

    gameFinished = true;
    clearInterval(timerInterval);

    typingInput.disabled = true;

    updateStats();

    const typedText = typingInput.value;

    const elapsedSeconds = startTime
        ? (Date.now() - startTime) / 1000
        : 0;

    const minutes = elapsedSeconds / 60;

    const words = currentText.trim()
        ? currentText.trim().split(/\s+/).length
        : 0;

    const wpm = minutes > 0
        ? Math.round(words / minutes)
        : 0;

    let correct = 0;

    for (let i = 0; i < currentText.length; i++) {
        if (typedText[i] === currentText[i]) {
            correct++;
        }
    }

    const accuracy = currentText.length > 0
        ? Math.round((correct / currentText.length) * 100)
        : 0;

    const rating = calculateRating(wpm, accuracy);

    showResult(wpm, elapsedSeconds, accuracy, words, rating);
}


// ---------- BAHO QO‘YISH ----------

function calculateRating(wpm, accuracy) {
    // Tezlik va aniqlik asosida 1–5 baho

    if (accuracy < 70) return 1;
    if (accuracy < 80) return 2;
    if (accuracy < 90) return 3;

    if (accuracy >= 95 && wpm >= 45) return 5;
    if (accuracy >= 90 && wpm >= 25) return 4;

    return 3;
}


// ---------- NATIJANI KO‘RSATISH ----------

function showResult(wpm, seconds, accuracy, words, rating) {
    document.getElementById("resultRating").textContent =
        `${rating}/5 ⭐`;

    document.getElementById("resultWpm").textContent =
        `${wpm} WPM`;

    document.getElementById("resultTime").textContent =
        formatTime(seconds);

    document.getElementById("resultAccuracy").textContent =
        `${accuracy}%`;

    document.getElementById("resultWords").textContent =
        words;

    const messages = {
        5: "Ajoyib natija! Siz juda tez va aniq yozasiz! 🚀",
        4: "Juda yaxshi! Yana ozgina mashq qilsangiz, 5 baho olasiz! 🌟",
        3: "Yaxshi natija! Tezlik va aniqlikni oshirishda davom eting! 💪",
        2: "Yaxshi harakat! Ko‘proq mashq qilish sizga yordam beradi! 📚",
        1: "Mashq qilishda davom eting! Har bir urinish sizni yaxshilaydi! 🌱"
    };

    document.getElementById("resultMessage").textContent =
        messages[rating];

    saveBestScore(wpm);

    showScreen(resultScreen);
}


// ---------- ENG YAXSHI NATIJA ----------

function saveBestScore(wpm) {
    const key = `typingBest_${currentLanguage}`;
    const oldBest = Number(localStorage.getItem(key)) || 0;

    if (wpm > oldBest) {
        localStorage.setItem(key, wpm);
    }

    updateBestScore();
}

function updateBestScore() {
    const best = Number(
        localStorage.getItem(`typingBest_${languageSelect.value}`)
    ) || 0;

    document.getElementById("menuBestScore").textContent =
        `${best} WPM`;
}


// ---------- TUGMALAR ----------

document.getElementById("backBtn").addEventListener("click", () => {
    clearInterval(timerInterval);
    showScreen(menuScreen);
    updateBestScore();
});

document.getElementById("restartBtn").addEventListener("click", () => {
    resetGame();
});

document.getElementById("playAgainBtn").addEventListener("click", () => {
    startGame(currentLevel);
});

document.getElementById("menuBtn").addEventListener("click", () => {
    showScreen(menuScreen);
    updateBestScore();
});

languageSelect.addEventListener("change", () => {
    updateBestScore();
});


// ---------- BOSHLANG‘ICH ISHGA TUSHIRISH ----------

createLevelButtons();
updateBestScore();
const landingPage = document.querySelector(".landing-page");
const studyPage = document.querySelector(".study-page");
const quizPage = document.querySelector(".quiz-page");
const questionElement = document.getElementById("question");
const questionImage = document.getElementById("question-image");
const optionsContainer = document.getElementById("options-container");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupImage = document.getElementById("popup-image");
const popupDescription = document.getElementById("popup-description");
const popupScore = document.getElementById("popup-score");

const questions = [
  {
    question: "Apa yang menarik dari Danau Sadar di Desa Sadar, Barito Selatan?",
    image: "img/danausadar.png",
    options: [
      "Pemandangan laut yang luas",
      "Pesona alam yang terjaga dengan baik",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru"
    ],
    answer: "Pesona alam yang terjaga dengan baik",
    description: "Danau Sadar di Desa Sadar menawarkan pesona alam yang terjaga dengan baik, cocok untuk refreshing bersama keluarga atau rekan.",
    answerImage: "img/danausadar.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Taman Iring Witu menjadi tempat kumpul favorit di Barito Selatan?",
    image: "img/tamaniringwitu.png",
    options: [
      "Spot untuk bermain golf",
      "Suasana asri dan perahu yang melintas di sungai",
      "Pemandangan kota yang megah",
      "Tempat untuk berjemur"
    ],
    answer: "Suasana asri dan perahu yang melintas di sungai",
    description: "Taman Iring Witu di Barito Selatan dikelilingi oleh pohon dan bunga yang menambah keindahan, dengan suasana asri dan perahu yang melintas di sungai menjadikannya tempat santai yang sempurna.",
    answerImage: "img/tamaniringwitu.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang istimewa dari Danau Tahai di Barito Selatan?",
    image: "img/danautahai.png",
    options: [
      "Pemandangan laut yang luas",
      "Gazebo untuk bersantai di pinggiran danau",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru"
    ],
    answer: "Gazebo untuk bersantai di pinggiran danau",
    description: "Danau Tahai di Barito Selatan adalah danau luas yang dikelilingi pepohonan rimbun, dengan jembatan kayu yang memungkinkan pengunjung menikmati danau lebih dekat, dilengkapi banyak gazebo untuk bersantai di pinggiran danau.",
    answerImage: "img/danautahai.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang menarik dari Rumah Betang Nansarunai di Barito Selatan?",
    image: "img/rumahbetangnansarunai.png",
    options: [
      "Pemandangan laut yang luas",
      "Udara sejuk dan keindahan alam yang menenangkan pikiran",
      "Spot untuk bermain ski air",
      "Tempat untuk berjemur"
    ],
    answer: "Udara sejuk dan keindahan alam yang menenangkan pikiran",
    description: "Rumah Betang Nansarunai adalah rumah tradisional Suku Dayak di Barito Selatan, terletak di tengah hutan yang menawarkan udara sejuk dan keindahan alam yang menenangkan pikiran.",
    answerImage: "img/rumahbetangnansarunai.png",
    score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Danau Sanggu terkenal di Barito Selatan?",
    image: "img/danausanggu.png",
    options: [
      "Pemandangan laut yang luas",
      "Perahu atau menyewa sepeda air sambil menikmati udara sejuk di sekitar danau",
      "Spot untuk bermain ski air",
      "Kegiatan memancing yang seru"
    ],
    answer: "Perahu atau menyewa sepeda air sambil menikmati udara sejuk di sekitar danau",
    description: "Danau Sanggu di Barito Selatan terkenal dengan keindahan alamnya yang memukau dan airnya yang jernih, di mana pengunjung dapat menikmati perahu atau menyewa sepeda air sambil menikmati udara sejuk di sekitar danau.",
    answerImage: "img/danausanggu.png",
    score: 20,
    wrongScore: -10
  },
  
  
  // Tambahkan pertanyaan lainnya di sini
];

let currentQuestionIndex = 0;
let skor = 0;

function showQuizPage() {
  landingPage.style.display = "none";
  quizPage.style.display = "block";
  currentQuestionIndex = 0;
  skor = 0;
  displayQuestion();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    popupMessage.textContent = "Jawaban Benar!";
    skor += currentQuestion.score;
  } else {
    popupMessage.textContent = "Jawaban Salah!";
    skor += currentQuestion.wrongScore;
  }
  popupImage.src = currentQuestion.image;
  popupDescription.textContent = currentQuestion.description;
  popupScore.textContent = `Skor Anda: ${skor}`;
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showLandingPage();
  }
}

function showLandingPage() {
  landingPage.style.display = "block";
  quizPage.style.display = "none";
  document.getElementById("skoranda").textContent = `Skor anda : ${skor}`;
}

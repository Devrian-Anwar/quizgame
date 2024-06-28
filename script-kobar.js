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
question: "Siapakah pendiri Istana Kuning di Kotawaringin Barat?",
    image: "img/istanakuning.jpg",
    options: ["Pangeran Ratu Indra Kencana", "Pangeran Ratu Immanudin", "Pangeran Ratu Kutaringin", "Pangeran Ratu Pangkalan Bun"],
    answer: "Pangeran Ratu Immanudin",
    description: "Istana Kuning didirikan pada tahun 1860 oleh Pangeran Ratu Immanudin.",
    answerImage: "img/istanakuning.jpg",
        score: 20,
    wrongScore: -10
  },
  {
    question: "Apa yang membuat Taman Nasional Tanjung Puting terkenal?",
    image: "img/tanjungputing.jpg",
    options: ["Konservasi Harimau", "Konservasi Orangutan", "Konservasi Gajah", "Konservasi Macan Tutul"],
    answer: "Konservasi Orangutan",
    description: "Taman nasional tanjung puting terkenal dengan konservasi orangutannya.",
    answerImage: "img/tanjungputing.jpg",
    score: 20,
    wrongScore: -10
  },
  {
    // 3
    question: "Di mana letak Pantai Kubu?",
    image: "img/pantaikubu.jpg",
    options: ["Desa Kubu", "Desa Keraya", "Desa Kumai", "Desa Pangkalan Bun"],
    answer: "Desa Kubu",
    description: "Pantai Kubu adalah tempat wisata pantai yang terletak di desa kubu",
    answerImage: "img/pantaikubu.jpg",
     score: 20,
    wrongScore: -10
  },
  {
    // 4
    question: "Apa tujuan dibangunnya Tugu Palagan Sambi?",
    image: "img/palagansambi.jpeg",
    options: ["Memperingati persitiwa Desa Keraya", "Merayakan kemenangan militer", "Menghormati para pahlawan gugur", "Meningkatkan pariwisata lokal"],
    answer: "Menghormati para pahlawan gugur",
    description: "Monumen ini dibangun untuk menghormati dan mengenang jasa para pahlawan yang telah gugur dalam memperjuangkan Kemerdekaan Indonesia",
    answerImage: "img/palagansambi.jpeg",
     score: 20,
    wrongScore: -10
  },
  {
    // 5
    question: "Di mana lokasi Pantai Keraya?",
    image: "img/pantaikeraya.jpg",
    options: ["Desa Keraya", "Desa Kubu", "Desa Kumai", "Desa Pangkalan Bun"],
    answer: "Desa Keraya",
    description: "Pantai Keraya adalah tempat wisata pantai yang terletak di desa Keraya",
    answerImage: "img/pantaikeraya.jpg",
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

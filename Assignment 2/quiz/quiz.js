const questionsWithOptions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Spain?",
    options: ["London", "Berlin", "Madrid"],
    answer: "Madrid",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Paris", "Berlin", "Madrid"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of England?",
    options: ["London", "Paris", "Berlin"],
    answer: "London",
  },
  {
    question: "What is the capital of Italy?",
    options: ["London", "Paris", "Rome"],
    answer: "Rome",
  },
  {
    question: "What is the capital of USA?",
    options: ["Washington", "New York", "Los Angeles"],
    answer: "Washington",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "What is the capital of Bangladesh?",
    options: ["Khulna", "Dhaka", "Chattogram"],
    answer: "Dhaka",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Hiroshima"],
    answer: "Tokyo",
  },
];

const initialPrompt = document.getElementById("initialPrompt");
const qz1 = document.getElementById("qz1");
const qz2 = document.getElementById("qz2");
const num = document.getElementById("num");
qz1.style.display = "none";
qz2.style.display = "none";
// initialPrompt.style.display = "none";

function getRandomElements(arr, n) {
  if (n > arr.length) {
    throw new Error("Cannot select more elements than are in the array");
  }

  let shuffled = arr.slice(); // Make a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }

  return shuffled.slice(0, n);
}

let randomQuestions = [];
let currentQuestion = 0;
let score = 0;

function setQuestion() {
  document.getElementById("current-ques").innerHTML = currentQuestion + 1;
  document.getElementById("a1").checked = false;
  document.getElementById("a2").checked = false;
  document.getElementById("a3").checked = false;

  document.getElementById("question").innerHTML =
    randomQuestions[currentQuestion].question;
  document.getElementById("optA").value =
    randomQuestions[currentQuestion].options[0];
  document.getElementById("optA").innerHTML =
    randomQuestions[currentQuestion].options[0];
  document.getElementById("optB").value =
    randomQuestions[currentQuestion].options[1];
  document.getElementById("optB").innerHTML =
    randomQuestions[currentQuestion].options[1];
  document.getElementById("optC").value =
    randomQuestions[currentQuestion].options[2];
  document.getElementById("optC").innerHTML =
    randomQuestions[currentQuestion].options[2];
}

document.getElementById("startQuiz").addEventListener("click", function () {
  // console.log(num.value);
  const numQuestions = num.value;
  document.getElementById("total-ques").innerHTML = numQuestions;

  randomQuestions = getRandomElements(questionsWithOptions, numQuestions);
  console.log(randomQuestions);

  setQuestion();

  initialPrompt.style.display = "none";
  qz1.style.display = "block";
  qz2.style.display = "flex";
  // generateQuiz(questionsWithOptions);
});

document.getElementById("next").addEventListener("click", function () {
  let selectedOption = document.querySelector('input[name="a1"]:checked');
  if (selectedOption === null) {
    alert("Please select an option");
    return;
  } else {
    randomQuestions[currentQuestion].selected =
      randomQuestions[currentQuestion].options[parseInt(selectedOption.value)];
    if (
      randomQuestions[currentQuestion].selected ===
      randomQuestions[currentQuestion].answer
    ) {
      score++;
    }
  }

  currentQuestion++;
  if (currentQuestion < randomQuestions.length && selectedOption !== null) {
    console.log(selectedOption.value);
    setQuestion();
  } else {
    qz1.style.display = "none";
    qz2.style.display = "none";
    document.getElementById("result").style.display = "flex";
    document.getElementById("correct").innerHTML = score;
    document.getElementById("total").innerHTML = randomQuestions.length;
    document.getElementById("percentage").innerHTML = (
      (score / randomQuestions.length) *
      100
    ).toFixed(2);
    
    // Display the result for each question
    for (let i = 0; i < randomQuestions.length; i++) {
      const resultDiv = document.createElement("div");
      const questionDiv = document.createElement("div");
      const guessDiv = document.createElement("div");
      const correctnessDiv = document.createElement("div");

      questionDiv.textContent = `Question ${i + 1}: ${randomQuestions[i].question}`;
      guessDiv.textContent = `You guessed ${randomQuestions[i].selected}`;
      correctnessDiv.textContent = randomQuestions[i].selected === randomQuestions[i].answer ? "CORRECT" : `INCORRECT: the correct answer is ${randomQuestions[i].answer}`;

      resultDiv.appendChild(questionDiv);
      resultDiv.appendChild(guessDiv);
      resultDiv.appendChild(correctnessDiv);

      resultDiv.style = "min-width: 300px;";

      document.getElementById("result").appendChild(resultDiv);
    }

    console.log(randomQuestions);
    // document.getElementById("result").style.display = "block";
    // document.getElementById("result").innerHTML =
    //   "You have completed the quiz!";
  }
});

const questions = [
  {
    question: "Where do we write a link tag to link css to HTML?",
    options: ["in body", "in head", "in title", "in CSS"],
    answer: "B"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Type Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Text Markdown Language"],
    answer: "C"
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    answer: "A"
  },
  {
    question : "What is the full form of CSS?",
    options: ["Creative Style Sheets","Computer Style Sheets"," Colorful Style Sheets","Cascading Style Sheets"],
    answer: "D"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("para-2").innerHTML = q.question;

  // Set label text and ensure radio buttons have the correct values
  const optionValues = ["A", "B", "C", "D"];
  for (let i = 0; i < 4; i++) {
    const radio = document.getElementById("option" + i);
    const label = document.getElementById("label" + i);

    radio.value = optionValues[i]; // Set correct value A/B/C/D
    radio.checked = false;
    label.innerText = q.options[i];
  }
}

function correctAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option");
    return;
  }

  const selectedValue = selectedOption.value;
  const correctValue = questions[currentQuestion].answer;

  if (selectedValue === correctValue) {
    document.getElementById("container").style.display = "none";
    document.getElementById("resultContent").style.display = "block";
  } else {
    alert("Wrong answer! Try again.");
  }
}

function goBack() {
  document.getElementById("resultContent").style.display = "none";
  document.getElementById("container").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= 4) {
     goBack();
    document.getElementById("resultContent").style.display = "none";
    document.getElementById("quizbox").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  } else {
    loadQuestion();
    document.getElementById("container").style.display = "block";
    document.getElementById("resultContent").style.display = "none";
  }
}

// Load first question when the page loads
window.onload = loadQuestion;

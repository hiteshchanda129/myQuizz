window.onload = function () {
  show(0);
};

let questions = [
  {
    id: 1,
    question: "what is the full form of ram ?",
    answer: "random access memory",
    options: [
      "random access memory",
      "randomly access memory",
      "run accept memory",
      "none of these",
    ],
  },
  {
    id: 1,
    question: "what is the full form of CPU ?",
    answer: "central processing unit",
    options: [
      "random access memory",
      "central processing unit",
      "run accept memory",
      "none of these",
    ],
  },
  {
    id: 2,
    question: "what is the full form of E-mail ?",
    answer: "Electroic mail",
    options: [
      "random access memory",
      "randomly access memory",
      "Electroic mail",
      "none of these",
    ],
  },
  {
    id: 3,
    question: "what is the full form of gui ?",
    answer: "graphical user interface",
    options: [
      "graphical user interface",
      "randomly access memory",
      "run accept memory",
      "none of these",
    ],
  },
  {
    id: 4,
    question: "what is the full form of hdd ?",
    answer: "hard disk drive",
    options: [
      "hard disk drive",
      "randomly access memory",
      "run accept memory",
      "none of these",
    ],
  },
];

function submitform(e) {
  e.preventDefault();
  var name = document.forms["welcome_form"]["userName"].value;
  // store player name
  sessionStorage.setItem("name", name);
  location.href = "main_quiz.html";
}
// counter total points
var counter_points = 0;

//get data from local storage

let username = sessionStorage.getItem("name");
usernameUpper = username.toUpperCase();
document.querySelector(".username").innerText = `Welcome ${usernameUpper} !`;

// while clicking start counter
let clickNextBtn = document.querySelector(".btn-next");
clickNextBtn.addEventListener("click", next);

var question_counter = 0;
function next() {
  question_counter++;
  console.log(question_counter);
  show(question_counter);
  let correctAns = document.querySelector(".correctAnswer");
  correctAns.innerHTML = ` `;
}

function show(counter) {
  var question_container = document.getElementById("questions");
  question_container.innerHTML = `<h2> ${questions[counter].question} </h2>
                   <ul class="option_group">
                        <li class="option option2">${questions[counter].options[0]}</li>
                        <li class="option option2">${questions[counter].options[1]}</li>
                        <li class="option option2">${questions[counter].options[2]}</li>
                        <li class="option option2">${questions[counter].options[3]}</li>
                    </ul>`;

  document.querySelectorAll(".option").forEach((item) => {
    item.addEventListener("click", (event) => {
      let clicked_target = event.target.innerText;
      console.log(clicked_target);

      //compare answer is matching or not
      if (clicked_target == questions[counter].answer) {
        item.style.backgroundColor = "green";
        item.style.color = "white";
        counter_points++;
      } else {
        let correctAns = document.querySelector(".correctAnswer");
        correctAns.innerHTML = `Answer : ${questions[counter].answer}`;
        item.style.backgroundColor = "red";
        item.style.color = "white";
      }
    });
  });
  let counter_part = document.querySelector(".counterPoint");
  counter_part.innerHTML = `<h4>${counter_points} / 5</h4>`;
}

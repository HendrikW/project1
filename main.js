const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', startQuiz);

let currentQuestionNumber = 0;
// const shuffledQuestions = 0;
// const questionElement = document.getElementById('question')
// const answerElement =document.getElementById('choices')

// Questions

const questions = [
  {
    question: 'Who invented JavaScript?',
    answers: [
      { name: 'Douglas Crockford' },
      { name: 'Sheryl Sandberg' },
      { name: 'Brendan Eich', correct: true },
      { name: 'Random name' }
    ],
    topic: 'Introduction JS'
  },
  {
    question: 'Which one of these is a JavaScript package manager?',
    answers: [
      { name: 'Node.js' },
      { name: 'TypeScript' },
      { name: 'npm', correct: true },
      { name: 'Random name' }
    ],
    topic: 'Introduction JS'
  },
  {
    question: 'Which tool can you use to ensure code quality??',
    answers: [
      { name: 'Angular' },
      { name: 'jQuery' },
      { name: 'RequireJS' },
      { name: 'ESLint', correct: true }
    ],
    topic: 'Introduction JS'
  },
  {
    question: 'Which tool can you use to ensure code quality??',
    image: 'code-editoren-t.jpg',
    answers: [
      { name: 'Angular', correct: true },
      { name: 'jQuery' },
      { name: 'RequireJS' },
      { name: 'ESLint' }
    ],
    topic: 'Introduction JS'
  }
];

// Counter of questions "Progress"

function showProgress() {
  let element = document.getElementById('progress');
  element.innerHTML =
    'Question ' + (currentQuestionNumber + 1) + ' of ' + questions.length;
}

//show answers

function showChoices() {
  let choices = questions[currentQuestionNumber].answers;
  for (let i = 0; i < choices.length; i++) {
    // let span = document.getElementById('choice' + i);
    // let choiceButton = document.getElementById('btn' + i);
    let choiceButton = document.getElementById('btn'+i)
choiceButton.addEventListener('click',showNextButton)
    let choiceContent = document.getElementById('choice' +i)
    choiceContent.innerText = choices[i].name;
    // if(choices[i].selected) {
    //   span.innerText += " - selected";
    // }
    // choiceButton.addEventListener('click', function() {
    //   onChoiceButtonClick(i);
    //  choiceButton.addEventListener('click',showNextButton)
    };
  }


// function onChoiceButtonClick(chosenAnswer) {
//   showNextButton();
//   saveTheAnswer(chosenAnswer);
// }


// Topic Header Input HTML
const topicQuestion = document.getElementById('topic');
topicQuestion.innerHTML = questions[currentQuestionNumber].topic;

// show Questions
function showQuestions() {
  let element = document.getElementById('question');
  element.innerHTML = questions[currentQuestionNumber].question;


}

const nextButton = document.getElementById('next-btn');
// const backButton = document.getElementById('back-btn');

// onclick of button-next go to the next question and save the answer
nextButton.addEventListener('click', showNextQuestion);

// backButton.addEventListener('click', showPreviousQuestion);

function showPreviousQuestion() {
  currentQuestionNumber = currentQuestionNumber - 1;
  showQuestions();
  showChoices();
  hideNextButton();

  if (currentQuestionNumber > 0) {
    showBackButton();
  }

  if (currentQuestionNumber >= questions.length - 1) {
    hideNextButton();
  }
  showProgress();
}

function showNextQuestion() {
// showQuestions(shuffledQuestions[currentQuestionNumber])


  let element = document.getElementById('question');
  element.innerHTML = questions[currentQuestionNumber +1].question;
  // currentQuestionNumber = currentQuestionNumber + 1;
  showQuestions();
  showChoices();
  hideNextButton();
  showProgress();
}

// submit Button
// const submitButton = getElementById('submit')

// submitButton.addEventListener('click', showResults)



// save the answer if clicked
function saveTheAnswer(chosenAnswer) {

  for(let i = 0; i<4; i++) {
    questions[currentQuestionNumber].answers[i].selected = false;
    if(i != chosenAnswer) {
      document.getElementById('choice' + i).innerText = questions[currentQuestionNumber].answers[i].name
    }
  }

  questions[currentQuestionNumber].answers[chosenAnswer].selected = true;

  document.getElementById('choice' + chosenAnswer).innerText = questions[currentQuestionNumber].answers[chosenAnswer].name + " - selected";
}

// Is Choice Selected? 
// function isChoiceSelected() {
//   let choice0 = document.getElementById('btn0');
//   let choice1 = document.getElementById('btn1');
//   let choice2 = document.getElementById('btn2');
//   let choice3 = document.getElementById('btn3');
// }




function startQuiz() {
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('start').style.display = 'none';
  showProgress();

  // shuffledQuestions = questions.sort(()=> Math.random()-.5)
  currentQuestionNumber = 0;
  showQuestions();
  showChoices();
  hideBackButton();
  hideNextButton();
}


function showBackButton() {
  document.getElementById('back-btn').style.display = 'block';
}

function hideBackButton() {
  document.getElementById('back-btn').style.display = 'none';
}

function hideNextButton() {
  document.getElementById('next-btn').style.display = 'none';
}

function showNextButton() {
  document.getElementById('next-btn').style.display = 'none';
}


// Timer
// let minutesLabel = document.getElementById('minutes');
// let secondsLabel = document.getElementById('seconds');
// let totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//   ++totalSeconds;
//   secondsLabel.innerHTML = pad(totalSeconds % 60);
//   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//   let valString = val + '';
//   if (valString.length < 2) {
//     return '0' + valString;
//   } else {
//     return valString;
//   }
// }




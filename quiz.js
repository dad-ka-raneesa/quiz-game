const { stdin, stdout } = process;
const { getQuestions } = require("./getRandomQuestions.js");
stdin.setRawMode(true);
stdin.setEncoding("utf8");

let setTime;

let displayQs = function() {
  let currentQuestion = this.questionsList[this.questionNo];
  let options = currentQuestion.options;

  stdout.write(`${this.questionNo + 1}.${currentQuestion.question}\n`);
  stdout.write(
    `a.${options.a}\nb.${options.b}\nc.${options.c}\nd.${options.d}\n`
  );

  setTime = setTimeout(() => {
    console.log("\n-------timeout-----");
    giveNextQn(this);
  }, 15000);
};

const answerChecking = function(answer, quizDetails) {
  if (answer == quizDetails.questionsList[quizDetails.questionNo].answer) {
    let score = ++quizDetails.score;
    console.log(`score is ${score}\nyour answer is correct`);
  } else {
    console.log(`score is ${quizDetails.score}\nyour answer is wrong`);
  }

  giveNextQn(quizDetails);
};

const giveNextQn = function(quizDetails) {
  let questionNo = ++quizDetails.questionNo;

  if (questionNo < quizDetails.questionsList.length) {
    displayQs.call(quizDetails);
  } else {
    process.exit(quizDetails.score);
  }
};

const main = function() {
  let questionsList = getQuestions();
  let quizDetails = { score: 0, questionNo: 0, questionsList };
  displayQs.call(quizDetails);

  stdin.on("data", UserInput => {
    clearTimeout(setTime);
    let answer = UserInput.trim();
    answerChecking(answer, quizDetails);
  });
};

main();

process.on("exit", score =>
  console.log(`score is ${score}\n-------Quiz over------\n---- Thank You-----`)
);

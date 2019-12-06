const { stdin, stdout } = process;
const { getQuestions } = require("./getRandomQuestions.js");
stdin.setRawMode(true);
stdin.setEncoding("utf8");

let questionsList = getQuestions();
let score = 0;
let questionNo = 0;
let setTime;

let displayQs = function(questionNo) {
  let question = questionsList[questionNo];
  stdout.write(`${question.question}\n`);
  let options = question.options;
  stdout.write(
    `a.${options.a}\nb.${options.b}\nc.${options.c}\nd.${options.d}\n`
  );
  setTime = setTimeout(() => {
    console.log("\n-------timeout-----");
    giveNextQn();
  }, 30000);
};

const answerChecking = function(answer) {
  if (answer == questionsList[questionNo].answer) {
    score++;
    console.log(`score is ${score}\nyour answer is correct`);
  } else {
    console.log(`score is ${score}\nyour answer is wrong`);
  }
  giveNextQn();
};

const giveNextQn = function() {
  questionNo++;
  if (questionNo < questionsList.length) {
    displayQs(questionNo);
  } else {
    process.exit(0);
  }
};

stdin.on("data", UserInput => {
  clearTimeout(setTime);
  let answer = UserInput.trim();
  answerChecking(answer);
});

const main = function() {
  displayQs(questionNo);
};

main();

process.on("exit", () =>
  console.log(`score is ${score}\n-------Quiz over------\n---- Thank You-----`)
);

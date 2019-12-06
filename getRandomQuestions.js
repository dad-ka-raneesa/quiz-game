const getRandomNum = function(rangeNum) {
  return Math.floor(Math.random() * rangeNum);
};

//const num = getRandomNum(43);
//console.log(num);
const getRandomIndices = function(rangeOfQs, noOfQs) {
  const rangeNum = rangeOfQs;
  let randomIndices = [];
  while (randomIndices.length < noOfQs) {
    const num = getRandomNum(rangeNum);
    if (!randomIndices.includes(num)) {
      randomIndices.push(num);
    }
  }
  return randomIndices;
};

//let numArray = getRandomIndices(10, 5);
//console.log(numArray);
const getQuestions = function() {
  const questions = require("./questionsAndAnswers.json");
  //console.log(questions.length);

  const questionIndices = getRandomIndices(30, 10);
  // console.log(questionIndices);

  return questionIndices.map(idx => questions[idx]);
};
//const questionsList = getQuestions();
//console.log(questionsList);
exports.getQuestions = getQuestions;

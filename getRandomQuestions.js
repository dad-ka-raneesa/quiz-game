const getRandomNum = function(rangeNum) {
  return Math.floor(Math.random() * rangeNum);
};

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

const getQuestions = function() {
  const questions = require("./questionsAndAnswers.json");
  const questionIndices = getRandomIndices(30, 10);
  return questionIndices.map(idx => questions[idx]);
};

exports.getQuestions = getQuestions;

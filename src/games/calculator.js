import { getRandomNumber, playGame } from '..';

const gameText = 'What is the result of the expression?';
const MAX_NUM = 100;
const MAX_OPERATIONS = 3; // +, -, *

const getCorrectAnswer = (num1, num2, operationNum) => {
  switch (operationNum) {
    case 1:
      return num1 * num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 + num2;
    default:
      throw new Error(`unexpected number ${operationNum}. Max is ${MAX_OPERATIONS}`);
  }
};

const getOperationSign = (operationNum) => {
  switch (operationNum) {
    case 1:
      return '*';
    case 2:
      return '-';
    case 3:
      return '+';
    default:
      throw new Error(`unexpected number ${operationNum}. Max is ${MAX_OPERATIONS}`);
  }
};

const getQuestionData = () => {
  const num1 = getRandomNumber(MAX_NUM);
  const num2 = getRandomNumber(MAX_NUM);
  const operationNum = getRandomNumber(MAX_OPERATIONS);
  const operationSign = getOperationSign(operationNum);
  const correctAnswer = getCorrectAnswer(num1, num2, operationNum);
  return {
    questionText: `${num1} ${operationSign} ${num2}`,
    correctAnswer,
  };
};

export default () => {
  playGame(gameText, getQuestionData);
};

import { getRandomNumber, playGame } from '..';

const gameText = 'What is the result of the expression?';
const MAX_NUM = 100;
const MAX_OPERATIONS = 3; // +, -, *
const CALC_GAME_MAX_STEPS = 3;

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

const getOperationSign = (stepNum) => {
  switch (stepNum) {
    case 1:
      return '*';
    case 2:
      return '-';
    case 3:
      return '+';
    default:
      throw new Error(`unexpected number ${stepNum}. Max is ${MAX_OPERATIONS}`);
  }
};

const getQuestionData = (step) => {
  const num1 = getRandomNumber(MAX_NUM);
  const num2 = getRandomNumber(MAX_NUM);
  const operationSign = getOperationSign(step);
  const correctAnswer = getCorrectAnswer(num1, num2, step);
  return {
    questionText: `${num1} ${operationSign} ${num2}`,
    correctAnswer,
  };
};

const getCalcLogic = () => {
  const calcLogic = (message, param) => {
    switch (message) {
      case 'getDescription':
        return gameText;
      case 'getQuestionData':
        return getQuestionData(param);
      case 'getStepsNum':
        return CALC_GAME_MAX_STEPS;
      default:
        throw new Error(`unknown message ${message}`);
    }
  };
  return calcLogic;
};

export default () => {
  playGame(getCalcLogic());
};

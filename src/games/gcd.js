import { getRandomNumber, playGame } from '..';

const gameText = 'Find the greatest common divisor of given numbers';
const MAX_NUM = 100;

const getCorrectAnswer = (num1, num2) => {
  const euclidIter = (n1, n2) => {
    const remainder = n1 % n2;
    if (remainder === 0) {
      return n2;
    }
    return euclidIter(n2, remainder);
  };

  const preparedNum1 = Math.max(num1, num2);
  const preparedNum2 = Math.min(num1, num2);
  return euclidIter(preparedNum1, preparedNum2);
};

const getQuestionData = () => {
  const num1 = getRandomNumber(MAX_NUM);
  const num2 = getRandomNumber(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num1, num2);
  return {
    questionText: `${num1} ${num2}`,
    correctAnswer,
  };
};

const getGCDLogic = () => {
  const gcdLogic = (message) => {
    switch (message) {
      case 'getDescription':
        return gameText;
      case 'getQuestionData':
        return getQuestionData();
      default:
        throw new Error(`unknown message ${message}`);
    }
  };
  return gcdLogic;
};

export default() => {
  playGame(getGCDLogic());
};

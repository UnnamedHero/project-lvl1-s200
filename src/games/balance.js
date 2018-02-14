import { getRandomNumber, playGame } from '..';

const gameText = 'Balance the given number';
const MAX_NUM = 10000;
const MIN_INDEX = 0;

const getMinNumberIndex = splittedNum => splittedNum.reduce((acc, item, index) =>
  (item < splittedNum[acc] ? index : acc), MIN_INDEX);

const getMaxNumberIndex = splittedNum => splittedNum.reduce((acc, item, index) =>
  (item > splittedNum[acc] ? index : acc), MIN_INDEX);


const balancer = (splittedNum) => {
  const minDigitIndex = getMinNumberIndex(splittedNum);
  const maxDigitIndex = getMaxNumberIndex(splittedNum);
  if (Number(splittedNum[maxDigitIndex]) - Number(splittedNum[minDigitIndex]) <= 1) {
    return splittedNum;
  }
  const newSplittedNum = splittedNum.map((item, index) => {
    if (index === minDigitIndex) {
      return item + 1;
    }
    if (index === maxDigitIndex) {
      return item - 1;
    }
    return item;
  });
  return balancer(newSplittedNum);
};

const getCorrectAnswer = (num) => {
  const splittedNumber = Array.from(num.toString()).map(item => Number(item));
  const balancedNumber = balancer(splittedNumber);
  return balancedNumber.sort().join('');
};

const getQuestionData = () => {
  const num = getRandomNumber(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num);
  return {
    questionText: `${num}`,
    correctAnswer,
  };
};

const getBalanceLogic = () => {
  const balanceLogic = (message) => {
    switch (message) {
      case 'getDescription':
        return gameText;
      case 'getQuestionData':
        return getQuestionData();
      default:
        throw new Error(`unknown message ${message}`);
    }
  };
  return balanceLogic;
};

export default() => {
  playGame(getBalanceLogic());
};
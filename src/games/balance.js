import { getRandomNumber, playGame } from '..';

const gameText = 'Balance the given number';
const MAX_NUM = 10000;
const MIN_INDEX = 0;

const getMinNumberIndex = splittedNum => splittedNum.reduce((acc, item, index) =>
  (item < splittedNum[acc] ? index : acc), MIN_INDEX);

const getMaxNumberIndex = splittedNum => splittedNum.reduce((acc, item, index) =>
  (item > splittedNum[acc] ? index : acc), MIN_INDEX);

const isBalanced = (splittedNum, minDigitIndex, maxDigitIndex) =>
  (Number(splittedNum[maxDigitIndex]) - Number(splittedNum[minDigitIndex]) <= 1);

//  TODO: refactor
const balancer = (splittedNum, minDigitIndex, maxDigitIndex) =>
  splittedNum.map((item, index) => {
    if (index === minDigitIndex) {
      return item + 1;
    }
    if (index === maxDigitIndex) {
      return item - 1;
    }
    return item;
  });

const getBalancedNumber = (splittedNum) => {
  const minDigitIndex = getMinNumberIndex(splittedNum);
  const maxDigitIndex = getMaxNumberIndex(splittedNum);
  if (isBalanced(splittedNum, minDigitIndex, maxDigitIndex)) {
    return splittedNum;
  }
  return getBalancedNumber(balancer(splittedNum, minDigitIndex, maxDigitIndex));
};

const getCorrectAnswer = (num) => {
  const splittedNumber = Array.from(num.toString()).map(item => Number(item));
  const balancedNumber = getBalancedNumber(splittedNumber);
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

export default() => {
  playGame(gameText, getQuestionData);
};

import { getRandomNumber, playGame } from '..';

const gameText = 'Balance the given number';
const MAX_NUM = 10000;
const MIN_INDEX = 0;

const getMinNumberIndex = splittedNum => splittedNum.reduce((acc, item, index) =>
  (item < splittedNum[acc] ? index : acc), MIN_INDEX);

const getMaxNumberIndex = splittedNum => splittedNum.reduce((acc, item, index) =>
  (item > splittedNum[acc] ? index : acc), MIN_INDEX);

const isBalanced = (splitNum, minDigitIndex, maxDigitIndex) =>
  (Number(splitNum[maxDigitIndex]) - Number(splitNum[minDigitIndex]) <= 1);

const balanceNumber = (splitNum, minDigitIndex, maxDigitIndex) =>
  splitNum.map((item, index) => {
    if (index === minDigitIndex) {
      return item + 1;
    }
    if (index === maxDigitIndex) {
      return item - 1;
    }
    return item;
  });

const getBalancedNumber = (splitNum) => {
  const minDigitIndex = getMinNumberIndex(splitNum);
  const maxDigitIndex = getMaxNumberIndex(splitNum);
  if (isBalanced(splitNum, minDigitIndex, maxDigitIndex)) {
    return splitNum;
  }
  return getBalancedNumber(balanceNumber(splitNum, minDigitIndex, maxDigitIndex));
};

const getCorrectAnswer = (num) => {
  const splitNumber = Array.from(num.toString()).map(item => Number(item));
  const balancedNumber = getBalancedNumber(splitNumber);
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

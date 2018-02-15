import { getRandomNumber, playGame } from '..';

const gameText = 'Is this number prime?';
const MAX_NUM = 100;

const isPrimeNumber = (num) => {
  const maxDivisor = Math.floor(num / 2);
  const iter = (currentDivisor) => {
    if (currentDivisor > maxDivisor) {
      return true;
    }
    return num % currentDivisor === 0 ? false : iter(currentDivisor + 1);
  };
  return iter(2);
};

const getCorrectAnswer = num => (isPrimeNumber(num) ? 'yes' : 'no');

const getQuestionData = () => {
  const num = getRandomNumber(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num);
  return {
    questionText: `${num}`,
    correctAnswer,
  };
};

export default() => playGame(gameText, getQuestionData);

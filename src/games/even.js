import { getRandomNumber, playGame } from '..';

const gameText = 'Answer "yes" if number even otherwise answer "no"';
const MAX_NUM = 100;

const isEvenNumber = num => num % 2 === 0;

const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');

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


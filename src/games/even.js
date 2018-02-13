import { getRandomNumber, playGame } from '..';

const gameText = 'Answer "yes" if number even otherwise answer "no"';
const MAX_NUM = 100;
const EVEN_GAME_MAX_STEPS = 3;

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

const getEvenLogic = () => {
  const evenLogic = (message) => {
    switch (message) {
      case 'getDescription':
        return gameText;
      case 'getQuestionData':
        return getQuestionData();
      case 'getStepsNum':
        return EVEN_GAME_MAX_STEPS;
      default:
        throw new Error(`unknown message ${message}`);
    }
  };
  return evenLogic;
};

export default() => {
  playGame(getEvenLogic());
};


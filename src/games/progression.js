import { getRandomNumber, playGame } from '..';

const gameText = 'What number is missing in this progression?';
const PROGRESS_LENGTH = 10;
const MAX_NUM = 10;
const MAX_PROGRESSION_STEP = 30;

const createProgression = (initNum, step) => {
  const createMember = (acc, memberIndex) => {
    if (memberIndex === PROGRESS_LENGTH) {
      return acc;
    }
    const newMember = initNum + (memberIndex * step);
    return createMember([...acc, newMember], memberIndex + 1);
  };
  return createMember([initNum], 1);
};

const getQuestionData = () => {
  const initNum = getRandomNumber(MAX_NUM);
  const progStep = getRandomNumber(MAX_PROGRESSION_STEP);
  const hiddenIndex = getRandomNumber(PROGRESS_LENGTH) - 1;
  const progression = createProgression(initNum, progStep);
  const correctAnswer = progression[hiddenIndex].toString();
  return {
    questionText: `${progression.map((item, index) => (index === hiddenIndex ? '..' : item)).join(' ')}`,
    correctAnswer,
  };
};

export default() => {
  playGame(gameText, getQuestionData);
};

import readlineSync from 'readline-sync';

const GAME_STEPS = 3;

export const showGreetings = (gameText) => {
  console.log('Welcome to the Brain Games!');
  if (gameText) {
    console.log(`${gameText}\n`);
  }
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const getRandomNumber = maxNum => Math.ceil(Math.random() * maxNum);

const getGameDesc = game => game('getDescription');

const getGameQuestionData = (game, currentStep) => game('getQuestionData', currentStep);

export const playGame = (game) => {
  //  const game = abstractGame();
  const gameDesc = getGameDesc(game);
  showGreetings(gameDesc);
  const userName = getUserName();
  const gameIter = (step) => {
    if (step === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { questionText, correctAnswer } = getGameQuestionData(game, step);
    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer.toString() !== userAnswer) {
      const looseText = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(looseText);
      return;
    }
    console.log('Correct!');
    gameIter(step - 1);
  };
  gameIter(GAME_STEPS);
};

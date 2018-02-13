import readlineSync from 'readline-sync';
import { showGreetings, getUserName } from '.';

const MAX_NUM = 100;
const EVEN_GAME_MAX_STEPS = 3;

const getRandomNumber = () => Math.ceil(Math.random() * MAX_NUM);

const isEvenNumber = num => num % 2 === 0;

const startEvenGame = (userName) => {
  const gameIter = (step) => {
    if (step === 0) {
      const winText = `Congratulations, ${userName}!`;
      console.log(winText);
      return;
    }
    const num = getRandomNumber();
    const expectedAnswer = isEvenNumber(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() !== expectedAnswer) {
      const looseText = `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`;
      console.log(looseText);
      return;
    }
    console.log('Correct!');
    gameIter(step - 1);
  };
  gameIter(EVEN_GAME_MAX_STEPS);
};

export default() => {
  const greetingText = 'Answer "yes" if number even otherwise answer "no"';
  showGreetings(greetingText);
  const userName = getUserName();
  startEvenGame(userName);
};


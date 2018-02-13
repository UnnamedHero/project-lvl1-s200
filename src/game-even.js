import readlineSync from 'readline-sync';
import { showGreetings, getUserName } from '.';


const MAX_NUM = 100;
const getRandomNumber = () => Math.ceil(Math.random() * MAX_NUM);

const startEvenGame = (userName) => {
  const gameIter = (step) => {
    if (step === 0) {
      const winText = `Congratulations, ${userName}`;
      console.log(winText);
      return;
    }
    const num = getRandomNumber();
    const expectedAnswer = num % 2 === 0 ? 'yes' : 'no';
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
  gameIter(3);
};

export default() => {
  const greetingText = 'Answer "yes" if number even otherwise answer "no"';
  showGreetings(greetingText);
  const userName = getUserName();
  startEvenGame(userName);
};


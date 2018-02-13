import readlineSync from 'readline-sync';

export default(gameText) => {
  console.log('Welcome to the Brain Games!');
  if (gameText) {
    console.log(gameText);
  }
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

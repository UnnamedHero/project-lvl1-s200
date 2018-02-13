import readlineSync from 'readline-sync';

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

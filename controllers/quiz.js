const images = require('../json/images.json');
const quiz = require('../json/quiz.json');
const Message = require('./message');

module.exports = async (message) => {
  const q = quiz.thanos[Math.floor(Math.random() * quiz.thanos.length)];
  const letter = 97;
  let answers = [], 
      icons = [];
  for (var i = 0; i < q.answers.length; i++) {
    icons.push(`:regional_indicator_${String.fromCharCode(letter + i)}:`);
    answers.push({ name: `Answer ${icons[i]}:`, value: q.answers });
  }
  
  const sendMessage = await Message.createMessage(message, "", q.question, "", answers);
  const emoji = await Message.addEmoji(sendMessage, icons);
  Message.waitReact(sendMessage, icons);

  for (var i = 0; i < icons.length; i++) {
    if (emoji === icons[i]) {
      checkAnswer(message, emoji, q.correct);
    }
  }
}

async function checkAnswer(message, emoji, correct) {
	if (emoji === correct) {
    await Message.createMessage(message, images.quizImages[0], "You got it right!");
    return true;
  }
  await Message.createMessage(message, images.quizImages[1], "You know nothing of me!");
  return false;
}
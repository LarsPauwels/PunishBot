const images = require('../json/images.json');
const Message = require('./message');

module.exports = async (message) => {
  const sendMessage = await message.channel.send(Message.createMessage(images.payImages[0], 'A soul for a soul.'));
  const emoji = await Message.addEmoji(sendMessage, ["💰"]);
  
  if (emoji == "💰") {
  	console.log("Add pay message");
		getInsult(message);
  }
}

async function getInsult(message) {
	await Fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(text => {
    	message.channel.send(Message.createMessage(images.payImages[1], "Price have been payed.", `ps: ${text.insult}`));
    });
}
import * as images from './json/images.json';
import {createMessage, addEmoji} from './message';

async pay(message) {
  const sendMessage = await message.channel.send(createMessage(images.payImages[0], 'A soul for a soul.'));
  const emoji = await addEmoji(sendMessage, ["💰"]);
  
  if (emoji == "💰") {
  	console.log("Add pay message");
		getInsult(message);
  }
}

async getInsult(message) {
	await Fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(text => {
    	message.channel.send(createMessage(images.payImages[1], "Price have been payed.", `ps: ${text.insult}`));
    });
}

exports default pay;
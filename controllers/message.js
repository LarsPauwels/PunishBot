const images = require('../json/images.json');
const Discord = require('discord.js');

async function createMessage(message, image, text, desc = "", fields = []) {
	let newMessage = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle(text)
		.setDescription(desc)
		.setImage(image)
		.setTimestamp()
		.setFooter(`React with ❌ to delete this post.`);

	for (var i = 0; i < fields.length; i++) {
		newMessage.addFields(
			fields[i]
		)
	}

	const sandMessage = await message.channel.send(newMessage);
	await deleteMessage(sandMessage);
	return sandMessage;
}

function deleteMessage(message) {
	const emoji = addEmoji(message, ["❌"]);
	console.log(emoji);
	if (emoji === "❌") {
		if (message.deletable == true) {
			console.log("Delete message");
			message.delete();
		}
	}
}

async function addEmoji(message, icons) {
	for (const reaction of icons) await message.react(reaction);
  const filter = (reaction, user) => icons.includes(reaction.emoji.name) && (!user.bot);

	return message
    .awaitReactions(filter, {
        max: 1,
        time: 42000
    })
    .then(collected => collected.first() && collected.first().emoji.name);
}

module.exports = { createMessage: createMessage, addEmoji: addEmoji };
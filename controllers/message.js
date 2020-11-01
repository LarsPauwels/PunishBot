import * as images from './json/images.json';

createMessage(image, text, desc = "", fields = []) {
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

	deleteMessage(newMessage);

	return newMessage;
}

deleteMessage(message) {
	const emoji = addEmoji(message, ["❌"]);
	if (emoji === "❌") {
		if (message.deletable == true) {
			console.log("Delete message");
			message.delete();
		}
	}
}

async addEmoji(message, $icons) {
	for (const reaction of icons) await message.react(reaction);
  const filter = (reaction, user) => icons.includes(reaction.emoji.name) && (!user.bot);

	return message
    .awaitReactions(filter, {
        max: 1,
        time: 42000
    })
    .then(collected => collected.first() && collected.first().emoji.name);
}

export default {createMessage, addEmoji}
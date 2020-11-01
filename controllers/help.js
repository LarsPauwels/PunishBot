const Message = require('./message');

module.exports = async (message) => {
	const commands = [
		{ name: 'Daddy Command', value: '`Thanos daddy`: Returns appropriate images of our lord and savior Thanos.' },
		{ name: 'Pay Command', value: '`Thanos pay`: Pay with getting your soul crushed or leave.' },
		{ name: 'Punish Command', value: '`Thanos punish`: Send a naughty boy to Thanos Dungeon. (Use @username)' },
		{ name: 'Quiz Command', value: '`Thanos quiz`: Send a question about thanos.' }
	];

	const sendMessage = await message.channel.send(Message.createMessage("", 'PunishMeThanos Command Help', "", commands));
}
const images = require('../json/images.json');
const Message = require('./message');

module.exports = async (message) => {
  const image = images.random[Math.floor(Math.random() * images.random.length)];
  const sendMessage = await message.channel.send(Message.createMessage(image, 'Yes my child!'));
}
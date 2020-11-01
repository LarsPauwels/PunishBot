import * as images from './json/images.json';
import {createMessage} from './message';

export default async (message) => {
  const image = images.random[Math.floor(Math.random() * images.random.length)];
  const sendMessage = await message.channel.send(createMessage(image, 'Yes my child!'));
}
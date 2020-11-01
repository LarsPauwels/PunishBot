import {createMessage} from './message';

async punish(message, Client) {
	const current = this;
	const role = message.guild.roles.cache.find(role => role.name === process.env.ROLE);
	const member = message.mentions.members.first();
	const channel = Client.channels.cache.find(channel => channel.name === process.env.CHANNEL);

	if (member) {
			const currentChannel = member.voice.channelID;
			await message.channel.send(createMessage("*SNAP*", ""));
			await member.roles.add(role).catch(console.error);

			await member.voice.setChannel(channel).then(() => {
				for (const [memberID, member] of channel.members) {
			    member.voice.setMute(true);
			    member.voice.setDeaf(true);
				}

				setTimeout(() => { 
					for (const [memberID, member] of channel.members) {
					    member.voice.setMute(false);
					    member.voice.setDeaf(false);
					}

					member.roles.remove(role).catch(console.error);
					member.voice.setChannel(currentChannel);
				}, process.env.TIME);
			});
		} else {
			await message.channel.send(createMessage("Vanished", "This person already vanished."));
		}
}

exports default punish;
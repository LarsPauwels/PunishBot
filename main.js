const Discord = require('discord.js');
const Client = new Discord.Client();
const command = require('./command');

const images = [
	"https://media1.tenor.com/images/e36fb32cfc3b63075adf0f1843fdc43a/tenor.gif",
	"https://media2.giphy.com/media/XzkGfRsUweB9ouLEsE/giphy.gif",
	"https://images-ext-1.discordapp.net/external/hCE3wap1urY6UE3zBXW4BviCSiHvxXUxcYbv578oaIw/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDQ2IiwicGF0aCI6IlwvZlwvMjdkYWUyOTMtZTA5Yi00ODFjLThiMzEtNzg5YzQzZDQ4ZDJhXC9kZTY4a29qLTRiMDM1OTEyLWExYzgtNGM5Yi1hZDNkLTBlYjFlMzk1NDU5My5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5cMxjTkPvuqQkkEKKT8KPPtKajLqNCYw4vmDVJsrX9E/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/27dae293-e09b-481c-8b31-789c43d48d2a/de68koj-4b035912-a1c8-4c9b-ad3d-0eb1e3954593.jpg/v1/fill/w_1280%2Ch_1046%2Cq_75%2Cstrp/mad_titan_baymax_by_dead82_de68koj-fullview.jpg?width=805&height=658",
	"https://images-ext-1.discordapp.net/external/jrrBqRzbEM8D1msqXIncoHijUD8jtN2mws9cPqF7wP4/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjAiLCJwYXRoIjoiXC9mXC9mZmEyMmMxZC1lZDkxLTQ3ZTktYjg3OC03ZmU5Njg4YzIwMzVcL2RjaHk1bWstNGViZjIzOWItMWRiYy00MmQ4LThmYjgtYWIxYTIzYjQ0M2JmLnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.UE84dOmFhT8NXRvDka7yzHZge3gb5eITyPnL-0w6sJQ/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ffa22c1d-ed91-47e9-b878-7fe9688c2035/dchy5mk-4ebf239b-1dbc-42d8-8fb8-ab1a23b443bf.png/v1/fill/w_900%2Ch_720%2Cq_80%2Cstrp/cable_snap_by_pencilhead7_dchy5mk-fullview.jpg?width=823&height=658",
	"https://images-ext-2.discordapp.net/external/TaQhX6eAYEQXpZ6QB9KvQyLBGTQjmD71MXGtrh5Y5A0/%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTA2IiwicGF0aCI6IlwvZlwvMGE4MDE2MjAtYjBiMS00ZjExLTgyMTktMzE0MWUzYTQ5NDA5XC9kZDZzYnV0LTVjYzYyMGNhLWI4YTctNDM5ZS1iNDZhLTQxZjc2ZjQwZmZlZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.np73OTRhVfnTaANQC6QQ2h-_5XmMtLWJPBDMGNEM2aw/https/images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a801620-b0b1-4f11-8219-3141e3a49409/dd6sbut-5cc620ca-b8a7-439e-b46a-41f76f40ffef.png/v1/fill/w_1280%2Ch_1106%2Cq_80%2Cstrp/thanos___by_celso33_dd6sbut-fullview.jpg?width=762&height=658",
	"https://media1.tenor.com/images/4744c8974f9a286c2982f8784cc0c158/tenor.gif",
	"https://cdn.discordapp.com/attachments/711007902126833704/711012819495026718/images.png",
	"https://cdn.discordapp.com/attachments/711007902126833704/711012718852702208/images.png",
	"https://cdn.discordapp.com/attachments/711007902126833704/711010678650961940/thanos_portrait_front_by_hellboysoto_ddh0osb-fullview.png",
	"https://cdn.discordapp.com/attachments/711007902126833704/711009230454390804/images.png",
	"https://cdn.discordapp.com/attachments/711007902126833704/711009788678373446/dc5gxxo-d5994c4e-0472-45cc-add4-cb0d130949db.png",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e9f348f4-e017-4a33-a56f-2690adc31493/dd8pjwv-fb76a6b1-5238-42fd-82ff-7ca090064b13.jpg/v1/fill/w_1024,h_663,q_75,strp/muffin_snuggling_pirate_puncher_by_cronaj_dd8pjwv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NjMiLCJwYXRoIjoiXC9mXC9lOWYzNDhmNC1lMDE3LTRhMzMtYTU2Zi0yNjkwYWRjMzE0OTNcL2RkOHBqd3YtZmI3NmE2YjEtNTIzOC00MmZkLTgyZmYtN2NhMDkwMDY0YjEzLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.tRYVZIW3zHN1DD4UydUWu-mABAjkjU1dUp_RqYUnZjQ",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db98fdf9-06ad-4108-8878-512d5d1edc9a/dcszhgy-38980b48-9b17-430f-b57a-461b96fb0717.jpg/v1/fill/w_1280,h_1280,q_75,strp/thanos_daddy_pig_by_karrimara_dcszhgy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjgwIiwicGF0aCI6IlwvZlwvZGI5OGZkZjktMDZhZC00MTA4LTg4NzgtNTEyZDVkMWVkYzlhXC9kY3N6aGd5LTM4OTgwYjQ4LTliMTctNDMwZi1iNTdhLTQ2MWI5NmZiMDcxNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.bTvRNxDYJ2x7gsoWP9suqpZR7ZRbAXTYrKDh4F6nwzU",
	"https://pbs.twimg.com/media/Dc54N1pXkAIii5w.jpg",
	"https://pics.me.me/snap-me-daddy-thanos-i-want-to-be-in-the-44056355.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn41qJGXZq0eDUS5yKkVn3cFGMyYskw41nXQ&usqp=CAU",
	"https://pm1.narvii.com/7320/eb0e607b0ec72a258448c55daff9569d37922db7r1-1600-1581v2_uhq.jpg",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/878e586c-b9ef-4573-9b2e-4798703b74b8/dclgvaj-029673c6-a7c7-43ca-b978-2500d6964316.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODc4ZTU4NmMtYjllZi00NTczLTliMmUtNDc5ODcwM2I3NGI4XC9kY2xndmFqLTAyOTY3M2M2LWE3YzctNDNjYS1iOTc4LTI1MDBkNjk2NDMxNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vjPwzjqTagGFiu5lvLdw76noixCVII1BTSzxoWM7OzQ",
	"https://i.redd.it/76bf2xwyj8q31.jpg"
];

class Commands {
	constructor(channelName, roleName, time) {
		this.channelName = channelName;
		this.roleName = roleName;
		this.time = time;
	}

	async punishCommand() {
		const role = message.guild.roles.cache.find(role => role.name === this.roleName);
		const member = message.mentions.members.first();
		const channel = Client.channels.cache.find(channel => channel.name === this.channelName);
		const currentChannel = member.voice.channelID;

		if (member) {
			message.channel.send('*SNAP*', {files: [images[Math.floor(Math.random() * images.length)]]});
			message.guild.channels.cache.forEach(ch => {
				if ((ch.type == "text" || ch.type == "voice" || ch.type == "category") && ch.name !== "Thanos Dungeon") {
					ch.overwritePermissions([{
				    	id: role.id,
				     	deny: [
				     		'SEND_MESSAGES', 
				     		'VIEW_CHANNEL', 
				     		'CREATE_INSTANT_INVITE', 
				     		'KICK_MEMBERS',
				     		'BAN_MEMBERS',
				     		'ADMINISTRATOR',
				     		'MANAGE_CHANNELS',
				     		'MANAGE_GUILD',
				     		'ADD_REACTIONS',
				     		'VIEW_AUDIT_LOG',
				     		'PRIORITY_SPEAKER',
				     		'STREAM',
				     		'SEND_TTS_MESSAGES',
				     		'MANAGE_MESSAGES',
				     		'EMBED_LINKS',
				     		'ATTACH_FILES',
				     		'READ_MESSAGE_HISTORY',
				     		'MENTION_EVERYONE',
				     		'USE_EXTERNAL_EMOJIS',
				     		'VIEW_GUILD_INSIGHTS',
				     		'CONNECT',
				     		'SPEAK',
				     		'MUTE_MEMBERS',
				     		'DEAFEN_MEMBERS',
				     		'MOVE_MEMBERS',
				     		'USE_VAD',
				     		'CHANGE_NICKNAME',
				     		'MANAGE_NICKNAMES',
				     		'MANAGE_ROLES',
				     		'MANAGE_WEBHOOKS',
				     		'MANAGE_EMOJIS'],
				  	},
					], 'Needed to change permissions');
				}
			});

			member.roles.add(role).catch(console.error);
			member.voice.setChannel(channel).then(() => {
				for (const [memberID, member] of channel.members) {
				    member.voice.setMute(true);
				    member.voice.setDeaf(true);
				}

				current.sleep(current.time);
			});
		} else {
			message.channel.send('Choose someone that exists.');
		}
	}

	sleep(ms) {
		setTimeout(() => { 
			for (const [memberID, member] of channel.members) {
			    member.voice.setMute(false);
			    member.voice.setDeaf(false);
			}

			member.roles.remove(role).catch(console.error);
			member.voice.setChannel(currentChannel);
		}, ms);
	}
}

Client.once('ready', () => {
	console.log('Bot started');
	const commands = new Commands(process.env.CHANNEL, process.env.ROLE, process.env.TIME);
	
	command(Client, process.env.PUNISH, message => {
		console.log('Typed punish');
		commands.punishCommand();
	});
});

class Setup {
	constructor(guild, categoryName, channelName, role) {
	    this.guild = guild;
	    this.categoryName = categoryName;
	    this.channelName = channelName;
	    this.role = role;

	    this.createCategory();
	    this.createRole();
	}

	createCategory() {
		const current = this;
		const channel = this.guild.channels.cache.find(c => c.name === this.channelName);
		if (!channel) {
			this.guild.channels
		      	.create(this.categoryName, {
		       	 	type: 'category',
		       	 	permissionsOverwrites: [{
				    	id: current.guild.id,
				    	deny: ['MANAGE_MESSAGES'],
				    	allow: ['SEND_MESSAGES']
				  	}]
		      	})
		      	.then((category) => {
		        	console.log('Category Created ('+category.id+')');
		        	current.createChannel();
		      	})
		      	.catch(console.error);
		}
	}

	createChannel() {
		this.guild.channels
	    	.create(this.channelName, {
	        	type: 'voice',
	      	})
	      	.then((channel) => {
	        	channel.setParent(category.id);
	        	console.log('Channel Created ('+channel.id+')');
	      	})
	      	.catch(console.error);
	}

	createRole() {
		const role = this.guild.roles.cache.find(x => x.name == this.roleName);
	    if(!role) {
		    this.guild.roles.create({
			  	data: {
			    	name: this.roleName,
			    	color: '#800080',
			    	permissions: []
			  	},
			  	reason: 'You did something naughty. Welcome to Thanos Dungeon',
			})
		  	.then(role => {
		  		console.log('Rol Created');
		  		role.setPermissions([
		  			'CREATE_INSTANT_INVITE: false',
					'KICK_MEMBERS: false',
					'BAN_MEMBERS: false',
					'ADMINISTRATOR: false',
					'MANAGE_CHANNELS: false',
					'MANAGE_GUILD: false',
					'ADD_REACTIONS: false',
					'READ_MESSAGES: false',
					'SEND_MESSAGES: false',
					'SEND_TTS_MESSAGES: false',
					'MANAGE_MESSAGES: false',
					'EMBED_LINKS: false',
					'ATTACH_FILES: false',
					'READ_MESSAGE_HISTORY: false',
					'MENTION_EVERYONE: false',
					'EXTERNAL_EMOJIS: false',
					'CONNECT: false',
					'SPEAK: false',
					'MUTE_MEMBERS: false',
					'DEAFEN_MEMBERS: false',
					'MOVE_MEMBERS: false',
					'USE_VAD: false',
					'CHANGE_NICKNAME: false',
					'MANAGE_NICKNAMES: false',
					'MANAGE_ROLES_OR_PERMISSIONS: false',
					'MANAGE_WEBHOOKS: false',
					'MANAGE_EMOJIS: false'
		  		]);
		  	})
		  	.catch(console.error);
		}
	}
}

Client.on('guildCreate', guild => {
	const setup = new Setup(guild, process.env.CATEGORY, process.env.CHANNEL, process.env.ROLE);
});

Client.login(process.env.BOT_TOKEN);
console.log('bot logged in');

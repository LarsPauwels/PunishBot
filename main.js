const Discord = require('discord.js');
const Fetch = require('node-fetch');
const Client = new Discord.Client();

//Controllers
const Setup = require('./controllers/setup');
const Command = require('./controllers/command');
const Daddy = require('./controllers/daddy');
const Help = require('./controllers/help');
const Punish = require('./controllers/punish');
const Quiz = require('./controllers/quiz');
const Pay = require('./controllers/pay');

Client.once('ready', () => {
	console.log('Bot started');
	
	//Sends user to punishement channel and back (Thanos punish)
	Command(Client, process.env.PUNISH, message => {
		console.log('Typed punish');
		Punish(message, Client);
	});

	//Gives back a random image of thanos (Thanos daddy)
	Command(Client, process.env.DADDY, message => {
		console.log('Typed daddy');
		Daddy(message);
	});

	//Gives GIF with question if you wan't to pay (Thanos pay)
	Command(Client, process.env.PAY, message => {
		console.log('Typed pay');
		Pay(message);
	});

	//Askes questions about Thanos in Marvel (Thanos quiz)
	Command(Client, process.env.QUIZ, message => {
		console.log('Typed quiz');
		Quiz(message);
	});

	//Returns all the available commands (Thanos help)
	Command(Client, process.env.HELP, message => {
		console.log('Typed help');
		Help(message);
	});
});

class Setup {
	createRole() {
		const current = this;
		const role = this.guild.roles.cache.find(x => x.name == this.roleName);
	    if(!role) {
		    this.guild.roles.create({
			  	data: {
			    	name: current.roleName,
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
	console.log("Setup Bot");
	Setup(guild);
});

Client.login(process.env.BOT_TOKEN);
console.log('bot logged in');

const Discord = require('discord.js');
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

Client.on('guildCreate', guild => {
	console.log("Setup Bot");
	Setup(guild);
});

Client.login(process.env.BOT_TOKEN);
console.log('bot logged in');

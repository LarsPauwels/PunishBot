const Discord = require('discord.js');
const Client = new Discord.Client();
const command = require('./command');

const payImage = "https://media1.tenor.com/images/db69b8611844cf9f9ac0f278f7b5ab38/tenor.gif?itemid=15541947";
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
	"https://preview.redd.it/1fva2g7w9xe11.jpg?auto=webp&s=e3056c23c7b3ccc3dcf47edd181541f6357b338f",
	"https://pm1.narvii.com/7320/eb0e607b0ec72a258448c55daff9569d37922db7r1-1600-1581v2_uhq.jpg",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/878e586c-b9ef-4573-9b2e-4798703b74b8/dclgvaj-029673c6-a7c7-43ca-b978-2500d6964316.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODc4ZTU4NmMtYjllZi00NTczLTliMmUtNDc5ODcwM2I3NGI4XC9kY2xndmFqLTAyOTY3M2M2LWE3YzctNDNjYS1iOTc4LTI1MDBkNjk2NDMxNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vjPwzjqTagGFiu5lvLdw76noixCVII1BTSzxoWM7OzQ",
	"https://i.redd.it/76bf2xwyj8q31.jpg",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b2110f8-fbc9-486d-b1fc-cc2a7cf377c4/dbywedo-62086ad4-b594-4afc-b1c4-ccb00aa1f517.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGIyMTEwZjgtZmJjOS00ODZkLWIxZmMtY2MyYTdjZjM3N2M0XC9kYnl3ZWRvLTYyMDg2YWQ0LWI1OTQtNGFmYy1iMWM0LWNjYjAwYWExZjUxNy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.nLatdwyq9CJFmfLTaBZaNEsfVibbzJwOCb10vRfSkyo",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/313d8e40-59f5-42aa-bd6e-ec5236d30fd6/dcb4205-4fce63d4-db43-4cb2-b098-5f08032fdec6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzEzZDhlNDAtNTlmNS00MmFhLWJkNmUtZWM1MjM2ZDMwZmQ2XC9kY2I0MjA1LTRmY2U2M2Q0LWRiNDMtNGNiMi1iMDk4LTVmMDgwMzJmZGVjNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.cRK8MoaeAt0EQujLAzb3NBS8c4FUWLzTgRzHdrom2-U",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a0659888-f796-45a6-8f41-76bb810574ed/ddbk4bx-779db54a-1f73-4d98-92df-d6133de1dabc.png/v1/fill/w_486,h_350,strp/captain_ticklish___the_mad_tickler_by_king_of_feathers_ddbk4bx-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MzgiLCJwYXRoIjoiXC9mXC9hMDY1OTg4OC1mNzk2LTQ1YTYtOGY0MS03NmJiODEwNTc0ZWRcL2RkYms0YngtNzc5ZGI1NGEtMWY3My00ZDk4LTkyZGYtZDYxMzNkZTFkYWJjLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iV1NjgmvRT_1ofK0o_z_IvOMRITvelCWG61EYlyz3ZU",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b8dbfad-d467-41c6-8a51-bb54ddb0b53f/dckxnu6-94ba4268-5831-4c9f-938c-d30b1cb6029f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2I4ZGJmYWQtZDQ2Ny00MWM2LThhNTEtYmI1NGRkYjBiNTNmXC9kY2t4bnU2LTk0YmE0MjY4LTU4MzEtNGM5Zi05MzhjLWQzMGIxY2I2MDI5Zi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vAlwAGr4W51iZ8Ffkhv849owqgjeMPNothA_IaBRljc",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a89d258-018f-461c-afe5-d76371610bb1/dbiolfd-9cfdcf34-c860-48c8-b61e-435199603847.jpg/v1/fill/w_1024,h_1072,q_75,strp/thanos_by_thegameworld_dbiolfd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDcyIiwicGF0aCI6IlwvZlwvNGE4OWQyNTgtMDE4Zi00NjFjLWFmZTUtZDc2MzcxNjEwYmIxXC9kYmlvbGZkLTljZmRjZjM0LWM4NjAtNDhjOC1iNjFlLTQzNTE5OTYwMzg0Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wQtpnuhqME3PzTPVV0S7LVCiHTQCp-r01nXMyY44onk",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b4da22e0-74bd-48c0-bfe7-8e6454126951/dccowz0-c2c779a3-738b-4d99-ba07-79500cb38c08.jpg/v1/fill/w_1024,h_1407,q_75,strp/thanos_muscle_and_fitness_cover_by_timetravel6000v2_dccowz0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDA3IiwicGF0aCI6IlwvZlwvYjRkYTIyZTAtNzRiZC00OGMwLWJmZTctOGU2NDU0MTI2OTUxXC9kY2Nvd3owLWMyYzc3OWEzLTczOGItNGQ5OS1iYTA3LTc5NTAwY2IzOGMwOC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wG-dMlrfYETq1hrnfCvh-NaDDj8BoDz14it1ouCSQb4",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca7f18a9-a146-4da1-9066-b94264e364d6/dcyexvq-54805a47-5cab-4927-8299-e05e4ba8d74a.jpg/v1/fill/w_1280,h_1085,q_75,strp/thanos_kirby_by_bananana_artz_dcyexvq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDg1IiwicGF0aCI6IlwvZlwvY2E3ZjE4YTktYTE0Ni00ZGExLTkwNjYtYjk0MjY0ZTM2NGQ2XC9kY3lleHZxLTU0ODA1YTQ3LTVjYWItNDkyNy04Mjk5LWUwNWU0YmE4ZDc0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9GihWxRBHtFKOHWvOjVVI4vBmtJfGdY0hLJKWA_K-CQ",
	"https://pbs.twimg.com/media/DsfkR95U8AAI4An.jpg",
	"https://i.pinimg.com/originals/f4/d8/52/f4d8524560c9e084b5947430aa5a8aad.jpg",
	"https://i.redd.it/ctzja3787z811.jpg",
	"https://pics.me.me/deeper-daddy-thanos-45571668.png",
	"https://i.pinimg.com/originals/b5/e6/81/b5e6811a5befce646dc92694051f0db2.jpg",
	"https://cdn.funnyisms.com/352cc508-9195-4429-bdd6-189fe132094a.jpg",
	"https://img.ifunny.co/images/45e225e436ec5c57290185fd205898c21f0c65202141d45e76f3e1816abe7e57_1.jpg",
	"https://a.wattpad.com/cover/197512530-352-k892849.jpg",
	"https://imageproxy.ifunny.co/crop:x-20,resize:320x,crop:x800,quality:90x75/images/48ed1f68a84b0e55fa2689402a5affbcbf9a3004c6344a2e3efae8b937b7106e_1.jpg",
	"https://i.pinimg.com/originals/ec/9a/1c/ec9a1cda944ca2e2ff838cd53b8a24ff.gif",
	"https://images-cdn.9gag.com/photo/a7DXYGr_700b.jpg",
	"https://pm1.narvii.com/6830/fdf39d59c6497718efa61d46eee6cc18007fde80v2_hq.jpg"
];


class Commands {
	constructor(categotyName, channelName, roleName, time) {
		this.categotyName = categotyName;
		this.channelName = channelName;
		this.roleName = roleName;
		this.time = time;
	}

	createMessage(image, text, desc = "") {
		return new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(text)
			.setImage(image)
			.setDescription(desc)
			.setTimestamp()
			.setFooter('React with ❌ to delete this post.');
	}

	async deleteMessage(message) {
		const emoji = await this.emojiMessage(message, ["❌"]);
		if (emoji === "❌") {
			if (message.deletable == true) {
				console.log("Delete message");
				message.delete();
			}
		}
	}

	async emojiMessage(message, validReactions) {
        for (const reaction of validReactions) await message.react(reaction);
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && (!user.bot)

        return message
            .awaitReactions(filter, {
                max: 1,
                time: 42000
            })
            .then(collected => collected.first() && collected.first().emoji.name);
	}

	async daddyCommand(message, text) {
		const image = images[Math.floor(Math.random() * images.length)];
		const sendMessage = await message.channel.send(image, this.createMessage(text));
		this.deleteMessage(sendMessage);
	}

	async payCommand(message, text) {
		const sendMessage = await message.channel.send(payImage, this.createMessage(text), "testing");
		this.deleteMessage(sendMessage);
	}

	async punishCommand(message) {
		const current = this;
		const role = message.guild.roles.cache.find(role => role.name === this.roleName);
		const member = message.mentions.members.first();
		const channel = Client.channels.cache.find(channel => channel.name === this.channelName);
		const currentChannel = member.voice.channelID;

		if (member) {
			await this.daddyCommand(message, '*SNAP*');
			// await message.guild.channels.cache.forEach(ch => {
			// 	if ((ch.type == "text" || ch.type == "voice" || ch.type == "category") &&
			// 		(ch.name !== current.channelName && ch.name !== current.categoryName)) {
			// 		ch.overwritePermissions([{
			// 	    	id: role.id,
			// 	     	deny: [
			// 	     		'SEND_MESSAGES', 
			// 	     		'VIEW_CHANNEL', 
			// 	     		'CREATE_INSTANT_INVITE', 
			// 	     		'KICK_MEMBERS',
			// 	     		'BAN_MEMBERS',
			// 	     		'ADMINISTRATOR',
			// 	     		'MANAGE_CHANNELS',
			// 	     		'MANAGE_GUILD',
			// 	     		'ADD_REACTIONS',
			// 	     		'VIEW_AUDIT_LOG',
			// 	     		'PRIORITY_SPEAKER',
			// 	     		'STREAM',
			// 	     		'SEND_TTS_MESSAGES',
			// 	     		'MANAGE_MESSAGES',
			// 	     		'EMBED_LINKS',
			// 	     		'ATTACH_FILES',
			// 	     		'READ_MESSAGE_HISTORY',
			// 	     		'MENTION_EVERYONE',
			// 	     		'USE_EXTERNAL_EMOJIS',
			// 	     		'VIEW_GUILD_INSIGHTS',
			// 	     		'CONNECT',
			// 	     		'SPEAK',
			// 	     		'MUTE_MEMBERS',
			// 	     		'DEAFEN_MEMBERS',
			// 	     		'MOVE_MEMBERS',
			// 	     		'USE_VAD',
			// 	     		'CHANGE_NICKNAME',
			// 	     		'MANAGE_NICKNAMES',
			// 	     		'MANAGE_ROLES',
			// 	     		'MANAGE_WEBHOOKS',
			// 	     		'MANAGE_EMOJIS'],
			// 	  	},
			// 		], 'Needed to change permissions');
			// 	}
			// });

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
				}, 60000);
			});
		} else {
			message.channel.send('Choose someone that exists.');
		}
	}
}

Client.once('ready', () => {
	console.log('Bot started');
	const commands = new Commands(process.env.CATEGORY, process.env.CHANNEL, process.env.ROLE, process.env.TIME);
	
	command(Client, process.env.PUNISH, message => {
		console.log('Typed punish');
		commands.punishCommand(message);
	});

	command(Client, process.env.DADDY, message => {
		console.log('Typed daddy');
		commands.daddyCommand(message, 'Yes my child!');
	});

	command(Client, process.env.PAY, message => {
		console.log('Typed pay');
		commands.payCommand(message, 'A soul for a soul.');
	});
});

class Setup {
	constructor(guild, categoryName, channelName, roleName) {
	    this.guild = guild;
	    this.categoryName = categoryName;
	    this.channelName = channelName;
	    this.roleName = roleName;

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
		        	current.createChannel(category);
		      	})
		      	.catch(console.error);
		}
	}

	createChannel(category) {
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
	const setup = new Setup(guild, process.env.CATEGORY, process.env.CHANNEL, process.env.ROLE);
});

Client.login(process.env.BOT_TOKEN);
console.log('bot logged in');

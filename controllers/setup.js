async setup(guild) {
  createCategory(guild);
  createRole(guild);
}

createCategory(guild) {
  const channel = guild.channels.cache.find(c => c.name === process.env.CHANNEL);
  if (!channel) {
    guild.channels
      .create(process.env.CATEGORY, {
        type: 'category',
        permissionsOverwrites: [{
        id: current.guild.id,
        deny: ['MANAGE_MESSAGES'],
        allow: ['SEND_MESSAGES']
      }]
      })
      .then((category) => {
        console.log('Category Created ('+category.id+')');
        createChannel(guild, category);
      })
      .catch(console.error);
  }
}

createChannel(guild, category) {
  guild.channels
    .create(process.env.CHANNEL, {
        type: 'voice',
      })
      .then((channel) => {
        channel.setParent(category.id);
        console.log('Channel Created ('+channel.id+')');
      })
      .catch(console.error);
}

createRole(guild) {
    const role = guild.roles.cache.find(x => x.name == process.env.ROLE);
      if(!role) {
        guild.roles.create({
          data: {
            name: process.env.ROLE,
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

exports default setup;
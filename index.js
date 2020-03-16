const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async () => {
    client.user.setActivity({ name: 'with the bois', type: 'PLAYING' });
    console.log('Bot Ready');
});

client.on('message', async message => {
    if(message.channel.id == '688865280406978638'){
        if(message.author.bot) return message.delete();
        let OChannel = await client.channels.fetch('688865280406978638');
        message.delete();
        let OMessage = await OChannel.messages.fetch('689058073184436452');
        let words = (await (await (await client.users.fetch('617839406199341067')).createDM()).messages.fetch('689068860078555137'));
        if(words.content.includes(message.content)) return message.delete;
        let AccWords = await words.edit(`${words.content}, ${message.content}`);
        OMessage.edit(`**Skribble Words:**\n\`\`\`${AccWords}\`\`\``)
    }
});

client.login(process.env.token);
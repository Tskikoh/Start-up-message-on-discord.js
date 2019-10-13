const Discord = require('discord.js');
const client = new Discord.Client();

client.login("<Token>");

client.on('ready', () => {

    const ch_name = "チャンネル名";

    client.channels.forEach(channel => {
        if (channel.name === ch_name) {
            channel.send("起動しました")
            return;
        }
        return;
    });
})
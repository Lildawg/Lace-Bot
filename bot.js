const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === '+hi') {

       message.reply('Hello.');

       }

});


client.login(process.env.NDI1ODE3NjQ3Mjk3NTkzMzQ0.XTVuTQ.owouDQrwQo92xnNqXIrVWFXE0mg)

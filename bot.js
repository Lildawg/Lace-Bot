const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('Pong!');
  }
});
client.on('message', msg => {
  if (msg.content === '+hi') {
    msg.reply('Hello.');
  }
});
client.on('message', msg => {
  if (msg.content === '+cake') {
    msg.reply('Mmmmm... Cake...');
  }
});
client.on('message', msg => {
  if (msg.content === '+kebab') {
    msg.reply('We must remove kebab!');
  }
});
client.on('message', msg => {
  if (msg.content === '+bob') {
    msg.reply('Bob the Builder! CAN HE FIX IT?! Bob the Builder! No... No he fucking can`t');
  }
});
client.on('message', msg => {
  if (msg.content === '+kiss') {
    msg.reply('**Slap!** I am already married.');
  }
});

client.login(process.env.NDI1ODE3NjQ3Mjk3NTkzMzQ0.XTVuTQ.owouDQrwQo92xnNqXIrVWFXE0mg)

const Discord = require('discord.js');
exports.run = async(client, message, args) => {
let frenzy_code_sayı = args[0]  
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz Yetki");
if(isNaN(frenzy_code_sayı)) return message.channel.send("Sadece Sayı Giriniz.");
if(!frenzy_code_sayı) return message.channel.send("Kaçmesaj silmem gerek");
message.channel.bulkDelete(frenzy_code_sayı).catch(console.error)
  message.channel.send(`${frenzy_code_sayı} Adet Mesaj Sildim.!`).then(fc => fc.delete(7000));
}
exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};
exports.help = {
  name: 'temizle',
  description: 'mesaj siiler',
  usage: 'temizle 100'
};
const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;
exports.run = async(client, message,args,member) => {
    var rol = await db.fetch(`banrol_${message.guild.id}`, rol)
let rol2 = message.guild.roles.find('id', rol)
if(!message.member.roles.has(db.fetch(`banrol_${message.guild.id}`, rol))) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setDescription("<a:hata:674041493824077856> Yeterli yetkiniz bulunmuyor."));

  let user = message.mentions.users.first();
  let bankisi = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bankisi) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`**<a:hata:684774418328715291> Lütfen bir kullanıcı etiketleyiniz!** \n**Doğru Kullanım;** \`${prefix}ban <@kullanıcı> sebep\``))
  
  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription('<a:hata:684774418328715291> Bir neden yazmalısın!'));

message.delete()
 bankisi.guild.member(user).ban()
message.channel.send(new Discord.RichEmbed().setColor('BLACK').setDescription(`<a:onay:685208789091352686> Başarıyla <@${bankisi.id}> adlı kişiyi banladım!`))

  let banlog = db.get(`banlog_${message.guild.id}`)
const ban_kanal = client.channels.get(banlog);
    ban_kanal.send(
new Discord.RichEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan banlama')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason)
)
 }

 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban'
};
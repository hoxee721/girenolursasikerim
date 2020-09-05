module.exports = member => {
  let guild = member.guild;
  member.send('niye gittin?');
  guild.defaultChannel.send(`${member.user.username} Adlı Kişi Aramızdan Ayrıldı. `);
};
const Discord = require("discord.js");
module.exports = {
  name: "ping",
  aliases: ["gecikme"],
  cooldown: {
    time: 6,
    errorMsg:
      "<@{user.id}> , komutu tekrar kullanabilmek için {time} saniye bekle",
    deletable: true,
  },
  guildOnly: {
    status: true,
    errorMsg: "{user.id} , `{command.name}` adlı komutu DM'de çalıştıramam",
    deletable: false,
  },
  description: "Ping!",
  code(message, args, client) {
    let secs = 3;
    let ping = client.ws.ping;
    let msgping = Date.now() - message.createdTimestamp;
    let circle;
    let msgcircle;
    if (ping < 50) {
      circle = "🟢";
    }
    if (ping > 50) {
      circle = "🟡";
    }
    if (ping > 150) {
      circle = "🔴";
    }
    if (ping > 500) {
      circle = "👼(Dead)";
    }

    if (msgping < 50) {
      msgcircle = "🟢";
    }
    if (msgping > 50) {
      msgcircle = "🟡";
    }
    if (msgping > 150) {
      msgcircle = "🔴";
    }
    if (msgping > 500) {
      msgcircle = "👼(Dead)";
    }
    const emb = new Discord.MessageEmbed();
    message.channel
      .send(`Ping hesaplanıyor **${secs}** saniye lütfen`)
      .then((msg) => {
        var stin = setInterval(seconds, 1000);
        function seconds() {
          if (secs === 1) {
            clearInterval(stin);
            msg.edit(
              "",
              emb
                .setDescription("")
                .setTitle("Ping Değerleri")
                .addField("Web sunucu pingi", circle + " " + ping + " ms", true)
                .addField(
                  "Mesaj gecikmesi",
                  msgcircle + " " + msgping + " ms",
                  true
                )
                .setColor("#FF00FF")
            );
          } else {
            secs = secs - 1;
            msg.edit(`Ping hesaplanıyor **${secs}** saniye lütfen`);
          }
        }
      });
  },
};

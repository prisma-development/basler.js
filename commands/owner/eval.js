const Discord = require("discord.js");
module.exports = {
  name: "eval",
  description: "Ping!",
  ownerOnly: {
    status: true,
    errorMsg: "<@{user.id}> , Sen bu komutu kullanamazsın",
    deletable: true,
  },
  code: async (message, args, disbut, db, client) => {
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), { code: "js", split: true });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    function clean(text) {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
  },
};

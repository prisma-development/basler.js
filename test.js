const Discord = require('discord.js')
const client = new Discord.Client()
const cmdhandler = require("./package/index.js");
const handler = new cmdhandler.Handler({
    client: client,
    folder:"./commands",
    owner:"661827402069966869",
    prefix:"!"
});
handler.start()
client.once('ready', async () =>{
    console.log(`${client.user.tag} Ready`)
})
client.login('')//YOUR TOKEN HERE

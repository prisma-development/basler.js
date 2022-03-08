# cmdhandler.js

## Description

Easy command handling for discord.js

## Table of contents

- [About](#about)
- [Installation](#install)
- [Example Usage](#example)
  - [Setup](#setup)
  - [Standart](#standart-using-example)
  - [Cooldown](#cooldown-example)
  - [Aliases](#aliases-example)
  - [Guild Only](#guild-only-command-example)
  - [Owner Only](#owner-only-command-example)
  - [Require Perms & Require Args](#require-permission--require-args)
  - [Avaliable keys](#keys)

## About

command handler for discord.js bot project

## Badge

[![NPM Downloads](https://img.shields.io/npm/dt/cmdhandler.js.svg?style=flat-square)](https://www.npmjs.com/package/cmdhandler.js)
<br>
[![NPM Details](https://nodei.co/npm/cmdhandler.js.png?compact=true)](https://www.npmjs.com/package/cmdhandler.js)

## Install

```
npm i cmdhandler.js --save
```

## Example

### Setup

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const cmdHandler = require("cmdhandler.js");
const handler = new cmdHandler.Handler({
  folder: "./commands", //required
  client: client, //required
  prefix: "!", //required
  owner: ["Your Id"], //required , optional add more owner Id
});

handler.start();
client.login("YOUR_TOKEN_HERE");
```

### Standart using example

```js
//"./commands/general/ping.js"
const Discord = require("discord.js");
module.exports = {
  name: "ping",
  description: "Ping!", //description :P
  //Be careful
  code: (message, args, client) => {
    //Your code here
    message.channel.send("Pong");
  },
};
```

### Cooldown example

```js
//"./commands/general/ping.js"
const Discord = require("discord.js");
module.exports = {
  name: "ping",
  // Deleteable and error message is optional
  cooldown: {
    time: 3,
    errorMsg:
      "You can use the command named `{command.name}` after {time} seconds.",
    deletable: true,
  },
  description: "Ping!", //description :P
  //Be careful
  code: (message, args, client) => {
    //Your code here
    message.channel.send("Pong");
  },
};
```

### Aliases example

```js
//"./commands/general/ping.js"
const Discord = require("discord.js");
module.exports = {
  name: "ping",
  aliases: ["delay"],
  description: "Ping!", //description :P
  //Be careful
  code: (message, args, client) => {
    //Your code here
    message.channel.send("Pong");
  },
};
```

### Guild only command example

```js
//"./commands/general/server-icon.js"
const Discord = require("discord.js");
module.exports = {
  name: "server-icon",
  // Deletable and error message is optional
  guildOnly: {
    status: true,
    errorMsg: "{user.name},you cannot use this command in DM",
    deletable: true,
  },
  description: "look server icon", //description :P
  //Be careful
  code: (message, args, client) => {
    //Your code here
    message.channel.send(
      message.guild.iconURL({ display: true, format: "png" })
    );
  },
};
```

### Owner only command example

```js
//"./commands/general/server-icon.js"
const Discord = require("discord.js");
module.exports = {
  name: "server-icon",
  ownerOnly: {
    status: true,
    errorMsg: "<@{user.id}>, this command for my owner(s)",
    deletable: false,
  },
  description: "look server icon", //description :P
  //Be careful
  code: (message, args, client) => {
    //Your code here
    message.channel.send(
      message.guild.iconURL({ display: true, format: "png" })
    );
  },
};
```

### Require permission & Require args

```js
//"./commands/moderator/ban.js"
const Discord = require("discord.js");
module.exports = {
  name: "ban",
  permission: {
    perm: "BAN_MEMBERS",
    errorMsg: "You must have '{perm}' permission to use this command.",
    deletable: true,
  },
  args: 1,
  description: "You can ban a member", //description :P
  //Be careful
  code: (message, args, client) => {
    //Your code here
    message.guild.member.ban(message.mention.first());
  },
};
```

### Keys

- {user.id} - return `message.author.id`
- {user.name} - return `message.author.username`
- {user.discrim} - return `message.author.discriminator`
- {command.name} - return used command name
- {time} - return left time from cooldowns (only cooldowns)
- {perm} - return require perm for use command (only for require permission)

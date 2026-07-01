const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = "MTUyMTk5MTMwNTAwODM4NjM0Mw.GT2e3l.nFm-Iw6CXv2AuoTAp5i6KaKvcDINYWfaaXSrIg";

client.once("ready", () => {
  console.log(`${client.user.tag} is Online!`);
});

client.login(process.env.TOKEN);

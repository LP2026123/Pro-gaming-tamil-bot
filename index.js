const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = "MTUyMTk5MTMwNTAwODM4NjM0Mw.GjBxYF.CNLplRu2_FQmmHdvVZBg5RUDu_l1eqk6gTF-Z0
client.once("ready", () => {
  console.log(`${client.user.tag} is Online!`);
});

client.login(process.env.TOKEN);

const Discord = require("discord.js");
const { Intents } = require("discord.js");
const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const config = require("./config.json");
const command = require("./command");

client.on("ready", () => {
  console.log(client.user.username + " est prêt !");

  // command(client, ["ping"], (message) => {
  //   message.channel.send("Pong!");
  // });

  // command(client, ["cc", "clearchannel"], (message) => {
  //   if (message.member.permissions.has("ADMINISTRATOR")) {
  //     message.channel.messages.fetch().then((results) => {
  //       message.channel.bulkDelete(results);
  //     });
  //   }
  // });
});

client.on("messageCreate", (message) => {
  // Gestion des erreurs
  if (message.author.bot) return;
  if (!message.content === config.prefix + cmd) return;

  // Code de récupération de la valeur
  var cmd = "set args";
  var text = cmd.split(" ");
  if (message.content === config.prefix + cmd) {
    message.channel.send(text[1]);
  }

  var nickname = "nickname".split(" ");
  if (message.content === nickname) {
    message.guild.members.cache.get(client.user.id).setNickname(nickname[1]);
  }
});

client.login(config.token);

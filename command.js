const { prefix } = require("./config.json");

module.exports = (client, aliases, callback) => {
  if (typeof aliases === "string") {
    aliases = [aliases];
  }

  client.on("messageCreate", (message) => {
    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`;

      if (
        message.content.startsWith(`${command} `) ||
        message.content === command
      ) {
        console.log(`Commange executee ${command}`);
        callback(message);
      }
    });
  });
};

// basic setup stuff, stolen from discordjs.guide (ok most of this is stolen from discordjs.guide)
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Guild } = require('discord.js');
const properties = require('../config/bot.json');
const rest = new REST({ version: '9' }).setToken(properties.token);
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Bot is running.')
    const commands = [
	    new SlashCommandBuilder().setName('Verify').setDescription('Add your account to the verified database'),
        new SlashCommandBuilder().setName('Unverify').setDescription('Remove your account from the verified database')
    ].map(command => command.toJSON())
    rest.put(Routes.applicationGuildCommands(client.user.id, guild.id)), { body: commands }
	    .then(() => console.log('Commands registered in guild ' + guild.name))
        .catch(console.error);
});
client.on('guildCreate', guild => {
    console.log('Joined guild ' + guild.name);
    //registers commands on join guild
    const commands = [
	    new SlashCommandBuilder().setName('Verify').setDescription('Add your account to the verified database'),
        new SlashCommandBuilder().setName('Unverify').setDescription('Remove your account from the verified database')
    ].map(command => command.toJSON())
    rest.put(Routes.applicationGuildCommands(client.user.id, guild.id)), { body: commands }
	    .then(() => console.log('Commands registered in guild ' + guild.name))
        .catch(console.error);
})
client.login(properties.token);

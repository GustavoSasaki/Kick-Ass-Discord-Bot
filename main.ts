import { Client, Events, GatewayIntentBits } from 'npm:discord.js';
import { load } from 'https://deno.land/std@0.212.0/dotenv/mod.ts'
import { registerCommands } from "./registerCommands.ts";
import { guildsToKick, setCron } from "./cron.ts";

const env = await load()
await registerCommands()
await setCron()
export const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildVoiceStates] });

client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'meidokick') {
    const guildId = interaction.guildId
    if(guildId) guildsToKick.push(guildId)
      console.log(guildsToKick)
    await interaction.reply('🧹よろしくおねがいします🧹');
  }
});

client.login(env.TOKEN);
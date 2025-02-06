import { REST, Routes } from 'npm:discord.js';
import { load } from 'https://deno.land/std@0.212.0/dotenv/mod.ts'

const env = await load()


export async function registerCommands() {
const commands = [
  {
    name: 'meidokick',
    description: 'Kick everyone at 8:40',
  },
];

const rest = new REST({ version: '10' }).setToken(env.TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(env.CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
}
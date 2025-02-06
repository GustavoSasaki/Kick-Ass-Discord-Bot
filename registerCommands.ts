import { REST, Routes } from 'npm:discord.js';
import "https://deno.land/x/dotenv@v3.2.2/load.ts";


export async function registerCommands() {
const commands = [
  {
    name: 'meidokick',
    description: 'Kick everyone at 8:40',
  },
];

const rest = new REST({ version: '10' }).setToken(Deno.env.get("TOKEN") ?? '');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(Deno.env.get("CLIENT_ID") ?? ''), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
}
import {  ChannelType, VoiceChannel, Collection, GuildMember } from 'npm:discord.js';
import { client } from "./main.ts";

export async function kick(guildId : string){
    const guild = await client.guilds.fetch(guildId);
    if (!guild) return console.log("Guild not found!");
  

    const voiceChannels = (await guild.channels.fetch()).filter(
      (channel: VoiceChannel) => channel.type === ChannelType.GuildVoice
    ) as Collection<string, VoiceChannel>; 
  

    voiceChannels.forEach((channel: VoiceChannel) => {
      channel.members.forEach( (member : GuildMember) => member.voice.disconnect() )
    });
}

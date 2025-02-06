import { kick } from "./kick.ts";

export function setCron(){
    Deno.cron("Sample cron job", "35 22 * * *", async () => {
        console.log("Start Kicking");

        for (const guildId of guildsToKick) {
            await kick(guildId);
        }

        guildsToKick = []
        console.log("End Kicking");
    });
}

export let guildsToKick : string[] = [] 
import { envs } from "../../config";

export class DiscordService{

    private readonly discordWebhookUrl:                                 string = envs.DISCORD_WEBHOOK_URL;

    constructor(){}

    public async notify( message: string ){

        const body = {

            content: message
        }

        const resp = await fetch( this.discordWebhookUrl, {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        return resp.ok; 
    }
}
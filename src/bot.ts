import { Client } from '@typeit/discord'


const token: string | undefined = process.env.TOKEN


export async function botInit() {
    const client = new Client()
    // when the client is ready, run this code
    client.once('ready', () => {
        console.log('Ready to work!')
    })



    // check token has been in .env file and login to Discord
    if (token)
        await client.login(
            token,
            `${__dirname}/../src/discords/AppDiscord.ts`, // glob string to load the classes
            `${__dirname}/discords/AppDiscord.js` // If you compile using "tsc" the file extension change to .js)
        )
}



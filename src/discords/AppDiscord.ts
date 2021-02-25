import { CommandMessage, CommandNotFound, Discord } from "@typeit/discord";
import { join } from 'path'
const discordRegex = new RegExp("(?=Cier |cier |!).*")
//embed the commands and events files
@Discord(discordRegex, {
    import: [
        join(__dirname, "commands", "*.js"),
        join(__dirname, "events", "*.js")
    ]
})
export abstract class AppDiscord {
    @CommandNotFound()
    async notFound(message: CommandMessage) {
        message = message
        //FIXME remove the call inst. which in message
        message.reply(`別傻了，我沒有${message.content}...`)

    }
}

import { ArgsOf, Command, CommandMessage, CommandNotFound, Discord, Guard, On } from "@typeit/discord";
import * as Path from 'path'
const discordRegex =new RegExp("(?=Cier |cier |!).*")
// @Discord(discordRegex,{
// import:[
//     Path.join
// ]
// })
@Discord(discordRegex)
export abstract class AppDiscord {
    
    @Command("hello")
    hello(message: CommandMessage) {
        message.reply("HI!")
    }

    @Command("ping")
    ping(command: CommandMessage): void {
        command.reply("pong!");
    }


    @CommandNotFound()
    private notFound(message: CommandMessage) {
        message = message
        //FIXME remove the call inst. which in message
        message.reply(`別傻了，我沒有${message.content}...`)
        
    }
}
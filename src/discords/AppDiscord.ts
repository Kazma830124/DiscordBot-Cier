import { ArgsOf, Client, Command, CommandInfos, CommandMessage, CommandNotFound, Description, Discord, ExpressionFunction, Guard, Infos, On, RuleBuilder } from "@typeit/discord";
import * as Path from 'path'
const discordRegex = new RegExp("(?=Cier |cier |!).*")
//embed the commands and events files
@Discord(discordRegex,{
import:[
    Path.join(__dirname,"commands","*.ts"),
    Path.join(__dirname,"events","*.ts")
]
})
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

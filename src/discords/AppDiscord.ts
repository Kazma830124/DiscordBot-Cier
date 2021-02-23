import { ArgsOf, Client, Command, CommandInfos, CommandMessage, CommandNotFound, Description, Discord, ExpressionFunction, Guard, Infos, On, RuleBuilder } from "@typeit/discord";
import * as Path from 'path'
const discordRegex = new RegExp("(?=Cier |cier |!).*")
// @Discord(discordRegex,{
// import:[
//     Path.join
// ]
// })

@Discord(discordRegex)
@Description("Admin commands")
export abstract class AppDiscord {

    @Command("help")
    help(message: CommandMessage) {

        // 取得目前injected的command
        let commandList: Array<CommandInfos> = Client.getCommands()


        message.reply("你可以使用一些命令如下:\n" + commandList.map(e=>e.commandName ))
        console.log(commandList)
    }
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

import { Client, Command, CommandInfos, CommandMessage } from "@typeit/discord";


export abstract class Help {
    @Command("help")
    private async help(message: CommandMessage) {
        // 取得目前injected的command
        let commandList: Array<CommandInfos> = Client.getCommands()


        message.reply("你可以使用一些命令如下:\n" + commandList.map(e => {
            return  `${e.commandName}\tinfo: ${e.infos}\n`
        }))
        console.log(commandList)
    }
}
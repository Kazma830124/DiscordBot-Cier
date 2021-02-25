import { Client, Command, CommandInfos, CommandMessage, Infos } from "@typeit/discord";


export abstract class Help {
    @Command("help")
    @Infos({ description: "What commands you can use." })
    async help(command: CommandMessage) {
        //取得目前injected的command
        let commandList: Array<CommandInfos> = Client.getCommands()
        const commandHelp = commandList.map(eachCommand => {
            return `${eachCommand.commandName}\t${eachCommand.description}`
        })
        
        command.reply("你可以使用一些命令如下:\n" + commandHelp.join("\n")
        
        )
        console.log(commandList)
    }
}   
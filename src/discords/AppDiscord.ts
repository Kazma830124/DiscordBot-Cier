import { ArgsOf, Command, CommandMessage, CommandNotFound, Discord, Guard, On } from "@typeit/discord";

@Discord("!")
export abstract class AppDiscord {
    /**
        * @param message: Type message automatically 
        * @param client: Client instance injected here
    */
    // @On("message")
    // private onMessage([message]: ArgsOf<"message">, client: Client, guardPayload: any) {

    // }
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

    }
}
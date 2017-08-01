export class CommandProcessorService {

    private readonly commandDelimiter = ' ';

    processCommand(command: string): string {
        let commandParts = command.split(this.commandDelimiter);
        let action = commandParts[0];
        if (action === 'move') {
            console.log('moving');
        } else if (action === 'attack') {
            
        } else if (action === 'say') {
            
        } else if (action === 'use') {
            
        } else {
            console.log('command not recognized: ' + action)
        }
        return 'command processed: ' + command;
    }

}
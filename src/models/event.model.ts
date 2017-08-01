export class Event {

    private actionScript: string;
    private message: string;

    constructor(actionScript: string, message: string) {
        this.actionScript = actionScript;
        this.message = message;
    }

    public getActionScript(): string {
        return this.actionScript;
    }

    public setActionScript(actionScript: string) {
        this.actionScript = actionScript;
    }

    public getMessage(): string {
      return this.message;
    }

    public setMessage(message: string) {
      this.message = message;
    }

}

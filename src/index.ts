export class Ship {
    private message: string;
    private level: string;

    constructor(message: string, level: string) {
        this.message = message;
        this.level = level;
    }

    public pucaj(): string {
        return "BANG";
    }

    public idilevo(): void {
        console.log(this.message);
    }
    public ididesno(): void {
        console.log(this.message);
    }
}
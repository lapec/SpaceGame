export class Ship {
    private message: string;
    private level: string;

    constructor(message: string, level: string) {
        this.message = message;
        this.level = level;
    }
    
    public pucaj(): string {
        var shootSound = "BANG";
        return shootSound;
    }
    
    public idilevo(): void {
        return "<<<<<";
    }
    
    public ididesno(): void {
        return ">>>>>>";
    }
}
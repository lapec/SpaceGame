export class Ship {
    private message: string;
    private level: string;

    constructor(message: string, level: string) {
        this.message = message;
        this.level = level;
    }
    
    public pucaj(sound: string): string {
        return sound;
    }
    
    public idilevo(): string {
        return "<<<<<";
    }
    
    public ididesno(): string {
        return ">>>>>";
    }
}
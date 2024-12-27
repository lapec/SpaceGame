export class Score
{
    playerScoreBoard: number = 0; 
    public setScore(points: number): number {
        this.playerScoreBoard =  points;
        return 100;
    }
}
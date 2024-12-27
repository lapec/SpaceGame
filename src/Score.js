"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
class Score {
    constructor() {
        this.playerScoreBoard = 0;
    }
    setScore(points) {
        this.playerScoreBoard = points;
        return 100;
    }
}
exports.Score = Score;

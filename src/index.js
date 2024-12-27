"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(message, level) {
        this.message = message;
        this.level = level;
    }
    pucaj(sound) {
        return sound;
    }
    idilevo() {
        return "<<<<<";
    }
    ididesno() {
        return ">>>>>";
    }
}
exports.Ship = Ship;

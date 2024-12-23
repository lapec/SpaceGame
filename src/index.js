"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(message, level) {
        this.message = message;
        this.level = level;
    }
    pucaj() {
        return "BANG";
    }
    idilevo() {
        console.log(this.message);
    }
    ididesno() {
        console.log(this.message);
    }
}
exports.Ship = Ship;

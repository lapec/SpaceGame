"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test("pucaj method should return BANG", () => {
    const hello = new src_1.Ship("A", "B");
    expect(hello.pucaj("BANG")).toBe("BANG");
});

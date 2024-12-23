"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test("HelloWorld should return the default message", () => {
    const hello = new src_1.Ship("A", "B");
    expect(hello.pucaj()).toBe("Hello, World!");
});

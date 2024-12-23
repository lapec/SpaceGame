import {Ship} from "../src";

test("pucaj method should return BANG", () => {
    const hello = new Ship("A", "B");
    expect(hello.pucaj()).toBe("BANG");
});
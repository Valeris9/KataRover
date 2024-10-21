import { describe, it } from "node:test";
import { main } from "../index";
import assert from "node:assert/strict";

describe("Coordinates", () => {
  it("should skip the wrong instructions and proceed normally", () => {
    const result = main("J");
    assert.equal(result, "0:0:N");
    const result2 = main("FFVFLF");
    assert.equal(result2, "9:3:W");
    const result3 = main("QWETYUIOPASDGHJKÑZXCVBNM");
    assert.equal(result3, "0:0:N");
  });
  it("should do okay with easy tests", () => {
    const result = main("L");
    assert.equal(result, "0:0:W");

    const result2 = main("R");
    assert.equal(result2, "0:0:E");

    const result3 = main("F");
    assert.equal(result3, "0:1:N");
  });

  it("should do okay with medium tests", () => {
    const result = main("RFF");
    assert.equal(result, "2:0:E");

    const result2 = main("LFF");
    assert.equal(result2, "8:0:W");

    const result3 = main("LLFF");
    assert.equal(result3, "0:8:S");

    const result4 = main("FRFFR");
    assert.equal(result4, "2:1:S");
  });

  it("should do okay with hard tests", () => {
    const result = main("FFRFFFRRLF");
    assert.equal(result, "3:1:S");

    const result2 = main("FFLFFFRFLF");
    assert.equal(result2, "6:3:W");

    const result3 = main("FFLFFFFFRRFFF");
    assert.equal(result3, "8:2:E");
  });
});

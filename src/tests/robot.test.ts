import { describe, it } from "node:test";
import assert from "node:assert/strict";
import Robot from "../core/robot";
import Direction from "../core/direction";
import Planet from "../core/planet";

describe("Robot", () => {
  const planet = new Planet(10, 10);

  it("should create a robot with the correct initial position and direction", () => {
    const robot = new Robot(0, 0, Direction.N, planet);
    assert.strictEqual(robot.position.x, 0);
    assert.strictEqual(robot.position.y, 0);
    assert.strictEqual(robot.position.direction, Direction.N);
    assert.strictEqual(robot.planet, planet);
  });

  it("should create a robot facing East", () => {
    const robot = new Robot(5, 5, Direction.E, planet);
    assert.strictEqual(robot.position.x, 5);
    assert.strictEqual(robot.position.y, 5);
    assert.strictEqual(robot.position.direction, Direction.E);
  });

  it("should create a robot facing South", () => {
    const robot = new Robot(9, 9, Direction.S, planet);
    assert.strictEqual(robot.position.x, 9);
    assert.strictEqual(robot.position.y, 9);
    assert.strictEqual(robot.position.direction, Direction.S);
  });

  it("should create a robot facing West", () => {
    const robot = new Robot(3, 7, Direction.W, planet);
    assert.strictEqual(robot.position.x, 3);
    assert.strictEqual(robot.position.y, 7);
    assert.strictEqual(robot.position.direction, Direction.W);
  });

  it("should create a robot with the correct planet", () => {
    const smallPlanet = new Planet(5, 5);
    const robot = new Robot(2, 2, Direction.N, smallPlanet);
    assert.strictEqual(robot.planet, smallPlanet);
    assert.strictEqual(robot.planet.width, 5);
    assert.strictEqual(robot.planet.height, 5);
  });
});

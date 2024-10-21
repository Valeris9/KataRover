import Robot from "./core/robot";
import Direction from "./core/direction";
import Planet from "./core/planet";

export function main(command: string) {
  const robot = new Robot(0, 0, Direction.N, new Planet(10, 10));
  console.log(
    "Initial position: " +
      robot.position.x +
      "," +
      robot.position.y +
      "," +
      robot.position.direction
  );
  robot.readSequence(command);
  console.log(
    "New position: " +
      robot.position.x +
      "," +
      robot.position.y +
      "," +
      robot.position.direction
  );
  return `${robot.position.x}:${robot.position.y}:${robot.position.direction}`;
}
const command = process.argv[2];

if (command) {
  main(command);
} else {
  console.log("Please provide a command string as an argument.");
}

import Direction from "./direction";
import Position from "./position";
import Planet from "./planet";

class Robot {
  position: Position;
  planet: Planet;
  private static readonly DIRECTIONS: Direction[] = [
    Direction.N,
    Direction.E,
    Direction.S,
    Direction.W,
  ];

  constructor(x: number, y: number, direction: Direction, planet: Planet) {
    this.position = new Position(x, y, direction);
    this.planet = planet;
  }

  move(command: string): void {
    switch (command) {
      case "F":
        this.moveForward();
        break;
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
      default:
        console.log(`Unknown command: ${command}`);
    }
  }

  readSequence(commands: string): void {
    for (const command of commands) {
      console.log(`Executing command: ${command}`);
      this.move(command);
    }
  }

  private moveForward(): void {
    switch (this.position.direction) {
      case Direction.N:
        this.position.y = (this.position.y + 1) % this.planet.height;
        break;
      case Direction.E:
        this.position.x = (this.position.x + 1) % this.planet.width;
        break;
      case Direction.S:
        this.position.y =
          (this.position.y - 1 + this.planet.height) % this.planet.height;
        break;
      case Direction.W:
        this.position.x =
          (this.position.x - 1 + this.planet.width) % this.planet.width;
        break;
    }
  }

  private turnLeft(): void {
    const currentIndex = Robot.DIRECTIONS.indexOf(
      this.position.direction as Direction
    );
    const newIndex =
      (currentIndex - 1 + Robot.DIRECTIONS.length) % Robot.DIRECTIONS.length;
    this.position.direction = Robot.DIRECTIONS[newIndex];
  }

  private turnRight(): void {
    const currentIndex = Robot.DIRECTIONS.indexOf(
      this.position.direction as Direction
    );
    const newIndex = (currentIndex + 1) % Robot.DIRECTIONS.length;
    this.position.direction = Robot.DIRECTIONS[newIndex];
  }
}

export default Robot;

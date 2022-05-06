export class LocationV2 {
  constructor(private readonly x: number, private readonly y: number) {}

  public shift(shiftX: number, shiftY: number) {
    const nextX = this.x + shiftX;
    const nextY = this.y + shiftY;

    return new LocationV2(nextX, nextY);
  }
}

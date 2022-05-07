export class RectangleV1 {
  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}

  public area() {
    return this.width * this.height;
  }
}

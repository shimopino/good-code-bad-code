export class CircleV1 {
  constructor(private readonly radius: number) {}

  public area() {
    return this.radius * this.radius * Math.PI;
  }
}

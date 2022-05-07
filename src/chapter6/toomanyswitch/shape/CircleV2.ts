import { Shape } from './ShapeV2';

export class CircleV2 implements Shape {
  constructor(private readonly radius: number) {}

  public area() {
    return this.radius * this.radius * Math.PI;
  }
}

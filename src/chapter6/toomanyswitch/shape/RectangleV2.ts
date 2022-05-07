import { Shape } from './ShapeV2';

export class RectangleV2 implements Shape {
  constructor(
    private readonly width: number,
    private readonly height: number
  ) {}

  public area() {
    return this.width * this.height;
  }
}

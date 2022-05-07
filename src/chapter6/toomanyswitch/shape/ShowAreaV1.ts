import { CircleV1 } from './CircleV1';
import { RectangleV1 } from './RectangleV1';

export class ShowAreaV1 {
  public showArea(shape: object) {
    if (shape instanceof RectangleV1) {
      return shape.area();
    }

    if (shape instanceof CircleV1) {
      return shape.area();
    }
  }
}

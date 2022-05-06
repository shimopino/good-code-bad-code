import { LocationV1 } from './LocationV1';

export class ActorManagerV1 {
  public shift(location: LocationV1, shiftX: number, shiftY: number) {
    location.x += shiftX;
    location.y += shiftY;
  }
}

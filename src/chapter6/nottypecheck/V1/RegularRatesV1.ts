import { Money } from '../Money';
import { HotelRatesV1 } from './HotelRatesV1';

export class RegularRatesV1 implements HotelRatesV1 {
  fee() {
    return new Money(7000);
  }
}

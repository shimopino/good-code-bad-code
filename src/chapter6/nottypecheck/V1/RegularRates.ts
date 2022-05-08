import { Money } from '../Money';
import { HotelRates } from './HotelRates';

export class RegularRates implements HotelRates {
  fee() {
    return new Money(7000);
  }
}

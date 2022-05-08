import { Money } from '../Money';
import { HotelRates } from './HotelRates';

export class PremiumRates implements HotelRates {
  fee() {
    return new Money(12000);
  }
}

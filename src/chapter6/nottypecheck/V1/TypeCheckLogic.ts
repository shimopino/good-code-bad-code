import { Money } from '../Money';
import { HotelRates } from './HotelRates';
import { RegularRates } from './RegularRates';
import { PremiumRates } from './PremiumRates';

export class TypeCheckLogic {
  public getFee(hotelRates: HotelRates) {
    if (hotelRates instanceof RegularRates) {
      return hotelRates.fee().add(new Money(3000));
    } else if (hotelRates instanceof PremiumRates) {
      return hotelRates.fee().add(new Money(5000));
    }
  }
}

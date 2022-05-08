import { Money } from '../Money';
import { HotelRatesV1 } from './HotelRatesV1';
import { RegularRatesV1 } from './RegularRatesV1';
import { PremiumRatesV1 } from './PremiumRatesV1';

export class TypeCheckLogic {
  public getBusySeaconFee(hotelRates: HotelRatesV1) {
    if (hotelRates instanceof RegularRatesV1) {
      return hotelRates.fee().add(new Money(3000));
    } else if (hotelRates instanceof PremiumRatesV1) {
      return hotelRates.fee().add(new Money(5000));
    }
  }
}

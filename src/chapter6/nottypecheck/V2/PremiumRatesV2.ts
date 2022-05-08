import { Money } from '../Money';
import { HotelRatesV2 } from './HotelRatesV2';

export class PremiumRatesV2 implements HotelRatesV2 {
  fee() {
    return new Money(12000);
  }

  busySeaconFee() {
    return this.fee().add(new Money(5000));
  }
}

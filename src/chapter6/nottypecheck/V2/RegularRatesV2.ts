import { Money } from '../Money';
import { HotelRatesV2 } from './HotelRatesV2';

export class RegularRatesV2 implements HotelRatesV2 {
  fee() {
    return new Money(7000);
  }

  busySeaconFee() {
    return this.fee().add(new Money(3000));
  }
}

import { Money } from '../Money';

export interface HotelRatesV2 {
  fee(): Money;
  busySeaconFee(): Money;
}

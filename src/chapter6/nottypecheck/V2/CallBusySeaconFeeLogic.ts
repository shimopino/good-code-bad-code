import { HotelRatesV2 } from './HotelRatesV2';

export class CallBusySeaconFeeLogic {
  public getBusySeaconFee(hotelRates: HotelRatesV2) {
    return hotelRates.busySeaconFee();
  }
}

import { PurchaseHistory } from '../PurchaseHistory';

export class CustomerRankLogic {
  public isGoldCustomer(history: PurchaseHistory) {
    if (history.totalAmount >= 100000) {
      if (history.purchaseFrequencyPerMonth >= 10) {
        if (history.returnRate <= 0.001) {
          return true;
        }
      }
    }
    return false;
  }

  public isSilverCustomer(history: PurchaseHistory) {
    if (history.purchaseFrequencyPerMonth >= 10) {
      if (history.returnRate <= 0.001) {
        return true;
      }
    }
    return false;
  }
}

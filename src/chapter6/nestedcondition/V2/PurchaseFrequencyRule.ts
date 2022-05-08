import { PurchaseHistory } from '../PurchaseHistory';
import { ExcellentCustomerRule } from './ExcellentCustomerRule';

export class PurchaseFrequencyRule implements ExcellentCustomerRule {
  ok(history: PurchaseHistory) {
    return history.purchaseFrequencyPerMonth >= 10;
  }
}

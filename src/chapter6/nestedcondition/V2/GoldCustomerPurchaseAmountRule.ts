import { PurchaseHistory } from '../PurchaseHistory';
import { ExcellentCustomerRule } from './ExcellentCustomerRule';

export class GoldCustomerPurchaseAmountRule implements ExcellentCustomerRule {
  ok(history: PurchaseHistory) {
    return history.totalAmount >= 100000;
  }
}

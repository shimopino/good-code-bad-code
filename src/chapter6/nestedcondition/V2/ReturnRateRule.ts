import { PurchaseHistory } from '../PurchaseHistory';
import { ExcellentCustomerRule } from './ExcellentCustomerRule';

export class ReturnRateRule implements ExcellentCustomerRule {
  ok(history: PurchaseHistory) {
    return history.returnRate <= 0.001;
  }
}

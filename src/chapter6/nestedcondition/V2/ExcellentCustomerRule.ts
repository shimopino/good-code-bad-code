import { PurchaseHistory } from '../PurchaseHistory';

export interface ExcellentCustomerRule {
  ok(history: PurchaseHistory): boolean;
}

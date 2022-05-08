export class PurchaseHistory {
  constructor(
    public totalAmount: number,
    public purchaseFrequencyPerMonth: number,
    public returnRate: number
  ) {}
}

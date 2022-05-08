import { RegularPrice } from './RegularPrice';

export class RegularDiscountPrice {
  private static MIN_AMOUNT = 0;
  private static DISCOUNT_AMOUNT = 400;
  private readonly amount: number;

  constructor(price: RegularPrice) {
    let discountAmount = price.amount - RegularDiscountPrice.DISCOUNT_AMOUNT;

    if (discountAmount < RegularDiscountPrice.MIN_AMOUNT) {
      discountAmount = RegularDiscountPrice.MIN_AMOUNT;
    }

    this.amount = discountAmount;
  }
}

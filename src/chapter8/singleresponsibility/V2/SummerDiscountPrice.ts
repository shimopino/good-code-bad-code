import { RegularPrice } from './RegularPrice';

export class SummerDiscountPrice {
  private static MIN_AMOUNT = 0;
  private static DISCOUNT_AMOUNT = 300;
  private readonly amount: number;

  constructor(price: RegularPrice) {
    let discountAmount = price.amount - SummerDiscountPrice.DISCOUNT_AMOUNT;

    if (discountAmount < SummerDiscountPrice.MIN_AMOUNT) {
      discountAmount = SummerDiscountPrice.MIN_AMOUNT;
    }

    this.amount = discountAmount;
  }
}

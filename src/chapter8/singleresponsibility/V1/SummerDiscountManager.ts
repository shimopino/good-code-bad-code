import { DiscountManagerV1 } from './DiscountManager';
import { ProductV1 } from './Product';

export class SummerDiscountManagerV1 {
  private discountManager: DiscountManagerV1 = new DiscountManagerV1();

  public add(product: ProductV1) {
    if (product.id < 0) throw new Error('idは0以上で設定');
    if (product.name === '') throw new Error('名前を指定して');

    let tmp: number;
    if (product.canDiscount) {
      tmp =
        this.discountManager.totalPrice +
        DiscountManagerV1.getDiscountPrice(product.price);
    } else {
      tmp = this.discountManager.totalPrice + product.price;
    }

    if (tmp < 30000) {
      this.discountManager.totalPrice = tmp;
      this.discountManager.discountProducts.push(product);
      return true;
    } else {
      return false;
    }
  }
}

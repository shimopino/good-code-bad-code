import { ProductV1 } from './Product';
import { ProductDiscountV1 } from './ProductDiscount';

export class DiscountManagerV1 {
  public discountProducts: ProductV1[] = [];
  public totalPrice = 0;

  public add(product: ProductV1, productDiscount: ProductDiscountV1) {
    if (product.id < 0) throw new Error('idは0以上で設定');
    if (product.name === '') throw new Error('名前を指定して');
    if (product.price < 0) throw new Error('価格は0以上で設定');
    if (product.id !== productDiscount.id) throw new Error('idが一致させて');

    const discountPrice = DiscountManagerV1.getDiscountPrice(product.price);

    let tmp: number;
    if (productDiscount.canDiscount) {
      tmp = this.totalPrice += discountPrice;
    } else {
      tmp = this.totalPrice + product.price;
    }

    if (tmp <= 20000) {
      this.totalPrice = tmp;
      this.discountProducts.push(product);
      return true;
    } else {
      return false;
    }
  }

  public static getDiscountPrice(price: number) {
    const discountPrice = price - 300;
    if (discountPrice < 0) {
      return 0;
    }
    return discountPrice;
  }
}

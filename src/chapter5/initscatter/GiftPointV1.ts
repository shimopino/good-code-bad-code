import { ConsumptionPoint } from './ConsumptionPoint';

export class GiftPointV1 {
  private static MIN_POINT = 0;
  private readonly point: number;

  constructor(point: number) {
    if (point < GiftPointV1.MIN_POINT) {
      throw new Error('ポイントが0以上ではありません');
    }

    this.point = point;
  }

  /**
   * ポイントを加算する
   *
   * @param other 加算ポイント
   * @returns 加算後の残余ポイント
   */
  public add(other: GiftPointV1) {
    return new GiftPointV1(this.point + other.point);
  }

  /**
   * @param point 消費ポイント
   * @returns 残余ポイントが消費ポイント以上であれば true
   */
  public isEnough(point: ConsumptionPoint) {
    return point.point <= this.point;
  }

  public consume(point: ConsumptionPoint) {
    if (!this.isEnough(point)) {
      throw new Error('ポイントが不足しています');
    }

    return new GiftPointV1(this.point - point.point);
  }
}

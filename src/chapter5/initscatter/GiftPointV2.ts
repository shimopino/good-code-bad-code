export class GiftPointV2 {
  private static MIN_POINT = 0;
  private static STANDARD_MEMBERSHIP_POINT = 3000;
  private static PREMIUM_MEMBERSHIP_POINT = 10000;

  private readonly point: number;

  private constructor(point: number) {
    if (point < GiftPointV2.MIN_POINT) {
      throw new Error('ポイントが0以上ではありません');
    }

    this.point = point;
  }

  /**
   * @returns 標準会員向け入会ギフトポイント
   */
  public static forStandardMemberShip() {
    return new GiftPointV2(GiftPointV2.STANDARD_MEMBERSHIP_POINT);
  }

  /**
   * @returns プレミアム会員向け入会ギフトポイント
   */
  public static forPremiumMemberShip() {
    return new GiftPointV2(GiftPointV2.PREMIUM_MEMBERSHIP_POINT);
  }
}

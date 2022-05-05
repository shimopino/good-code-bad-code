export class HitPointV2 {
  private static MIN = 0;
  private static MAX = 999;

  public hitPoint: number;

  constructor(hitPoint: number) {
    if (hitPoint < HitPointV2.MIN) throw new Error('hoge');
    if (hitPoint > HitPointV2.MAX) throw new Error('fuga');

    this.hitPoint = hitPoint;
  }

  /**
   * ここで回復量を引数に渡すようにしているのは、「Grokking Simplicity」でも
   * 述べられているように、関数内から外部への依存関係をなくすと自然にそうなる
   */
  public recover(recoveryAmount: number) {
    const recovered = this.hitPoint + recoveryAmount;
    const corrected = recovered > HitPointV2.MAX ? HitPointV2.MAX : recovered;

    return new HitPointV2(corrected);
  }

  public damage(damageAmount: number) {
    const damaged = this.hitPoint - damageAmount;
    const corrected = damaged < HitPointV2.MIN ? HitPointV2.MIN : damaged;

    return new HitPointV2(corrected);
  }
}

export class RecoverMagicPointMethodV1 {
  /**
   * 魔法力を回復する
   *
   * @param currentMagicPoint 現在の魔法力残量
   * @param originalMaxMagicPoint オリジナルの魔法力最大値
   * @param maxMagicPointIncrements 魔法力最大値の増分
   * @param recoveryAmount 魔法力の回復量
   * @returns 魔法力
   */
  public recoverMagicPoint(
    currentMagicPoint: number,
    originalMaxMagicPoint: number,
    maxMagicPointIncrements: number[],
    recoveryAmount: number
  ) {
    let currentMaxMagicPoint = originalMaxMagicPoint;

    for (const each of maxMagicPointIncrements) {
      currentMaxMagicPoint += each;
    }

    return Math.max(currentMagicPoint + recoveryAmount, currentMaxMagicPoint);
  }
}

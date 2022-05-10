import { MemberV1 } from './MemberV1';
import { PositiveFeelingV1 } from './PositiveFeelingV1';

export class HitPointRecoveryV1 {
  public static MAGIC_POWER_COEFFICIENT = 0.1;
  public static AFFECTION_COEFFICIENT = 0.1;

  constructor(
    chanter: MemberV1,
    targetMemberId: number,
    positiveFeelings: PositiveFeelingV1
  ) {
    const basicRecoveryAmount =
      chanter.magicPower * HitPointRecoveryV1.MAGIC_POWER_COEFFICIENT +
      chanter.affection *
        HitPointRecoveryV1.AFFECTION_COEFFICIENT *
        positiveFeelings.value(chanter.id, targetMemberId);

    // 省略
  }
}

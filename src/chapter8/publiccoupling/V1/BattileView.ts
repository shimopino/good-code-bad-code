import { MemberV1 } from './MemberV1';
import { PositiveFeelingV1 } from './PositiveFeelingV1';

export class BattleView {
  positiveFeelings: PositiveFeelingV1;
  member1: MemberV1;
  member2: MemberV1;

  public startAttackAnimation() {
    return this.positiveFeelings.increase(this.member1.id, this.member2.id);
  }
}

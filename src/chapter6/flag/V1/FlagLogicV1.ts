import { Member } from '../Member';
import { STATE_TYPE } from '../StateType';

export class FlagLogicV1 {
  constructor(private readonly member: Member) {}

  public damage(damageFlag: boolean, damageAmount: number) {
    if (damageFlag) {
      // HPダメージ
      this.member.hitPoint -= damageAmount;
      if (this.member.hitPoint > 0) return;

      this.member.hitPoint = 0;
      this.member.changeState(STATE_TYPE.DEAD);
    } else {
      // MPダメージ
      this.member.magicPoint -= damageAmount;
      if (this.member.magicPoint > 0) return;

      this.member.magicPoint = 0;
    }
  }
}

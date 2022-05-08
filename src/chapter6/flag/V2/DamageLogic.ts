import { Member } from '../Member';
import { STATE_TYPE } from '../StateType';

export class DamageLogicV2 {
  constructor(private readonly member: Member) {}

  public hitPointDamage(damageAmount: number) {
    // HPダメージ
    this.member.hitPoint -= damageAmount;
    if (this.member.hitPoint > 0) return;

    this.member.hitPoint = 0;
    this.member.changeState(STATE_TYPE.DEAD);
  }

  public magicPointDamage(damageAmount: number) {
    // MPダメージ
    this.member.magicPoint -= damageAmount;
    if (this.member.magicPoint > 0) return;

    this.member.magicPoint = 0;
  }
}

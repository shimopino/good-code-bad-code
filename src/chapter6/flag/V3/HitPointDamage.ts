import { Member } from '../Member';
import { STATE_TYPE } from '../StateType';
import { Damage } from './Damage';

export class HitPointDamage implements Damage {
  constructor(private readonly member: Member) {}

  public execute(damageAmount: number) {
    // HPダメージ
    this.member.hitPoint -= damageAmount;
    if (this.member.hitPoint > 0) return;

    this.member.hitPoint = 0;
    this.member.changeState(STATE_TYPE.DEAD);
  }
}

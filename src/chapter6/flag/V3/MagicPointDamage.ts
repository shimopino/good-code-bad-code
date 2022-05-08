import { Member } from '../Member';
import { Damage } from './Damage';

export class MagicPointDamage implements Damage {
  constructor(private readonly member: Member) {}

  public execute(damageAmount: number) {
    // MPダメージ
    this.member.magicPoint -= damageAmount;
    if (this.member.magicPoint > 0) return;

    this.member.magicPoint = 0;
  }
}

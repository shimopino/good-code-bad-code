import { Member } from '../Member';
import { AttackPower } from './AttackPower';
import { Magic } from './Magic';
import { MagicPoint } from './MagicPoint';
import { TechnicalPower } from './TechnicalPower';

export class HellFire implements Magic {
  constructor(private readonly member: Member) {}

  public getName() {
    return '地獄の業火';
  }

  public costMagicPoint() {
    return new MagicPoint(16);
  }

  public attackPower() {
    const ap = 200 + this.member.magicAttack * 0.5 + this.member.vitality * 2;
    return new AttackPower(ap);
  }

  public costTechnicalPoint() {
    const tp = 20 + this.member.level * 0.4;
    return new TechnicalPower(tp);
  }
}

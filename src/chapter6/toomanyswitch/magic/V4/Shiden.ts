import { Member } from '../Member';
import { AttackPower } from './AttackPower';
import { Magic } from './Magic';
import { MagicPoint } from './MagicPoint';
import { TechnicalPower } from './TechnicalPower';

export class Shiden implements Magic {
  constructor(private readonly member: Member) {}

  public getName() {
    return '紫電';
  }

  public costMagicPoint() {
    const cost = 5 + this.member.level * 0.2;
    return new MagicPoint(cost);
  }

  public attackPower() {
    const ap = 50 + this.member.agility * 1.5;
    return new AttackPower(ap);
  }

  public costTechnicalPoint() {
    return new TechnicalPower(5);
  }
}

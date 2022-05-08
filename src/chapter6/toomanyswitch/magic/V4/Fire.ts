import { Member } from '../Member';
import { AttackPower } from './AttackPower';
import { Magic } from './Magic';
import { MagicPoint } from './MagicPoint';
import { TechnicalPower } from './TechnicalPower';

export class Fire implements Magic {
  constructor(private readonly member: Member) {}

  public getName() {
    return 'ファイア';
  }

  public costMagicPoint() {
    return new MagicPoint(2);
  }

  public attackPower() {
    const ap = 20 + this.member.level * 0.5;
    return new AttackPower(ap);
  }

  public costTechnicalPoint() {
    return new TechnicalPower(0);
  }
}

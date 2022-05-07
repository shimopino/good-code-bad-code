import { HEALTH_CONDITION } from './HealthCondition';
import { Member } from './Member';

export class ElseLogicV2 {
  private member: Member;

  constructor(member: Member) {
    this.member = member;
  }

  public getCondition() {
    const hitPointRate = this.member.hitPoint / this.member.maxHitPoint;

    if (hitPointRate === 0) {
      return HEALTH_CONDITION.DEAD;
    } else if (hitPointRate < 0.3) {
      return HEALTH_CONDITION.DANGER;
    } else if (hitPointRate < 0.5) {
      return HEALTH_CONDITION.CAUTION;
    } else {
      return HEALTH_CONDITION.FINE;
    }
  }
}

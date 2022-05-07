import { HEALTH_CONDITION } from './HealthCondition';
import { Member } from './Member';

export class ElseLogicV1 {
  private member: Member;

  constructor(member: Member) {
    this.member = member;
  }

  public getCondition() {
    const hitPointRate = this.member.hitPoint / this.member.maxHitPoint;

    let currentHealthCondition;
    if (hitPointRate === 0) {
      currentHealthCondition = HEALTH_CONDITION.DEAD;
    } else if (hitPointRate < 0.3) {
      currentHealthCondition = HEALTH_CONDITION.DANGER;
    } else if (hitPointRate < 0.5) {
      currentHealthCondition = HEALTH_CONDITION.CAUTION;
    } else {
      currentHealthCondition = HEALTH_CONDITION.FINE;
    }

    return currentHealthCondition;
  }
}

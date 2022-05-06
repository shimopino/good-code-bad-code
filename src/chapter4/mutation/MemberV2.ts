import { HitPointV2 } from './HitPointV2';
import { States } from './State';
import { STATE_TYPES } from './StateType';

export class MemberV2 {
  private readonly hitPoint: HitPointV2;
  private readonly states: States;

  constructor(hitPoint: number) {
    this.hitPoint = new HitPointV2(hitPoint);
    this.states = new States();
  }

  public damage(damageAmount: number) {
    this.hitPoint.damage(damageAmount);
    if (this.hitPoint.isZero()) {
      this.states.add(STATE_TYPES.DEAD);
    }
  }
}

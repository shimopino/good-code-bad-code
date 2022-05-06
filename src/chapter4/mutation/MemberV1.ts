import { HitPointV1 } from './HitPointV1';
import { States } from './State';

export class MemberV1 {
  private readonly hitPoint: HitPointV1;
  private readonly states: States;

  constructor(hitPoint: number) {
    this.hitPoint = new HitPointV1(hitPoint);
    this.states = new States();
  }

  public damage(damageAmount: number) {
    this.hitPoint.amount -= damageAmount;
  }
}

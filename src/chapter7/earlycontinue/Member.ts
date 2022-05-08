import { STATE_TYPE } from './StateType';

export class Member {
  private set: Set<STATE_TYPE>;

  public static fineMember(hitPoint: number) {
    const member = new Member(hitPoint);
    member.addState(STATE_TYPE.FINE);
    return member;
  }

  public static poisonedMember(hitPoint: number) {
    const member = new Member(hitPoint);
    member.addState(STATE_TYPE.POISON);
    return member;
  }

  public static deadMember() {
    const member = new Member(0);
    member.addState(STATE_TYPE.DEAD);
    return member;
  }

  private constructor(public hitPoint: number) {
    this.set = new Set();
  }

  public containsState(stateType: STATE_TYPE) {
    return this.set.has(stateType);
  }

  public addState(stateType: STATE_TYPE) {
    this.set.add(stateType);
  }

  public removeState(stateType: STATE_TYPE) {
    this.set.delete(stateType);
  }
}

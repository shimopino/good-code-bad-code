import { Member } from './Member';
import { STATE_TYPE } from './StateType';

export class LogicV1 {
  public poison(members: Member[]) {
    for (const member of members) {
      if (member.hitPoint > 0) {
        if (member.containsState(STATE_TYPE.POISON)) {
          member.hitPoint -= 10;
          if (member.hitPoint <= 0) {
            member.hitPoint = 0;
            member.addState(STATE_TYPE.DEAD);
            member.removeState(STATE_TYPE.POISON);
          }
        }
      }
    }
  }
}

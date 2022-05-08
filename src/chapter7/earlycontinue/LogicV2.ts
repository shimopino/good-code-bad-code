import { Member } from './Member';
import { STATE_TYPE } from './StateType';

export class LogicV2 {
  public poison(members: Member[]) {
    for (const member of members) {
      // 生存していない場合は次のループに移行する
      if (member.hitPoint === 0) continue;

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

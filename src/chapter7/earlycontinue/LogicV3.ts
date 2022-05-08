import { Member } from './Member';
import { STATE_TYPE } from './StateType';

export class LogicV3 {
  public poison(members: Member[]) {
    for (const member of members) {
      // 生存していない場合は次のループに移行する
      if (member.hitPoint === 0) continue;

      // 毒状態ではない場合は次のループに移行する
      if (!member.containsState(STATE_TYPE.POISON)) continue;

      member.hitPoint -= 10;

      // HPが0以下になっていない場合は次のループに移行する
      if (member.hitPoint > 0) continue;

      member.hitPoint = 0;
      member.addState(STATE_TYPE.DEAD);
      member.removeState(STATE_TYPE.POISON);
    }
  }
}

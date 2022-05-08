import { Member } from './Member';

export class BattleManagerV1 {
  public membersAreAlive(members: Member[]) {
    let result = false;
    for (const each of members) {
      if (each.isAlive()) {
        result = true;
        break;
      }
    }
    return result;
  }
}

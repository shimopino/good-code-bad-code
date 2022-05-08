import { Member } from './Member';

export class LogicV1 {
  public totalDamage(members: Member[]) {
    let totalDamage = 0;
    for (const member of members) {
      if (member.hasTeamAttackSucceeded()) {
        const damage = member.attack() * 1.1;

        if (damage >= 30) {
          totalDamage += damage;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    return totalDamage;
  }
}

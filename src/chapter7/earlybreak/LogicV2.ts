import { Member } from './Member';

export class LogicV2 {
  public totalDamage(members: Member[]) {
    let totalDamage = 0;
    for (const member of members) {
      // 連携攻撃の評価が失敗した場合はそこで終了
      if (!member.hasTeamAttackSucceeded()) break;

      const damage = member.attack() * 1.1;

      // 加算ダメージ値が30未満の場合はそこで終了
      if (damage < 30) break;

      totalDamage += damage;
    }
    return totalDamage;
  }
}

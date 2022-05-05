import { Member } from './Member';
import { Enemy } from './Enemy';

export class DamageLogicV2 {
  constructor(private member: Member, private enemy: Enemy) {}

  public damage() {
    // メンバーの腕力と武器性能が基本攻撃力
    let tmp = this.member.power() + this.member.weaponAttack();

    // メンバのスピードで攻撃力を補正
    tmp = tmp * (1 + this.member.speed() / 100);

    // 攻撃力から敵の防御力を差し引いたのがダメージ
    tmp = tmp - this.enemy.defence();

    // ダメージ値が負数にならないよう補正
    tmp = Math.max(0, tmp);

    return tmp;
  }
}

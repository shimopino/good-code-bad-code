import { Member } from './Member';
import { Enemy } from './Enemy';

export class DamageLogicV2 {
  constructor(private member: Member, private enemy: Enemy) {}

  public damage() {
    // メンバーの腕力と武器性能が基本攻撃力
    const basicAttackPower = this.member.power() + this.member.weaponAttack();

    // メンバのスピードで攻撃力を補正
    const filalAttackPower = basicAttackPower * (1 + this.member.speed() / 100);

    // 攻撃力から敵の防御力を差し引いたのがダメージ
    const reduction = this.enemy.defence() / 2;

    // ダメージ値が負数にならないよう補正
    const damage = Math.max(0, filalAttackPower - reduction);

    return damage;
  }
}

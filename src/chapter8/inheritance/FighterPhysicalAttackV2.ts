import { PhysicalAttackV2 } from './PhysicalAttackV2';

export class FighterPhysicalAttackV2 {
  constructor(private readonly physicalAttack: PhysicalAttackV2) {}

  // 単体攻撃のダメージ値を返す
  public singleAttackDamage() {
    return this.physicalAttack.singleAttackDamage() + 20;
  }

  // 2回攻撃のダメージ値を返す
  public doubleAttackDamage() {
    return this.physicalAttack.doubleAttackDamage() + 10;
  }
}

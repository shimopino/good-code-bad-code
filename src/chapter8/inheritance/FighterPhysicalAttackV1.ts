import { PhysicalAttackV1 } from './PhysicalAttackV1';

export class FighterPhysicalAttackV1 extends PhysicalAttackV1 {
  // 単体攻撃のダメージ値を返す
  public singleAttackDamage() {
    return super.singleAttackDamage() + 20;
  }

  // 2回攻撃のダメージ値を返す
  public doubleAttackDamage() {
    return super.doubleAttackDamage() + 10;
  }
}

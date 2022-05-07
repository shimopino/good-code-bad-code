import { Magic } from './Magic';
import { Member } from './Member';

export class NestedLogicV2 {
  public member: Member = new Member();
  public magic: Magic = new Magic();

  /**
   * 魔法を実発動できる場合は、MPを消費して魔法を発動する
   */
  public spell() {
    // 死亡状態なら何もしない
    if (this.member.hitPoint <= 0) return;

    // 行動可能か判定
    if (this.member.canAct()) {
      // 魔法力が残存しているのか判定
      if (this.magic.costMagicPoint <= this.member.magicPoint) {
        this.member.consumeMagicPoint(this.magic.costMagicPoint);
        this.member.chant(this.magic);
      }
    }
  }
}

import { Magic } from './Magic';
import { Member } from './Member';

export class NestedLogicV3 {
  public member: Member = new Member();
  public magic: Magic = new Magic();

  /**
   * 魔法を実発動できる場合は、MPを消費して魔法を発動する
   */
  public spell() {
    // 死亡状態なら何もしない
    if (this.member.hitPoint <= 0) return;

    // 行動不能なら何もしない
    if (!this.member.canAct()) return;

    // 魔法力が残存していないなら何もしない
    if (this.member.magicPoint < this.magic.costMagicPoint) return;

    this.member.consumeMagicPoint(this.magic.costMagicPoint);
    this.member.chant(this.magic);
  }
}

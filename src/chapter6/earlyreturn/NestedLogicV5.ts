import { Magic } from './Magic';
import { Member } from './Member';

export class NestedLogicV5 {
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

    // テクニカルポイントが不足しているなら何もしない
    if (this.member.technicalPoint < this.magic.costTechnicalPoint) return;

    this.member.consumeMagicPoint(this.magic.costMagicPoint);
    this.member.chant(this.magic);

    // 魔法発動後のTP回復を追加
    this.member.gainTechnicalPoint(this.magic.incrementTechnicalPoint);
  }
}

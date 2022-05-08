import { Member } from './Member';

export class PartyV2 {
  private static MAX_MEMBER_COUNT = 4;
  private readonly members: Member[];

  constructor(members?: Member[]) {
    this.members = members ? members : [];
  }

  public add(newMember: Member) {
    if (this.exists(newMember)) throw new Error('既にパーティに加わっています');

    if (this.isFull()) throw new Error('これ以上メンバーを追加できません');

    const added = [...this.members, newMember];
    return new PartyV2(added);
  }

  /**
   * @returns パーティのメンバーが一人でも生存していれば true
   */
  public isAlive() {
    return this.members.some((member) => member.isAlive());
  }

  /**
   * @param member パーティに所属しているか調べたいメンバー
   * @returns 既にパーティに所属している場合は true
   */
  public exists(member: Member) {
    return this.members.some((each) => each.id === member.id);
  }

  /**
   * @returns パーティが満員の場合は true を返す
   */
  public isFull() {
    return this.members.length === PartyV2.MAX_MEMBER_COUNT;
  }

  /**
   * @returns 外部から操作できない配列を返す
   */
  public getMembers() {
    return Object.freeze(this.members);
  }
}

import { Member } from './Member';

export class FieldManagerV1 {
  private static MAX_MEMBER_COUNT = 4;

  /**
   * メンバーを追加する
   * @param members 既存のパーティメンバー
   * @param newMember 新しく参入させたいメンバー
   */
  public addMember(members: Member[], newMember: Member) {
    if (members.some((member) => member.id === newMember.id)) {
      throw new Error('既にパーティに加わっています。');
    }

    if (members.length === FieldManagerV1.MAX_MEMBER_COUNT) {
      throw new Error('これ以上メンバーを追加できません。');
    }

    members.push(newMember);
  }

  public partyIsAlive(members: Member[]) {
    return members.some((member) => member.isAlive());
  }
}

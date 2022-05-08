import { describe, expect, it } from 'vitest';
import { LogicV1 } from './LogicV1';
import { Member } from './Member';

describe('EarlyContinue', () => {
  describe('V1', () => {
    it('配列要素に対する複数の条件分岐によるネスト構造', () => {
      // 以下の初期データはファクトリパターンで作成できる
      const members: Member[] = [
        Member.fineMember(20),
        Member.poisonedMember(15),
        Member.poisonedMember(5),
      ];

      const logic = new LogicV1();
      logic.poison(members);

      expect(members).toEqual([
        Member.fineMember(20),
        Member.poisonedMember(5),
        Member.deadMember(),
      ]);
    });
  });
});

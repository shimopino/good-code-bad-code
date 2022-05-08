import { describe, expect, it } from 'vitest';
import { BattleManagerV1 } from './BattleManagerV1';
import { FieldManagerV1 } from './FieldManagerV1';
import { Member } from './Member';
import { PartyV2 } from './PartyV2';

describe('LowCoherenceCollection', () => {
  describe('V1', () => {
    it('配列操作に関するメソッドが分散して低凝集になってしまう', () => {
      const members = [new Member(1), new Member(2)];

      const field = new FieldManagerV1();
      const battle = new BattleManagerV1();

      expect(field.partyIsAlive(members)).toBeTruthy();
      expect(battle.membersAreAlive(members)).toBeTruthy();
    });
  });

  describe('V2', () => {
    /**
     * ファーストクラスコレクション
     *
     * - コレクション操作をカプセル化する
     * - これで言語がデフォルトでサポートしているコレクション操作の
     *   方法ではなく、プロジェクトで定義したコレクション操作に限定
     *   させ、コレクション操作の方法を統一させる
     */
    it('ファーストクラスコレクションを導入して操作を統一する', () => {
      const party = new PartyV2();

      const addedParty = party.add(new Member(1));

      expect(party.getMembers()).toEqual([]);
      expect(addedParty.getMembers()).toEqual([new Member(1)]);
    });

    it('プリミティブな配列オブジェクトへの可変操作はできない', () => {
      const party = new PartyV2();
      const freezeMembers = party.getMembers();

      // @ts-expect-error Object.freezeをすると可変操作の push はエラーになる
      const target = () => freezeMembers.push(new Member(2));

      expect(target).toThrow(
        new Error('Cannot add property 0, object is not extensible')
      );

      // 不変操作の場合は実行できる
      expect(freezeMembers.concat(new Member(1))).toEqual([new Member(1)]);
      expect(freezeMembers).toEqual([]);
    });
  });
});

import { describe, expect, it } from 'vitest';
import { BattleManagerV1 } from './BattleManagerV1';
import { FieldManagerV1 } from './FieldManagerV1';
import { Member } from './Member';

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
});

import { describe, expect, it } from 'vitest';
import { DamageLogicV1 } from './DamageLogicV1';
import { Enemy } from './Enemy';
import { Member } from './Member';

describe('DamageLogic', () => {
  describe('V1', () => {
    it('安全な状態で初期化できる', () => {
      const member = new Member();
      const enemy = new Enemy();
      const logic = new DamageLogicV1(member, enemy);

      expect(logic).toBeDefined();
    });
  });
    it.todo('安全な状態で初期化できる');

    it.todo('ダメージを計算できる');
  });
});

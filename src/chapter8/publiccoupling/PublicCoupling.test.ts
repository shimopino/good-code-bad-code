import { describe, expect, it } from 'vitest';
import { BattleView } from './V1/BattileView';
import { MemberV1 } from './V1/MemberV1';
import { PositiveFeelingV1 } from './V1/PositiveFeelingV1';

describe('PublicCoupling', () => {
  describe('V1', () => {
    it('パッケージ階層が異なるクラスからでもアクセスできてしまう', () => {
      const battleView = new BattleView();
      battleView.positiveFeelings = new PositiveFeelingV1();
      battleView.member1 = new MemberV1(1, 10, 20);
      battleView.member2 = new MemberV1(2, 20, 5);

      expect(battleView.startAttackAnimation()).toBe(2);
    });
  });

  describe('V2', () => {
    it('');
  });
});

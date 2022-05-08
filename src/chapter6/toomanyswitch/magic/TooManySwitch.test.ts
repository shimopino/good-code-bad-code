import { describe, expect, it } from 'vitest';
import { MagicManagerV1 } from './MagicManagerV1';
import { MagicManagerV2 } from './MagicManagerV2';
import { MagicV3 } from './MagicV3';
import { Member } from './Member';
import { AttackPower } from './V4/AttackPower';
import { MagicSwitchV4 } from './V4/MagicSwitchV4';

describe('EarlyReturn', () => {
  describe('V1', () => {
    it('Switch文で魔法種別ごとに分岐処理を実施する', () => {
      const magicManager = new MagicManagerV1();

      expect(magicManager.getName('fire')).toBe('ファイア');
      expect(magicManager.getName('shiden')).toBe('紫電');
    });
  });

  describe('V2', () => {
    it('複数のメソッド内で同一の Switch 文を複製する', () => {
      const magicManager = new MagicManagerV2();

      expect(magicManager.getName('fire')).toBe('ファイア');
      expect(magicManager.getName('shiden')).toBe('紫電');
      expect(magicManager.getName('hellFire')).toBe('地獄の業火');

      expect(magicManager.costMagicPoint('fire')).toBe(5);
      expect(magicManager.costMagicPoint('shiden')).toBe(10);
      expect(magicManager.costMagicPoint('hellFire')).toBe(16);

      expect(magicManager.attackPower('fire')).toBe(5);
      expect(magicManager.attackPower('shiden')).toBe(10);
      // 対応忘れ
      // expect(magicManager.attackPower('hellFire')).toBe(16);

      // 追加漏れ
      expect(magicManager.attackPower('fire')).toBe(5);
      expect(magicManager.attackPower('shiden')).toBe(10);
    });
  });

  describe('V3', () => {
    it('複製されていた switch 文を1つのクラス内に集約する', () => {
      const member = new Member(10, 10, 10, 10);

      const fire = new MagicV3('fire', member);
      expect(fire).toEqual({
        name: 'ファイア',
        costMagicPoint: 2,
        attackPower: 25,
        costTechnicalPoint: 0,
      });

      const shiden = new MagicV3('shiden', member);
      expect(shiden).toEqual({
        name: '紫電',
        costMagicPoint: 7,
        attackPower: 65,
        costTechnicalPoint: 5,
      });

      const hellFire = new MagicV3('hellFire', member);
      expect(hellFire).toEqual({
        name: '地獄の業火',
        costMagicPoint: 16,
        attackPower: 225,
        costTechnicalPoint: 24,
      });
    });
  });

  describe('V4', () => {
    it('ストラテジーパターンを使用して switch 文を削除する', () => {
      const member = new Member(5, 10, 15, 20);
      const logic = new MagicSwitchV4(member);

      // 使う側は、使用する魔法の種別のみを知っていればいい
      // これも定数として型補完ができる
      const ap = logic.magicAttack('fire');

      expect(ap).toEqual(new AttackPower(22.5));
    });
  });
});

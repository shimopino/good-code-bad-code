import { describe, it } from 'vitest';
import { NestedLogicV1 } from './NestedLogicV1';
import { NestedLogicV2 } from './NestedLogicV2';
import { NestedLogicV3 } from './NestedLogicV3';
import { NestedLogicV4 } from './NestedLogicV4';
import { NestedLogicV5 } from './NestedLogicV5';

describe('EarlyReturn', () => {
  describe('V1', () => {
    it('ネストされたIf分のわかりづらさを検証する', () => {
      const magic = new NestedLogicV1();

      magic.spell();
    });
  });

  describe('V2', () => {
    it('早期リターンを使用して、最上層のネストを解消する', () => {
      const magic = new NestedLogicV2();

      magic.spell();
    });
  });

  describe('V3', () => {
    it('早期リターンをもう一段上のネストも解消する', () => {
      const magic = new NestedLogicV3();

      magic.spell();
    });
  });

  describe('V4', () => {
    it('テクニカルポイントに関する条件を追加する', () => {
      const magic = new NestedLogicV4();

      magic.spell();
    });
  });

  describe('V4', () => {
    it('実行ロジックとして、魔法発動後にTPを一定量増加させる、を追加', () => {
      const magic = new NestedLogicV5();

      magic.spell();
    });
  });
});

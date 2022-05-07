import { describe, it } from 'vitest';
import { NestedLogicV1 } from './NestedLogicV1';
import { NestedLogicV2 } from './NestedLogicV2';

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
});

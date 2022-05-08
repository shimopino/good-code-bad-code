import { describe, expect, it } from 'vitest';
import { Item } from './Item';
import { PrisonLogicV1 } from './PrisonLogicV1';

describe('OwnCollection', () => {
  describe('V1', () => {
    it('自前でコレクション操作を実装してしまう', () => {
      const logic = new PrisonLogicV1();

      const hasItems = [
        new Item('部屋の鍵'),
        new Item('寝室の鍵'),
        new Item('牢屋の鍵'), // あり
      ];
      expect(logic.hasPrisonKey(hasItems)).toBeTruthy();

      const hasNotItems = [
        new Item('部屋の鍵'),
        new Item('寝室の鍵'),
        // new Item('牢屋の鍵'),
      ];
      expect(logic.hasPrisonKey(hasNotItems)).toBeFalsy();
    });
  });
});

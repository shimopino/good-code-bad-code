import { describe, expect, it } from 'vitest';
import { Item } from './Item';
import { PrisonLogicV1 } from './PrisonLogicV1';
import { PrisonLogicV2 } from './PrisonLogicV2';

/**
 * 配列操作に関しては、Array.prototypeに数多くのメソッドが登録されている
 *
 * 本書の検索処理に該当するものは以下になる
 *
 * - Array.prototype.some
 * - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some
 */

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

  describe('V2', () => {
    it('標準ライブラリがサポートしているメソッドを使用する', () => {
      const logic = new PrisonLogicV2();

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

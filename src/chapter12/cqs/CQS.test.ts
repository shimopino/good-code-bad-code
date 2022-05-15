import { describe, expect, it } from 'vitest';
import { MagicV1 } from './MagicV1';
import { MagicV2 } from './MagicV2';

describe('Command Query Segregation', () => {
  describe('V1', () => {
    it('変更と参照を同時に行う', () => {
      const magic = new MagicV1(10);

      expect(magic.gainAndGetPoint()).toBe(20);
      expect(magic).toEqual(new MagicV1(20));
    });
  });

  describe('V2', () => {
    it('変更と参照のインターフェースを分離する', () => {
      const magic = new MagicV2(10);

      expect(magic.getPoint()).toBe(10);

      magic.gainPoint();
      expect(magic.getPoint()).toBe(20);
      expect(magic).toEqual(new MagicV2(20));
    });
  });
});

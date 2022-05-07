import { describe, expect, it } from 'vitest';
import { CircleV1 } from './CircleV1';
import { RectangleV1 } from './RectangleV1';
import { ShowAreaV1 } from './ShowAreaV1';
import { CircleV2 } from './CircleV2';
import { RectangleV2 } from './RectangleV2';
import { ShowAreaV2 } from './ShowAreaV2';

describe('EarlyReturn', () => {
  describe('V1', () => {
    it('面積計算に同じメソッド構造を持つクラスを使用する', () => {
      const circle = new CircleV1(3);
      const rectangle = new RectangleV1(3, 4);

      const show = new ShowAreaV1();

      expect(show.showArea(circle)).toBeCloseTo(3 * 3 * Math.PI);
      expect(show.showArea(rectangle)).toBeCloseTo(3 * 4);
    });
  });

  describe('V2', () => {
    it('インターフェースを使用して同じAPIを提供する', () => {
      const circle = new CircleV2(3);
      const rectangle = new RectangleV2(3, 4);

      const show = new ShowAreaV2();

      expect(show.showArea(circle)).toBeCloseTo(3 * 3 * Math.PI);
      expect(show.showArea(rectangle)).toBeCloseTo(3 * 4);
    });
  });
});

import { describe, expect, it } from 'vitest';
import { ActorManagerV1 } from './ActorManagerV1';
import { LocationV1 } from './LocationV1';
import { LocationV2 } from './LocationV2';

describe('OutputArg', () => {
  describe('V1', () => {
    it('引数自体をメソッドの出力に利用してしまう', () => {
      const location = new LocationV1(0, 0);
      const actor = new ActorManagerV1();

      actor.shift(location, 10, 5);

      expect(location).toEqual(new LocationV1(10, 5));
    });
  });

  describe('V2', () => {
    it('操作されるデータ側にロジックを集約させる', () => {
      const location = new LocationV2(0, 0);

      const shifted = location.shift(10, 5);

      expect(location).toEqual(new LocationV2(0, 0));
      expect(shifted).toEqual(new LocationV2(10, 5));
    });
  });
});

import { describe, expect, it } from 'vitest';
import { MagicManagerV1 } from './MagicManagerV1';

describe('EarlyReturn', () => {
  describe('V1', () => {
    it('単一ネストのELSE IFを検証する', () => {
      const magicManager = new MagicManagerV1();

      expect(magicManager.getName('fire')).toBe('ファイア');
    });
  });
});

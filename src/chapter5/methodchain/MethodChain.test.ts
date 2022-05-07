import { describe, it } from 'vitest';
import { Equipment } from './Equipment';
import { Equipments } from './Equipments';

describe('MethodChain', () => {
  describe("Tell, Don't Ask", () => {
    it('オブジェクトとして分離して、コミュニケーションを通じて状態変化', () => {
      const equipments = new Equipments();
      const newArmor = new Equipment();

      equipments.equipArmor(newArmor);
    });
  });
});

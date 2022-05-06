import { describe } from 'vitest';
import { Equipment } from './Equipment';
import { Equipments } from './Equipments';

describe('MethodChain', () => {
  describe("Tell, Don't Ask", () => {
    const equipments = new Equipments();
    const newArmor = new Equipment();

    equipments.equipArmor(newArmor);
  });
});

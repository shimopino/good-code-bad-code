import { Equipment } from './Equipment';

export class Equipments {
  private canChange: boolean;
  private head: Equipment;
  private armor: Equipment;
  private arm: Equipment;

  public equipArmor(newArmor: Equipment) {
    if (this.canChange) {
      this.armor = newArmor;
    }
  }

  public deactivateAll() {
    this.head = Equipment.empty;
    this.armor = Equipment.empty;
    this.arm = Equipment.empty;
  }
}

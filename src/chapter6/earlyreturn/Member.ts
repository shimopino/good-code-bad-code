import { Magic } from './Magic';

export class Member {
  public hitPoint: number;
  public magicPoint: number;
  public technicalPoint: number;

  constructor() {
    this.hitPoint = 0;
    this.magicPoint = 0;
    this.technicalPoint = 0;
  }

  public canAct() {
    return true;
  }

  public consumeMagicPoint(costMp: number) {
    this.magicPoint -= costMp;
  }

  public chant(magic: Magic) {
    // ...
  }

  public gainTechnicalPoint(tp: number) {
    this.technicalPoint += tp;
  }
}

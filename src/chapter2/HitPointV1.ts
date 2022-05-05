export class HitPointV1 {
  public hitPoint: number;
  public damageAmount: number;
  public recoveryAmount: number;

  constructor(hitPoint: number, damageAmount: number, recoveryAmount: number) {
    this.hitPoint = hitPoint;
    this.damageAmount = damageAmount;
    this.recoveryAmount = recoveryAmount;
  }

  public recover() {
    this.hitPoint += this.recoveryAmount;
    if (this.hitPoint > 999) this.hitPoint = 999;
  }

  public damage() {
    this.hitPoint -= this.damageAmount;
    if (this.hitPoint < 0) this.hitPoint = 0;
  }
}

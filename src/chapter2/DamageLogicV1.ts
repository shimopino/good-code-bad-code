export class DamageLogicV1 {
  constructor(
    public p1: number,
    public p2: number,
    public d1: number,
    public d2: number
  ) {}

  public getDamage() {
    let d = 0;
    d = this.p1 + this.p2;
    d = d - (this.d1 + this.d2) / 2;

    if (d < 0) d = 0;

    return d;
  }
}

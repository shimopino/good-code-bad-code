export class MagicV2 {
  constructor(private point: number) {}

  public gainPoint() {
    this.point += 10;
  }

  public getPoint() {
    return this.point;
  }
}

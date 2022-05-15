export class MagicV1 {
  constructor(private point: number) {}

  public gainAndGetPoint() {
    this.point += 10;
    return this.point;
  }
}

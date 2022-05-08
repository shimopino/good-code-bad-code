export class ProductV1 {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly price: number,
    // ↓ 新規追加。夏季割引可能な場合は true
    // 既存のテストを壊さないようにデフォルトで false にする
    public canDiscount: boolean = false
  ) {}
}

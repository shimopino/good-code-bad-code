export class Reservation {
  constructor(private readonly reservationId: number) {}

  public cancelReservation() {
    // インスタンス変数 reservationId を使用した予約キャンセル処理
    return this.reservationId;
  }
}

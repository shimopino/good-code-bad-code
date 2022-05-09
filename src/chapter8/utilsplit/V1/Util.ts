import { ViewSettings } from '../ViewSettings';
import { MailMagazine } from '../MailMagazine';

export class Util {
  constructor(
    private readonly reservationId: number,
    private readonly viewSettings: ViewSettings,
    private readonly mailMagazine: MailMagazine
  ) {}

  public cancelReservation() {
    // インスタンス変数 reservationId を使用した予約キャンセル処理
    return this.reservationId;
  }

  public darkMode() {
    // インスタンス変数 viewSettings を使用したダークモード表示への設定変更処理
    return this.viewSettings;
  }

  public beginSendMail() {
    // インスタンス変数 mailMagazine を使用したメール配信開始処理
    return this.mailMagazine;
  }
}

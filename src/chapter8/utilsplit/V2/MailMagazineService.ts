import { MailMagazine } from '../MailMagazine';

export class MailMagazineService {
  constructor(private readonly mailMagazine: MailMagazine) {}

  public beginSendMail() {
    // インスタンス変数 mailMagazine を使用したメール配信開始処理
    return this.mailMagazine;
  }
}

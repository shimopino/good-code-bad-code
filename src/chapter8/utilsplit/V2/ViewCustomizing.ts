import { ViewSettings } from '../ViewSettings';

export class ViewCustomizing {
  constructor(private readonly viewSettings: ViewSettings) {}

  public darkMode() {
    // インスタンス変数 viewSettings を使用したダークモード表示への設定変更処理
    return this.viewSettings;
  }
}

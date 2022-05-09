import { describe, expect, it } from 'vitest';
import { MailMagazine } from './MailMagazine';
import { Util } from './V1/Util';
import { MailMagazineService } from './V2/MailMagazineService';
import { ViewSettings } from './ViewSettings';
import { ViewCustomizing } from './V2/ViewCustomizing';
import { Reservation } from './V2/Reservation';

describe('UtilSplit', () => {
  describe('V1', () => {
    it('Utilが過剰に責務を負っている', () => {
      const reservationId = 1;
      const viewSettings = new ViewSettings();
      const mailMagazine = new MailMagazine();

      // ちなみにTypeScriptでは構造的型システムなので、以下のように順番が違っても
      // コンパイルエラーは発生しない
      //           new Util(reservationId, mailMagazine, viewSettings);
      const util = new Util(reservationId, viewSettings, mailMagazine);

      expect(util.cancelReservation()).toBe(1);
      expect(util.darkMode()).toBeDefined();
      expect(util.beginSendMail()).toBeDefined();
    });
  });

  describe('V2', () => {
    // レガシーコード改善ガイドの「影響スケッチ」は自分のプロジェクトでも描いてみたい
    // TypeScriptでのJigがあればよさそう
    // なければ作ってみる
    it('インスタンス変数への依存ごとにクラスを分割する', () => {
      const mailMagazine = new MailMagazine();
      const mailService = new MailMagazineService(mailMagazine);
      expect(mailService.beginSendMail()).toBeDefined();

      const viewSettings = new ViewSettings();
      const viewCustomizeService = new ViewCustomizing(viewSettings);
      expect(viewCustomizeService.darkMode()).toBeDefined();

      const reservationId = 1;
      const reserveService = new Reservation(reservationId);
      expect(reserveService.cancelReservation()).toBe(1);
    });
  });
});

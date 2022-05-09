import { describe, expect, it } from 'vitest';
import { MailMagazine } from './MailMagazine';
import { Util } from './V1/Util';
import { ViewSettings } from './ViewSettings';

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
});

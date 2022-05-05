import { describe, expect, it } from 'vitest';
import { Money } from './Money';

/**
 * 第3章
 *
 * 完全コンストラクト - 不正なインスタンスの状態を防ぐ
 * 値オブジェクト - 特定の値に関するロジックを集め、等価性と不変性を担保する
 *
 */
describe('Money', () => {
  it('[正常] Moneyクラスを初期生成する', () => {
    const money = new Money(1000, 'USD');

    expect(money).toBeDefined();
  });

  it('[異常] マイナスの金額を指定すると失敗する', () => {
    const initFn = () => new Money(-1000, 'USd');

    expect(initFn).toThrow('金額は０以上を指定して下さい');
  });

  it('[異常] 通貨を指定しないと失敗する', () => {
    const initFn = () => new Money(1000, '');

    expect(initFn).toThrow('通貨を指定してください');
  });

  it('[正常] 金額を足し合わせることができる', () => {
    const money = new Money(1000, 'USD');
    const added = new Money(500, 'USD');

    /**
     * 値オブジェクトは不変性を有するので、以下のようにテストで等価性
     * を比較する際にも使用可能
     */
    expect(money.add(added)).toEqual(new Money(1500, 'USD'));
  });

  it('[異常] 通貨が合わないお金を足し合わせようとすると失敗する', () => {
    const money = new Money(1000, 'USD');
    const added = new Money(500, 'JPY');

    const target = () => money.add(added);

    expect(target).toThrow('通貨単位が違います');
  });
});

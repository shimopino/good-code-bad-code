import { describe, expect, it } from 'vitest';
import { ContractAccount } from './ContractAccount';
import { ContractManager } from './ContractManager';

describe('ContractManager', () => {
  /**
   * 設計が悪いとテストもしずらい
   *
   * State-based Testingであったとしても、プロパティを直接参照する場合
   * プロダクションコードでも同様の確認をする可能性がある
   *
   * せめてAPIベースで検証したい
   */
  it('契約を締結できる', () => {
    const sut = new ContractManager();

    sut.conclude();

    const expected = new ContractAccount();
    expected.amountIncludingTax = 1100;
    expected.salesTaxRate = 0.1;
    expect(sut.contractAmount).toEqual(expected);
  });
});

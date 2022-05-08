import { describe, expect, it } from 'vitest';
import { LogicV1 } from './LogicV1';
import { LogicV2 } from './LogicV2';
import { LogicV3 } from './LogicV3';
import { Member } from './Member';

describe('EarlyContinue', () => {
  describe('V1', () => {
    it('配列要素に対する複数の条件分岐によるネスト構造', () => {
      const members: Member[] = [
        Member.fineMember(20),
        Member.poisonedMember(15),
        Member.poisonedMember(5),
      ];

      const logic = new LogicV1();
      logic.poison(members);

      expect(members).toEqual([
        Member.fineMember(20),
        Member.poisonedMember(5),
        Member.deadMember(),
      ]);
    });
  });

  describe('V2', () => {
    it('最上位のネスト階層を早期 continue で解消する', () => {
      const members: Member[] = [
        Member.fineMember(20),
        Member.poisonedMember(15),
        Member.poisonedMember(5),
      ];

      const logic = new LogicV2();
      logic.poison(members);

      expect(members).toEqual([
        Member.fineMember(20),
        Member.poisonedMember(5),
        Member.deadMember(),
      ]);
    });
  });

  describe('V3', () => {
    it('すべてのネスト階層を早期 continue で解消する', () => {
      const members: Member[] = [
        Member.fineMember(20),
        Member.poisonedMember(15),
        Member.poisonedMember(5),
      ];

      const logic = new LogicV3();
      logic.poison(members);

      expect(members).toEqual([
        Member.fineMember(20),
        Member.poisonedMember(5),
        Member.deadMember(),
      ]);
    });
  });
});

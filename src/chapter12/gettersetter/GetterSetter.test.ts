import { describe, expect, it } from 'vitest';
import { Person } from './Person';

describe('GetterSetter', () => {
  describe('getter setterによる低凝集', () => {
    it('PersonをGetter/Setterの読み出しで直接変更してしまう', () => {
      const person = new Person('leo');

      person.name = 'mike';
      expect(person).toEqual(new Person('mike'));

      expect(person.name).toEqual('mike');
    });
  });
});

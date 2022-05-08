import { Item } from './Item';

export class PrisonLogicV1 {
  public hasPrisonKey(items: Item[]) {
    let hasPrisonKey = false;

    for (const each of items) {
      if (each.name === '牢屋の鍵') {
        hasPrisonKey = true;
      }
    }

    return hasPrisonKey;
  }
}

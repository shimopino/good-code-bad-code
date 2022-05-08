import { Item } from './Item';

export class PrisonLogicV2 {
  public hasPrisonKey(items: Item[]) {
    return items.some((item) => item.name === '牢屋の鍵');
  }
}

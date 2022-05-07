import { MAGIC_TYPE } from './MagicType';

export class MagicManagerV1 {
  public getName(magicType: MAGIC_TYPE) {
    let name = '';

    switch (magicType) {
      case 'fire':
        name = 'ファイア';
        break;
      case 'shiden':
        name = '紫電';
        break;
    }

    return name;
  }
}

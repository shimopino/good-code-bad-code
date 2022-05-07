import { MAGIC_TYPE } from './MagicType';

export class MagicManagerV2 {
  public getName(magicType: MAGIC_TYPE) {
    let name = '';

    switch (magicType) {
      case 'fire':
        name = 'ファイア';
        break;
      case 'shiden':
        name = '紫電';
        break;
      case 'hellFire':
        name = '地獄の業火';
        break;
    }

    return name;
  }

  public costMagicPoint(magicType: MAGIC_TYPE) {
    let magicPoint = 0;

    switch (magicType) {
      case 'fire':
        magicPoint = 5;
        break;
      case 'shiden':
        magicPoint = 10;
        break;
      case 'hellFire':
        magicPoint = 16;
        break;
    }

    return magicPoint;
  }

  public attackPower(magicType: MAGIC_TYPE) {
    let magicPoint = 0;

    switch (magicType) {
      case 'fire':
        magicPoint = 5;
        break;
      case 'shiden':
        magicPoint = 10;
        break;
      // 地獄の業火に関する仕様追加に対応し忘れてしまった
      // case 'hellFire':
      //   magicPoint = 16;
      //   break;
    }

    return magicPoint;
  }

  public costTechnicalPoint(magicType: MAGIC_TYPE) {
    let magicPoint = 0;

    switch (magicType) {
      case 'fire':
        magicPoint = 5;
        break;
      case 'shiden':
        magicPoint = 10;
        break;
    }

    return magicPoint;
  }
}

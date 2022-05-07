import { Member } from './Member';
import { MAGIC_TYPE } from './MagicType';

export class MagicV3 {
  public readonly name: string;
  public readonly costMagicPoint: number;
  public readonly attackPower: number;
  public readonly costTechnicalPoint: number;

  constructor(magicType: MAGIC_TYPE, member: Member) {
    switch (magicType) {
      case 'fire':
        this.name = 'ファイア';
        this.costMagicPoint = 2;
        this.attackPower = 20 + member.level * 0.5;
        this.costTechnicalPoint = 0;
        break;

      case 'shiden':
        this.name = '紫電';
        this.costMagicPoint = 5 + member.level * 0.2;
        this.attackPower = 50 + member.agility * 1.5;
        this.costTechnicalPoint = 5;
        break;

      case 'hellFire':
        this.name = '地獄の業火';
        this.costMagicPoint = 16;
        this.attackPower = 200 + member.magicAttack * 0.5 + member.vitality * 2;
        this.costTechnicalPoint = 20 + member.level * 0.4;
        break;
    }
  }
}

import { MAGIC_TYPE } from '../MagicType';
import { Member } from '../Member';
import { Fire } from './Fire';
import { HellFire } from './HellFire';
import { Magic } from './Magic';
import { Shiden } from './Shiden';

export class MagicSwitchV4 {
  private member: Member;
  private magics: Map<MAGIC_TYPE, Magic>;

  constructor(member: Member) {
    this.magics = new Map();

    const fire = new Fire(member);
    const shiden = new Shiden(member);
    const hellFire = new HellFire(member);

    this.magics.set(MAGIC_TYPE.FIRE, fire);
    this.magics.set(MAGIC_TYPE.SHIDEN, shiden);
    this.magics.set(MAGIC_TYPE.HELLFIRE, hellFire);
  }

  public magicAttack(magicType: MAGIC_TYPE) {
    const usingMagic = this.magics.get(magicType);
    return usingMagic.attackPower();
  }
}

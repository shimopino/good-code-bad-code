import { Member } from '../Member';
import { Damage } from './Damage';
import { DAMAGE_TYPE } from './DamageType';
import { HitPointDamage } from './HitPointDamage';
import { MagicPointDamage } from './MagicPointDamage';

export class ApplyDamageLogic {
  private damages: Map<DAMAGE_TYPE, Damage>;

  constructor(member: Member) {
    this.damages = new Map();

    this.damages.set(DAMAGE_TYPE.HP, new HitPointDamage(member));
    this.damages.set(DAMAGE_TYPE.MP, new MagicPointDamage(member));
  }

  public applyDamage(damageType: DAMAGE_TYPE, damageAmount: number) {
    const damage = this.damages.get(damageType);
    damage.execute(damageAmount);
  }
}

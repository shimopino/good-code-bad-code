import { MagicPoint } from './MagicPoint';
import { AttackPower } from './AttackPower';
import { TechnicalPower } from './TechnicalPower';

export interface Magic {
  getName(): string;
  costMagicPoint(): MagicPoint;
  attackPower(): AttackPower;
  costTechnicalPoint(): TechnicalPower;
}

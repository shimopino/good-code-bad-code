export const DAMAGE_TYPE = {
  HP: 'hitPoint',
  MP: 'magicPoint',
} as const;
export type DAMAGE_TYPE = typeof DAMAGE_TYPE[keyof typeof DAMAGE_TYPE];

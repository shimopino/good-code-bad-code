export const MAGIC_TYPE = {
  FIRE: 'fire',
  SHIDEN: 'shiden',
  HELLFIRE: 'hellFire',
} as const;
export type MAGIC_TYPE = typeof MAGIC_TYPE[keyof typeof MAGIC_TYPE];

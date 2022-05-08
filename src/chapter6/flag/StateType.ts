export const STATE_TYPE = {
  FINE: 'fine',
  DEAD: 'dead',
} as const;
export type STATE_TYPE = typeof STATE_TYPE[keyof typeof STATE_TYPE];

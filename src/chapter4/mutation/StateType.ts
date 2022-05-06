export const STATE_TYPES = {
  DEAD: 'dead',
} as const;

export type STATE_TYPES = typeof STATE_TYPES[keyof typeof STATE_TYPES];

export const HEALTH_CONDITION = {
  DEAD: 'dead',
  DANGER: 'danger',
  CAUTION: 'caution',
  FINE: 'fine',
};
export type HEALTH_CONDITION =
  typeof HEALTH_CONDITION[keyof typeof HEALTH_CONDITION];

import { STATE_TYPES } from './StateType';

export class States {
  private readonly stateSet: Set<STATE_TYPES>;

  constructor() {
    this.stateSet = new Set<STATE_TYPES>();
  }

  public add(stateType: STATE_TYPES) {
    this.stateSet.add(stateType);
  }
}

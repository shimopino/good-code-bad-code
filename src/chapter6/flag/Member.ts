import { STATE_TYPE } from './StateType';

export class Member {
  public state: STATE_TYPE;

  constructor(public hitPoint: number, public magicPoint: number) {
    this.state = STATE_TYPE.FINE;
  }

  public changeState(stateType: STATE_TYPE) {
    this.state = stateType;
  }
}

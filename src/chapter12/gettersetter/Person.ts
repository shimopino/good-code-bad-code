export class Person {
  constructor(private _name: string) {}

  public get name() {
    return this._name;
  }

  public set name(_name: string) {
    this._name = _name;
  }
}

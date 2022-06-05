export class TypePokemon {
  private _type: string;

  constructor(type: string) {
    this._type = type;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  public toString(): string {
    return this.type;
  }
}

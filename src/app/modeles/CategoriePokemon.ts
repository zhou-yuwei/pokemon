export class CategoriePokemon {
  private _categorie: string;

  constructor(categorie: string) {
    this._categorie = categorie;
  }

  get categorie(): string {
    return this._categorie;
  }

  set categorie(value: string) {
    this._categorie = value;
  }

  public toString(){
    return this.categorie;
  }
}

import {TypePokemon} from "./TypePokemon";
import {CategoriePokemon} from "./CategoriePokemon";
import {GenerationPokemon} from "./GenerationPokemon";

export class Pokemon {
  private _identifiant: number;
  private _nom: string;
  private _categorie: CategoriePokemon;
  private _type: TypePokemon;
  private _taille: number;
  private _poids: number;
  private _generation: GenerationPokemon;
  private _image;

  constructor(identifiant: number, nom: string, categorie: CategoriePokemon, type: TypePokemon, taille: number, poids: number, generation: GenerationPokemon) {
    this._identifiant = identifiant;
    this._nom = nom;
    this._categorie = categorie;
    this._type = type;
    this._taille = taille;
    this._poids = poids;
    this._generation = generation;
    this._image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+identifiant+".png";
  }

  get image() {
    return this._image;
  }

  get identifiant(): number {
    return this._identifiant;
  }

  set identifiant(value: number) {
    this._identifiant = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get categorie(): CategoriePokemon {
    return this._categorie;
  }

  set categorie(value: CategoriePokemon) {
    this._categorie = value;
  }

  get type(): TypePokemon {
    return this._type;
  }

  set type(value: TypePokemon) {
    this._type = value;
  }

  get taille(): number {
    return this._taille;
  }

  set taille(value: number) {
    this._taille = value;
  }

  get poids(): number {
    return this._poids;
  }

  set poids(value: number) {
    this._poids = value;
  }

  get generation(): GenerationPokemon {
    return this._generation;
  }

  set generation(value: GenerationPokemon) {
    this._generation = value;
  }

  public toString(): string {
    return this.nom +" Catégorie: " +this.categorie+" Type : "+this.type+" Taille : "+this.taille+"m Poids : "+this.poids+"kg";
  }
}

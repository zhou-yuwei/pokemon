import {Pokemon} from "./Pokemon";

export class GenerationPokemon {
  private _generation: number;

  constructor(generation: number) {
    this._generation = generation;
  }

  get generation(): number {
    return this._generation;
  }

  set generation(value: number) {
    this._generation = value;
  }

  public toString(){
    return this.generation;
  }
}

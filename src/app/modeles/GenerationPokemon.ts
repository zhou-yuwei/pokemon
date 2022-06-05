import {Pokemon} from "./Pokemon";

export class GenerationPokemon {
  private _generation: string;

  constructor(generation: string) {
    this._generation = generation;
  }

  get generation(): string {
    return this._generation;
  }

  set generation(value: string) {
    this._generation = value;
  }

  public toString(){
    return this.generation;
  }
}

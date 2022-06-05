import { Injectable } from '@angular/core';
import {Pokemon} from "../modeles/Pokemon";
import {TypePokemon} from "../modeles/TypePokemon";
import {CategoriePokemon} from "../modeles/CategoriePokemon";
import {GenerationPokemon} from "../modeles/GenerationPokemon";

@Injectable({
  providedIn: 'root'
})
export class GererPokemonService {
    private pokemons: Pokemon[];


  constructor() {
    let categorie1 = new CategoriePokemon("graine");
    let categorie4 = new CategoriePokemon("lézard");
    let type1 = new TypePokemon("plante");
    let type4 = new TypePokemon("feu");
    let generation1 = new GenerationPokemon("I");
    let generation2 = new GenerationPokemon("II");

    let pokemon1 = new Pokemon(1, "Bulbizarre", categorie1, type1,0.7, 6.9, generation1);
    let pokemon4 = new Pokemon(4, "Salamèche", categorie4, type4, 0.6, 8.5, generation2);
    this.pokemons= [pokemon1, pokemon4];
  }

  public getPokemons(): Pokemon[]{
    return this.pokemons;
  }

  public getGenerations(): GenerationPokemon[]{
    let generations: GenerationPokemon[];
    generations = [];
    for (const pokemon of this.pokemons) {
      generations.push(pokemon.generation);
    }
    return generations;
  }
}

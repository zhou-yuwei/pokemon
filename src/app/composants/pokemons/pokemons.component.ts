import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../modeles/Pokemon";
import {GererPokemonService} from "../../services/gerer-pokemon.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  public pokemons: Pokemon[];

  constructor(private svc: GererPokemonService) {
    this.pokemons = this.svc.getPokemons();
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {GenerationPokemon} from "../../modeles/GenerationPokemon";
import {GererPokemonService} from "../../services/gerer-pokemon.service";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  public generations: GenerationPokemon[];

  constructor(private svc: GererPokemonService) {
    this.generations = this.svc.getGenerations();
  }

  ngOnInit(): void {
  }


}

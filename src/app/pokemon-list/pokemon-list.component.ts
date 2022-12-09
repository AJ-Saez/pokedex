import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemos: number | undefined;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
   this.getPokemons();
  }

  //get Pokemons}
  getPokemons(){
  this.dataService.getPokemons()
  .subscribe((response: any) => {
    this.totalPokemos = response.count;

    response.results.forEach((result: { name: string; }) => {
      this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons); 
        });
    });

  });
}
}

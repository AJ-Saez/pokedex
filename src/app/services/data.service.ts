import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

// get Pokemons
getPokemons() {
return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151')
}
  getName(name: string) {
    throw new Error('Method not implemented.');
  }
  getId(id: number) {
    throw new Error('Method not implemented.');
  }


//get more pokemons data
getMoreData(name:string){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)


}


}

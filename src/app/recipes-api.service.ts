import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe-list.component';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  constructor(private fetchService: HttpClient) {}

  public getRecipes() {
    return this.fetchService.get<Recipe[]>('http://localhost:3000/recipes');
  }
}

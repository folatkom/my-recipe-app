import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe-list.component';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  constructor(private http: HttpClient) {}

  public getRecipes() {
    return this.http.get<Recipe[]>('http://localhost:3000/recipes');
  }
  public addRecipes(newRecipe: Recipe) {
    return this.http.post('http://localhost:3000/recipes', newRecipe);
  }
  public sort(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'name').set('_order', 'desc');
    return this.http.get<Recipe[]>('http://localhost:3000/recipes', { params: myParams });
  }
}

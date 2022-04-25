import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe-list.component';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  // public recipeList$ = new BehaviorSubject<Recipe[]>([]);
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/recipes/';

  public getRecipes() {
    return this.http.get<Recipe[]>(this.url);
  }
  public addRecipes(newRecipe: Recipe) {
    return this.http.post(this.url, newRecipe);
  }
  public getRecipe(id: string | null): Observable<Recipe> {
    return this.http.get<Recipe>(this.url + id);
  }
  public search(value: string) {
    const myParams = new HttpParams().set('q', value);
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sort(sorter: string, order: string): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', sorter).set('_order', order);
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  // public updateRecipeList(recipe: Recipe) {
  //   return this.recipeList$.next([...this.recipeList$.value, recipe]);
  // }
}

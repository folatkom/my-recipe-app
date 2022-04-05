import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe-list.component';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesApiService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/recipes';

  public getRecipes() {
    return this.http.get<Recipe[]>(this.url);
  }
  public addRecipes(newRecipe: Recipe) {
    return this.http.post(this.url, newRecipe);
  }
  public browse(value: string) {
    console.log(value);
    const myParams = new HttpParams().set('q', value);
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sortByNameDesc(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'name').set('_order', 'desc');
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sortByNameAsc(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'name').set('_order', 'asc');
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sortByRatingDesc(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'rating').set('_order', 'desc');
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sortByRatingAsc(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'rating').set('_order', 'asc');
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sortByIdAsc(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'id').set('_order', 'asc');
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
  public sortByIdDesc(): Observable<Recipe[]> {
    const myParams = new HttpParams().set('_sort', 'id').set('_order', 'desc');
    return this.http.get<Recipe[]>(this.url, { params: myParams });
  }
}

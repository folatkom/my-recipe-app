import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RecipesApiService } from '../recipes-api.service';
export interface Recipe {
  name: string;
  id?: number;
  description: string[];
  rating: number;
  ingredients: Ingredients[];
}
export interface Ingredients {
  name: string;
  value: string;
}
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;

  constructor(private recipesApiService: RecipesApiService) {}

  ngOnInit(): void {
    this.recipes$ = this.recipesApiService.getRecipes();
  }
  browse(value: string) {
    this.recipes$ = this.recipesApiService.search(value);
  }

  sort(sortBy: string[]) {
    this.recipes$ = this.recipesApiService.sort(sortBy[0], sortBy[1]);
  }
}

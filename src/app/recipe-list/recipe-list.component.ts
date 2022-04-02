import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipesApiService } from '../recipes-api.service';
export interface Recipe {
  name: string;
  id: number;
  description: string[];
  rating: number;
  ingredients: Ingredients[];
}
interface Ingredients {
  name: string;
  value: string;
}
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[] = [];
  private subs = new Subscription();
  //recipe:Recipe

  constructor(private recipesApiService: RecipesApiService) {}

  ngOnInit(): void {
    const sub = this.recipesApiService.getRecipes().subscribe((recipes) => (this.recipes = recipes));
    this.subs.add(sub);
  }
  onSelected(recipe: Recipe) {
    this.recipesApiService.recipeSelected.emit(recipe);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

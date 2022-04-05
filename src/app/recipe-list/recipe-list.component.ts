import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, Observable } from 'rxjs';
import { CommunicationService } from '../communication.service';
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
  value: string = '';

  public recipes: Observable<Recipe[]>;

  constructor(private recipesApiService: RecipesApiService, private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.recipes = this.recipesApiService.getRecipes();
  }
  browse() {
    this.recipes = this.recipesApiService.browse(this.value);
  }

  sort(sortBy: string) {
    switch (sortBy) {
      case 'nameDesc':
        this.recipes = this.recipesApiService.sortByNameDesc();
        break;
      case 'nameAsc':
        this.recipes = this.recipesApiService.sortByNameAsc();
        break;
      case 'ratingDesc':
        this.recipes = this.recipesApiService.sortByRatingDesc();
        break;
      case 'ratingAsc':
        this.recipes = this.recipesApiService.sortByRatingAsc();
        break;
      case 'idAsc':
        this.recipes = this.recipesApiService.sortByIdAsc();
        break;
      case 'idDesc':
        this.recipes = this.recipesApiService.sortByIdDesc();
        break;
    }
  }

  onSelected(recipe: Recipe) {
    this.communicationService.recipeSelected.next(recipe);
  }
}

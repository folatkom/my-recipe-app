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
interface Ingredients {
  name: string;
  value: string;
}
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Observable<Recipe[]>;

  constructor(private recipesApiService: RecipesApiService, private communicationService: CommunicationService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.recipes = this.recipesApiService.getRecipes();
    }, 500);
    // this.recipes = this.recipesApiService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.communicationService.recipeSelected.next(recipe);
  }
}

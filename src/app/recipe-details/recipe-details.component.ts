import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipesApiService: RecipesApiService) {}

  ngOnInit() {
    this.recipesApiService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

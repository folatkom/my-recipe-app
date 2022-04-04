import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  newRecipe: Recipe = {
    name: '',
    description: [],
    ingredients: [
      { name: '', value: '' },
      { name: '', value: '' },
      { name: '', value: '' },
    ],
    rating: 3,
  };
  constructor(private recipesApiService: RecipesApiService) {}

  ngOnInit(): void {}

  post() {
    this.recipesApiService.addRecipes(this.newRecipe).subscribe();
  }
  ngOnDestroy(): void {}
}

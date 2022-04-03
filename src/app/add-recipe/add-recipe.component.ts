import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit, OnDestroy {
  constructor(private recipesApiService: RecipesApiService) {}

  ngOnInit(): void {}

  post() {
    const newRecipe: Recipe = {
      name: 'zitti',
      description: ['mieszamy i pieczemy'],
      ingredients: [
        {
          name: 'jajka',
          value: '3 szt.',
        },
        {
          name: 'masło',
          value: 'łyżeczka',
        },
      ],
      rating: 5,
    };
    this.recipesApiService.addRecipes(newRecipe).subscribe();
  }
  ngOnDestroy(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { Recipe } from '../recipe-list/recipe-list.component';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipeID = '';
  selectedRecipe$: Observable<Recipe>;
  constructor(private recipesApiService: RecipesApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedRecipe$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.recipesApiService.getRecipe(params.get('id'))));
  }
}

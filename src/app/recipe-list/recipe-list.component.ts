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
export class RecipeListComponent implements OnInit, OnDestroy {
  public recipes: Recipe[] = [];
  sub: Subscription;

  constructor(private recipesApiService: RecipesApiService, private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.sub = this.recipesApiService.getRecipes().subscribe((recipes) => (this.recipes = recipes));
  }

  onSelected(recipe: Recipe) {
    this.communicationService.recipeSelected.emit(recipe);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

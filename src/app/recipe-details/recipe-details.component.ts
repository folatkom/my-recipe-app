import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

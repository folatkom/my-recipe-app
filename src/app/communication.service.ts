import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe-list.component';
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() {}
}

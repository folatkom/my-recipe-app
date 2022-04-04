import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe-list/recipe-list.component';
@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  recipeSelected = new Subject<Recipe>();

  constructor() {}
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent {
  panel = 'addRecipe';
}

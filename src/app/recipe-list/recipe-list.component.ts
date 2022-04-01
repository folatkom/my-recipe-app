import { Component, OnInit } from '@angular/core';
interface Recipe {
  name: string;
  id: number;
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
  public recipes: Recipe[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch('http://localhost:3000/recipes')
      .then((res) => res.json())
      .then((recipes: Recipe[]) => (this.recipes = recipes));
  }
}

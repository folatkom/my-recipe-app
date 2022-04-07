import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  //   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //   { path: 'login', component: LoginComponent },
  { path: 'recipes', component: RecipeDetailsComponent },
  { path: 'add', component: AddRecipeComponent },
  //   { path: '**', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

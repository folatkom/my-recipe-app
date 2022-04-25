import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { BrowserComponent } from './browser/browser.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RecipeListComponent,
    SidePanelComponent,
    RecipeDetailsComponent,
    AddRecipeComponent,
    SortComponent,
    BrowserComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

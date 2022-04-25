import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { RecipesApiService } from '../recipes-api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  form!: FormGroup;

  get ingredientsFormArray() {
    return this.form.controls['ingredients'] as FormArray;
  }
  get ingredientsControls() {
    return this.ingredientsFormArray.controls as FormGroup[];
  }
  get descriptionFormArray() {
    return this.form.controls['description'] as FormArray;
  }
  get descriptionControls() {
    return this.descriptionFormArray.controls as FormControl[];
  }
  constructor(private recipesApiService: RecipesApiService, private formBuild: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuild.group({
      name: this.formBuild.control('', [Validators.required]),
      description: this.formBuild.array([this.formBuild.control('', [Validators.required])]),
      ingredients: this.formBuild.array([
        this.formBuild.group({
          name: this.formBuild.control('', [Validators.required]),
          value: this.formBuild.control('', [Validators.required]),
        }),
      ]),
      rating: this.formBuild.control('', [Validators.required]),
    });
  }

  post() {
    this.recipesApiService.addRecipes(this.form.value).subscribe();
    //this.recipesApiService.updateRecipeList(this.form.value);
  }
  public addIngredient() {
    this.ingredientsFormArray.push(
      new FormGroup({
        name: this.formBuild.control('', [Validators.required]),
        value: this.formBuild.control('', [Validators.required]),
      })
    );
  }
  public addDescription() {
    this.descriptionFormArray.push(new FormControl('', [Validators.required]));
  }
  public removeItem(array: FormArray, index: number) {
    array.removeAt(index);
  }
}

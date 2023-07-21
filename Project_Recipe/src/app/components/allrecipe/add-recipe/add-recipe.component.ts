import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { AllRecipe } from '../allrecipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  newRecipe: AllRecipe = new AllRecipe();

  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {}

  addRecipe(): void {
    this.recipeService.createRecipe(this.newRecipe).subscribe(
      (createdRecipe: AllRecipe) => {
        console.log('Recipe created:', createdRecipe);
        this.newRecipe = new AllRecipe();
      },
      (error) => {
        console.error('Error creating recipe:', error);
      }
    );
  }

  cancelAdd(): void {
    console.log('Add recipe canceled');
  }
}

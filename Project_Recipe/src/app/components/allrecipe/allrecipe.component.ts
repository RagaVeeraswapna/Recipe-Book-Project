import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';
import { AllRecipe } from './allrecipe.model';

@Component({
  selector: 'app-allrecipe',
  templateUrl: './allrecipe.component.html',
  styleUrls: ['./allrecipe.component.css']
})
export class AllrecipeComponent implements OnInit {
  data: AllRecipe[] = [];

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.getAllRecipes();
  }

  getAllRecipes(): void {
    this.recipesService.getAllRecipes().subscribe((recipes) => {
      this.data = recipes;
    });
  }

  viewRecipeDetails(recipeId: number): void {
    this.router.navigateByUrl(`/recipeDetails/${recipeId}`);
  }
}

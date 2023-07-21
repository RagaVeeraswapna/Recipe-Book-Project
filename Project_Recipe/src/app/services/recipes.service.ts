import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllRecipe } from '../components/allrecipe/allrecipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'http://localhost:3060/recipes';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<AllRecipe[]> {
    return this.http.get<AllRecipe[]>(this.apiUrl);
  }

  getRecipeById(recipeId: number): Observable<AllRecipe> {
    const url = `${this.apiUrl}/${recipeId}`;
    return this.http.get<AllRecipe>(url);
  }

  createRecipe(recipe: AllRecipe): Observable<AllRecipe> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<AllRecipe>(this.apiUrl, recipe, { headers });
  }

  updateRecipe(recipe: AllRecipe): Observable<AllRecipe> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/${recipe.id}`;
    return this.http.put<AllRecipe>(url, recipe, { headers });
  }

  deleteRecipe(recipeId: number): Observable<any> {
    const url = `${this.apiUrl}/${recipeId}`;
    return this.http.delete<any>(url);
  }
}

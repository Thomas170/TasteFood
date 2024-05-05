import { Component } from '@angular/core';
import {Recipe} from '../interfaces/recipe';
import data from '../../assets/data/recipes.json';
import { Router } from '@angular/router';
import {RecipeComponent} from "../recipe/recipe.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly recipes: Recipe[] = data;

  constructor(private router: Router) {
  }

  protected selectRecipe(recipe: Recipe): void {
    if (recipe.ready) {
      this.router.navigateByUrl('/recipe/' + recipe.id);
    }
  }
}

import { Component } from '@angular/core';
import {Recipe} from '../interfaces/recipe';
import data from '../../assets/data/recipes.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  protected readonly recipes: Recipe[] = data;

  constructor(private router: Router) {
  }

  protected selectRecipe(recipeId: number): void {
    this.router.navigateByUrl('/recipe/' + recipeId);
  }
}

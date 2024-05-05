import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import data from '../../assets/data/recipes.json';
import {Recipe} from "../interfaces/recipe";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  protected recipe: Recipe | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const recipeId = +params['recipeId'];
      this.recipe = data.find(recipe => recipe.id === recipeId);
      if (!this.recipe?.ready) {
        this.router.navigateByUrl('/');
      }
    });
  }

  protected goToHomePage() {
    this.router.navigateByUrl('/');
  }
}

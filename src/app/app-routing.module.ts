import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RecipeComponent} from "./recipe/recipe.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe/:recipeId', component: RecipeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

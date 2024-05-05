import { Component } from '@angular/core';
//import recipes from '@assets/data/recipes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected readonly recipes = [];
}

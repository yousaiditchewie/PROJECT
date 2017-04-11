import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'A Test', 'http://cdn-img.health.com/sites/default/files/styles/2000x2000/public/1489589880/easy-tandoori-chicken-yogurt-recipe.jpg?itok=3Wfmr-xg')
  ];
  constructor() { }

  ngOnInit() {
  }

}

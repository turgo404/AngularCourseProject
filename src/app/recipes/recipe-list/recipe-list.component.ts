import { Component, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    //ALTERNATIVE IMAGE PATH    ----------   https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/one_pan_sausage_pasta_55251_16x9.jpg
    new Recipe('A Test Recipe', 'This is simply a test', `https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcSvUAtV4MGrlgRCAUqB7X3ARtN-Z9rdZDoxiA&usqp=CAU`),
    new Recipe('Another Test Recipe', 'This is simply a test', `https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcSvUAtV4MGrlgRCAUqB7X3ARtN-Z9rdZDoxiA&usqp=CAU`)
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}



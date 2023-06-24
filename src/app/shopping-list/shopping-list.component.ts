import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)

  ];
  
  onIngredientAdded(ingredient: Ingredient){
    if(ingredient.name.trim() === '' || ingredient.amount < 1){
      alert('Please enter a name and a positive amout!');
    } else {
    this.ingredients.push(ingredient);
    }
  }

  constructor(){

  }
}

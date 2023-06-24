import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amoutInput', {static: true}) amoutInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amoutInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }

}

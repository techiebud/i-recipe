import { Component } from '@angular/core';
import { Ingredient } from './../../models/ingredient';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from './../../services/shopping-list';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {


  listItems: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  onAddItem(form: NgForm) {
      this.slService.addItem(form.value.ingredientName, form.value.amount);    
      form.reset();
      this.loadItems();
  }

  ionViewWillEnter() {
    this.loadItems();
    
  }
  
  private loadItems() {

       this.listItems = this.slService.getItems();
  }
}

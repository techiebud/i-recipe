import { Component } from '@angular/core';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  constructor(private navCtrl: NavController) { }

  onNewRecipe() {
      this.navCtrl.push(EditRecipePage, {mode: 'Add'});
  }
}


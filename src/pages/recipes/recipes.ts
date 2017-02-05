import { Component } from '@angular/core';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { NavController } from 'ionic-angular';
import { Recipe } from './../../models/recipe';
import { RecipeService } from './../../services/recipe';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {
  recipes: Recipe[];
  constructor(private navCtrl: NavController,
              private recipeService: RecipeService) { }

  ionViewWillEnter () {
      this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
      this.navCtrl.push(EditRecipePage, {mode: 'Add'});
  }

  onLoadRecipe() {

    
  }
}


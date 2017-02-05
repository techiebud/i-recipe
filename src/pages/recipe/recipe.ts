import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { Recipe } from './../../models/recipe';
import { RecipeService } from './../../services/recipe';
import { ShoppingListService } from './../../services/shopping-list';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage implements OnInit {

  recipe: Recipe;
  index: number;
  constructor(private navCtrl: NavController, private navParams: NavParams,
              private slService: ShoppingListService,
              private recipeService: RecipeService  ) {


  }

  ngOnInit() {

    this.recipe = this.navParams.get("recipe");
    console.log("recipe:");
    console.log(this.recipe);
    this.index = this.navParams.get("index");


  }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, { mode: 'Edit', recipe: this.recipe, index: this.index });
  }

  onAddIngredients() {
      this.slService.addItems(this.recipe.ingredients);
    
  }

  onDeleteRecipe() {
      this.recipeService.removeRecipe(this.index);
      this.navCtrl.popToRoot();
    
  }




}

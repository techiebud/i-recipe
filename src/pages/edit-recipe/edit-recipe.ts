import { ActionSheetController, AlertController, NavController, NavParams, ToastController } from 'ionic-angular'
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { RecipeService } from './../../services/recipe';

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html'
})
export class EditRecipePage {
  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  constructor(private navParams: NavParams, 
      private actSheetCtrl: ActionSheetController, 
      private alrtCtrl: AlertController, 
      private toastCtrl: ToastController, 
      private recipeService: RecipeService,
      private navCtl: NavController) { }

  ngOnInit() {

    this.mode = this.navParams.get("mode");
    this.initializeForm();
  }

  private initializeForm() {

    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required), 
      'ingredients': new FormArray([])

    });
  }
  onSubmit() {
    const value = this.recipeForm.value;
    let ingredients = [];
    if (value.ingredients.length > 0)
    {
       ingredients = value.ingredients.map(name => {
         return {name: name, amount: 1};
       })
    }
    this.recipeService.addRecipe(value.title, value.description, value.difficulty, value.ingredients);
    this.recipeForm.reset();
    this.navCtl.popToRoot();

  }

  onManageIngredients() {
    const actionSheet = this.actSheetCtrl.create({
      title: "What do you want to do?",
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
                this.createNewIngredientAlert().present();
          }

        },
        {
          text: "Remove all Ingredients",
          role: 'destructive',
          handler: () => {
              const fArray: FormArray = <FormArray>this.recipeForm.get("ingredients");
              const len = fArray.length;
              if (len > 0)
              {
                for (let i = len - 1; i >=0; i--) {
                  fArray.removeAt(i);
                }
                  const toast = this.toastCtrl.create({
                    message: 'All ingredients were removed!',
                    duration: 1500,
                    position: 'top'
                  
                });
                toast.present();
              }
          }
        },
        {
          text: "Cancel",
          role: 'cancel'
        }

      ]
    });
    actionSheet.present();


  }

  private createNewIngredientAlert() {
  const newIngredientAlert = this.alrtCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'

        },
        {
          text: 'Add',
          handler: (data) => {
            if (data.name.trim() == '' || data.name == null) {
                const toast = this.toastCtrl.create({
                    message: 'Please enter a valid value!',
                    duration: 1500,
                    position: 'top'
                  
                });
                toast.present();
                
                return;
            }
            (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(data.name, Validators.required));
              const toast = this.toastCtrl.create({
                    message: 'Toast added!',
                    duration: 1500,
                    position: 'top'
                  
                });
                toast.present();
        }
        } ]
    })
    return newIngredientAlert;
    
  }
    

}

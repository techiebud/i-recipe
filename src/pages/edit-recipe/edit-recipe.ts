import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NavParams } from 'ionic-angular'

@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html'
})
export class EditRecipePage {
  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  constructor(private navParams: NavParams) {}

  ngOnInit() {

    this.mode = this.navParams.get("mode");
    this.initializeForm();
  }

  private initializeForm() {

      this.recipeForm = new FormGroup({
          'title': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required), 
          'difficulty': new FormControl('Medium', Validators.required)
        
      });
  }
  onSubmit() {
      console.log(this.recipeForm);
    
  }

}

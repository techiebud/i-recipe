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
  receipeForm: FormGroup;
  constructor(private navParams: NavParams) {}

  ngOnInit() {

    this.mode = this.navParams.get("mode");
  }

  private initializeForm() {

      this.receipeForm = new FormGroup({
          'title': new FormControl(null, Validators.required),
          'description': new FormControl(null, Validators.required), 
          'difficulty': new FormControl('Medium', Validators.required)
        
      });
  }

}

import { AlertController, LoadingController } from 'ionic-angular';

import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { DatabaseOptionsPage } from './../database-options/database-options';
import { Ingredient } from './../../models/ingredient';
import { NgForm } from "@angular/forms";
import { PopoverController } from 'ionic-angular';
import { ShoppingListService } from './../../services/shopping-list';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {


  listItems: Ingredient[];
  constructor(private slService: ShoppingListService,
    private popoverCtrl: PopoverController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

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

  onCheckItem(index: number) {
    this.slService.removeItem(index);
    this.loadItems();

  }

  onShowOptions(event: MouseEvent) {
    const loading = this.loadingCtrl.create( {
        content: 'Please wait....'
    })
    const popover = this.popoverCtrl.create(DatabaseOptionsPage);
    popover.present({ ev: event });
    popover.onDidDismiss(
      data => {
        if (!data) {
          return;
        }
        if (data.action == 'load') {
          loading.present();
          this.authService.getActiveUser().getToken()
            .then(
              (token: string) => {
                this.slService.fetchList(token)
                  .subscribe(
                    (list: Ingredient[]) => {
                      loading.dismiss();
                      if (list) {
                        this.listItems = list;
                      } else {
                        this.listItems = [];
                      }
                    },
                    error => {
                      loading.dismiss();
                      console.error(error);
                      this.handleError(error.json().error);
                    }
                  );
              }
            );
        } else if (data.action == 'store') {
          loading.present();
          this.authService.getActiveUser().getToken()
            .then(
              (token: string) => {
                this.slService.storeList(token)
                  .subscribe(
                    () => loading.dismiss(),
                    error => {
                      loading.dismiss();
                      console.error(error);
                      this.handleError(error.json().error);
                    }
                  );
              }
            );
        }
      }
    ); 


  }

  private handleError(errorMessage) 
  {
      const alert = this.alertCtrl.create({

         title: "An error occurred!",
         message: errorMessage,
         buttons: ["OK"]
      })
      alert.present();
    
  }
}

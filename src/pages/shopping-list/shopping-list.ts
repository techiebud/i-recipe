import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { Ingredient } from './../../models/ingredient';
import { NgForm } from "@angular/forms";
import { PopoverController } from 'ionic-angular';
import { SLOptionsPage } from './sl-options/sl-options';
import { ShoppingListService } from './../../services/shopping-list';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {


  listItems: Ingredient[];
  constructor(private slService: ShoppingListService,
    private popoverCtrl: PopoverController,
    private authService: AuthService) { }

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

    const popover = this.popoverCtrl.create(SLOptionsPage);
    popover.present({ ev: event });
    popover.onDidDismiss(
      data => {

        if (!data) {
          return;
        }
        if (data.action == 'load') {

        }
        else {
          this.authService.getActiveUser().getToken()
            .then((token: string) => {
              this.slService.storeList(token)
                .subscribe(
                () => console.log('Success!'),
                (error) => {
                  console.log(error);
                }
                )
            })
            .catch(error => {
              console.error(error);
            })
        }

      }

    )


  }
}

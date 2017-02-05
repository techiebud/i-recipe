import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { EditRecipePage } from './../pages/edit-recipe/edit-recipe';
import { MyApp } from './app.component';
import { RecipePage } from './../pages/recipe/recipe';
import { RecipeService } from './../services/recipe';
import { RecipesPage } from './../pages/recipes/recipes';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { ShoppingListService } from './../services/shopping-list';
import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    ShoppingListPage,
    EditRecipePage,
    SigninPage,
    SignupPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    ShoppingListPage,
    EditRecipePage,
    SigninPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ShoppingListService, RecipeService]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EditRecipePage } from "../pages/edit-recipe/edit-recipe";
import { RecipePage } from "../pages/recipe/recipe";
import { RecipesPage } from "../pages/recipes/recipes";
import { ShoppingListPage } from "../pages/shopping-list/shopping-list";
import { TabsPage } from "../pages/tabs/tabs";
import { ShoppingListService } from "../services/shopping-list";
import { RecipeService } from "../services/recipe";
import { SigninPage } from "../pages/signin/signin";
import { SignupPage } from "../pages/signup/signup";
import { AuthService } from "../services/auth";
import { DatabaseOptionsPage } from "../pages/database-options/database-options";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    RecipesPage,
    RecipePage,
    ShoppingListPage,
    EditRecipePage,
    SigninPage,
    SignupPage,
    DatabaseOptionsPage

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
    SignupPage,
    DatabaseOptionsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ShoppingListService, RecipeService, AuthService]
})
export class AppModule {}

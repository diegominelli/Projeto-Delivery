import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RestaurantsListComponent } from './components/restaurants-list/restaurants-list.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AccountComponent } from './components/account/account.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    RestaurantsListComponent,
    FiltersComponent,
    SearchBarComponent,
    AccountComponent,
    RestaurantCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

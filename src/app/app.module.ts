import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeItemsComponent } from './components/home-items/home-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedHomesComponent } from './components/featured-homes/featured-homes.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BuySellRentCardsComponent } from './components/buy-sell-rent-cards/buy-sell-rent-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Define your routes here
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home-items/:id', component: HomeItemsComponent }
  //{ path: 'homedetails', component: FeaturedHomesComponent }
  // Other routes...
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    FeaturedHomesComponent,
    HomeItemsComponent,
    HomePageComponent,
    BuySellRentCardsComponent,
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
   
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

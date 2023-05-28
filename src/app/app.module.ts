import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeItemsComponent } from './components/home-items/home-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedHomesComponent } from './featured-homes/featured-homes.component';
import { CommonModule } from '@angular/common';

// Define your routes here
const routes: Routes = [
  { path: 'homedetails', component: FeaturedHomesComponent }
  // Other routes...
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    FeaturedHomesComponent,
    HomeItemsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
     // Remove the additional RouterModule
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

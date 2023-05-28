import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeItemsComponent } from './components/home-items/home-items.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedHomesComponent } from './featured-homes/featured-homes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeItemsComponent,
    FooterComponent,
    FeaturedHomesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

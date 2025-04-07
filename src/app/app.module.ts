import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BlogComponent } from './blog/blog.component';
import { SymptomesComponent } from './symptomes/symptomes.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';
import { TextButtonComponent } from './components/text-button/text-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    BlogComponent,
    SymptomesComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    CardContactComponent,
    TextButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

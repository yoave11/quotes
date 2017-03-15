import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteDisplayerComponent } from './quote-displayer/quote-displayer.component';
import { PersonDisplayerComponent } from './person-displayer/person-displayer.component';
import { HeaderComponent } from './header/header.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import {routing} from "./app.routes";
import { HomeComponent } from './home/home.component';
import { ImageDisplayerComponent } from './image-displayer/image-displayer.component';
import {QuoteService} from "./quote-service.service";
import { SelectQuoteComponent } from './select-quote/select-quote.component';
import { QuoteGameListComponent } from './quote-game-list/quote-game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDisplayerComponent,
    PersonDisplayerComponent,
    HeaderComponent,
    AddQuoteComponent,
    HomeComponent,
    ImageDisplayerComponent,
    SelectQuoteComponent,
    QuoteGameListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

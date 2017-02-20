import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteDisplayerComponent } from './quote-displayer/quote-displayer.component';
import { PersonDisplayerComponent } from './person-displayer/person-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDisplayerComponent,
    PersonDisplayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

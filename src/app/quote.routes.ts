import {Routes} from "@angular/router";
import {SelectQuoteComponent} from "./select-quote/select-quote.component";
import {QuoteDisplayerComponent} from "./quote-displayer/quote-displayer.component";
export const QUOTE_ROUTES: Routes = [
  {path: '', component: SelectQuoteComponent },
  {path: ':id', component: QuoteDisplayerComponent },
];

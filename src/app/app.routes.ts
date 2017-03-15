import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {QuoteGameListComponent} from "./quote-game-list/quote-game-list.component";
import {QUOTE_ROUTES} from "./quote.routes";
const  APP_ROUTES:Routes = [
  {path:'',component:HomeComponent },
  {path:'quote-game-list',component:QuoteGameListComponent,children:QUOTE_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES);

import {Routes, RouterModule} from "@angular/router";
import {QuoteDisplayerComponent} from "./quote-displayer/quote-displayer.component";
import {HomeComponent} from "./home/home.component";
const  APP_ROUTES:Routes = [
  {path:'',component:HomeComponent },
  {path:'quote-displayer',component:QuoteDisplayerComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);

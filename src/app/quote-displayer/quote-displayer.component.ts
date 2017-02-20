import {Component, OnInit} from "@angular/core";
import {QuoteQuestion} from "../quote-question";
import {Quote} from "../quote";
import {Person} from "../person";

@Component({
  selector: 'quote-quote-displayer',
  templateUrl: './quote-displayer.component.html',
  styles: []
})
export class QuoteDisplayerComponent {
  private quotes: Quote[] = [new Quote("who the fuck??", 0)];

  constructor() {
  }

  private quoteQuestion: QuoteQuestion =
    new QuoteQuestion(this.quotes, [new Person("yoav1", ""), new Person("yoav2", ""), new Person("yoav3", "")]);

}

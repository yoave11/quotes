import {Injectable} from "@angular/core";
import {Person} from "./person";
import {QuoteQuestion} from "./quote-question";
import {Quote} from "./quote";

@Injectable()
export class QuoteService {
  private quotes1: Quote[] = [new Quote("Build a wall!!", 0),
    new Quote("Tiny chilrdren are not horses", 0),
    new Quote("ani amit schor?", 2),
    new Quote("ani amit schor!!", 1)];

  private quotes2: Quote[] = [new Quote("Build a wall!!", 0),
    new Quote("Tiny chilrdren are not horses", 0),
    new Quote("ani amit schor?", 2),
    new Quote("ani amit schor!!", 1)];
  private initiolQuotes1: QuoteQuestion =
    new QuoteQuestion("name", this.quotes1, [new Person("Trump", "http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg"),
      new Person("amit schor", "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/042/1c1/351b623.jpg"),
      new Person("static & ben el", "http://pimg.mycdn.me/getImage?disableStub=true&type=VIDEO_S_720&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FSOc5ULYfITY%2F0.jpg&signatureToken=LtUMwkXg4iaQUV6YfcdoBg")]);
  private initiolQuotes2: QuoteQuestion =
    new QuoteQuestion("name", this.quotes2, [new Person("Trump", "http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg"),
      new Person("amit schor", "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/042/1c1/351b623.jpg"),
      new Person("static & ben el", "http://pimg.mycdn.me/getImage?disableStub=true&type=VIDEO_S_720&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FSOc5ULYfITY%2F0.jpg&signatureToken=LtUMwkXg4iaQUV6YfcdoBg")]);


  private quoteQuestions: QuoteQuestion [];

  constructor() {
    this.quoteQuestions = [this.initiolQuotes1, this.initiolQuotes2];
  }

  getQuotes() {
    return this.quoteQuestions;
  }

  getQuote(i: number) {
    return this.quoteQuestions[i];
  }

}


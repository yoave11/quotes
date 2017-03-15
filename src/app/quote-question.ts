import {Person} from "./person";
import {Quote} from "./quote";
export class QuoteQuestion {
  constructor(public id: string, public quotes: Quote[], public persons: Person[]) {
  }
}

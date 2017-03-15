import {Component, OnInit} from "@angular/core";
import {QuoteService} from "../quote-service.service";
import {QuoteQuestion} from "../quote-question";

@Component({
  selector: 'quote-quote-game-list',
  templateUrl: './quote-game-list.component.html',
  styleUrls: ['./quote-game-list.component.css']
})
export class QuoteGameListComponent implements OnInit {

  private quoteQuestions: QuoteQuestion[];

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit() {
    this.quoteQuestions = this.quoteService.getQuotes();
  }

}

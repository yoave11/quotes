import {Component, ViewChild, OnInit, OnDestroy} from "@angular/core";
import {QuoteQuestion} from "../quote-question";
import {Quote} from "../quote";
import {Person} from "../person";
import {PersonDisplayerComponent} from "../person-displayer/person-displayer.component";
import {QuoteService} from "../quote-service.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'quote-quote-displayer',
  templateUrl: './quote-displayer.component.html',
  styleUrls: ['../person-displayer/person-displayer.component.css']
})
export class QuoteDisplayerComponent implements OnInit,OnDestroy {
  @ViewChild(PersonDisplayerComponent) private personDisplayer: PersonDisplayerComponent;
  private quoteQuestion: QuoteQuestion ;
  private current: number = 0;
  private isSelected: boolean = false;
  private defaultImg = "https://s-media-cache-ak0.pinimg.com/originals/6e/00/0e/6e000ec02c7c93eef58146bcb1c63682.jpg";
  private imgPath = this.defaultImg;
  private subs:Subscription;

  constructor(private quoteService:QuoteService,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subs =this.route.params.subscribe(
      (p) =>{
        this.isSelected = false;
        this.current = 0;
        var quoteIndex = +p['id'];
        this.quoteQuestion = this.quoteService.getQuote(quoteIndex);
      }

  );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  onNext() {
    // this.imgPath = this.defaultImg;
    this.isSelected=false;
    if (this.current < this.quoteQuestion.quotes.length - 1) {
      this.current++;
      this.personDisplayer.ngOnChanges(null);
    }
    console.log("from quote displayer " + this.current);
  }

  onSelectedPerson(index: number) {
    let answer = this.quoteQuestion.quotes[this.current].answer;
    this.imgPath = this.quoteQuestion.persons[answer].imagePath;
    this.isSelected=true;
    console.log("from quote displayer " + index);
  }

}

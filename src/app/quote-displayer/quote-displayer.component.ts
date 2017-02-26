import {Component, ViewChild} from "@angular/core";
import {QuoteQuestion} from "../quote-question";
import {Quote} from "../quote";
import {Person} from "../person";
import {PersonDisplayerComponent} from "../person-displayer/person-displayer.component";

@Component({
  selector: 'quote-quote-displayer',
  templateUrl: './quote-displayer.component.html',
  styleUrls: ['./person-displayer.component.css']
})
export class QuoteDisplayerComponent {
  @ViewChild(PersonDisplayerComponent) private personDisplayer:PersonDisplayerComponent;
  private quotes: Quote[] = [new Quote("Build a wall!!", 0),
    new Quote("Tiny chilrdren are not horses", 0),
    new Quote("ani amit schor?", 2),
    new Quote("ani amit schor!!", 1)];
  private quoteQuestion: QuoteQuestion =
    new QuoteQuestion(this.quotes, [new Person("Trump", "http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg"),
      new Person("amit schor", "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/042/1c1/351b623.jpg"),
      new Person("static & ben el", "http://pimg.mycdn.me/getImage?disableStub=true&type=VIDEO_S_720&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FSOc5ULYfITY%2F0.jpg&signatureToken=LtUMwkXg4iaQUV6YfcdoBg")]);
  private current = 0;
  private defaultImg = "https://s-media-cache-ak0.pinimg.com/originals/6e/00/0e/6e000ec02c7c93eef58146bcb1c63682.jpg";
  private imgPath = this.defaultImg;

  constructor() {
  }

  onNext() {
    this.imgPath = this.defaultImg;
    this.current++;
    this.personDisplayer.ngOnChanges(null);
  }

  onSelectedPerson(index: number) {
    let  answer = this.quoteQuestion.quotes[this.current].answer;
    this.imgPath = this.quoteQuestion.persons[answer].imagePath;
    console.log("from quote displayer " + index);
  }

}

import {Component, OnInit, Input} from "@angular/core";
import {Person} from "../person";

@Component({
  selector: 'quote-person-displayer',
  templateUrl: './person-displayer.component.html',
  styles: ['a.disable{pointer-events: none;cursor: default;}']
})
export class PersonDisplayerComponent implements OnInit {

  @Input() persons: Person[];
  @Input() correctAnswer: number;
  isClicked: boolean;
  personSelected = -1;

  constructor() {
  }

  ngOnInit() {
  }

  onChoosePerson(index: number) {
    this.personSelected = index;
    this.isClicked = true;
  }

  isChosenPerson(index: number): boolean {
    return index == this.correctAnswer && this.isClicked;
  }

  isWrongPerson(index: number): boolean {
    return index == this.personSelected && this.isClicked && index != this.correctAnswer;
  }
}

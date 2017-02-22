import {Component, Input, EventEmitter, Output, OnChanges, SimpleChanges} from "@angular/core";
import {Person} from "../person";

@Component({
  selector: 'quote-person-displayer',
  templateUrl: './person-displayer.component.html',
  styles: ['a.disable{pointer-events: none;cursor: default;}']
})
export class PersonDisplayerComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.isClicked = false;
    this.personSelected = -1;
    console.log(changes);
  }

  @Input() persons: Person[];
  @Input() correctAnswer: number;
  @Output() selectedPerson = new EventEmitter<number>();
  isClicked: boolean;
  personSelected = -1;

  constructor() {
  }

  ngOnInit() {
  }

  onChoosePerson(index: number) {
    this.personSelected = index;
    this.isClicked = true;
    this.selectedPerson.emit(index);
  }

  isChosenPerson(index: number): boolean {
    return index == this.correctAnswer && this.isClicked;
  }

  isWrongPerson(index: number): boolean {
    return index == this.personSelected && this.isClicked && index != this.correctAnswer;
  }


}

import {
  Component,
  OnInit,
  Input,
  animate,
  transition,
  style,
  state,
  trigger,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: 'quote-image-displayer',
  templateUrl: './image-displayer.component.html',
  styleUrls: ['./image-displayer.component.css'],
  animations: [
    trigger('clicked', [
      state('true', style({
        opacity: 0.05,
        transform: 'scale(0.0)',
        // height: '*',
      })),
      state('false', style({
        opacity: 1,
        transform: 'scale(1.0)',
        // height: '*',
      })),
      transition('* => *', animate('0.2s')),
      // transition('true => false', animate('1s ease-in-out'))
    ])
  ]
})
export class ImageDisplayerComponent implements OnInit,OnChanges {
  @Input() personImage: string;

  @Input() defaultImage: string;
  @Input() clicked: boolean;
  private triggerAimation: boolean;
  private currentImage: string;
  private showedImage: string;

  constructor() {
  }

  ngOnInit() {
    this.triggerAimation = false;
    this.currentImage = this.defaultImage;
    this.showedImage = this.defaultImage;
  }

  onChangeImage() {
    if (this.triggerAimation == true) {
      this.showedImage = this.currentImage;
      this.triggerAimation = false;
    }
  }

  condition() {
    return this.clicked && this.triggerAimation;
  }


  changeToPerson() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.clicked.previousValue == false && changes.clicked.currentValue == true) {
      this.currentImage = this.personImage;
      this.triggerAimation = true;
    } else  if (changes.clicked.previousValue == true && changes.clicked.currentValue == false){
      this.currentImage = this.defaultImage;
      this.triggerAimation = true;
    }
  }
}

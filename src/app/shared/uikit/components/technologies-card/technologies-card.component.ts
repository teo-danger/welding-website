import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technologies-card',
  templateUrl: './technologies-card.component.html',
  styleUrls: ['./technologies-card.component.css']
})
export class TechnologiesCardComponent {

  constructor(){}

  @Input()
  technologiesCardData: any;


}

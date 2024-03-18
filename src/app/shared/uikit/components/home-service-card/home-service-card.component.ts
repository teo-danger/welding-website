import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-service-card',
  templateUrl: './home-service-card.component.html',
  styleUrls: ['./home-service-card.component.css']
})
export class HomeServiceCardComponent {

  constructor(){}

  @Input()
  techCardData: any;

}

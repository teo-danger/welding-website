import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-materials-card',
  templateUrl: './materials-card.component.html',
  styleUrls: ['./materials-card.component.css']
})
export class MaterialsCardComponent {
  constructor(){}

  @Input()
  materialsCardData: any;
}

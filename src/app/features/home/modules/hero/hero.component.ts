import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  mainText: string = "Your trusted welding company";
  secondaryText: string = "At your service with passion and experience";
  btnText:string = "Click for more";
}

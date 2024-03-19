import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private route: Router){}


  mainText: string = "Your trusted welding company";
  secondaryText: string = "At your service with passion and experience";
  btnText:string = "Click for more";


  toServices(){
    this.route.navigate(["/services"]);
  }

}

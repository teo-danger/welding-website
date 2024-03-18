import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'weldingCompany';

  ngOnInit(): void {
    AOS.init();
  }
}

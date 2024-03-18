import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-bar',
  templateUrl: './counter-bar.component.html',
  styleUrls: ['./counter-bar.component.css']
})
export class CounterBarComponent {

constructor(){}

yearsOfExperience: number = 0;
jobsCompleted: number = 0;
customers: number = 0;


countYearsOfExp:any = setInterval(() => {
  let endOfCount:number = 10;
  this.yearsOfExperience++;
  if(this.yearsOfExperience == endOfCount){
    clearInterval(this.countYearsOfExp);
  }
},550);

countJobsCompleted:any = setInterval(() => {
  let endOfCount:number = 100;
  this.jobsCompleted++;
  if(this.jobsCompleted == endOfCount){
    clearInterval(this.countJobsCompleted);
  }
},70);

countCustomers:any = setInterval(() => {
  let endOfCount:number = 100;
  this.customers++;
  if(this.customers == endOfCount){
    clearInterval(this.countCustomers);
  }
},70);


}

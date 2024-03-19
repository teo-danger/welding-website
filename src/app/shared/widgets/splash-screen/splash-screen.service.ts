import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenService {

  constructor() {
  }

  data$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  // data$ = this.dataSubject.asObservable();

  update(value: string){
    this.data$.next(value);
  }


  setSplashActive(){
    sessionStorage.setItem("splashScreen","active");
  }

  setSplashInactive(){
    sessionStorage.setItem("splashScreen","inactive");
  }


  getSessionItem(){
    return sessionStorage.getItem("splashScreen");
  }


  deleteSessionItem(){
    sessionStorage.removeItem("splashScreen");
  }




}

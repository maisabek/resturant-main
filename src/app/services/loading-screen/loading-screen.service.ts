import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {
  public isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(true)
  constructor() { }

  // private _loading: boolean = false;
  // loadingStatus: Subject<any> = new Subject();


  // get loading():boolean {
  //   return this._loading;
  // }

  // set loading(value) {
  //   this._loading = value;
  //   this.loadingStatus.next(value);
  // }

  // startLoading() {
  //   this.loading = true;
  // }

  // stopLoading() {
  //   this.loading = false;
  // }
}

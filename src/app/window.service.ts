import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }
  get windowRef(): any {
    return window;
  }

  isAuthentiated(): any{
    if (localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }
}

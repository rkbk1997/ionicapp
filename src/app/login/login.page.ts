import { AfterViewInit, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { environment} from '../../environments/environment';
import { WindowService } from '../window.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,AfterViewInit {
  message = '';
  windowRef: any;
  phoneNumber: any;
  myName: string;

  showSplash = true;
  constructor(private win: WindowService, private afu: AngularFireAuth, private router: Router) {
    this.windowRef = this.win.windowRef; }

  name: string;
  ngOnInit() {
    this.myName = localStorage.getItem('name');
    if(localStorage.getItem('user')){
      this.router.navigate(['/home'])
    }
    timer(9000).subscribe(() => this.showSplash = false);
    firebase.initializeApp(environment.firebase);
  }
  ngAfterViewInit(): void{
    this.windowRef.recaptchaVerifier =  new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: (response) => {
        // ...
      },
      'expired-callback'() {
        // ...
      }
    });
    this.windowRef.recaptchaVerifier.render();
  }

  sendlogincode(): any {
    console.log(this.phoneNumber)
    const appVerifier = this.windowRef.recaptchaVerifier;
    this.afu
      .signInWithPhoneNumber(`${this.phoneNumber}`, appVerifier)
      .then((Result: any) => {
        this.windowRef.confirmationResult = Result;
        this.router.navigate(['/otp']);
      })
      .catch((error) =>{
        this.message = error.message;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { environment} from '../../environments/environment';
import { WindowService } from '../window.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  windowRef;
  verificationCode: string;
  user: any;

  constructor(private win: WindowService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['/home'])
    }
  }
  verifyLoginCode(): any {
    this.win.windowRef.confirmationResult.confirm(this.verificationCode).then( (result) => {
      const user = result.user;
      console.log(user);
      localStorage.setItem('user', user);
      this.router.navigate(['/home']);
    }).catch((error) => {
      console.log(error);
      this.router.navigate(['/login']);
    });
  }
}

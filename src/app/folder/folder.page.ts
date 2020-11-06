import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {timer} from 'rxjs';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  showSplash = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    if (!localStorage.getItem('user')){
      this.router.navigate(['/login']);
    }
  }

  slideOpts = {
    effect:  'flip',
    autoplay: {
    delay: 2000
    }
    };

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.showSplash = true;
    timer(4000).subscribe(() => this.showSplash = false );
  }

}

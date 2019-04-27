import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
  styleUrls: ['./back-to-top-button.component.scss']
})
export class BackToTopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToTop() {
    window.scrollTo(0, 0 );
  }

}

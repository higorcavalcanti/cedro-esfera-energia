import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public getCopyrightYear(year: number = null) {
    const thisYear = new Date().getFullYear();
    if ( year == null || (year === thisYear)) {
      return thisYear;
    }
    return Math.min(year, thisYear) + ' - ' + Math.max(year, thisYear);
  }

  constructor() { }

  ngOnInit() {
  }

}

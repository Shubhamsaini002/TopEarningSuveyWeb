import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from 'firebase/analytics';

@Component({
  selector: 'app-redeem',
  standalone: true,
  imports: [],
  templateUrl: './redeem.component.html',
  styleUrl: './redeem.component.scss'
})
export class RedeemComponent implements OnInit {

  constructor(private analytics: Analytics) { }

  ngOnInit() {
    logEvent(this.analytics, 'page_view', {
      page_path: "redeem"
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from 'firebase/analytics';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  iframeUrl: string = "";
  token: string = "";
  constructor(private analytics: Analytics) { }

  ngOnInit() {
    this.token = localStorage.getItem('token') || "";
    if (this.token == "") {
      this.token = crypto.randomUUID();
      localStorage.setItem('token', this.token);
      logEvent(this.analytics, 'new_user', {
        user: this.token
      });
    }
    this.iframeUrl = "https://uf.pocketsfull.ai/earn?appId=604&key=33fad2bf-d1f9-4ed5-87f8-e2e1e27f453d&uid=" + this.token;
    logEvent(this.analytics, 'page_view', {
      page_path: "home"
    });
  }
  async openurl() {
    logEvent(this.analytics, 'pocketsfull_open', {
      user: this.token
    });
    //await Browser.open({
    //  url: this.iframeUrl
    //});

  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   isOpen = false;
  currenttabe: string = "Home";
  constructor(private router: Router) { }
  toggleMenu(event: Event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
  redirectURL(url:string,tab:string) {
    this.router.navigate([url]);
    this.currenttabe = tab;
  }
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartMang } from '../services/cart_manger';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private cartMngr: CartMang) {}
  cartCounter = 0;

  ngOnInit() {
    this.cartMngr.getCartItems().subscribe((items) => {
      console.log('items', items.length);
      this.cartCounter = items.length;
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  @Input('state') state = false;
  onHamburgerClick(){
    console.log("hamburger was clicked!")
    this.state = !(this.state);
  }
}
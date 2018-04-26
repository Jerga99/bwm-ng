import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentTitle = "I am component from component.ts"

  handleClick() {
    alert("I AM CLICKED");
  }
}

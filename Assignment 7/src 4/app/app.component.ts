import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  displayText = 'marvellous infosystems'

  public makeUpperCase()
  {
    this.displayText = this.displayText.toUpperCase()
  }

  public makeLowerCase()
  {
    this.displayText = this.displayText.toLowerCase()
  }
  
}

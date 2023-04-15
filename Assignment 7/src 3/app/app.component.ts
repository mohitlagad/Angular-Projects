import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayText = 'Marvellous Infosystems'

  public fun()
  {
    this.displayText = 'Educating for Better tomorrow'
  }
  
}

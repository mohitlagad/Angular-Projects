import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  message = ''

  handleMessageFromChild(messageFromChild: string)
  {
    console.log(messageFromChild)
    this.message = messageFromChild
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 childData: string = ''

 displayData(data: string)
 {
  this.childData = data
 }
}

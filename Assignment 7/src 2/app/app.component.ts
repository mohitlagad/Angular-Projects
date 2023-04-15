import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public fun() : string 
  {
    return "Marvellous Infosystems"
  }

  public get call() : string
  {
    return this.fun()
  }
}

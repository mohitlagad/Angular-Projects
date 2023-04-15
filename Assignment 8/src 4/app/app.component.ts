import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputLength = 0;

  onInputChange(value: string) {
    this.inputLength = value.length;
  }
}

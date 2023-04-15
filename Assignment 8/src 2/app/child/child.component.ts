import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message = 'Hello from Child'

  @Output() messageFromChild = new EventEmitter<string>()

  handleSendToParent()
  {
    this.messageFromChild.emit(this.message)
  }
}

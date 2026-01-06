import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-viewchild',
  templateUrl: './child-viewchild.component.html',
  styleUrls: ['./child-viewchild.component.css']
})
export class ChildViewchildComponent {

  showMessage(): void {
    alert('Hello from Child Component');
  }
}

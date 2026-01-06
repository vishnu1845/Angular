import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildViewchildComponent } from './child-viewchild/child-viewchild.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements AfterViewInit {

 // DOM element
  @ViewChild('nameInput')
  nameInput!: ElementRef<HTMLInputElement>;

  // Child component
  @ViewChild(ChildViewchildComponent)
  childComponent!: ChildViewchildComponent;

  ngAfterViewInit(): void {
    // ViewChild is ready here
    this.nameInput.nativeElement.focus();
  }

  focusInput(): void {
    this.nameInput.nativeElement.focus();
  }

  callChildMethod(): void {
    this.childComponent.showMessage();
  }
}

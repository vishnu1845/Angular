import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
 

  @Input() userName!: string;
  @Input() userAge!: number;

// @Input() property decorators enables one-way data flow from a parent component to its child component.
// ! → tells TypeScript value will come later
// Child cannot modify parent data / Child only receives data (read-only)


// ***********************************************************************************************************

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from child component')
  }

// @Output() property decorator enables child-to-parent communication
// Used when a child component needs to send data or notify an event to the parent
// EventEmitter is used to emit custom events from the child component
// Parent listens to the event using event binding ()
// Child does NOT directly modify parent data; it only emits events

// emit() sends data from child to parent
// $event in parent holds the emitted value
// Communication is event-based, not direct data access


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);

    if (changes['userName']) {
      console.log(
        'Previous:',
        changes['userName'].previousValue,
        'Current:',
        changes['userName'].currentValue
      );
    }
  }
// ngOnChanges is triggered whenever an @Input() value changes 
// and provides access to previous and current values via the SimpleChanges object.
}

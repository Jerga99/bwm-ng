import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditableComponent } from '../editable-component';

@Component({
  selector: 'bwm-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent extends EditableComponent  {

  @Input() type: string = 'text';

  @Input() transformView = value => value;
}

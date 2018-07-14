import { Component, Input } from '@angular/core';
import { EditableComponent } from '../editable-component';

@Component({
  selector: 'bwm-editable-textarea',
  templateUrl: './editable-textarea.component.html',
  styleUrls: ['./editable-textarea.component.scss']
})
export class EditableTextareaComponent extends EditableComponent {

  @Input() rows: string;

  @Input() cols: string;
}

import { Component, Input } from '@angular/core';
import { EditableComponent } from '../editable-component';

@Component({
  selector: 'bwm-editable-select',
  templateUrl: './editable-select.component.html',
  styleUrls: ['./editable-select.component.scss']
})
export class EditableSelectComponent extends EditableComponent {

  @Input() public options: any[];

}

import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-contact',
  standalone: false,
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.css'
})
export class CardContactComponent {
  @Input() title: String = '';
  @Input() address: String = '';
  @Input() customClass: string = '';
  @Input() buttonLabel: string = '';
  @Input() buttonUrl: String = '';
  @Input() buttonLabelStroked: string = '';
  @Input() buttonUrlStroked: String = '';
}

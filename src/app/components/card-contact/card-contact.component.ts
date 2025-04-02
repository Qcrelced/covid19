import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-contact',
  standalone: false,
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.css'
})
export class CardContactComponent {
  @Input() title: String =  '';
  @Input() content: String = '';
  @Input() imagesrc: String = '';
}

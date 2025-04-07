import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  standalone: false,
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.css'
})
export class TextButtonComponent {
  @Input() title: String = '';
  @Input() url: String = '';
  @Input() customClass: string = '';
}

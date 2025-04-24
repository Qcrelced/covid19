import { Component } from '@angular/core';

interface Message {
  content: string;
  tag: string;
}

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  messages: Message[] = [];
  content: string = '';
  tags: string[] =  ['coronavirus', 'vaccination', 'symptômes'];
  selectedTag: string = '';
  filteredTag: string = '';

  addMessage() {
    if (this.messages) {
      console.log(this.messages);
      this.messages.push({ content: this.content, tag: this.selectedTag });
      this.content = '';
      this.selectedTag = '';
    }
  }

  get filteredMessages(): Message[] {
    if (!this.filteredTag) return this.messages;
    return this.messages.filter(m => m.tag.toLowerCase() === this.filteredTag.toLowerCase());
  }

}

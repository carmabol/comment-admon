import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent {
  @Input() imgLogo="assets/img/default-logo.jpg"
  @Input() isReply=true;

}

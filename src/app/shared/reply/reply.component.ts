import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { User } from 'src/app/store/models/user.model';

@Component({
  standalone: true,
  imports:[FormsModule],
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent {
  @Input() userImage!:string;

  @Input() content: string = '';
  @Input() set userReply(userReply: string) {
    this.userReply = userReply;
    if(userReply){
      this.isReply = true;
    }
  }
  isReply = false;
  imgLogo = 'assets/img/default-logo.jpg';

  @Output() savingComment: EventEmitter<string> = new EventEmitter<string>();

  public areaContent: string = '';

  constructor(private store: Store, private renderer: Renderer2) {}
  ngOnInit(): void {

  }

  sendComment(){
    this.savingComment.emit(this.content);
  }
}

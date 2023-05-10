import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { User } from 'src/app/store/models/user.model';
import { Comment, Reply } from '../../store/models/comment.model'
import { PointerComponent } from '../pointer/pointer.component';
import { ReplyComponent } from '../reply/reply.component';
@Component({
  standalone:true,
  imports: [PointerComponent,CommonModule,ReplyComponent],
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!:Reply|Comment;
  @Input() userLogged!:User;
  @Input() flagSelf=true;
  @Output() scoreActions:EventEmitter<{comment:Comment|Reply,increase:boolean}>=new EventEmitter();
  replyClicked:boolean=false;


getCommentReply(){
  return this.comment as Reply;
}

  increaseScoreComment(){
   this.scoreActions.emit({comment:this.comment,increase:true});
  }

  decreaseScoreComment(){
    this.scoreActions.emit({comment:this.comment,increase:false});
  }

  replyClickedEvent(){
    this.replyClicked=true;
  }
}

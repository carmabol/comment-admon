import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { Comment } from '../../store/models/comment.model'
import { PointerComponent } from '../pointer/pointer.component';
@Component({
  standalone:true,
  imports: [PointerComponent,CommonModule],
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment?:Comment;
  @Input() flagSelf=true;

  constructor(private store:Store){

  }

  increaseScoreComment(){
    if(this.comment)
    this.store.dispatch(
      commentsActions.updatescoreplus({commentId:this.comment?.id})
    )
  }

  decreaseScoreComment(){
    if(this.comment)
    this.store.dispatch(
      commentsActions.updatescoreminus({commentId:this.comment?.id})
    )
  }

}

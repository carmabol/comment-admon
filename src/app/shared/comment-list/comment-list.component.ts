import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PointerComponent } from '../pointer/pointer.component';
import { Comment, Reply } from '../../store/models/comment.model'
import { CommentComponent } from '../comment/comment.component';
import { Store } from '@ngrx/store';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { User } from 'src/app/store/models/user.model';
import { ReplyComponent } from '../reply/reply.component';

@Component({
  standalone:true,
  imports: [CommonModule, CommentComponent, PointerComponent, ReplyComponent],
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  @Input() commentList:ReadonlyArray<Comment>=[];
  @Input() userLogged!:User;
  ngOnInit(): void {

  }

  constructor(private store:Store){
  }

  updateScoreComments(actualizar:{comment:Comment,increase:boolean}){
    this.store.dispatch(
      commentsActions.updatescore({commentId:actualizar.comment.id, increase:actualizar.increase})
    )
  }

  updateScoreReplies(actualizar:{comment:Reply|Comment,increase:boolean}, comment:Comment){
    const {comment: reply, increase} = actualizar;
    this.store.dispatch(
      commentsActions.updatescorereply({commentId:reply.id,increase,idParent:comment.id})
    )
  }

}

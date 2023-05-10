import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentListComponent } from 'src/app/shared/comment-list/comment-list.component';
import { ReplyComponent } from 'src/app/shared/reply/reply.component';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { userActions } from 'src/app/store/actions/user.actions';
import { Comment } from 'src/app/store/models/comment.model';
import { User } from 'src/app/store/models/user.model';

@Component({
  selector: 'app-main',
  imports: [CommentListComponent,ReplyComponent, CommonModule],
  templateUrl: './main.component.html',
  standalone:true,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  today:Date=new Date();
  commentList$:Observable<ReadonlyArray<Comment>> | undefined;
  user$:Observable<User> | undefined;

  constructor(private store:Store) {
    this.store.dispatch(
      commentsActions.getcomments({comments:[]})
    )

    this.store.dispatch(
      userActions.getuser({user:{}})
    )

  }

  ngOnInit(): void {
    //--Select store
    const commentList = createFeatureSelector<ReadonlyArray<Comment>>('comments');
    this.commentList$=this.store.select(commentList);

    //const aaaa=createSelector(this.commentList$)
    this.commentList$.subscribe(
      (data)=>{
        console.log("Comentarios",data);
      }
    )

    const user = createFeatureSelector<User>('user');
    this.user$=this.store.select(user);

    this.user$.subscribe(
      (data)=>{
        console.log("Usuario Logueado",data);
      }
    )

  }

}

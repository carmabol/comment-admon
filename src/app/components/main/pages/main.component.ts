import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentListComponent } from 'src/app/shared/comment-list/comment-list.component';
import { ReplyComponent } from 'src/app/shared/reply/reply.component';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { userActions } from 'src/app/store/actions/user.actions';
import { Comment } from 'src/app/store/models/comment.model';

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

  constructor(private store:Store) {
    this.store.dispatch(
      commentsActions.getcomments({comments:[]})
    )

    this.store.dispatch(
      userActions.getuser({user:{}})
    )
/*
    this.store.dispatch(
      commentsActions.updatescoreplus({commentId:1})
    )

    this.store.dispatch(
      commentsActions.updatescoreminus({commentId:1})
    )
    */
  /*
    this.store.subscribe((data)=>{
      console.log("Store Elements...",data);
    })
  */

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
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentComponent } from 'src/app/shared/comment/comment.component';
import { ReplyComponent } from 'src/app/shared/reply/reply.component';
import { commentActions } from 'src/app/store/actions/comment.actions';
import { userActions } from 'src/app/store/actions/user.actions';
import { Comment } from 'src/app/store/models/comment.model';

@Component({
  selector: 'app-main',
  imports: [CommentComponent,ReplyComponent],
  templateUrl: './main.component.html',
  standalone:true,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  today:Date=new Date();
  commentList$:Observable<Comment[]> | undefined;

  constructor(private store:Store) {
    this.store.dispatch(
      commentActions.getcomments({comments:[]})
    )

    this.store.dispatch(
      userActions.getuser({user:{}})
    )

    this.store.subscribe((data)=>{
      console.log("Store Elements...",data);
    })
    //this.commentList$= this.store.select(comments);
  }

  ngOnInit(): void {
  }

}

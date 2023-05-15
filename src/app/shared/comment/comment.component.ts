import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, OnInit, Output } from '@angular/core';
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
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit{
  @Input() comment!:Reply|Comment;
  @Input() userLogged!:User;
  @Input() flagSelf=true;

  @Output() scoreActions:EventEmitter<{comment:Comment|Reply,increase:boolean}>=new EventEmitter();
  @Output() saveCommentActions:EventEmitter<string>=new EventEmitter();
  @Output() saveReplyActions:EventEmitter<string>=new EventEmitter();
  @Output() deleteCommentActions:EventEmitter<{commentId:number,commentParent:number,isReply:boolean}>=new EventEmitter();
  @Output() editCommentActions:EventEmitter<{commentId:number,parentId:number,content:string}>=new EventEmitter();

  replyClicked:boolean=false;
  isEditing=false;
  isReply:boolean=false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isEditing=false;
    if(this.comment && this.comment.hasOwnProperty('replyTo')){
      this.isReply=true;
    }
  }

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

  getCommentToSave(contentComment:string){
    this.saveCommentActions.emit(contentComment);
  }

  getReplyToSave(contentComment:string){
    console.log("Emit ReplyComment")
    this.saveReplyActions.emit(contentComment);
  }

  sendCommentToDelete(commentId:number,commentParent:number,isReply:boolean){
    this.deleteCommentActions.emit({commentId:commentId,commentParent:commentParent, isReply:isReply})
  }

  sendCommentToEdit(editData:{
    commentId:number,
    parentId:number,
    content:string
  }/*commentId:number,commentParent:number,isReply:boolean*/){
    this.editCommentActions.emit({commentId:editData.commentId,parentId:editData.parentId, content:editData.content})
    this.isEditing=false;
  }
}

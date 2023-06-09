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
  commentToDelete!:Comment|Reply;

  ngOnInit(): void {

  }

  constructor(private store:Store){
    /** delete comment
    this.store.dispatch(
      commentsActions.deletecomment({commentId:1})
    )
    */
/*
  //delete comment reply
    this.store.dispatch(
      commentsActions.deletecommentreply({commentId:4,parentId:2})
    )
*/

    /** update comment
    this.store.dispatch(
      commentsActions.updatecomment({commentId:2,content:'Titi si yo te estoy queriendo mucho'})
    )
    */

    /** update comment reply
    this.store.dispatch(
      commentsActions.updatecommentreply({commentId:4,content:'Titi si yo te estoy queriendo mucho',idParent:2})
    )
    */
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

  sendReplyOfComment(contentComment:string, replyingTo:string|undefined, parentId:number){
    this.store.dispatch(
      commentsActions.createcommentreply({comment:contentComment,user:this.userLogged,replyingTo:replyingTo!==undefined?replyingTo:'',idParent:parentId})
    )
  }

  deleteComment(comment: Comment|Reply){
   this.commentToDelete = comment;
    console.log("Borraremos:",comment)
    const confirmResponse:boolean = confirm('¿Estás de acuerdo en eliminar?');

    if(confirmResponse) {
        this.store.dispatch(
          commentsActions.deletecomment({commentId:comment.id})
        )
    }

  //  $('#exampleModal').modal('show')
    /*if(comment.isReply){
      this.store.dispatch(
        commentsActions.deletecommentreply({commentId:comment.commentId,parentId:comment.commentParent})
      )
    }else{
      this.store.dispatch(
        commentsActions.deletecomment({commentId:comment.commentId})
      )
    }*/

   // this.updateCommentToDelete(null);
  }

  deleteCommentReply(comment:Comment|Reply){
    this.commentToDelete = comment;
    console.log("Borraremos:",comment)
    const confirmResponse:boolean = confirm('¿Estás de acuerdo en eliminar?');
/**TODO: Crear componente para modal */
    if(confirmResponse) {
        this.store.dispatch(
          commentsActions.deletecommentreply({commentId:comment.id,parentId:(comment as Reply).replyingParent})
        )
    }
  }

  editComment(editData:{
    commentId:number,
    parentId:number,
    content:string,
  }){
    console.log("Editemos:",editData)
    if(editData.parentId!==-1){
      console.log("ejecutando updatecommentreply")
      this.store.dispatch(
        commentsActions.updatecommentreply({commentId:editData.commentId,content:editData.content,idParent:editData.parentId})
      )
    }else{
      console.log("ejecutando updatecomment")
      this.store.dispatch(
        commentsActions.updatecomment({commentId:editData.commentId,content:editData.content})
      )
    }
  }

     /** update comment
    this.store.dispatch(
      commentsActions.updatecomment({commentId:2,content:'Titi si yo te estoy queriendo mucho'})
    )
    */

    /** update comment reply
    this.store.dispatch(
      commentsActions.updatecommentreply({commentId:4,content:'Titi si yo te estoy queriendo mucho',idParent:2})
    )
    */
}

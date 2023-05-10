import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EventEmitter from 'events';
import { commentsActions } from 'src/app/store/actions/comment.actions';
import { User } from 'src/app/store/models/user.model';

@Component({
  standalone: true,
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent {
  @Input() userLogged!: User;
  @Input() isReply=true;
  @Input() parentId:number=-1;
  @Input() replyingTo:string='';
  imgLogo="assets/img/default-logo.jpg";
  @ViewChild('areaComment') areaComment!: ElementRef;
  public areaContent:string='';

  constructor(private store:Store,private renderer: Renderer2){

  }

  createComment(){
    this.store.dispatch(
      commentsActions.createcomment({comment:this.areaComment.nativeElement.value,user:this.userLogged})
    )
    this.areaComment.nativeElement.reset();
  }

  createCommentReply(){
    //--TODO:Emitir el contenido del comentario y llamar la accion en el componente princpial que lo usa
    this.store.dispatch(
      commentsActions.createcommentreply({comment:this.areaComment.nativeElement.value,user:this.userLogged,replyingTo:this.replyingTo,idParent:this.parentId})
    )
  }

  saveComment(){
    console.log("clicked");
    if(!this.isReply){
      this.createComment();
    }
    else{
      this.createCommentReply();
    }
  }

}



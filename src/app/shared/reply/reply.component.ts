import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
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
  @Output() savingComment:EventEmitter<string> = new EventEmitter<string>();
  @Output() savingReply:EventEmitter<string> = new EventEmitter<string>();
  public areaContent:string='';

  constructor(private store:Store,private renderer: Renderer2){

  }

  sendComment(){
    this.savingComment.emit(this.areaComment.nativeElement.value)
  }

  sendCommentReply(){
    this.savingReply.emit(this.areaComment.nativeElement.value)
  }

  saveComment(){
    console.log("clicked");
    if(!this.isReply){
      this.sendComment();
    }
    else{
      this.sendCommentReply();
    }
  }

}



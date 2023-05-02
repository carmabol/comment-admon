import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { PointerComponent } from '../pointer/pointer.component';
import { Comment } from '../../store/models/comment.model'
import { CommentComponent } from '../comment/comment.component';

@Component({
  standalone:true,
  imports: [CommonModule, CommentComponent, PointerComponent],
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  /*- Usuario
    -Fecha Creación
    - Comentario
    -Puntaje
*/
  @Input() user?: string;
  @Input() creation_date?: Date;
  @Input() description?: string;
  @Input() imgLogo="assets/img/default-logo.jpg"
  @Input() flagSelf=true;

  @Input() commentList:ReadonlyArray<Comment>=[];
  //@Input() creation_date: Date;
 // @Output() levelClicked: EventEmitter<number> = new EventEmitter<number>();


  constructor(){}

  ngOnInit(): void {

  }

}

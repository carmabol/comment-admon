import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { commentActions } from 'src/app/store/actions/comment.actions';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  /*- Usuario
    -Fecha Creación
    - Comentario
    -Puntaje
*/
  @Input() user?: string;
  @Input() creation_date?: Date;
  @Input() description?: string;
  //@Input() creation_date: Date;
 // @Output() levelClicked: EventEmitter<number> = new EventEmitter<number>();


  constructor(private store:Store) { 
    this.store.dispatch(
      commentActions.getcomments({comments:[]})
    )
    this.store.subscribe((data)=>{
      console.log("Store...",data);     
    })
  }

  ngOnInit(): void {
    
  }

}

import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { PointerComponent } from '../pointer/pointer.component';

@Component({
  standalone:true,
  imports: [PointerComponent],
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
  @Input() imgLogo="assets/img/default-logo.jpg"
  //@Input() creation_date: Date;
 // @Output() levelClicked: EventEmitter<number> = new EventEmitter<number>();


  constructor(){}

  ngOnInit(): void {

  }

}

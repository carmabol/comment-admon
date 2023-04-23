import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.css']
})
export class PointerComponent implements OnInit {
  @Input() points:number=0;
  @Output() levelClicked: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.points++;
    this.levelClicked.emit(this.points);
  }

  decrease(){
    this.points--;
    this.levelClicked.emit(this.points);
  }

}

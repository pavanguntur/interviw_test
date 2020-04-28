import { Component, OnInit } from '@angular/core';
import { paint } from './canvasjs.min.js';
import { fromEvent }  from 'rxjs';
import { skipUntil, takeUntil, repeat } from 'rxjs/operators';

@Component({
  selector: 'app-circlemovable',
  templateUrl: './circlemovable.component.html',
  styleUrls: ['./circlemovable.component.css']
})
export class CirclemovableComponent implements OnInit{
  move = fromEvent(document, 'mousemove');
  down = fromEvent(document, 'mousedown')
  up = fromEvent(document, 'mouseup')
paints:any;
constructor(){}

 
  ngOnInit(){
    this.paints = this.move.pipe(
      skipUntil(this.down),
      takeUntil(this.up),
      repeat()
    );


    this.paints.subscribe(paint);
  }
 
  
  
}

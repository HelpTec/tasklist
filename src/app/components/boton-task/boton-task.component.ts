import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-task',
  templateUrl: './boton-task.component.html',
  styleUrls: ['./boton-task.component.css']
})
export class BotonTaskComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }

}

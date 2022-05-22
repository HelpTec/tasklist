import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import {TASKS} from '../../mock-tasks'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  faTimes = faTimes;
  
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleTask: EventEmitter<Task> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task){
    this.onToggleTask.emit(task)
    console.log(task)

  }
 

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/ui.service';
import { Subscription } from 'rxjs';
import { Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask:boolean = false;
  Subscription?: Subscription; 
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  constructor(
    private uiservice:UiService) { 
      this.Subscription = this.uiservice.onToggle()
        .subscribe(value => this.showAddTask = value)
    }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.text.length === 0){
      alert("please add a task!");
      return
    }
    const {text, day, reminder}= this 
    const newTask = {text, day, reminder}
    this.onAddTask.emit(newTask);
  }

  

}

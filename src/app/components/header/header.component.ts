import { Component, OnInit} from '@angular/core';
import { UiService} from 'src/app/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showAddTask:boolean = false;
  Subscription?: Subscription;    
  title:string = 'My Task List';
  
  constructor(
    private uiservice:UiService) { 
      this.Subscription = this.uiservice.onToggle()
        .subscribe(value => this.showAddTask = value)
    }

  ngOnInit(): void {
  }

  toggleAddTask(){
   this.uiservice.toggleAddTask();
  }
}

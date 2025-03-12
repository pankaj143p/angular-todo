import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todolist';
  name=""
  taskList: {id:number, name:String}[] = [];
  addTask(){
      this.taskList.push({id:this.taskList.length+1, name:this.name});
      this.name = "";
      console.log(this.taskList);
      
  }
  deleteTask(id:number){
   this.taskList=this.taskList.filter(this.taskList.id!=id)
  }
}

import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoListArray: any[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().snapshotChanges()
    .subscribe(item =>{
      this.todoListArray = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x['$key']= element.key;
        this.todoListArray.push(x);
      } );
      this.todoListArray.sort((a, b)=> {
        return a.isCheked - b.isCheked;
       })
    } )
  }
  addTodo(itemTitle)
  {
    this.todoService.addTodo(itemTitle.value);
    itemTitle.value = null;
  }

updateTodo($key:string, isCheked:boolean){
  this.todoService.updateTodo($key, !isCheked);
  
}


}

import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: AngularFireList <any>;


  constructor(private firebasedb: AngularFireDatabase ) { }

  getTodoList()
  {
    this.firebasedb.list('titles');
    return this.todoList;
  }

  addTodo()
  {
    this.todoList.push
  }


 updateTodo()
 {

 }


removeTodo()
{

}


}

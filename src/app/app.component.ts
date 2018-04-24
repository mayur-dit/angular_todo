import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo_list: string[] = JSON.parse(localStorage.getItem("list") || "[]");
  todo_value: string = "";

  add_todo = function () {
    console.log(this.toto_value);
    if (this.todo_value && this.todo_value !== "") {
      this.todo_list.push({
        todoText: this.todo_value,
        done: false
      });
      this.todo_value = "";
      // store in local storage of browser
      localStorage.setItem("list", JSON.stringify(this.todo_list));
    }
  };

  remove_todo = function () {
    var temp_list = this.todo_list;
    this.todo_list = [];
    temp_list.forEach(x => {
      if (!x.done) this.todo_list.push(x);
    });
    // store latest changes to local storage.
    localStorage.setItem("list", JSON.stringify(this.todo_list));
  };

  select_all = function () {
    this.todo_list.forEach(x => {
      x.done = true;
    });
  };

  select_none = function () {
    this.todo_list.forEach(x => {
      x.done = false;
    });
  };
}

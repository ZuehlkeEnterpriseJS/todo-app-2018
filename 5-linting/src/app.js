import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoStore } from "./todo-store";
import { todoElement } from "./todo-element";

/**
 * TodoComponent renders todos and handles events
 */
class TodoAppComponent {
  constructor(container) {
    this.container = container;
    this.todoStore = new TodoStore();
    this.todoStore.subscribe(todos => this.render(todos));
  }

  onKeyUp(event) {
    const isEnterKey = event.keyCode === 13;

    if (isEnterKey) {
      this.onAdd();
    }
  }

  onAdd() {
    const description = document.querySelector("#new-todo-description").value;
    if (description) {
      this.todoStore.addTodo(description);
    }
  }

  onSetDone(todoId) {
    this.todoStore.setDone(todoId);
  }

  onClear() {
    this.todoStore.clear();
  }

  render(todos) {
    this.container.innerHTML = `
            <h1>JS Enterprise ToDo</h1>

            <div id="add-todo-panel" class="input-group">
                <input id="new-todo-description"
                    type="text"
                    class="form-control"
                    onkeyup="todo.onKeyUp(event);"
                    placeholder="Add new todo...">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button" onclick="todo.onAdd();">Add</button>
                </span>
            </div>

            <ul id="todo-list-panel" class="list-group">
                ${todos.map(todo => todoElement(todo)).join("")}
            </ul>
            
            <div class="menu">
                <button class="btn btn-danger" onclick="todo.onClear()">Clear</button>
            </div>
        `;
  }
}

window.todo = new TodoAppComponent(document.querySelector("#todo-app"));

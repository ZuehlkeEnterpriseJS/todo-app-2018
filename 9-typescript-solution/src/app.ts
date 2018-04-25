import { TodoStore } from './todo-store';
import { todoElement } from './todo-element';
import { Todo } from './todo';
 
/**
 * TodoComponent renders todos and handles events
 */
export class TodoAppComponent {
    private container: Element;
    private todoStore: TodoStore;

    constructor(container: Element) {
        this.container = container;
        this.todoStore = new TodoStore();
        this.todoStore.subscribe(todos => this.render(todos));
    }
    
    onKeyUp(event: KeyboardEvent) {
        const isEnterKey = event.keyCode === 13;

        if (isEnterKey) {
            this.onAdd();
        }
    }

    onAdd() {
        const description = (document.querySelector('#new-todo-description') as HTMLInputElement).value;
        if (description) {
            this.todoStore.addTodo(description);
        }
    }

    onSetDone(todoId: number) {
        this.todoStore.setDone(todoId);
    }

    onClear() {
        this.todoStore.clear();
    }

    render(todos: Todo[]) {
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
                ${todos.map(todo => todoElement(todo)).join('')}
            </ul>
            
            <div class="menu">
                <button class="btn btn-danger" onclick="todo.onClear()">Clear</button>
            </div>
        `;
    }
}
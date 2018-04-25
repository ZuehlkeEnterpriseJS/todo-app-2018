import { Todo } from "./todo";

/**
 * TodoStore handles and stores all todos
 */
export class TodoStore {
  private subscribers: { (todos: Todo[]): void }[];
  private _todos: Todo[];
  private idCounter: number;

  constructor() {
    this.idCounter = 0;
    this._todos = [];
    this.subscribers = [];
  }

  subscribe(subscriber: { (todos: Todo[]): void }) {
    this.subscribers.push(subscriber);
    this.notify();
  }

  notify() {
    this.subscribers.forEach(subscriber => {
      subscriber.call(subscriber, this.todos);
    });
  }

  getAndIncrementIdCounter() {
    return this.idCounter++;
  }

  addTodo(description: string) {
    const todoObject = {
      timeStamp: new Date(),
      description: description,
      id: this.getAndIncrementIdCounter(),
      done: false
    };
    this._todos.push(todoObject);
    this.notify();
  }

  setDone(id: number) {
    const matchingTodos = this._todos.filter(function(todo) {
      return todo.id === id;
    });

    if (matchingTodos.length === 1) {
      matchingTodos[0].done = true;
    } else {
      throw new Error(`No Todo item with id ${id} found!`);
    }

    this.notify();
  }

  get todos() {
    return this._todos;
  }

  clear() {
    this.idCounter = 0;
    this._todos = [];
    this.notify();
  }
}

import { Todo } from "./todo";

export const todoElement = (todo: Todo) => `
    <li class="list-group-item ${todo.done ? 'done' : ''}">
        ${todo.description}
        <button class="btn btn-xs pull-right" onclick="todo.onSetDone(${todo.id})">Done</button>
    </li>
`;
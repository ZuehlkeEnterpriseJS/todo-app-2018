import { TodoAppComponent } from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";

window.todo = new TodoAppComponent(document.querySelector("#todo-app"));

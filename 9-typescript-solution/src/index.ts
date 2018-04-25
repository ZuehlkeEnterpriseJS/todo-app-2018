import { TodoAppComponent } from "./app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";

(window as any).todo = new TodoAppComponent(document.querySelector("#todo-app"));

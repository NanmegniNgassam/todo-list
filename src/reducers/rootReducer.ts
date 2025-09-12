import type { Action } from "redux";
import type { Task } from "../models/Task.model";

export interface DataBase {
  tasks: Task[]
}

const initState: DataBase = {
  tasks: [
    { id: 1, content: 'Acheter du sel', created: new Date().toLocaleDateString(), isDone: true },
    { id: 2, content: 'Aller faire mon marathon', created: new Date().toLocaleDateString(), isDone: false },
  ],
}

export const rootReducer = (state: DataBase = initState, action: Action<string> ) => {
  console.log('Current performed action : ', action);

  return state;
}
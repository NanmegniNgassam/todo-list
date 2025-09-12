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

// Types d'actions
interface CreateTaskAction extends Action<"CREATE_TASK"> {
  content: string;
}
interface DeleteTaskAction extends Action<"DELETE_TASK"> {
  id: number;
}

export type TaskActions = CreateTaskAction | DeleteTaskAction;

export const rootReducer = (state: DataBase = initState, action: TaskActions ) => {
  console.log('Current performed action : ', action);

  switch(action.type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks, 
          { 
            id: state.tasks.length + 1,
            content: action.content,
            created: new Date().toISOString(),
            isDone: false 
          }
        ]
      }
      break;

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      }
      break;
    default:
      return state;
  }
}
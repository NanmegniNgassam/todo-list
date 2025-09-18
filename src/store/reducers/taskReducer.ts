import type { Action } from "redux";
import type { Task } from "../../models/Task.model";
import { v4 as uuidv4 } from 'uuid';

export interface DataBase {
  tasks: Task[]
}
const taskReducerKey = 'todo-ist-tasks';

const initState: DataBase = JSON.parse(localStorage.getItem(taskReducerKey) || JSON.stringify({tasks: []}))

// Types d'actions
interface CreateTaskAction extends Action<"CREATE_TASK"> {
  content: string;
}
interface DeleteTaskAction extends Action<"DELETE_TASK"> {
  id: string;
}
interface ToggleTaskStatusAction extends Action<"TOGGLE_TASK_STATUS"> {
  id: string;
}

export type TaskActions = CreateTaskAction | DeleteTaskAction | ToggleTaskStatusAction;

export const taskReducer = (state: DataBase = initState, action: TaskActions ) => {
  switch(action.type) {
    case 'CREATE_TASK': {
      let id = uuidv4();
      const ids = state.tasks.map(task => task.id);

      while (ids.includes(id)) {
        id = uuidv4();
      }

      const store = {
        ...state,
        tasks: [
          ...state.tasks, 
          { 
            id,
            content: action.content,
            created: new Date().toISOString(),
            isDone: false 
          }
        ]
      };

      // Save the new store on the storage
      localStorage.setItem(taskReducerKey, JSON.stringify(store));

      return store;
    }

    case 'DELETE_TASK': {
      const store = {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };

      // Save the new store on the storage
      localStorage.setItem(taskReducerKey, JSON.stringify(store));

      return store
    }

    case 'TOGGLE_TASK_STATUS': {
      const store = {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.id)
            return { ...task, isDone: !task.isDone }
          else
            return task
        })
      }

      // Save the new store on the storage
      localStorage.setItem(taskReducerKey, JSON.stringify(store));

      return store;
    }

    default:
      return state;
  }
}
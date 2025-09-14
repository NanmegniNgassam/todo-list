import type { TaskActions } from "../reducers/taskReducer"

export const createTask = (content: string): TaskActions => {
  return {
    type: 'CREATE_TASK',
    content
  }
}

export const deleteTask = (id: number): TaskActions => {
  return {
    type: 'DELETE_TASK',
    id
  }
}

export const toggleTaskStatus = (id: number): TaskActions => {
  return {
    type: 'TOGGLE_TASK_STATUS',
    id
  }
}


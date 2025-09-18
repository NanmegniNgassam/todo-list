import type { TaskActions } from "../reducers/taskReducer"

export const createTask = (content: string): TaskActions => {
  return {
    type: 'CREATE_TASK',
    content
  }
}

export const deleteTask = (id: string): TaskActions => {
  return {
    type: 'DELETE_TASK',
    id
  }
}

export const toggleTaskStatus = (id: string): TaskActions => {
  return {
    type: 'TOGGLE_TASK_STATUS',
    id
  }
}


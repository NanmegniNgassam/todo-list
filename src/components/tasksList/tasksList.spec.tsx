import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TasksList from ".";
import type { Task } from "../../models/Task.model";
import { Provider } from 'react-redux'
import { store } from "../../store/store";

describe('Should TasksList component work perfectly', () => {
  test('Should TaskList component render a specific message when no task is found', () => {
    render(<TasksList tasks={[]} />);
    const noTaskMessage = screen.getByText("Aucune tâche n'a été trouvée");

    expect(noTaskMessage).toBeDefined();
  });

  test('Should TaskList render the exact number of tasks passed', () => {
    const tasks:Task[] = [
      {
        id: 'x4y',
        content: 'Faire mon lit',
        created: new Date().toDateString(),
        isDone: false,
      },
      {
        id: 'x5y',
        content: 'Faire mon lit',
        created: new Date().toDateString(),
        isDone: true,
      },
      {
        id: 'x6y',
        content: 'Faire mon lit',
        created: new Date().toDateString(),
        isDone: false,
      },
    ];

    render(
      <Provider store={store}>
        <TasksList tasks={tasks} />
      </Provider>
    );

    const taskWrappers = screen.getAllByTestId('task-wrapper');

    expect([...taskWrappers].length).toEqual(tasks.length);
  });
})
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TasksList from ".";

describe('Should TasksList component work perfectly', () => {
  test('', () => {
    render(<TasksList tasks={[]} />);
    const noTaskMessage = screen.getByText("Aucune tâche n'a été trouvée");

    expect(noTaskMessage).toBeDefined();
  })
})
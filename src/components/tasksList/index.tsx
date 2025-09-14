import { Typography } from "@mui/material";
import type { Task } from "../../models/Task.model";
import TaskWrapper from "../taskWrapper";
import TaskLoader from "../taskLoader";

const tasksList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {
        tasks ? (
          tasks.length ? (
            tasks
            .sort((taskA, taskB) => new Date(taskB.created).valueOf() - new Date(taskA.created).valueOf())
            .map(task => (
              <TaskWrapper task={task} key={task.id} />
            ))
          ) : (
            <Typography sx={{ textAlign: 'center' }}>Aucune tâche n'a été trouvée</Typography>
          )
        ) : (
          <>
            <TaskLoader />
            <TaskLoader />
            <TaskLoader />
          </>
        )
      }
    </div>
  );
}
 
export default tasksList;
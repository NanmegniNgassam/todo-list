import { Typography } from "@mui/material";
import type { Task } from "../../models/Task.model";
import TaskWrapper from "../taskWrapper";

const tasksList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {
        tasks ? (
          tasks.length ? (
            tasks.map(task => (
              <TaskWrapper task={task} key={task.id} />
            ))
          ) : (
            <Typography sx={{ textAlign: 'center' }}>Aucune tâche n'a été trouvée</Typography>
          )
        ) : (
          <p> Loading ... </p>
        )
      }
    </div>
  );
}
 
export default tasksList;
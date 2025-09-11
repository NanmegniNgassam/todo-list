import type { Task } from "../../models/Task.model";

const TaskWrapper = ({ task }: { task: Task}) => {
  return (
    <div>
      { task.content }
    </div>
  );
}
 
export default TaskWrapper;
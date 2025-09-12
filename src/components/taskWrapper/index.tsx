import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import type { Task } from "../../models/Task.model";
import { useState } from 'react';

const TaskWrapper = ({ task }: { task: Task}) => {
  const { id, content, created, isDone } = task;
  const [isTaskDone, setTaskDone] = useState<boolean>(isDone);

  const handleTaskDone = () => {
    setTaskDone(!isTaskDone);

    // Update the store
  }

  const deleteTask = () => {
    console.log('Current task deleted successfully : ', id);

    // Update the store
  }

  return (
    <Paper elevation={4} sx={{ py: 1, px: 1, mb: 3 }}>
      <Stack direction='row' alignItems='center' >
        <Checkbox checked={isTaskDone} onClick={handleTaskDone} />
        <Stack direction='column' flex={1}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }} > 
            { content } 
          </Typography>
          <Typography fontSize='small' color='gray'> 
            { new Date(created).toLocaleDateString().split('/').join('•') } 
          </Typography>
        </Stack>
        <DeleteIcon sx={{ cursor: 'pointer' }} color='primary' onClick={deleteTask} />
      </Stack>
    </Paper>
  );
}
 
export default TaskWrapper;
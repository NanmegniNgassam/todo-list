import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import type { Task } from "../../models/Task.model";
import { useState } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { TaskActions } from '../../reducers/rootReducer';

const TaskWrapper = (props: { task: Task, deleteTask: (id: number) => void}) => {
  const { task, deleteTask } = props;
  const { id, content, created, isDone } = task;
  const [isTaskDone, setTaskDone] = useState<boolean>(isDone);

  const handleTaskDone = () => {
    setTaskDone(!isTaskDone);

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
        <DeleteIcon sx={{ cursor: 'pointer' }} color='primary' onClick={() => deleteTask(id)} />
      </Stack>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<TaskActions>) => {
  return {
    deleteTask: (id: number) => { dispatch({ type: 'DELETE_TASK', id }) }
  }
}
 
export default connect(null, mapDispatchToProps)(TaskWrapper);
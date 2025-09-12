import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { Task } from "../../models/Task.model";
import type { TaskActions } from '../../reducers/taskReducer';

interface TaskProps {
  task: Task, 
  deleteTask: (id: number) => void, 
  toggleTaskStatus: (id: number) => void
}

const TaskWrapper = (props: TaskProps) => {
  const { task, deleteTask, toggleTaskStatus } = props;
  const { id, content, created, isDone } = task;

  return (
    <Paper elevation={4} sx={{ py: 1, px: 1, mb: 3 }}>
      <Stack direction='row' alignItems='center' >
        <Checkbox checked={isDone} onClick={() => toggleTaskStatus(id)} />
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
    deleteTask: (id: number) => { dispatch({ type: 'DELETE_TASK', id }) },
    toggleTaskStatus: (id: number) => { dispatch({ type: 'TOGGLE_TASK_STATUS', id }) }
  }
}
 
export default connect(null, mapDispatchToProps)(TaskWrapper);
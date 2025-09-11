import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import type { Task } from "../../models/Task.model";

const TaskWrapper = ({ task }: { task: Task}) => {
  const { content, created } = task;

  return (
    <Paper elevation={4} sx={{ py: 1, px: 1 }}>
      <Stack direction='row' alignItems='center' >
        <Checkbox />
        <Stack direction='column' flex={1}>
          <Typography> { content } </Typography>
          <small> { created } </small>
        </Stack>
        <DeleteIcon sx={{ cursor: 'pointer' }} color='primary' />
      </Stack>
    </Paper>
    
  );
}
 
export default TaskWrapper;
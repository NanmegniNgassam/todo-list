import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Paper, Stack, Typography } from "@mui/material";
import type { Task } from "../../models/Task.model";

const TaskWrapper = ({ task }: { task: Task}) => {
  const { content, created } = task;

  return (
    <Paper elevation={4} sx={{ py: 1, px: 1, mb: 3 }}>
      <Stack direction='row' alignItems='center' >
        <Checkbox />
        <Stack direction='column' flex={1}>
          <Typography variant='body1' sx={{ fontWeight: 'bold' }} > 
            { content } 
          </Typography>
          <Typography fontSize='small' color='gray'> 
            { new Date(created).toLocaleDateString().split('/').join('•') } 
          </Typography>
        </Stack>
        <DeleteIcon sx={{ cursor: 'pointer' }} color='primary' />
      </Stack>
    </Paper>
    
  );
}
 
export default TaskWrapper;
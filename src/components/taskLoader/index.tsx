import { Paper, Skeleton, Stack } from "@mui/material";

const TaskLoader = () => {
  return (
    <Paper elevation={4} sx={{ py: 1, px: 1, mb: 3 }}>
      <Stack direction='row' alignItems='center'gap={1} >
        <Skeleton variant="rectangular" width={20} height={20} sx={{ ml: 1 }} />
        <Stack direction='column' flex={1}>
          <Skeleton variant="rectangular" width="100%" />
          <Skeleton variant="text" width="25%" />
        </Stack>
        <Skeleton variant="circular" width={25} height={25} />
      </Stack>
    </Paper>
  );
}
 
export default TaskLoader;
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import TaskWrapper from "../task";

const TasksList = () => {
  type TabType = 'all' | 'done' | 'undone';
  const [value, setValue] = useState<TabType>('all');

  const handleChange = (_: React.SyntheticEvent, newValue: TabType) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { xs: '100%', sm: '75%', md: '50%', lg: '40%', xl: '30%' }, typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Select a target on tasks you want to see.">
            <Tab label="Toutes" value="all" />
            <Tab label="Terminées" value="done" />
            <Tab label="Non terminées" value="undone" />
          </TabList>
        </Box>
        <TabPanel value="all" sx={{ px: 0, py: 2 }}>
          <TaskWrapper task={{ id: 1, content: 'Acheter du sel', created: new Date() }} />
        </TabPanel>
        <TabPanel value="done">Item Two</TabPanel>
        <TabPanel value="undone">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
 
export default TasksList;
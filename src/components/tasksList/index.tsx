import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { connect } from "react-redux";
import type { DataBase } from "../../reducers/rootReducer";
import TaskWrapper from "../taskWrapper";

const TasksList = (props: DataBase) => {
  type TabType = 'all' | 'done' | 'undone';
  const [value, setValue] = useState<TabType>('all');
  const { tasks } = props 

  const handleChange = (_: React.SyntheticEvent, newValue: TabType) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: { xs: '100%', sm: '75%', md: '50%', xl: '40%' }, typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="Select a target on tasks you want to see.">
            <Tab 
              icon={<HourglassEmptyIcon color="primary" fontSize="small" />} 
              iconPosition="end" 
              label="Toutes" 
              value="all" 
            />
            <Tab 
              icon={<DoneOutlineIcon color="success" fontSize="small" />} 
              iconPosition="end" 
              label="Terminées" 
              value="done" 
            />
            <Tab 
              icon={<PublishedWithChangesIcon color="warning" fontSize="small" />} 
              iconPosition="end" 
              label="Non terminées" 
              value="undone" 
            />
          </TabList>
        </Box>

        <TabPanel value="all" sx={{ px: 0, py: 2 }}>
          { 
            tasks.map(task => (
              <TaskWrapper task={task} key={task.id} />
            )) 
          }
        </TabPanel>
        <TabPanel value="done" sx={{ px: 0, py: 2 }}>
          Item Two
        </TabPanel>
        <TabPanel value="undone" sx={{ px: 0, py: 2 }}>
          Item Three
        </TabPanel>
      </TabContext>
    </Box>
  );
}

const mapStateToProps = (state: DataBase) => {
  return {
    tasks: state.tasks
  }
}
 
export default connect(mapStateToProps)(TasksList);
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Tabs, Tab } from '@mui/material';
import { PlantTab } from './PlantTab'
import { PlantingTab } from './PlantingTab'
import { SectionTab } from './SectionTab'

enum TabName {
  Plant = 'plant',
  Planting = 'planting',
  Section = 'section'
}

function App() {
  const [tab, setTab] = useState<TabName>(TabName.Plant);

  const onChange: (event: React.SyntheticEvent<Element, Event>, value: any) => void = (_event, val) => {
    setTab(val as TabName)
  }
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: 'white',
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    ><Tabs value={tab} onChange={onChange} aria-label="basic tabs example">
        <Tab label="Plants" value={TabName.Plant} />
        <Tab label="Sections" value={TabName.Section} />
        <Tab label="Plantings" value={TabName.Planting} />
      </Tabs>
      <Box p={2}>
        {
          tab === TabName.Plant ? <PlantTab /> : tab === TabName.Planting ? <PlantingTab /> : tab === TabName.Section ? <SectionTab /> : <>Not Implemented</>
        }</Box>
    </Box>
  );
}

export default App;

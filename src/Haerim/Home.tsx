import { Box, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const chapterList = [
    {
      key: "chapter1",
      component: <Chapter1 />,
    },
    {
      key: "chapter2",
      component: <Chapter2 />,
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Chapter1" {...a11yProps(0)} />
        <Tab label="Chpater2" {...a11yProps(1)} />
      </Tabs>
      {chapterList.map((item, idx) => (
        <TabPanel value={value} index={idx} key={item.key}>
          {item.component}
        </TabPanel>
      ))}
    </Box>
  );
};

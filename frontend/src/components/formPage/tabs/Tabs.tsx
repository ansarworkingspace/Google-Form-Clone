// import React, { FC } from 'react';
// import './tabs.css';
// import { styled } from '@mui/system';
// import Paper from '@mui/material/Paper';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// const CenteredTabsRoot = styled(Paper)({
//   flexGrow: 1,
// });

// const CenteredTabsTabs = styled(Tabs)({
//   height: 10,
// });

// const CenteredTabsTab = styled(Tab)({
//   fontSize: 12,
//   color: "#5f6368",
//   textTransform: "capitalize",
//   height: 10,
//   fontWeight: 600,
//   fontFamily: 'Poppins',
// });

// const CenteredTabs: FC = () => {
//   const [value, setValue] = React.useState(0); // Add state for value

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <CenteredTabsRoot>
//       <CenteredTabsTabs
//         value={value} // Pass the value to Tabs
//         onChange={handleChange} // Handle change event
//         textColor="primary"
//         indicatorColor="primary"
//         centered
//       >
//         <CenteredTabsTab label="Questions" />
//         <CenteredTabsTab label="Responses"  />
//       </CenteredTabsTabs>
//     </CenteredTabsRoot>
//   );
// };

// export default CenteredTabs;


import React, { FC, useState } from 'react';
import './tabs.css';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const CenteredTabsRoot = styled(Paper)({
  flexGrow: 1,
});

const CenteredTabsTabs = styled(Tabs)({
  height: 10,
});

const CenteredTabsTab = styled(Tab)({
  fontSize: 12,
  color: "#5f6368",
  textTransform: "capitalize",
  height: 10,
  fontWeight: 600,
  fontFamily: 'Poppins',
});

const CenteredTabs: FC = () => {
  const [value, setValue] = useState<number>(0); // Use state with type annotation

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CenteredTabsRoot>
      <CenteredTabsTabs
        value={value} // Pass the value to Tabs
        onChange={handleChange} // Handle change event
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <CenteredTabsTab label="Questions"  />
        <CenteredTabsTab label="Responses"  />
      </CenteredTabsTabs>
    </CenteredTabsRoot>
  );
};

export default CenteredTabs;

import { Box } from '@mui/material';
import { memo } from 'react';

const TabPanel = ({
  children,
  value,
  index,
}: {
  children: React.ReactNode;
  value: number;
  index: number;
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="w-full lg:w-1/2 m-auto"
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default memo(TabPanel);

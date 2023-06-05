import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import { useGlobalState } from '../../../App';
import { FlexBetween } from '../../../components/primitives';

const PER_PAGE = [
  { label: 5, value: 5 },
  { label: 10, value: 10 },
  { label: 15, value: 15 },
];

type Order = {
  path: string;
  order: 'asc' | 'desc';
};

const Table = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sortList, setSortList] = useState<Order>({
    path: 'firstName',
    order: 'asc',
  });

  //   const {
  //     handleAddUser,
  //     handleDeleteUser,
  //     handleEditUser,
  //     handleSetChosenUser,
  //   } = useGlobalState();

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  // order change
  const handleOrderChange = (path: string) => {
    if (sortList.order === 'asc') {
      setSortList({ path, order: 'desc' });
    } else {
      setSortList({ path, order: 'asc' });
    }
  };

  return (
    <Box>
      <FlexBetween>
        <Button onClick={handleAddModalOpen}>Add </Button>
      </FlexBetween>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Typography
            variant="h3"
            onClick={() => handleOrderChange('firstName')}
          >
            User{' '}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h3"
            onClick={() => handleOrderChange('firstName')}
          >
            Role{' '}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            variant="h3"
            onClick={() => handleOrderChange('firstName')}
          >
            Actions{' '}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Table;

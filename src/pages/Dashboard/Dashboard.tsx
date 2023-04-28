import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

import { saveBarbersData, selectBarber } from './redux/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import BarberItem from '../../components/BarberCardItem';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { barbers } = useAppSelector(({ barbersReducer }) => barbersReducer);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const json = await response.json();
      dispatch(saveBarbersData(json));
    }
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {barbers?.map((barber) => (
        <Grid item xs={4} key={barber.id}>
          <BarberItem barber={barber} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;

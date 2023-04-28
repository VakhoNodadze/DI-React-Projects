import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { selectBarber } from '../pages/Dashboard/redux/actions';
import { useAppDispatch } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  barber: BarberItem;
}

const BarberCardItem: React.FC<CardProps> = ({ barber }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, description, rating, price } = barber;

  const handleViewMore = () => {
    dispatch(selectBarber(barber));
    navigate(`/dashboard/${barber.id}`);
  };

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {`${firstName} ${lastName}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Rating: {rating}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {price}
            </Typography>
          </Grid>
          <Grid item xs={9}></Grid>
          <Grid item xs={3}>
            <Typography
              variant="body2"
              fontWeight="bold"
              component="p"
              onClick={handleViewMore}
            >
              View More
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BarberCardItem;

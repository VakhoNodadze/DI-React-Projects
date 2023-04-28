import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';
import ReviewForm from '../../components/ReviewForm';
import { isUserAuthenticated } from '../../utils/helpers';

const BarberItem = () => {
  const { selectedBarber: reduxSelectedBarber, barbers } = useAppSelector(
    ({ barbersReducer }) => barbersReducer
  );
  const { barberId } = useParams();

  const selectedBarber =
    reduxSelectedBarber ?? barbers?.find((barber) => barber.id == barberId);

  const getStarRating = (rating: number): JSX.Element[] => {
    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating - fullStars);

    const starElements = [];
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<StarIcon key={i} />);
    }

    if (halfStars === 1) {
      starElements.push(<StarHalfIcon key="half" />);
    }

    const emptyStars = 5 - starElements.length;
    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<StarBorderIcon key={i + fullStars + 1} />);
    }

    return starElements;
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            {`${selectedBarber?.firstName} ${selectedBarber?.lastName}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" component="p">
            {selectedBarber?.description}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            Rating: {selectedBarber?.rating}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {selectedBarber?.price}
          </Typography>
        </Grid>
      </Grid>
      {selectedBarber?.review.map((review) => {
        return (
          <Paper sx={{ m: 2, p: 2 }} key={review.author}>
            <Box display="flex" alignItems="center">
              <AccountBoxIcon />
              <Typography variant="h2">{review.author}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              {getStarRating(review.score)}
              <Typography variant="h2">{review.comment}</Typography>
            </Box>
          </Paper>
        );
      })}
      <ReviewForm />
    </Box>
  );
};

export default BarberItem;

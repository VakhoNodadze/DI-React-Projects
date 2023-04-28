import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

import { updateBarberReview } from '../pages/Dashboard/redux/actions';
import { useAppDispatch } from '../redux/hooks';

const validationSchema = yup.object().shape({
  author: yup.string().required('Enter your name'),
  comment: yup.string().required('Comment is required'),
  score: yup.number().required('Score is required'),
});

export default function ReviewForm() {
  const dispatch = useAppDispatch();
  const { barberId } = useParams();

  const { values, handleSubmit, handleChange, errors, submitForm } = useFormik({
    initialValues: {
      author: '',
      comment: '',
      score: 0,
    },
    validationSchema,
    onSubmit: (values: Review) => {
      dispatch(updateBarberReview(values, barberId!));
    },
  });

  return (
    <Stack spacing={1}>
      <TextField
        placeholder="Enter your name"
        onChange={handleChange}
        name="author"
      />
      <TextField
        placeholder="Enter your comment"
        onChange={handleChange}
        name="comment"
      />
      <Rating
        name="score"
        onChange={handleChange}
        defaultValue={2.5}
        precision={0.5}
      />
      <Button variant="outlined" onClick={submitForm}>
        Give Review
      </Button>
    </Stack>
  );
}

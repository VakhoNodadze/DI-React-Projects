import React, { useState } from 'react';
import Select from 'react-select';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';

import { selectStyles, categoryOptions } from './utils/helpers';
import { useStore } from './store/StoreContext';

interface ChangeCategoryBudgetProps {
  open: boolean;
  category: Categories;
  onClose: () => void;
}

const ChangeCategoryBudget: React.FC<ChangeCategoryBudgetProps> = ({
  open,
  category,
  onClose,
}) => {
  const { handleAddCategoryBudget } = useStore();
  const { handleChange, setFieldValue, values, submitForm } = useFormik({
    initialValues: {
      category: { value: category, label: category },
      categoryBudget: 0,
    },
    onSubmit: (values) => {
      handleAddCategoryBudget(values.category.value, values.categoryBudget);
      onClose();
    },
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>Add budget</DialogTitle>
      <DialogContent>
        <Select
          styles={selectStyles}
          menuPosition="fixed"
          name="category"
          options={categoryOptions}
          value={values.category}
          onChange={(option: any) => {
            setFieldValue('category', option);
          }}
        />
        <TextField
          sx={{ mt: 2 }}
          value={values.categoryBudget}
          name="categoryBudget"
          onChange={handleChange}
          label="Enter a number"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={submitForm} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeCategoryBudget;

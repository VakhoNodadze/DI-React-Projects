import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  TextField,
  Button,
} from '@mui/material';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { useFormik } from 'formik';

import { selectStyles, categoryOptions } from './utils/helpers';
import CategoryItem from './CategoryItem';
import { useStore } from './store/StoreContext';

type Form = {
  category: { value: Categories; label: Categories };
  totalBudget: number;
  expenseValue: number;
};

const BudgetCalculator: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState<number>(0);

  const { state, handleAddCategoryExpense } = useStore();

  const { handleChange, submitForm, values, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        category: { value: 'Personal', label: 'Personal' },
        totalBudget: 0,
        expenseValue: 0,
      } as Form,
      onSubmit: (values) => {
        if (totalBudget !== values.totalBudget) {
          setTotalBudget(values.totalBudget);
        }
        if (totalBudget < totalExpenses + values.expenseValue) {
          toast('You have exceeded your budget', { type: 'error' });
          return;
        }
        handleAddCategoryExpense(values.category.value, values.expenseValue);
        resetForm();
      },
    });

  // Calculate the total expenses
  const totalExpenses = useMemo(() => {
    let totalExpenses = 0;
    Object.entries(state).forEach(([key, value]) => {
      totalExpenses += value.expense;
    });
    return totalExpenses;
  }, [state]);

  // Calculate the remaining budget
  const remainingBudget = totalBudget - totalExpenses;

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex' }}>
        <Paper sx={{ p: 2, m: 1, backgroundColor: '#f4f4f4' }}>
          Budget: ${totalBudget}
        </Paper>
        <Paper sx={{ p: 2, m: 1, backgroundColor: '#1c8d38' }}>
          Remaining: ${remainingBudget}
        </Paper>
        <Paper sx={{ p: 2, m: 1, backgroundColor: '#de0d0d' }}>
          Spent so far: ${totalExpenses}
        </Paper>
      </Box>
      {
        <List>
          {Object.entries(state).map(([key, value]) => (
            <CategoryItem
              key={key}
              category={key as Categories}
              expense={value.expense}
              budget={value.budget}
            />
          ))}
        </List>
      }
      <Box sx={{ display: 'flex' }}>
        <TextField
          value={values.totalBudget}
          name="totalBudget"
          placeholder="Enter your budget"
          onChange={handleChange}
        />
        <Button onClick={submitForm}>Save Budget</Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography textAlign="start" variant="h6">
          Add an expense
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Select
            styles={selectStyles}
            menuPosition="fixed"
            name="category"
            value={values.category}
            options={categoryOptions}
            onChange={(option: any) => {
              setFieldValue('category', option);
            }}
          />
          <TextField
            sx={{ m: 2 }}
            name="expenseValue"
            value={values.expenseValue}
            placeholder="Enter your expense"
            onChange={handleChange}
          />
          <Button onClick={submitForm}>Add Expsense</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BudgetCalculator;

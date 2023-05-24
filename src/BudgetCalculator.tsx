import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  TextField,
  Button,
} from '@mui/material';
import Select from 'react-select';

import { selectStyles, categoryOptions } from './utils/helpers';
import CategoryItem from './CategoryItem';

const BudgetCalculator: React.FC = () => {
  const [budgetValue, setBudgetValue] = useState<number | string>(0);
  const [totalBudget, setTotalBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<CategoryBudget>({
    Groceries: 0,
    Utilities: 0,
    Vehicle: 0,
    Charity: 0,
    Personal: 0,
  });
  const [categoryBudget, setCategoryBudget] = useState<CategoryBudget>({
    Groceries: 400,
    Utilities: 400,
    Vehicle: 200,
    Charity: 200,
    Personal: 400,
  });
  const [selectedCategory, setSelectedCategory] =
    useState<Categories>('Personal');
  const [expenseValue, setExpenseValue] = useState<number | string>(0);

  // Calculate the total expenses
  const totalExpenses = Object.values(expenses).reduce(
    (acc, curr) => acc + curr,
    0
  );

  // Calculate the remaining budget
  const remainingBudget = totalBudget - totalExpenses;

  // Function to add a new expense
  const handleCategoryBudget = (category: Categories, budget: number) => {
    setCategoryBudget((prev) => ({
      ...prev,
      [category]: budget,
    }));
  };

  const handleTotalBudgetValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudgetValue(Number(e.target.value));
  };
  const saveTotalBudget = () => {
    setTotalBudget(Number(budgetValue));
    setBudgetValue('');
  };

  const handleSelectExpenseCategory = (selectedOption: any) => {
    if (selectedOption) {
      setSelectedCategory(selectedOption.value);
    } else {
      setSelectedCategory('Personal');
    }
  };

  const handleAddExpense = () => {
    setExpenses((prev) => ({
      ...prev,
      [selectedCategory]: prev[selectedCategory] + Number(expenseValue),
    }));
  };

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
          {Object.entries(categoryBudget).map(([key, value]) => (
            <CategoryItem
              key={key}
              category={key as Categories}
              expense={expenses[key as Categories]}
              budget={value}
              handleCategoryBudget={handleCategoryBudget}
            />
          ))}
        </List>
      }
      <Box sx={{ display: 'flex' }}>
        <TextField
          value={budgetValue}
          placeholder="Enter your budget"
          onChange={handleTotalBudgetValue}
        />
        <Button onClick={saveTotalBudget}>Save Budget</Button>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography textAlign="start" variant="h6">
          Add an expense
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Select
            styles={selectStyles}
            menuPosition="fixed"
            options={categoryOptions}
            onChange={handleSelectExpenseCategory}
          />
          <TextField
            sx={{ m: 2 }}
            value={expenseValue}
            placeholder="Enter your expense"
            onChange={(e) => setExpenseValue(Number(e.target.value))}
          />
          <Button onClick={handleAddExpense}>Add Expsense</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BudgetCalculator;

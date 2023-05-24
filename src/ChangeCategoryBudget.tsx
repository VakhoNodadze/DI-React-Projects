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

import { selectStyles, categoryOptions } from './utils/helpers';

interface ChangeCategoryBudgetProps {
  open: boolean;
  category: string;
  onClose: () => void;
  onSave: (value: number) => void;
}

const ChangeCategoryBudget: React.FC<ChangeCategoryBudgetProps> = ({
  open,
  category,
  onClose,
  onSave,
}) => {
  const [value, setValue] = useState<number | ''>('');
  const [selectedCategory, setSelectedCategory] = useState<string>(category);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(event.target.value));
  };

  const handleSave = () => {
    if (typeof value === 'number') {
      onSave(value);
      onClose();
    }
  };

  const handleCategoryChange = (selectedOption: any) => {
    if (selectedOption) {
      setSelectedCategory(selectedOption.value);
    } else {
      setSelectedCategory('');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>Add expense</DialogTitle>
      <DialogContent>
        <Select
          styles={selectStyles}
          menuPosition="fixed"
          options={categoryOptions}
          value={{ value: selectedCategory, label: selectedCategory }}
          onChange={handleCategoryChange}
        />
        <TextField
          sx={{ mt: 2 }}
          value={value}
          onChange={handleValueChange}
          label="Enter a number"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangeCategoryBudget;

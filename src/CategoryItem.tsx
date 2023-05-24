import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ChangeCategoryBudget from './ChangeCategoryBudget';

type CategoryItemProps = {
  expense: number;
  category: Categories;
  budget: number;
  handleCategoryBudget: (category: Categories, budget: number) => void;
};

const CategoryItem: FC<CategoryItemProps> = ({
  expense,
  category,
  budget,
  handleCategoryBudget,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box
      width="100%"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '16px 0',
      }}
    >
      <Typography> {category} </Typography>
      <Box sx={{ display: 'flex' }}>
        <Typography onClick={() => setIsModalOpen(true)}>
          <span
            style={{
              backgroundColor: '#507ace',
              borderRadius: '15px',
              padding: '8px',
            }}
          >
            ${budget}
          </span>{' '}
        </Typography>
        <Typography onClick={() => setIsModalOpen(true)}>
          <span
            style={{
              backgroundColor: '#e5a02a',
              borderRadius: '15px',
              padding: '8px',
            }}
          >
            ${expense}
          </span>{' '}
        </Typography>
      </Box>
      {isModalOpen && (
        <ChangeCategoryBudget
          open={isModalOpen}
          category={category}
          onClose={() => setIsModalOpen(false)}
          onSave={(value) => handleCategoryBudget(category, value)}
        />
      )}
    </Box>
  );
};

export default CategoryItem;

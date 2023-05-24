type Expense = {
  category: string;
  amount: number;
};

type Option = {
  value: string;
  label: string;
};

type Categories =
  | 'Groceries'
  | 'Utilities'
  | 'Vehicle'
  | 'Charity'
  | 'Personal';

type CategoryBudget = Record<Categories, number>;

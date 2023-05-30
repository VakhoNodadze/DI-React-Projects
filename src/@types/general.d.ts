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

type StoreProps = {
  children: React.ReactNode;
};

type CategoryProperties = {
  budget: number;
  expense: number;
};

type CategoryBudgetAndExpense = {
  [key in Categories]: {
    budget: number;
    expense: number;
  };
};

type State = Record<Categories, CategoryProperties>;

import { useReducer, createContext, useContext } from 'react';

type StoreContextProps = {
  state: State;
  handleAddCategoryExpense: (category: Categories, expense: number) => void;
  handleAddCategoryBudget: (category: Categories, expense: number) => void;
};

export const StoreContext = createContext({} as StoreContextProps);

export const useStore = () => useContext(StoreContext);

const CategoryBudgetAndExpense: State = {
  Groceries: {
    budget: 400,
    expense: 0,
  },
  Utilities: {
    budget: 400,
    expense: 0,
  },
  Vehicle: {
    budget: 200,
    expense: 0,
  },
  Charity: {
    budget: 200,
    expense: 0,
  },
  Personal: {
    budget: 400,
    expense: 0,
  },
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category as keyof State],
          expense: parseInt(action.payload.expense),
        },
      };
    case 'ADD_BUDGET':
      return {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category as keyof State],
          budget: parseInt(action.payload.expense),
        },
      };
    default:
      return state;
  }
};
function StoreProvider({ children }: StoreProps) {
  const [state, dispatch] = useReducer(reducer, CategoryBudgetAndExpense);

  const handleAddCategoryExpense = (category: Categories, expense: number) => {
    dispatch({ type: 'ADD_EXPENSE', payload: { category, expense } });
  };
  const handleAddCategoryBudget = (category: Categories, expense: number) => {
    dispatch({ type: 'ADD_BUDGET', payload: { category, expense } });
  };

  const store = {
    state,
    handleAddCategoryBudget,
    handleAddCategoryExpense,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;

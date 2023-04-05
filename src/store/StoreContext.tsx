import React, {
  createContext, useContext, useReducer, useMemo,
} from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import reducer from './reducer';

type TStoreContexrProps = {
  dispatch: any
  productQuantity: number;
  theme: 'light' | 'dark';
  cartItems: TCartProduct[];
}

export const StoreContext = createContext({} as TStoreContexrProps);

export const useStore = () => useContext(StoreContext);

export type TProduct = {
  id: number;
  title: string;
  description: string;
  price: number | string;
  discountPercentage: number;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
};

export type TBackendProduct = {
  id: number;
  title: string;
  description: string;
  price: number | string;
  discountPercentage: number;
  rating: string;
  stock: string;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type TCartProduct = {
  quantity: number;
} & TBackendProduct;

export type TState = {
  cartItems: TCartProduct[];
  theme: 'light' | 'dark';
};

const initialState: TState = {
  cartItems: [],
  theme: 'light',
};

type StoreProps = {
  children: React.ReactNode
};

function StoreProvider({ children }: StoreProps) {
  // fix the error below
  // Type 'React.Reducer<{}, {}>' is not assignable to type 'React.Reducer<TState, any>'.
  const [state, dispatch] = useReducer(reducer, initialState);

  const productQuantity = useMemo(() => state.cartItems.reduce((acc: any, item: any) => acc + item.quantity, 0), [state.cartItems]);

  const theme = createTheme({
    palette: {
      mode: state.theme || 'light',
      text: {
        primary: 'rgba(13, 26, 44, 0.87)',
        secondary: 'rgba(13, 26, 44, 0.6)',
        disabled: 'rgba(13, 26, 44, 0.38)',
      },
      primary: {
        main: '#ff000',
      },
    },
  });

  const store = {
    ...state,
    dispatch,
    productQuantity,
  };

  return (
    <StoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

export default StoreProvider;

// @ts-nocheck
import { createContext, useContext, useReducer, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import reducer from './reducer';

export const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

const initialState = {
  cartItems: [],
  theme: 'light',
};

const StoreProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const [themeMode, setThemeMode] = useState('light');
  const [state, dispatch] = useReducer(reducer, initialState);

  const productQuantity = useMemo(() => {
    return state.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [state.cartItems]);

  const theme = createTheme({
    palette: {
      mode: theme || 'light',
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
};

export default StoreProvider;

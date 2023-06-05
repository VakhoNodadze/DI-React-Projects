import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import AppTheme from './theme/AppTheme';

// import { users } from './utils/data';
// import { themes, light, dark } from './styled/themes';
// import useToasts from './hooks/useToasts';
import { Flex } from './components/primitives';
import Main from './pages/Main/Main';
// import EditUser from './pages/EditUser';

type StoreContextProps = {
  handleSetChosenUser: (user: UserItem) => void;
  handleEditUser: (userId: string) => void;
  handleDeleteUser: (userId: string) => void;
  handleAddUser: (user: UserItem) => void;
};

export const StateContext = createContext({} as StoreContextProps);

export const useGlobalState = () => useContext(StateContext);

const App = () => {
  const [user, setUser] = useState<UserItem | null>(null);
  const [userList, setUserList] = useState<UserItem[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/users');
      const data = await response.json();
      setUserList(data);
    };
    fetchUsers();
  }, []);

  const handleSetChosenUser = (user: UserItem) => {
    setUser(user);
  };

  const handleEditUser = (userId: string) => {
    setUserList((prev) => {
      return prev.map((user: UserItem) => {
        if (user.id === userId) {
          return user;
        }
        return user;
      });
    });
  };

  const handleDeleteUser = (userId: string) => {
    setUserList((prev) => {
      return prev.filter((user: UserItem) => user.id !== userId);
    });
  };

  const handleAddUser = (user: UserItem) => {
    setUserList((prev) => {
      return [...prev, user];
    });
  };

  return (
    <AppTheme>
      <StateContext.Provider
        value={{
          handleSetChosenUser,
          handleEditUser,
          handleDeleteUser,
          handleAddUser,
        }}
      >
        <CssBaseline />
        <Flex>
          <BrowserRouter>
            <Route path="/" element={<Main />} />
            {/* <Route path="/edit" element={<EditUser />} /> */}
          </BrowserRouter>
        </Flex>
      </StateContext.Provider>
    </AppTheme>
  );
};

export default App;

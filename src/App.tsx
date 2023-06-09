import { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import AppTheme from './theme/AppTheme';

// import { users } from './utils/data';
// import { themes, light, dark } from './styled/themes';
// import useToasts from './hooks/useToasts';
import { Flex } from './components/primitives';
import Main from './pages/Main/Main';
import UserItem from './pages/UserItem/UserItem';

type StoreContextProps = {
  handleSetChosenUser: (user: UserItem) => void;
  handleEditUser: (userId: string, newUser: EditUserItem) => void;
  handleDeleteUser: (userId: string) => void;
  handleAddUser: (user: UserItem) => void;
  userList: UserItem[];
  user: UserItem | null;
};

export const StateContext = createContext({} as StoreContextProps);

export const useGlobalState = () => useContext(StateContext);

const App = () => {
  const [user, setUser] = useState<UserItem | null>(null);
  const [userList, setUserList] = useState<UserItem[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setUserList(data);
    };
    fetchUsers();
  }, []);

  const handleSetChosenUser = (user: UserItem) => {
    setUser(user);
  };

  const handleEditUser = (userId: string, newUser: EditUserItem) => {
    setUserList((prev) => {
      return prev.map((user: UserItem) => {
        if (user.id === userId) {
          return { ...user, ...newUser };
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
          userList,
          user,
        }}
      >
        <CssBaseline />
        <Flex>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/user" element={<UserItem />} />
          </Routes>
        </Flex>
      </StateContext.Provider>
    </AppTheme>
  );
};

export default App;

import React, { useState } from 'react';
import { Grid, Divider, ToggleButton as Toggler, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { StateContext, useGlobalState } from '../../../App';

import { FlexColumnStart } from '../../../components/primitives';

type UserListItemProps = {
  user: UserItem;
  handleDeleteModalOpen: () => void;
  handleSetUserToDelete: (user: UserItem) => void;
};

const UserListItem: React.FC<UserListItemProps> = ({
  user,
  handleDeleteModalOpen,
  handleSetUserToDelete,
}) => {
  const { role, firstName, lastName, avatar, email, isActive } = user;
  const [isActiveState, setIsActiveState] = useState(isActive);

  const { handleSetChosenUser } = useGlobalState();

  const onDeleteModal = () => {
    handleDeleteModalOpen();
    handleSetUserToDelete(user);
  };

  //   const editUser = () => {
  //     setUser(user);
  //   };

  // render key

  return (
    <div style={{ opacity: isActiveState ? '1' : '0.3', width: '100%' }}>
      <Grid container>
        <Grid item xs={1} style={{ alignItems: 'center' }}>
          <img src={avatar} alt="avatar" />
        </Grid>
        <Grid item xs={4}>
          <FlexColumnStart>
            <p>{firstName + ' ' + lastName}</p>
            <span>{email}</span>
          </FlexColumnStart>
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid item xs={2}>
              {user.role === 'Admin' && <KeyIcon />}
            </Grid>
            <Grid item xs={2}>
              {role}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ alignItems: 'center' }}>
          {/* <Toggler
            isChecked={isActiveState}
            onChange={() => setIsActiveState((prevState) => !prevState)}
          /> */}
        </Grid>
        <Grid item xs={2} style={{ alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Box onClick={() => handleSetChosenUser(user)}>
              <Link to="/user">
                <SettingsIcon
                  name="Settings"
                  style={{ marginRight: '1.5rem' }}
                />
              </Link>
            </Box>
            <DeleteIcon name="Garbage" onClick={() => onDeleteModal()} />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={1} style={{ padding: 0 }} />
        <Grid item xs={11} style={{ padding: 0 }}>
          <Divider />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserListItem;

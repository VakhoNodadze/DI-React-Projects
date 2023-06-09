import React, { useEffect } from 'react';
import {
  Button,
  Grid,
  Typography,
  Switch,
  TextField,
  Divider,
  Collapse,
  Box,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFormik, FormikValues } from 'formik';
import KeyIcon from '@mui/icons-material/Key';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

import { useGlobalState } from '../../App';
import {
  Flex,
  FlexBetween,
  FlexColumnStart,
} from '../../components/primitives';
import UserProfile from '../../resources/images/UserProfile.png';

const roles = [
  { label: 'Admin', value: 'Admin' },
  { label: 'User', value: 'User' },
];

type MyFormValues = FormikValues & {
  [key: string]: string | boolean | { label: string; value: string };
};

const UserItem = () => {
  const { user, handleEditUser } = useGlobalState();
  const {
    role,
    firstName,
    lastName,
    avatar,
    email,
    isActive,
    isSuper,
    permissions,
  } = user!;

  const navigate = useNavigate();

  const [openGroupIndex, setOpenGroupIndex] = React.useState<number | null>(
    null
  );

  const { values, handleChange, setFieldValue, submitForm } = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      role: { label: role, value: role },
      isActive: isActive,
      isSuper: isSuper,
    } as MyFormValues,
    onSubmit: (values: EdituserForm) => {
      const newUser = {
        ...values,
        role: values.role.value,
      };
      handleEditUser(user!.id, newUser);
      navigate('/');
    },
  });

  const handleCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    subIndex?: number
  ) => {
    const { name, checked } = event.target;

    if (subIndex !== undefined) {
      // Update the specific nested permissionGroupArray value
      setFieldValue(`permission-${index}-${subIndex}`, checked);
    } else {
      // Update the hasPermission value for the permission group
      setFieldValue(`permission-${index}`, checked);
      if (checked) {
        for (
          let i = 0;
          i < permissions[index].permissionGroupArray.length;
          i++
        ) {
          setFieldValue(`permission-${index}-${i}`, checked);
        }
      }
    }
  };

  const renderUserMainInfo = () => (
    <>
      <FlexColumnStart>
        <div
          style={{
            backgroundImage: `url(${UserProfile})`,
            height: '10.5rem',
            width: '10.5rem',
            backgroundSize: 'cover',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundColor: 'purple',
              padding: '0 6px',
              borderRadius: '0.9rem',
              cursor: 'pointer',
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.8rem',
              width: '4.8rem',
              right: 0,
              bottom: '10%',
              height: '2.5rem',
            }}
          >
            <KeyIcon />
          </div>
        </div>
        <Typography variant="caption2">Upload a Photo</Typography>
        <Typography variant="subtitle1">
          {firstName + ' ' + lastName}
        </Typography>
        <Typography variant="subtitle1">{email}</Typography>
      </FlexColumnStart>
      {isActive && (
        <Button
          //   onClick={() => handleInvitation()}
          style={{ marginTop: '2rem', lineHeight: '14px' }}
          size="small"
          color="secondary"
          variant="contained"
        >
          Resend Invitation
        </Button>
      )}
    </>
  );

  const renderUserDetails = () => (
    <>
      <div style={{ width: '100%' }}>
        <Typography variant="h3">Details</Typography>
        <Flex margin="1rem 1rem 0 0">
          <Switch
            checked={values.isActive}
            name="isActive"
            onChange={handleChange}
          />
          <Typography variant="caption2">
            The user is {isActive ? <span>Active</span> : <span>Inactive</span>}
          </Typography>
        </Flex>
        <Flex my={2}>
          <Typography variant="caption2" mr={2}>
            First Name
          </Typography>
          <TextField
            disabled={!values.isActive}
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
        </Flex>
        <Flex my={2}>
          <Typography variant="caption2" mr={2}>
            Last Name
          </Typography>
          <TextField
            disabled={!values.isActive}
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
        </Flex>
        <Select
          options={roles}
          value={values.role}
          name="role"
          onChange={(tag: any) => {
            setFieldValue('role', tag);
          }}
        />
      </div>
      {isActive && (
        <Button
          style={{ marginTop: '7.5rem', lineHeight: '1rem' }}
          onClick={submitForm}
          size="small"
          color="primary"
          variant="contained"
          type="submit"
        >
          Save Changes
        </Button>
      )}
    </>
  );

  const renderUserPermission = () => (
    <>
      <FlexBetween>
        <Typography variant="h3">Permissions</Typography>
        <span>{role}</span>
      </FlexBetween>
      <FlexBetween margin="2rem 0 1rem 0">
        <span
          style={{
            color: isActive ? '#06090f' : 'rgba(255,255,255,0.5)',
          }}
        >
          Super Admin
        </span>
        <Switch
          checked={values.isSuper}
          name="isSuper"
          onChange={handleChange}
          value={values.isSuper}
        />
      </FlexBetween>
      <Divider
        style={{
          backgroundColor: '#D8D8D8',
          height: 2,
          margin: '1rem 0 2rem 0',
        }}
      />
      {permissions?.map((perm, index) => (
        <React.Fragment key={index}>
          <Flex>
            <Typography
              onClick={() =>
                setOpenGroupIndex((prev) => (prev === index ? -1 : index))
              }
            >
              Permission Group {index}
            </Typography>
            <Switch
              name={`permission-${index}`}
              onChange={(e: any) => handleCheckbox(e, index)}
              checked={
                values[`permission-${index}`] !== undefined
                  ? values[`permission-${index}`]
                  : perm.hasPermission
              }
            />
          </Flex>
          <Collapse in={openGroupIndex === index}>
            {perm.permissionGroupArray.map((isChecked, subIndex) => (
              <Box key={`${index}-${subIndex}`}>
                Sub Permission {index} - {subIndex}
                <Switch
                  name={`permission-${index}-${subIndex}`}
                  onChange={(e: any) => handleCheckbox(e, index, subIndex)}
                  checked={
                    values[`permission-${index}-${subIndex}`] !== undefined
                      ? values[`permission-${index}-${subIndex}`]
                      : isChecked
                  }
                />
              </Box>
            ))}
          </Collapse>
        </React.Fragment>
      ))}
    </>
  );

  useEffect(() => {
    for (const [key, value] of Object.entries(values)) {
      if (key.includes('permission')) {
        const permissionIndex = Number(key.split('-')[1]);
        const subPermissionIndex = Number(key.split('-')[2]);
        let isPermissionDisabled = true;
        if (subPermissionIndex || subPermissionIndex === 0) {
          for (
            let i = 0;
            i < permissions[permissionIndex].permissionGroupArray.length;
            i++
          ) {
            if (values[`permission-${permissionIndex}-${i}`] === undefined) {
              if (permissions[permissionIndex].permissionGroupArray[i]) {
                isPermissionDisabled = false;
              }
            } else if (values[`permission-${permissionIndex}-${i}`]) {
              isPermissionDisabled = false;
            }
          }
          setFieldValue(`permission-${permissionIndex}`, !isPermissionDisabled);
        }
      }
    }
  }, [permissions, setFieldValue, values]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#f1f1f1',
        height: '85%',
        padding: '0 4rem',
      }}
    >
      <FlexBetween>
        <Button>
          <SettingsIcon />
        </Button>
      </FlexBetween>
      <Grid container>
        <Grid item xs={3}>
          {renderUserMainInfo()}
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={4}>
            <Grid item xs={5}>
              {renderUserDetails()}
            </Grid>
            <Grid item xs={7}>
              {renderUserPermission()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserItem;

type PermissionItem = {
  hasPermission: boolean;
  permissionGroupArray: boolean[];
};

type UserItem = {
  id: string;
  avatar: string;
  isSuper: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  permissions: PermissionItem[];
};

type EditUser = {
  firstName: string;
  lastName: string;
  isActive: boolean;
  isSuper: boolean;
} & EditUser;

type EditUserItem = {
  role: string;
};

type EdituserForm = {
  role: { label: string; value: string };
} & EditUser;

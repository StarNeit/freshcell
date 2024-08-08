export type UsersPermissionsMe = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  role: UsersPermissionsMeRole;
};

export type UsersPermissionsMeRole = {
  id: number;
  name: string;
  description: string;
  type: string;
};

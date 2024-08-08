import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { UsersPermissionsMe } from '@apollo/type';

type AuthStoreState = {
  token: string;
  user: UsersPermissionsMe | null;
  setToken: (token: string) => void;
  setUser: (user: UsersPermissionsMe) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStoreState>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        user: null,
        setToken: (token) => {
          set({
            token
          });
          localStorage.setItem(
            import.meta.env.VITE_REACT_APP_TOKEN_NAME,
            token
          );
        },
        setUser: (user) => {
          set({
            user
          });
        },
        logout: () => {
          set({ token: '', user: null });
          localStorage.removeItem(import.meta.env.VITE_REACT_APP_TOKEN_NAME);
        }
      }),
      {
        name: 'auth'
      }
    )
  )
);

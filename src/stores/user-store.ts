import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    defaultZoom: number;
    autoSave: boolean;
  };
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface UserActions {
  setUser: (user: User | null) => void;
  updatePreferences: (preferences: Partial<User['preferences']>) => void;
  setAuthenticated: (authenticated: boolean) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        // State
        user: null,
        isAuthenticated: false,
        isLoading: false,

        // Actions
        setUser: (user) => 
          set({ user, isAuthenticated: !!user }, false, 'setUser'),

        updatePreferences: (preferences) =>
          set(
            (state) => ({
              user: state.user
                ? { ...state.user, preferences: { ...state.user.preferences, ...preferences } }
                : null,
            }),
            false,
            'updatePreferences'
          ),

        setAuthenticated: (authenticated) => 
          set({ isAuthenticated: authenticated }, false, 'setAuthenticated'),

        setLoading: (loading) => 
          set({ isLoading: loading }, false, 'setLoading'),

        logout: () =>
          set({ user: null, isAuthenticated: false }, false, 'logout'),
      }),
      {
        name: 'user-store',
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: 'user-store',
    }
  )
);

import create, { State } from 'zustand';

// UI
interface StyleSettings extends State {
  darkMode: boolean;
  setDarkMode: () => void;
}

export const useStyleSettings = create<StyleSettings>((set) => ({
  darkMode: false,
  setDarkMode: () =>
    set((state) => ({
      darkMode: !state.darkMode,
    })),
}));

// Users
interface LoggedInUserProps extends State {
  firstName: string;
  lastName: string;
  userName: string;
  isLoggedIn: boolean;
  toggleLoginUser: (args: any) => void;
  loginAttempts: number;
  increaseLoginAttempt: () => void;
}

export const LoggedInUser = create<LoggedInUserProps>((set) => ({
  firstName: 'Brady',
  lastName: 'Dukart',
  userName: 'bradydukart',
  isLoggedIn: true,
  toggleLoginUser: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
  loginAttempts: 0,
  increaseLoginAttempt: () =>
    set((state) => ({ loginAttempts: state.loginAttempts + 1 })),
}));

import { create } from 'zustand';

export type UserType = 'STANDARD' | 'PREMIUM' | 'ADMIN';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface UserState {
  user: User | null;
  isActive: boolean;
  userType: UserType;
  login: (userData: Omit<User, 'id'>) => void;
  logout: () => void;
  toggleStatus: () => void;
  updateUserType: (type: UserType) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isActive: false,
  userType: 'STANDARD',
  login: ({ firstName, lastName }) =>
    set({
      user: { firstName, lastName, id: Math.random().toString(36).substr(2, 9) },
      isActive: true,
    }),
  logout: () => set({ user: null, isActive: false }),
  toggleStatus: () => set((state) => ({ isActive: !state.isActive })),
  updateUserType: (type) => set({ userType: type }),
}));
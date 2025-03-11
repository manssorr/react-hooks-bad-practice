import { useCallback } from 'react';
import { useUserStore } from '@/lib/store';

// GOOD Implementation - Optimized with selective subscriptions
export const useGoodUserManager = () => {
  const user = useUserStore((state) => state.user);
  const isActive = useUserStore((state) => state.isActive);
  const login = useUserStore((state) => state.login);
  const logout = useUserStore((state) => state.logout);
  const toggleStatus = useUserStore((state) => state.toggleStatus);
  
  const getUserFullName = useCallback(() => {
    return user ? `${user.firstName} ${user.lastName}` : 'Guest User';
  }, [user]);
  
  const loginUser = useCallback((firstName: string, lastName: string) => {
    login({ firstName, lastName });
  }, [login]);
  
  return {
    user,
    isActive,
    getUserFullName,
    loginUser,
    logout,
    toggleStatus,
  };
};
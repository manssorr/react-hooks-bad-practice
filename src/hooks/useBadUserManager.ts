import { useUserStore, UserType } from '@/lib/store';

// BAD Implementation - Causes unnecessary re-renders by:
// 1. Subscribing to the entire store
// 2. Creating new functions on every render
// 3. Performing expensive computations without memoization
export const useBadUserManager = () => {
  // Subscribe to entire store - will cause re-renders on ANY state change
  const store = useUserStore();
  
  // Expensive computation performed on every render
  const getUserFullName = () => {
    if (!store.user) return 'Guest User';
    
    // Simulate expensive computation
    let result = '';
    for (let i = 0; i < 10000; i++) {
      result = `${store.user.firstName} ${store.user.lastName}`;
    }
    return result;
  };
  
  // New function created on every render
  const getFormattedUserType = () => {
    let result = store.userType;
    // Unnecessary string operations on every render
    for (let i = 0; i < 1000; i++) {
      // Only perform operations that maintain the UserType values
      // We'll keep the original value to ensure it remains a valid UserType
      result = result as UserType;
    }
    return result; // Return the original UserType value
  };
  
  // New function reference on every render
  const loginUser = (firstName: string, lastName: string) => {
    store.login({ firstName, lastName });
  };
  
  return {
    user: store.user,
    isActive: store.isActive,
    userType: store.userType,
    getUserFullName,
    getFormattedUserType,
    loginUser,
    logout: store.logout,
    toggleStatus: store.toggleStatus,
    updateUserType: store.updateUserType,
  };
};
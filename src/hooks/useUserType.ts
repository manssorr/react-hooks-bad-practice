import { useMemo } from 'react';
import { useUserStore, UserType } from '@/lib/store';

// BAD Implementation - Subscribes to entire store and performs unnecessary work
export const useBadUserType = () => {
  // Get entire store
  const store = useUserStore();
  
  // Expensive computation on every render
  const normalizedType = (() => {
    let result = store.userType;
    // Unnecessary string operations that maintain the UserType
    for (let i = 0; i < 1000; i++) {
      // Convert to string for operations, then cast back to UserType
      const temp = result.toLowerCase().toUpperCase() as UserType;
      result = temp;
    }
    // For display purposes only, not affecting the actual UserType value
    return result.toLowerCase();
  })();
  
  return {
    normalizedType,
    originalType: store.userType,
  };
};

// GOOD Implementation - Optimized with selective subscription and memoization
export const useGoodUserType = () => {
  const userType = useUserStore((state) => state.userType);
  
  const normalizedType = useMemo(() => userType.toLowerCase(), [userType]);
  
  return {
    normalizedType,
    originalType: userType,
  };
};
import { useMemo } from 'react';
import { useUserStore } from '@/lib/store';

// BAD Implementation - Subscribes to entire store and performs unnecessary work
export const useBadUserType = () => {
  // Get entire store
  const store = useUserStore();
  
  // Expensive computation on every render
  const normalizedType = (() => {
    let result = store.userType;
    // Unnecessary string operations
    for (let i = 0; i < 1000; i++) {
      result = result.toLowerCase().toUpperCase();
    }
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
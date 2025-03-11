import { useRef, useEffect } from 'react';

/**
 * A hook that counts and returns the number of times a component has rendered.
 * @returns An object containing the current render count
 */
export const useRenderCounter = () => {
  const renderCount = useRef(0);
  
  // Increment the counter on each render
  useEffect(() => {
    renderCount.current += 1;
  });
  
  return {
    count: renderCount.current
  };
};

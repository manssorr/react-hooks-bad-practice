import React, { useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

export const withRenderCounter = (Component: React.ComponentType<any>, displayName = '') => {
  return (props: any) => {
    const renderCount = useRef(0);
    const countRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
      renderCount.current += 1;
      if (countRef.current) {
        countRef.current.textContent = renderCount.current.toString();
      }
    });
    
    return (
      <div className="relative border border-input rounded-lg p-4 m-2">
        <Badge 
          variant="secondary"
          className="absolute -top-2 -right-2 font-mono"
        >
          {displayName} renders: <span ref={countRef}>0</span>
        </Badge>
        <Component {...props} />
      </div>
    );
  };
};
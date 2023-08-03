import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, deplay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), deplay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, deplay]);
  
  return debounceValue;
}

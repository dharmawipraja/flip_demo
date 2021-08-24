import React, { useState, useEffect } from 'react';

// Lodash Debounce look alike hook
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear previous handler if the value changes within the delay period.
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};

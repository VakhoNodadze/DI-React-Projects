import { useState, useEffect } from 'react'

function getSavedValue(key: string, initialValue: unknown) {
  const savedValue = JSON.parse(localStorage.getItem(key)!)

  if (savedValue) return savedValue

  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

export default function useLocalStorage(key: string, initialValue: unknown) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

// // Working version
// function useLocalStorage<T>(key: string, initialValue: T) {

//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     if (typeof window === 'undefined') {
//       return initialValue;
//     }
//     try {
//       // Get from local storage by key
//       return getStorageValue(key, initialValue);
//     } catch (error) {
//       // If error also return initialValue
//       return initialValue;
//     }
//   });

//   // Return a wrapped version of useState's setter function that persists the new value to localStorage.
//   const setValue = (value: T | ((val: T) => T)) => {
//     try {
//       // Allow value to be a function so we have same API as useState
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       // Save state
//       setStoredValue(valueToStore);
//       // Save to local storage
//       if (typeof window !== 'undefined') {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error: any) {
//       // A more advanced implementation would handle the error case
//     }
//   };

//   function getStorageValue(key: string, defaultValue: T): T {
//     // getting stored value
//     const saved = localStorage.getItem(key);
//     return saved ? JSON.parse(saved) : defaultValue;
//   }

//   return [storedValue, setValue] as const;
// }

// export default useLocalStorage;

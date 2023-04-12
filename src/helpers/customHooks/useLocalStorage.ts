import { useState, useEffect } from 'react'

function getSavedValue(key: string, initialValue: unknown) {
  console.log('key---', key)
  //   const savedValue = JSON.parse(localStorage.getItem(key)!)

  const savedValue = ''
  console.log('savedValue', savedValue)
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
